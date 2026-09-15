import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/resume`;
  const description =
    "View my professional resume: Full-Stack Developer with experience in Go, Next.js, TypeScript, and PostgreSQL. Co-Founder at Cangkir Tech. Download PDF resume.";

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "Resume",
    description,
    keywords: [
      "Resume",
      "CV",
      "Full Stack Developer Resume",
      "Software Engineer CV",
      "TypeScript Developer",
      "Next.js Experience",
      "Go Backend",
      "Cangkir Tech",
      "Pontianak Developer",
    ],
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/resume",
        id: "https://adibayuluthfiansyah.dev/id/resume",
      },
    },
    openGraph: {
      title: "Resume | Adibayu Luthfiansyah",
      description,
      url: canonical,
      type: "profile",
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
      title: "Resume | Adibayu Luthfiansyah",
      description,
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
    },
  };
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
