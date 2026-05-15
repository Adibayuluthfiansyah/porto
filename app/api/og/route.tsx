import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const locale = searchParams.get("locale") === "id" ? "id" : "en";

  const photoRes = await fetch(`${origin}/hero-og.png`);
  const photoBuffer = await photoRes.arrayBuffer();
  const photoBase64 = `data:image/png;base64,${Buffer.from(photoBuffer).toString("base64")}`;

  const label = "Software Engineer";
  const tagline =
    locale === "id"
      ? "Solusi teknis untuk masalah bisnis yang nyata."
      : "Turning complex problems into software that actually ships.";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: "#111111",
        color: "white",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          width: "46%",
          height: "100%",
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src={photoBase64}
          alt="Adibayu Luthfiansyah Setyawan"
          width={552}
          height={630}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background: "linear-gradient(to right, transparent, #111111)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "30%",
            background: "linear-gradient(to bottom, transparent, #111111)",
            display: "flex",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "52px 52px 52px 32px",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#666666",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginBottom: 16,
            display: "flex",
          }}
        >
          {label}
        </div>

        <div
          style={{
            width: 120,
            height: "0.5px",
            background: "#333333",
            marginBottom: 28,
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#f5f5f5",
            display: "flex",
          }}
        >
          Adibayu
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#666666",
            display: "flex",
          }}
        >
          Luthfiansyah
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#f5f5f5",
            marginBottom: 32,
            display: "flex",
          }}
        >
          Setyawan
        </div>

        <div
          style={{
            width: "100%",
            height: "0.5px",
            background: "#2a2a2a",
            marginBottom: 20,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 18,
            color: "#555555",
            lineHeight: 1.4,
            marginBottom: 24,
            display: "flex",
          }}
        >
          {tagline}
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#555555",
            letterSpacing: "0.08em",
            display: "flex",
          }}
        >
          www.adibayuluthfiansyah.dev
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
