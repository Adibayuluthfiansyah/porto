import { buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.projects" });
  const description = t("description");
  const title = t("title");

  return buildPageMetadata({
    locale,
    title,
    description,
    path: "/projects",
    keywords: [
      "Full Stack Projects",
      "E-Commerce Platform",
      "SaaS Application",
      "Next.js Projects",
      "Go Backend",
      "TypeScript Projects",
      "PostgreSQL Database",
      "Web Development Portfolio",
      "Midtrans Integration",
      "Prisma ORM",
    ],
  });
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
