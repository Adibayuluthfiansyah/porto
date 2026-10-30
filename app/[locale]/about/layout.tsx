import { indexableRobots } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.about" });
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/about`;
  const description = t("description");
  const title = t("title");

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title,
    description,
    robots: indexableRobots,
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/about",
        id: "https://adibayuluthfiansyah.dev/id/about",
        "x-default": "https://adibayuluthfiansyah.dev/en/about",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
