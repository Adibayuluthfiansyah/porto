import fs from "fs";
import path from "path";
import matter from "gray-matter";
import IdeShell from "@/components/ide/IdeShell";
import LazyBlogGrid from "@/components/ui/LazyBlogGrid";
import { BLOG_DIR } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pages.blog" });
  const description = t("description");
  const title = t("title");

  return buildPageMetadata({
    locale,
    title,
    description,
    path: "/blog",
  });
}

export default function BlogMainPage() {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
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
