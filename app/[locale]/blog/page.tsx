import fs from "fs";
import path from "path";
import matter from "gray-matter";
import IdeShell from "@/components/ide/IdeShell";
import LazyBlogGrid from "@/components/ui/LazyBlogGrid";
import { indexableRobots } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.blog" });
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/blog`;
  const description = t("description");
  const title = t("title");

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title,
    description,
    robots: indexableRobots,
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/blog",
        id: "https://adibayuluthfiansyah.dev/id/blog",
        "x-default": "https://adibayuluthfiansyah.dev/en/blog",
      },
    },
    openGraph: {
      title: `${title} | Adibayu Luthfiansyah`,
      description,
      url: canonical,
      type: "website",
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
      title: `${title} | Adibayu Luthfiansyah`,
      description,
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
    },
  };
}

export default function BlogMainPage() {
  const blogDir = path.join(process.cwd(), "app/content/blog");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image || "/hero-og.png",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <IdeShell>
      <LazyBlogGrid posts={posts} />
    </IdeShell>
  );
}
