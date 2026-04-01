import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import FadeInScroll from "@/components/ui/FadeInScroll";
import { Metadata } from "next";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/content/blog"));

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
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: `${data.title} | Adibayu Luthfiansyah`,
    description: data.description || "Read this article on my blog",
    openGraph: {
      title: `${data.title} | Adibayu Luthfiansyah`,
      description: data.description || "Read this article on my blog",
      type: "article",
      publishedTime: data.date,
      url: `https://adibayuluthfiansyah.dev/${locale}/blog/${slug}`,
      images: [
        {
          url: data.image || "/default-blog-image.webp",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Adibayu Luthfiansyah`,
      description: data.description || "Read this article on my blog",
      images: [data.image || "/default-blog-image.webp"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "app/content/blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="min-h-screen bg-transparent text-neutral-900 dark:text-white font-sans transition-colors duration-500">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto">
        <PageTransition>
          <article className="max-w-3xl mx-auto w-full relative z-10 px-6 md:px-12 lg:px-24 pt-28 pb-16 md:pt-32 md:pb-24">
            <header className="mb-10 md:mb-14 border-b border-neutral-200 dark:border-neutral-800 pb-6 md:pb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-4 md:mb-6 text-neutral-900 dark:text-white leading-tight">
                {data.title}
              </h1>
              <p className="text-xs md:text-sm font-sans tracking-widest uppercase text-neutral-500 dark:text-neutral-400 opacity-80">
                {data.date}
              </p>
            </header>

            <FadeInScroll>
              <div className="prose prose-neutral dark:prose-invert md:prose-lg max-w-none prose-headings:font-semibold prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 dark:prose-strong:text-white prose-code:text-neutral-900 dark:prose-code:text-neutral-100 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-900 dark:prose-pre:bg-black prose-img:rounded-xl prose-img:shadow-lg">
                <MDXRemote source={content} />
              </div>
            </FadeInScroll>
          </article>
        </PageTransition>
      </div>
    </main>
  );
}
