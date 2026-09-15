import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/projects`;
  const description =
    "Explore my portfolio of full-stack projects including E-Commerce platforms, Automated Invoicing SaaS, and Government Management Systems. Built with Next.js, Go, TypeScript, and PostgreSQL.";

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "Projects",
    description,
    keywords: [
      "Full Stack Projects",
      "E-Commerce Platform",
      "SaaS Application",
      "Next.js Projects",
      "Go Backend",
      "TypeScript Projects",
      "PostgreSQL Database",
      "Web Development Portfolio",
      "Midtrans Integration",
      "Prisma ORM",
    ],
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/projects",
        id: "https://adibayuluthfiansyah.dev/id/projects",
      },
    },
    openGraph: {
      title: "Projects | Adibayu Luthfiansyah",
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `https://adibayuluthfiansyah.dev/api/og?locale=${locale}`,
          width: 1200,
          height: 630,
          alt: "Adibayu Luthfiansyah Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Adibayu Luthfiansyah",
      description,
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
    },
  };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
