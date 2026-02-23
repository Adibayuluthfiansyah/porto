import type { Metadata } from "next";
import { Poppins, Fraunces, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/ui/ThemeProvide";

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
  title: "Adibayu Luthfiansyah - FullStack Developer",
  description:
    "Adibayu Luthfiansyah — Full-Stack Developer - Software Engineer specializing in backend architecture and modern web applications. Focused on building scalable systems and exploring Web3 technologies.",
  openGraph: {
    url: "https://adibayuluthfiansyah.com",
    siteName: "Adibayu Luthfiansyah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "Adibayu Luthfiansyah — FullStack Developer",
    locale: "id_ID",
    type: "website",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-ZGWW2NC0HT"
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
