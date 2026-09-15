import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/contact`;
  const description =
    "Get in touch for freelance opportunities, collaboration, or project inquiries. Available via email, WhatsApp, and Instagram. Based in Pontianak, Indonesia.";

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "Contact",
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/contact",
        id: "https://adibayuluthfiansyah.dev/id/contact",
      },
    },
    openGraph: {
      title: "Contact | Adibayu Luthfiansyah",
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
      title: "Contact | Adibayu Luthfiansyah",
      description,
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
