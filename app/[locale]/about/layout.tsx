import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://adibayuluthfiansyah.dev"),
  title: "About Me | Adibayu Luthfiansyah - Full Stack Developer",
  description:
    "Get to know me. I'm a Full-Stack Developer focused on building modern, scalable web applications and backend systems with Go, TypeScript, Next.js, and PostgreSQL.",
  openGraph: {
    title: "About Me | Adibayu Luthfiansyah - Full Stack Developer",
    description:
      "Full-Stack Developer focused on building modern, scalable web applications and backend systems with Go, TypeScript, Next.js, and PostgreSQL.",
    url: "https://adibayuluthfiansyah.dev/about",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
