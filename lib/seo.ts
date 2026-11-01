import type { Metadata } from "next";

export const SITE_URL = "https://adibayuluthfiansyah.dev";
export const SITE_NAME = "Adibayu Luthfiansyah";

export const indexableRobots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

type PageMetadata = {
  locale: string;
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile" | "article";
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  ogDescription?: string;
  publishedTime?: string;
  absoluteTitle?: boolean;
};

function absoluteUrl(value: string) {
  return value.startsWith("http") ? value : `${SITE_URL}${value}`;
}

export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  type = "website",
  keywords,
  image = `/api/og?locale=${locale}`,
  imageAlt = "Adibayu Luthfiansyah Portfolio",
  ogDescription = description,
  publishedTime,
  absoluteTitle = false,
}: PageMetadata): Metadata {
  const canonical = `${SITE_URL}/${locale}${path}`;
  const imageUrl = absoluteUrl(image);
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    robots: indexableRobots,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${path}`,
        id: `${SITE_URL}/id${path}`,
        "x-default": `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      type,
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "id" ? "id_ID" : "en_US",
      title: ogTitle,
      description: ogDescription,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl.startsWith("https://") ? imageUrl : undefined,
          type: "image/png",
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [imageUrl],
      creator: "@adibayuluthfiansyah",
    },
  };
}
