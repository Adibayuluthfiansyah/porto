import IdeShell from "@/components/ide/IdeShell";
import DashboardHero from "@/components/ide/DashboardHero";
import { buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const title = t('homeTitle');

  return buildPageMetadata({
    locale,
    title,
    description: t('homeDescription'),
    ogDescription: t('homeOgDescription'),
    path: "",
    imageAlt: title,
    absoluteTitle: true,
  });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return (
    <IdeShell>
      <div id="home" aria-label={t('ariaHero')}>
        <DashboardHero />
      </div>
    </IdeShell>
  );
}
