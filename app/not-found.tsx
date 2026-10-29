import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12131d",
          color: "#e2e1f1",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <p style={{ color: "#7aa2f7", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            ERROR 404
          </p>
          <h1 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Page not found.</h1>
          <Link href="/" style={{ color: "#7fd0ff" }}>
            Back to homepage
          </Link>
        </main>
      </body>
    </html>
  );
}
