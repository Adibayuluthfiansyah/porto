import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://adibayuluthfiansyah.dev"),
  title: "Resume | Adibayu Luthfiansyah - Full Stack Developer CV",
  description:
    "View my professional resume and CV. Full-Stack Developer with experience in Go, Next.js, TypeScript, and PostgreSQL. Frontend Developer Intern at Dinas Sosial Kubu Raya, Co-Founder at Cangkir Tech. Download PDF resume.",
  keywords: [
    "Resume",
    "CV",
    "Full Stack Developer Resume",
    "Software Engineer CV",
    "TypeScript Developer",
    "Next.js Experience",
    "Go Backend",
    "Frontend Developer Intern",
    "Cangkir Tech",
    "Pontianak Developer",
  ],
  openGraph: {
    title: "Resume | Adibayu Luthfiansyah - Full Stack Developer CV",
    description:
      "View my professional resume. Full-Stack Developer with experience in Go, Next.js, TypeScript, and PostgreSQL. Co-Founder at Cangkir Tech.",
    url: "https://adibayuluthfiansyah.dev/resume",
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
