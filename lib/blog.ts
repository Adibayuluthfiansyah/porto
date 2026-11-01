import path from "path";

export const BLOG_DIR = path.join(process.cwd(), "app/content/blog");

export function getBlogPostPath(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const relative = path.relative(BLOG_DIR, filePath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return filePath;
}
