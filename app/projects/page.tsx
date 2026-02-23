"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectItem {
  id: number;
  title: string;
  type: string;
  description: string;
  techStack: string[];
  link: string;
  images: string[];
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Shop API Ecosystem",
    type: "Backend Architecture",
    description:
      "Sistem backend e-commerce yang komprehensif. Menangani autentikasi, manajemen produk, hingga pemrosesan transaksi yang aman. Proyek ini dibangun dengan arsitektur yang bersih dan siap untuk diskalakan.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Midtrans", "Cloudinary"],
    link: "https://github.com/Adibayuluthfiansyah/shop-api",
    images: ["/project-1.jpg", "/project-1b.jpg"],
  },
  {
    id: 2,
    title: "Dinsos Frontend",
    type: "Frontend Development",
    description:
      "Eksplorasi ekosistem Web3 dengan membangun platform desentralisasi untuk mencetak (minting) dan memperdagangkan NFT. Dilengkapi dengan antarmuka modern yang terhubung langsung ke blockchain.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Adibayuluthfiansyah/NFT-Marketplace-fe",
    images: ["/dashboard-dinsos.png", "/lp-dinsos.png"],
  },
  {
    id: 3,
    title: "Invoice SaaS",
    type: "Fullstack Web Application",
    description:
      "Aplikasi SaaS (Software as a Service) untuk manajemen dan pembuatan faktur secara otomatis. Membantu bisnis kecil melacak pembayaran dan mengelola klien dalam satu dashboard yang efisien.",
    techStack: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Adibayuluthfiansyah/invoice-saas",
    images: ["/project-3.jpg", "/project-3b.jpg"],
  },
];

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
  const [imgIndex, setImgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImg = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setImgIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImg = () => changeImg((imgIndex + 1) % project.images.length);
  const prevImg = () =>
    changeImg((imgIndex - 1 + project.images.length) % project.images.length);

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
      {/*image slider*/}
      <div className="w-full lg:w-1/2 aspect-video relative overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md">
        <Image
          src={project.images[imgIndex]}
          alt={`${project.title} - Slide ${imgIndex + 1}`}
          fill
          className={`object-contain transition-all duration-300 ease-in-out z-10
        ${isTransitioning ? "opacity-0 scale-95" : "opacity-90 scale-100"}
        group-hover:opacity-100`}
        />

        <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-20"></div>

        {/* slider dot */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 text-black dark:text-white p-2 rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 text-black dark:text-white p-2 rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_: string, idx: number) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === imgIndex ? "bg-white w-6" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* text */}
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

        {/* tech list */}
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

        {/* link */}
        <div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 pb-1 border-b border-neutral-300 dark:border-white/30 hover:border-black dark:hover:border-white text-neutral-900 dark:text-white text-sm uppercase tracking-widest transition-all duration-300 group/link"
          >
            View Project
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// wrapper page
export default function Project() {
  return (
    <section className="relative min-h-screen bg-transparent text-neutral-900 dark:text-white transition-colors duration-500 py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-neutral-500 dark:text-gray-400 transition-colors mb-4 md:mb-6 ml-1">
            Projects
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-900 dark:text-white transition-colors leading-tight">
            Selected <br />
            <span className="text-neutral-500 dark:text-gray-500">Works.</span>
          </h3>
        </motion.div>

        {/* list project */}
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
