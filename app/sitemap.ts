import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adibayuluthfiansyah.dev";
  const locales = ["en", "id"];
  const pages: {
    path: string;
    changeFrequency: "monthly" | "weekly" | "yearly";
    priority: number;
  }[] = [
    { path: "", changeFrequency: "monthly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
    { path: "/resume", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  ];

  const urls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  );

  const blogDir = path.join(process.cwd(), "app/content/blog");
  const posts = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
      lastModified: fs.statSync(path.join(blogDir, file)).mtime,
    }));
  posts.forEach((post) => {
    locales.forEach((locale) => {
      urls.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return urls;
}
