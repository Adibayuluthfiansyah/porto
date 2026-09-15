import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/about`;
  const description =
    "Get to know me: a Full-Stack Developer building modern, scalable web applications and backend systems with Go, TypeScript, Next.js, and PostgreSQL.";

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "About Me",
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/about",
        id: "https://adibayuluthfiansyah.dev/id/about",
      },
    },
    openGraph: {
      title: "About Me | Adibayu Luthfiansyah",
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
      title: "About Me | Adibayu Luthfiansyah",
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
