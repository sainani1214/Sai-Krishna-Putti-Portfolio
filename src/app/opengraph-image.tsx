import { ImageResponse } from "next/og";

import { siteDescription } from "@/lib/seo";

export const alt = "Sai Krishna — Full-Stack Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#07070a",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          color: "#f2f2f0",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              border: "1px solid rgba(255,255,255,0.16)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              letterSpacing: "0.08em",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            SK
          </div>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#a3a3ab",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            Putti Sai Krishna
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <p
            style={{
              display: "flex",
              fontSize: 56,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Full-stack software developer
          </p>
          <p
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "#76767f",
              marginTop: 24,
              maxWidth: 820,
            }}
          >
            {siteDescription}
          </p>
        </div>

        <p
          style={{
            display: "flex",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#4d4d56",
            fontFamily: "ui-monospace, monospace",
            margin: 0,
          }}
        >
          Production · Systems · AI applications
        </p>
      </div>
    ),
    { ...size },
  );
}
