import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";
import Contact from "./contact/page";
import Projects from "./projects/page";
import About from "./about/page";
import Footer from "@/components/ui/Footer";
import ScrollBasedAnimatedWrapper from "@/components/ui/ScrollBasedAnimatedWrapper";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: t('homeTitle'),
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
    <main className="bg-transparent transition-colors duration-500">
      <Navbar />
      <section id="home" aria-label={t('ariaHero')}>
        <Hero />
      </section>
      <section
        className="py-10 md:py-16 overflow-hidden flex items-center justify-center bg-transparent"
        aria-label={t('ariaTitles')}
      >
        <ScrollBasedAnimatedWrapper
          text={t('scrollingText')}
          default_velocity={5}
          className="text-4xl md:text-6xl font-serif italic tracking-widest text-neutral-400 dark:text-neutral-600 mx-4"
        />
      </section>
      <section id="about" aria-label={t('ariaAbout')}>
        <About />
      </section>
      <section id="projects" aria-label={t('ariaProjects')}>
        <Projects />
      </section>
      <section id="contact" aria-label={t('ariaContact')}>
        <Contact />
      </section>
      <section aria-label={t('ariaFooter')}>
        <Footer />
      </section>
    </main>
  );
}
