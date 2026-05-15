import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #0a0a0a 100%)",
        color: "white",
        padding: "64px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div
          style={{
            fontSize: 28,
            color: "#93c5fd",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
          }}
        >
          Software Engineer
        </div>
      </div>
      <div
        style={{
          fontSize: 76,
          fontWeight: 700,
          marginBottom: 20,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Adibayu Luthfiansyah
      </div>
      <div
        style={{
          fontSize: 34,
          color: "#cbd5e1",
          lineHeight: 1.3,
          maxWidth: "92%",
        }}
      >
        Building scalable web apps and backend systems with Go, TypeScript, and
        Next.js.
      </div>
      <div
        style={{
          marginTop: 36,
          fontSize: 24,
          color: "#93c5fd",
          letterSpacing: "0.06em",
        }}
      >
        adibayuluthfiansyah.dev
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
