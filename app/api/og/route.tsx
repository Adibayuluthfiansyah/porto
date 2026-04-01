import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const imageData = await fetch(
    new URL("https://adibayuluthfiansyah.dev/icon-512.png"),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#171717",
      }}
    >
      {/* image */}
      <div style={{ flex: 1, display: "flex", height: "100%" }}>
        <img
          // @ts-expect-error - Satori menerima ArrayBuffer untuk properti src
          src={imageData}
          alt="hero"
          width={600}
          height={630}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          height: "100%",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Adibayu Luthfiansyah
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", lineHeight: 1.4 }}>
          Specializing in backend architecture with Next.js, NestJS, and Go.
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
