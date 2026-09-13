"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
      <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
        <div>
          <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
            ~/blog/
          </p>
          <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
            Writings and Thoughts.
          </h2>
        </div>

        {posts.length === 0 ? (
          <p role="status" className="font-body-md text-body-md text-outline">
            No posts yet. New essays land here when they are written.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-surface-container-lowest border border-outline-variant/40 hover:border-outline transition-colors overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface border-b border-outline-variant/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-space-md flex flex-col flex-grow">
                  <span className="inline-block w-fit px-space-xs py-0.5 mb-space-sm font-label-md text-label-md border border-outline-variant/40 text-on-surface-variant">
                    {post.date}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-space-xs group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed flex-grow mb-space-sm">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-space-xs pt-space-sm border-t border-outline-variant/40 font-label-lg text-label-lg text-primary">
                    Read More
                    <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
