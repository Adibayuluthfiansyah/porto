"use client";

import { Suspense, lazy } from "react";

const BlogGrid = lazy(() => import("./BlogGrid"));

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface LazyBlogGridProps {
  posts: BlogPost[];
}

export default function LazyBlogGrid({ posts }: LazyBlogGridProps) {
  return (
    <Suspense
      fallback={
        <section className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
          <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
            <div>
              <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
                ~/blog/
              </p>
              <h1 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
                Writings and Thoughts.
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex flex-col bg-surface-container-lowest border border-outline-variant/40 overflow-hidden animate-pulse"
                >
                  <div className="w-full aspect-[16/10] bg-surface-container-high" />
                  <div className="p-space-md flex flex-col gap-space-sm">
                    <div className="w-20 h-4 bg-surface-container-high" />
                    <div className="w-3/4 h-5 bg-surface-container-high" />
                    <div className="w-full h-12 bg-surface-container-high" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    >
      <BlogGrid posts={posts} />
    </Suspense>
  );
}
