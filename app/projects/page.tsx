"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shop API Ecosystem",
    type: "Backend Architecture",
    description:
      "Sistem backend e-commerce yang komprehensif. Menangani autentikasi, manajemen produk, hingga pemrosesan transaksi yang aman. Proyek ini dibangun dengan arsitektur yang bersih dan siap untuk diskalakan.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Midtrans", "Cloudinary"],
    link: "https://github.com/Adibayuluthfiansyah/shop-api",
    image: "/project-1.jpg",
  },
  {
    id: 2,
    title: "NFT Marketplace",
    type: "Web3 & Smart Contract",
    description:
      "Eksplorasi ekosistem Web3 dengan membangun platform desentralisasi untuk mencetak (minting) dan memperdagangkan NFT. Dilengkapi dengan antarmuka modern yang terhubung langsung ke blockchain.",
    techStack: ["Next.js", "Solidity", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Adibayuluthfiansyah/NFT-Marketplace-fe",
    image: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Invoice SaaS",
    type: "Fullstack Web Application",
    description:
      "Aplikasi SaaS (Software as a Service) untuk manajemen dan pembuatan faktur secara otomatis. Membantu bisnis kecil melacak pembayaran dan mengelola klien dalam satu dashboard yang efisien.",
    techStack: ["Next.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Adibayuluthfiansyah/invoice-saas",
    image: "/project-3.jpg",
  },
];

export default function Project() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen bg-[#1a1a1a] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/*header*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6 ml-1">
            Projects
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight">
            Selected <br />
            <span className="text-gray-500">Works.</span>
          </h3>
        </motion.div>

        {/*list*/}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-20 items-center group`}
              >
                {/* Bagian Gambar */}
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden rounded-xl bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-4">
                    {project.type}
                  </p>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-6">
                    {project.title}
                  </h4>
                  <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-8 font-sans">
                    {project.description}
                  </p>

                  {/* tech list */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-sans uppercase tracking-widest border border-white/20 text-gray-300 rounded-full"
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
                      className="inline-flex items-center gap-2 pb-1 border-b border-white/30 hover:border-white text-sm uppercase tracking-widest transition-all duration-300 group/link"
                    >
                      View Project
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
