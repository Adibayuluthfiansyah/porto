import { indexableRobots } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.resume" });
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/resume`;
  const description = t("description");
  const title = t("title");

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title,
    description,
    robots: indexableRobots,
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
        "x-default": "https://adibayuluthfiansyah.dev/en/resume",
      },
    },
    openGraph: {
      title: `${title} | Adibayu Luthfiansyah`,
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
      title: `${title} | Adibayu Luthfiansyah`,
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
