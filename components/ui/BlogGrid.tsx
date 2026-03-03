"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-500 py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-neutral-500 dark:text-gray-400 transition-colors mb-4 md:mb-6 ml-1">
            Blog
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-900 dark:text-white transition-colors leading-tight">
            Writings <br />
            <span className="text-neutral-500 dark:text-gray-500">
              & Thoughts.
            </span>
          </h3>
        </motion.div>

        {/* blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full flex flex-col"
              >
                <div className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-neutral-900 dark:hover:border-white transition-all duration-500 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/30 overflow-hidden group/card shadow-sm hover:shadow-xl">
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    {/* date badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-[10px] font-sans uppercase tracking-widest border border-neutral-300 dark:border-white/20 text-neutral-600 dark:text-gray-300 transition-colors rounded-full">
                        {post.date}
                      </span>
                    </div>

                    {/* title */}
                    <h4 className="text-2xl md:text-3xl font-serif italic text-neutral-900 dark:text-white transition-colors mb-4 group-hover/card:text-neutral-600 dark:group-hover/card:text-neutral-300 line-clamp-2">
                      {post.title}
                    </h4>

                    {/* description */}
                    <p className="text-sm md:text-base text-neutral-600 dark:text-gray-300 transition-colors font-light leading-relaxed line-clamp-3 flex-grow mb-6">
                      {post.description}
                    </p>

                    {/* read more link */}
                    <div className="mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-900 dark:text-white group-hover/card:gap-3 transition-all duration-300 font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
