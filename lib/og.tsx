import { ImageResponse } from "next/og";
import { wordmarkSize, wordmarkSvg } from "@/lib/brand";

const wordmarkUri = `data:image/svg+xml;base64,${Buffer.from(
  wordmarkSvg()
).toString("base64")}`;

/** Cut at a word boundary so the card never ends mid-word. */
function shorten(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;.]$/, "")}…`;
}

/** Pixel wordmark plus "STUDIO", bottom aligned like in the header. */
function Logo({ height }: { height: number }) {
  const width = Math.round((wordmarkSize.width / wordmarkSize.height) * height);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: height * 0.35 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={wordmarkUri} width={width} height={height} alt="eedee" />
      <div
        style={{
          display: "flex",
          fontSize: Math.max(18, Math.round(height * 0.3)),
          lineHeight: 1,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        studio
      </div>
    </div>
  );
}

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const gradient = "linear-gradient(45deg, #ff82f3 0%, #7b13ff 50%, #400d64 100%)";

/** Shared Open Graph card: dark, the theme gradient, eedee wordmark. */
export function ogCard({
  eyebrow,
  title,
  text,
  tags = [],
}: {
  eyebrow: string;
  /** Omit for the home card: the wordmark is the title then. */
  title?: string;
  text: string;
  tags?: string[];
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -220,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: gradient,
            opacity: 0.35,
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          <div style={{ width: 16, height: 16, border: "3px solid rgba(255,255,255,0.5)" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {title ? (
            <div
              style={{
                fontSize: title.length > 24 ? 76 : 96,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
                display: "flex",
              }}
            >
              {title}
            </div>
          ) : (
            <Logo height={120} />
          )}
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 980,
              display: "flex",
            }}
          >
            {shorten(text, 170)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 820 }}>
            {tags.slice(0, 4).map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 22,
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.12)",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 10,
            }}
          >
            {title ? <Logo height={44} /> : null}
            <div style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", display: "flex" }}>
              eedee.net
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: 8,
            background: gradient,
          }}
        />
      </div>
    ),
    ogSize
  );
}
