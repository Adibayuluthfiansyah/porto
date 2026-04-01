import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Navbar from "@/components/ui/Navbar";
import BlogGrid from "@/components/ui/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://adibayuluthfiansyah.dev"),
  title: "Blog | Adibayu Luthfiansyah",
  description: "Tech insights, tutorials, and thoughts on modern web development, fullstack engineering, and software architecture.",
  openGraph: {
    title: "Blog | Adibayu Luthfiansyah",
    description: "Tech insights, tutorials, and thoughts on modern web development, fullstack engineering, and software architecture.",
    type: "website",
  },
};

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
      image: data.image || "/default-blog-image.webp",
    };
  });

  return (
    <main className="min-h-screen bg-transparent text-neutral-900 dark:text-white font-sans transition-colors duration-500">
      <Navbar />
      <BlogGrid posts={posts} />
    </main>
  );
}
