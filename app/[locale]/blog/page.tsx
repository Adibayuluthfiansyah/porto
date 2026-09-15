import fs from "fs";
import path from "path";
import matter from "gray-matter";
import IdeShell from "@/components/ide/IdeShell";
import BlogGrid from "@/components/ui/BlogGrid";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://adibayuluthfiansyah.dev/${locale}/blog`;
  const description =
    "Tech insights, tutorials, and thoughts on modern web development, full-stack engineering, and Go backend architecture.";

  return {
    metadataBase: new URL("https://adibayuluthfiansyah.dev"),
    title: "Blog",
    description,
    alternates: {
      canonical,
      languages: {
        en: "https://adibayuluthfiansyah.dev/en/blog",
        id: "https://adibayuluthfiansyah.dev/id/blog",
      },
    },
    openGraph: {
      title: "Blog | Adibayu Luthfiansyah",
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
      title: "Blog | Adibayu Luthfiansyah",
      description,
      images: [`https://adibayuluthfiansyah.dev/api/og?locale=${locale}`],
    },
  };
}

export default function BlogMainPage() {
  const blogDir = path.join(process.cwd(), "app/content/blog");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      description: data.description,
      image: data.image || "/hero-og.png",
    };
  });

  return (
    <IdeShell>
      <BlogGrid posts={posts} />
    </IdeShell>
  );
}
