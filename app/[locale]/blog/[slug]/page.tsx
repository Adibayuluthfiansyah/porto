import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import IdeShell from "@/components/ide/IdeShell";
import { BLOG_DIR, getBlogPostPath } from "@/lib/blog";
import { SITE_URL, buildPageMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const filePath = getBlogPostPath(slug);
  if (!filePath || !fs.existsSync(filePath)) return {};
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const t = await getTranslations({ locale, namespace: "metadata.pages.blog" });
  const title = typeof data.title === "string" && data.title ? data.title : t("title");
  const description = data.description || t("postFallbackDescription");

  return buildPageMetadata({
    locale,
    title,
    description,
    path: `/blog/${slug}`,
    type: "article",
    image: typeof data.image === "string" ? data.image : undefined,
    imageAlt: title,
    publishedTime: typeof data.date === "string" ? data.date : undefined,
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const filePath = getBlogPostPath(slug);
  if (!filePath || !fs.existsSync(filePath)) notFound();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const t = await getTranslations({ locale, namespace: "metadata.pages.blog" });
  const description = data.description || t("postFallbackDescription");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description,
    datePublished: data.date,
    author: {
      "@type": "Person",
      name: "Adibayu Luthfiansyah Setyawan",
      url: SITE_URL,
    },
  };

  return (
    <IdeShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto w-full px-space-md md:px-space-xl pt-space-lg pb-space-xl">
        <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
          ~/blog/{slug}.mdx
        </p>
        <h1 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold mb-space-xs">
          {data.title}
        </h1>
        <p className="font-label-md text-label-md tracking-widest uppercase text-outline mb-space-lg">
          {data.date}
        </p>

        <div className="prose prose-neutral dark:prose-invert md:prose-lg max-w-none prose-headings:font-semibold prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-strong:text-on-surface prose-code:text-on-surface prose-code:bg-surface-container-high prose-code:px-1 prose-code:py-0.5 prose-pre:bg-surface-container-lowest prose-img:shadow-lg">
          <MDXRemote source={content} />
        </div>
      </article>
    </IdeShell>
  );
}
