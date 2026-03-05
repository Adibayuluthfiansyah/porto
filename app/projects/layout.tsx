import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Adibayu Luthfiansyah - E-Commerce, SaaS & Web Applications",
  description:
    "Explore my portfolio of full-stack projects including E-Commerce platforms, Automated Invoicing SaaS, Government Management Systems, and Cangkir Tech agency. Built with Next.js, NestJS, TypeScript, and PostgreSQL.",
  keywords: [
    "Full Stack Projects",
    "E-Commerce Platform",
    "SaaS Application",
    "Next.js Projects",
    "NestJS Backend",
    "TypeScript Projects",
    "PostgreSQL Database",
    "Web Development Portfolio",
    "Midtrans Integration",
    "Prisma ORM",
  ],
  openGraph: {
    title: "Projects | Adibayu Luthfiansyah - E-Commerce, SaaS & Web Apps",
    description:
      "Explore my portfolio of full-stack projects including E-Commerce platforms, Automated Invoicing SaaS, and more. Built with Next.js, NestJS, TypeScript, and PostgreSQL.",
    url: "https://www.adibayuluthfiansyah.dev/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
