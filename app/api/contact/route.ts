import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node.js runtime (nodemailer is not supported on Edge runtime)
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body)
      return NextResponse.json(
        { message: "Invalid JSON body" },
        { status: 400 }
      );

    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
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

    const safeSubject =
      subject && subject.trim().length > 0
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
      replyTo: email,
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
