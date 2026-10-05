import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime (nodemailer is not supported on Edge runtime)
export const runtime = "nodejs";

const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 } as const;
type Field = keyof typeof LIMITS;

/** One plain address: no display name, commas, angle brackets or line breaks. */
const EMAIL_RE =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

/** Submissions faster than this after the form appeared are bots. */
const MIN_FILL_MS = 3000;

// Best-effort rate limit: 5 messages per IP per 10 minutes. It lives in this
// function instance's memory only (every instance and cold start keeps its
// own count), so it only slows a casual flood; a Vercel Firewall rate limit
// rule on /api/contact is the real protection.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  for (const [key, times] of hits) {
    const recent = times.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length) hits.set(key, recent);
    else hits.delete(key);
  }
  const times = hits.get(ip) ?? [];
  if (times.length >= RATE_LIMIT) return true;
  times.push(now);
  hits.set(ip, times);
  return false;
}

/** Hosts allowed to post: the site, local development and this project's own deployments. */
function allowedHosts() {
  const hosts = new Set([
    "eedee.net",
    "www.eedee.net",
    "localhost",
    "127.0.0.1",
  ]);
  for (const v of [
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ]) {
    if (v) hosts.add(v.replace(/^https?:\/\//, "").split(/[/:]/)[0]);
  }
  return hosts;
}

function requestHost(request: Request) {
  const source =
    request.headers.get("origin") ?? request.headers.get("referer");
  if (!source) return null;
  try {
    return new URL(source).hostname;
  } catch {
    return null;
  }
}

const invalid = (message: string, field?: Field) =>
  NextResponse.json({ message, field }, { status: 400 });

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { message: "Expected a JSON body" },
        { status: 415 }
      );
    }

    const host = requestHost(request);
    if (!host || !allowedHosts().has(host)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const body: unknown = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return invalid("Invalid JSON body");
    }
    const data = body as Record<string, unknown>;

    const fields: Record<Field, string> = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    for (const key of Object.keys(LIMITS) as Field[]) {
      const value = data[key];
      if (value !== undefined && value !== null && typeof value !== "string") {
        return invalid(`The ${key} must be text.`, key);
      }
      fields[key] = (value ?? "").trim();
      if (fields[key].length > LIMITS[key]) {
        return invalid(
          `The ${key} is too long (at most ${LIMITS[key]} characters).`,
          key
        );
      }
    }
    // No header injection through the name or the subject.
    const name = fields.name.replace(/[\r\n]+/g, " ");
    const subject = fields.subject.replace(/[\r\n]+/g, " ");
    const { email, message } = fields;

    if (!name) return invalid("Please tell us your name.", "name");
    if (!email) return invalid("Please add your email address.", "email");
    if (!EMAIL_RE.test(email)) {
      return invalid("Please enter one valid email address.", "email");
    }
    if (!message) return invalid("Please write a message.", "message");

    // Spam: the honeypot is filled, or the form was sent within moments of
    // appearing. Answer as if sent, so bots learn nothing. A missing or
    // future timestamp (an old tab, clock skew) is let through.
    const elapsed =
      typeof data.startedAt === "number"
        ? Date.now() - data.startedAt
        : Number.NaN;
    const honeypot = typeof data.company === "string" && data.company !== "";
    if (
      honeypot ||
      (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS)
    ) {
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        {
          message:
            "That's a lot of messages in a short time. Please try again in a few minutes.",
        },
        { status: 429 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!smtpHost || !smtpUser || !smtpPass || !contactEmail) {
      console.error("SMTP config missing", {
        hasHost: !!smtpHost,
        port: smtpPort,
        hasUser: !!smtpUser,
        hasPass: !!smtpPass,
        hasContact: !!contactEmail,
      });
      return NextResponse.json(
        { message: "Email service misconfigured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const safeSubject = subject
      ? `[Contact eedee.net] ${subject}`
      : "New Contact Form Submission eedee.net";
    const textBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\n${message}`;
    const htmlBody = `
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject || "(none)")}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `;

    await transporter.sendMail({
      from: `Website Contact <${contactEmail}>`,
      to: contactEmail,
      replyTo: { name, address: email },
      subject: safeSubject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email", err);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
