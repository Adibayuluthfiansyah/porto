import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Adibayu Luthfiansyah - Full Stack Developer",
  description:
    "Get to know me. I'm a Full Stack Developer focused on building modern, scalable web applications. Experienced in TypeScript, Next.js, NestJS, PostgreSQL, and exploring Web3 & Solidity.",
  openGraph: {
    title: "About Me | Adibayu Luthfiansyah - Full Stack Developer",
    description:
      "Full Stack Developer focused on building modern, scalable web applications. Experienced in TypeScript, Next.js, NestJS, PostgreSQL, and exploring Web3 & Solidity.",
    url: "https://www.adibayuluthfiansyah.dev/about",
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
