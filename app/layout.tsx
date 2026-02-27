import type { Metadata } from "next";
import { Poppins, Fraunces, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeProvide";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adibayuluthfiansyah.dev"),
  title: "Adibayu Luthfiansyah - FullStack Developer",
  description:
    "Adibayu Luthfiansyah — Full-Stack Developer - Software Engineer specializing in backend architecture and modern web applications. Focused on building scalable systems and exploring Web3 technologies.",
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
    "Web3 Developer",
    "Blockchain Developer",
    "Solidity",
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
    url: "https://adibayuluthfiansyah.dev",
    siteName: "Adibayu Luthfiansyah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adibayu Luthfiansyah - Full Stack Developer Portfolio",
      },
    ],
    title: "Adibayu Luthfiansyah — FullStack Developer",
    description:
      "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Next.js, NestJS, and Web3 technologies.",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adibayu Luthfiansyah — FullStack Developer",
    description:
      "Full-Stack Developer & Software Engineer specializing in backend architecture and modern web applications. Building scalable systems with Next.js, NestJS, and Web3 technologies.",
    images: ["/og-image.png"],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_CONSOLE,
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
      </head>
      <body
        className={`${poppins.variable} ${fraunces.variable} ${cormorant.variable} bg-neutral-50 dark:bg-[#1a1a1a] text-neutral-900 dark:text-white transition-colors duration-500 antialiased `}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
