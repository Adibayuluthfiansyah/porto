import type { Metadata } from "next";
import { Poppins, Fraunces, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "Adibayu Luthfiansyah | Full-Stack Developer",
    description:
      "Adibayu Luthfiansyah — Full-Stack Developer - Software Engineer specializing in backend architecture and modern web applications. Focused on building scalable systems",
    keywords: [
      "Pontianak",
      "Indonesia",
      "Full-Stack Developer Pontianak",
      "Full Stack Developer",
      "Software Engineer",
      "Web Development",
      "Next.js Developer",
      "React Developer",
      "TypeScript Developer",
      "Go Developer",
      "Backend Developer",
      "Frontend Developer",
      "Pontianak Developer",
      "Indonesia Developer",
      "AI-Assisted Coding",
      "Modern Web Development",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful API",
      "E-Commerce Development",
      "SaaS Development",
      "Hire Next.js Developer",
      "Freelance Full-Stack Developer Indonesia",
      "B2B Web App Builder",
      "SaaS Developer",
      "Go Backend Engineer",
      "Programmer for Hire",
      "Programmer for Hire Indonesia",
      "Programmer for Hire Pontianak",
      "Programmer Pontianak",
    ],
    authors: [{ name: "Adibayu Luthfiansyah Setyawan" }],
    creator: "Adibayu Luthfiansyah Setyawan",
    publisher: "Adibayu Luthfiansyah Setyawan",
    alternates: {
      canonical: `https://adibayuluthfiansyah.dev/${locale}`,
      languages: {
        'en': 'https://adibayuluthfiansyah.dev/en',
        'id': 'https://adibayuluthfiansyah.dev/id',
      }
    },
    openGraph: {
      type: "website",
      url: `https://adibayuluthfiansyah.dev/${locale}`,
      siteName: "Adibayu Luthfiansyah",
      title: "Adibayu Luthfiansyah — Full-Stack Developer",
      description:
        "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Go, Next.js, and TypeScript.",
      locale: locale === 'id' ? "id_ID" : "en_US",
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
      title: "Adibayu Luthfiansyah — Full-Stack Developer",
      description:
        "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Go, Next.js, and TypeScript.",
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
      creator: "@adibayuluthfiansyah",
    },
    other: {
      "og:image:secure_url": `https://adibayuluthfiansyah.dev/api/og?locale=${locale}`,
      "og:image:type": "image/png",
      "twitter:image": `https://adibayuluthfiansyah.dev/api/og?locale=${locale}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "ONZuM0_P9Ru2Ghg4oC4o9CHljxECU6MXONQ8qxmiLhE",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  
  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adibayu Luthfiansyah Setyawan",
              url: "https://adibayuluthfiansyah.dev",
              jobTitle: "Full Stack Developer",
              description:
                "Full-Stack Developer & Software Engineer with 1+ years experience specializing in Go, TypeScript, Next.js, and modern web applications.",
      sameAs: [
        "https://github.com/Adibayuluthfiansyah",
        "https://linkedin.com/in/adibayuluthfiansyah/",
      ],
              knowsAbout: [
                "TypeScript",
                "Next.js",
                "React",
                "Node.js",
                "Go",
                "PostgreSQL",
                "Prisma",
                "AI-Assisted Coding",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${fraunces.variable} ${cormorant.variable} bg-neutral-50 dark:bg-[#1a1a1a] text-neutral-900 dark:text-white transition-colors duration-500 antialiased `}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
