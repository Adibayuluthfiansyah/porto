import IdeShell from "@/components/ide/IdeShell";
import DashboardHero from "@/components/ide/DashboardHero";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: {
      absolute: t('homeTitle'),
    },
    description: t('homeDescription'),
    openGraph: {
      title: t('homeTitle'),
      description: t('homeOgDescription'),
      url: `https://adibayuluthfiansyah.dev/${locale}`,
      type: "website",
      images: [
        {
          url: `https://adibayuluthfiansyah.dev/api/og?locale=${locale}`,
          width: 1200,
          height: 630,
          alt: t('homeTitle'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('homeTitle'),
      description: t('homeOgDescription'),
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
      creator: "@adibayuluthfiansyah",
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return (
    <IdeShell>
      <div id="home" aria-label={t('ariaHero')}>
        <DashboardHero />
      </div>
    </IdeShell>
  );
}
