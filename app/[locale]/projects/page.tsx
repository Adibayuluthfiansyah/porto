"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
}

// Project links and images mapping
const projectLinks: Record<string, string> = {
  "project-1": "https://github.com/Adibayuluthfiansyah/shop-frontend",
  "project-2": "https://github.com/DinsosKubuRaya/DinsosFrontend",
  "project-3": "https://o7ong.me/",
  "project-4": "https://cangkir.tech/id",
  "project-5": "https://github.com/physicshub/physicshub.github.io/pull/203",
};

const projectImages: Record<string, string[]> = {
  "project-1": ["/shop1.webp", "/shop1.webp", "/shop1.webp"],
  "project-2": ["/dashboard-dinsos.webp", "/lp-dinsos.webp"],
  "project-3": ["/inv-lp.webp", "/inv-lp2.webp", "/inv-lp3.webp"],
  "project-4": ["/cangkir1.webp", "/cangkir2.webp", "/cangkir3.webp"],
  "project-5": ["/opensource3.webp", "/opensource2.webp", "/opensource1.webp"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ProjectCard({
  project,
  isEven,
}: {
  project: ProjectItem;
  isEven: boolean;
}) {
  const t = useTranslations("projects");
  const [imgIndex, setImgIndex] = useState(0);
  const images = projectImages[project.id] || [];
  const link = projectLinks[project.id] || "#";

  const nextImg = () =>
    setImgIndex((prev) => (prev + 1) % images.length);
  const prevImg = () =>
    setImgIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 lg:gap-20 items-center group`}
    >
      {/* image slider */}
      <div className="w-full lg:w-1/2 relative group/img">
        <div className="relative rounded-2xl bg-gradient-to-br from-white/40 via-white/30 to-white/20 dark:from-white/10 dark:via-white/5 dark:to-transparent p-[1px] shadow-2xl shadow-black/5 dark:shadow-black/20 backdrop-blur-3xl transition-all duration-500 group-hover/img:shadow-indigo-500/10 dark:group-hover/img:shadow-indigo-500/20">
          <div className="relative rounded-2xl bg-white/60 dark:bg-black/40 backdrop-blur-xl overflow-hidden border border-white/20 dark:border-white/10">
            {/* content */}
            <div className="aspect-video relative p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800"
                >
                  <Image
                    src={images[imgIndex]}
                    alt={`${project.title} - Slide ${imgIndex + 1}`}
                    fill
                    priority={project.id === "project-1" && imgIndex === 0}
                    loading={
                      project.id === "project-1" && imgIndex === 0 ? undefined : "lazy"
                    }
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain group-hover/img:scale-[1.02] transition-transform duration-700"
                  />
                </motion.div>
              </AnimatePresence>

              {/* navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImg}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black/80 text-neutral-900 dark:text-white p-2.5 rounded-full opacity-100 md:opacity-0 md:group-hover/img:opacity-100 md:focus:opacity-100 transition-all duration-300 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg z-10"
                    aria-label={t("prevImage")}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black/80 text-neutral-900 dark:text-white p-2.5 rounded-full opacity-100 md:opacity-0 md:group-hover/img:opacity-100 md:focus:opacity-100 transition-all duration-300 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-lg z-10"
                    aria-label={t("nextImage")}
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 dark:bg-black/60 backdrop-blur-2xl px-3 py-2 rounded-full border border-white/40 dark:border-white/10 shadow-lg z-10">
                    {images.map((_: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === imgIndex
                            ? "bg-neutral-900 dark:bg-white w-6"
                            : "bg-neutral-400 dark:bg-neutral-500 w-1.5 hover:bg-neutral-600 dark:hover:bg-neutral-400"
                        }`}
                        aria-label={t("goToImage", { number: idx + 1 })}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <p className="text-xs font-sans uppercase tracking-[0.2em] text-neutral-500 dark:text-gray-400 transition-colors mb-4">
          {project.type}
        </p>
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-neutral-900 dark:text-white transition-colors mb-6">
          {project.title}
        </h4>
        <p className="text-base md:text-lg text-neutral-600 dark:text-gray-300 transition-colors font-light leading-relaxed mb-8 font-sans">
          {project.description}
        </p>

        {/* tech */}
        <div className="flex flex-wrap gap-3 mb-10">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs font-sans uppercase tracking-widest border border-neutral-300 dark:border-white/20 text-neutral-600 dark:text-gray-300 transition-colors rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pb-1 border-b border-neutral-300 dark:border-white/30 hover:border-black dark:hover:border-white text-neutral-900 dark:text-white text-sm uppercase tracking-widest transition-all duration-300 group/link"
          >
            {t("viewProject")}
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Project() {
  const t = useTranslations("projects");
  const projects: ProjectItem[] = t.raw("items");

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
            {t("label")}
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-900 dark:text-white transition-colors leading-tight">
            {t("heading1")} <br />
            <span className="text-neutral-500 dark:text-gray-500">{t("heading2")}</span>
          </h3>
        </motion.div>

        {/* list */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
