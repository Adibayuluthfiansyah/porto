import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Adibayu Luthfiansyah - Full Stack Developer CV",
  description:
    "View my professional resume and CV. Full Stack Developer with experience in Next.js, NestJS, TypeScript, PostgreSQL. Frontend Developer Intern at Dinas Sosial Kubu Raya, Co-Founder at Cangkir Tech. Download PDF resume.",
  keywords: [
    "Resume",
    "CV",
    "Full Stack Developer Resume",
    "Software Engineer CV",
    "TypeScript Developer",
    "Next.js Experience",
    "NestJS Backend",
    "Frontend Developer Intern",
    "Cangkir Tech",
    "Pontianak Developer",
  ],
  openGraph: {
    title: "Resume | Adibayu Luthfiansyah - Full Stack Developer CV",
    description:
      "View my professional resume. Full Stack Developer with experience in Next.js, NestJS, TypeScript, PostgreSQL. Co-Founder at Cangkir Tech.",
    url: "https://www.adibayuluthfiansyah.dev/resume",
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
