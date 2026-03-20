import type { Metadata } from "next";
import { Poppins, Fraunces, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://adibayuluthfiansyah.dev"),
  title: "Adibayu Luthfiansyah - FullStack Developer",
  description:
    "Adibayu Luthfiansyah — Full-Stack Developer - Software Engineer specializing in backend architecture and modern web applications. Focused on building scalable systems",
  keywords: [
    "Pontianak",
    "Indonesia",
    "Fullstack Developer Pontianak",
    "Full Stack Developer",
    "Software Engineer",
    "Web Development",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "NestJS Developer",
    "Backend Developer",
    "Frontend Developer",
    "Pontianak Developer",
    "Indonesia Developer",
    "AI-Assisted Coding",
    "Modern Web Development",
    "Go Developer",
    "Golang",
    "PostgreSQL",
    "Prisma ORM",
    "RESTful API",
    "E-Commerce Development",
    "SaaS Development",
  ],
  authors: [{ name: "Adibayu Luthfiansyah Setyawan" }],
  creator: "Adibayu Luthfiansyah Setyawan",
  publisher: "Adibayu Luthfiansyah Setyawan",
  openGraph: {
    type: "website",
    url: "https://adibayuluthfiansyah.dev",
    siteName: "Adibayu Luthfiansyah",
    title: "Adibayu Luthfiansyah — FullStack Developer",
    description:
      "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Next.js, NestJS.",
    locale: "id_ID",
    images: "/og-image.png?v=4",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adibayu Luthfiansyah — FullStack Developer",
    description:
      "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Next.js, NestJS.",
    images: ["/og-image.png?v=4"],
    creator: "@adibayuluthfiansyah",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
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
                "Full-Stack Developer & Software Engineer with 1+ years experience specializing in TypeScript, Next.js, NestJS, and modern web applications.",
              sameAs: [
                "https://github.com/adibayuuuu",
                "https://linkedin.com/in/adibayu-luthfiansyah",
              ],
              knowsAbout: [
                "TypeScript",
                "Next.js",
                "React",
                "NestJS",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "Go",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
