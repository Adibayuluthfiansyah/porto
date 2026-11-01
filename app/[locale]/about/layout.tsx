import { buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.about" });
  const description = t("description");
  const title = t("title");

  return buildPageMetadata({
    locale,
    title,
    description,
    path: "/about",
    type: "profile",
  });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
