import { buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.resume" });
  const description = t("description");
  const title = t("title");

  return buildPageMetadata({
    locale,
    title,
    description,
    path: "/resume",
    type: "profile",
    keywords: [
      "Resume",
      "CV",
      "Full Stack Developer Resume",
      "TypeScript Developer",
      "Next.js Experience",
      "Go Developer",
      "NestJS Developer",
      "Cangkir Tech",
      "Pontianak Developer",
      "Cybersecurity Learning",
    ],
  });
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
