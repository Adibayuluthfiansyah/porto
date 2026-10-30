import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import IdeShell from "@/components/ide/IdeShell";
import { indexableRobots } from "@/lib/seo";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const files = fs
    .readdirSync(path.join(process.cwd(), "app/content/blog"))
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
  const filePath = path.join(process.cwd(), "app/content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const t = await getTranslations({ locale, namespace: "metadata.pages.blog" });
  const description = data.description || t("postFallbackDescription");
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/blog/${slug}`;
  const ogImage = data.image || `https://adibayuluthfiansyah.dev/api/og?locale=${locale}`;

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: data.title,
    description,
    robots: indexableRobots,
    alternates: {
      canonical,
      languages: {
        en: `https://adibayuluthfiansyah.dev/en/blog/${slug}`,
        id: `https://adibayuluthfiansyah.dev/id/blog/${slug}`,
        "x-default": `https://adibayuluthfiansyah.dev/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${data.title} | Adibayu Luthfiansyah`,
      description,
      type: "article",
      publishedTime: data.date,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Adibayu Luthfiansyah`,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const filePath = path.join(process.cwd(), "app/content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();
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
      url: "https://adibayuluthfiansyah.dev",
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
