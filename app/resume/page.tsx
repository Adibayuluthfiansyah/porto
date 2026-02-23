"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Navbar from "../navbar/page";

export default function Resume() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as const,
    },
  };

  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-[#0a0a0a] text-neutral-900 dark:text-white font-sans transition-colors duration-500">
      <Navbar />

      <div className="pt-32 pb-12 md:pt-40 md:pb-20 px-4 md:px-8">
        {/* download pdf */}
        <div className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <a
            href="/CV.pdf"
            download="Adibayu_Luthfiansyah_Resume.pdf"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-none hover:bg-neutral-700 dark:hover:bg-gray-200 transition-all shadow-lg"
          >
            <Download
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
            Download PDF
          </a>
        </div>

        {/* resume*/}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl mx-auto bg-white dark:bg-[#141414] shadow-2xl ring-1 ring-neutral-200 dark:ring-white/5 overflow-hidden transition-colors duration-500"
        >
          {/* header */}
          <div className="px-8 md:px-16 py-12 md:py-16 border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#1a1a1a] transition-colors duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif italic mb-4 text-neutral-900 dark:text-white">
                  Adibayu Luthfiansyah Setyawan
                </h1>
                <p className="text-sm font-sans uppercase tracking-[0.3em] text-neutral-500 dark:text-gray-400">
                  Full Stack Developer & Software Engineer
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-gray-400 font-light">
                <a
                  href="mailto:adibayuluthfiansyah@gmail.com"
                  className="flex items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Mail size={16} /> adibayuluthfiansyah@gmail.com
                </a>
                <span className="flex items-center gap-3">
                  <Phone size={16} /> +62 895 7041 19180
                </span>
                <span className="flex items-center gap-3">
                  <MapPin size={16} /> Pontianak, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* main container */}
          <div className="px-8 md:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            {/* exp and education */}
            <div className="md:col-span-8 space-y-16">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Profile
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>
                <p className="text-neutral-700 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg">
                  Software Engineer dengan fokus kuat pada pengembangan
                  arsitektur Backend yang bersih dan *scalable*. Memiliki
                  pengalaman mengelola ekosistem API modern menggunakan
                  TypeScript dan Node.js, serta memiliki ketertarikan tinggi
                  terhadap teknologi Web3 dan arsitektur desentralisasi.
                </p>
              </section>

              {/* exp */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Experience
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>

                <div className="space-y-10">
                  {/* item */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2 pl-8 pb-2">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Software Engineer Intern
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        Okt 2025 - Sekarang
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      Nama Perusahaan Tech
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Merancang arsitektur Shop API menggunakan{" "}
                        <strong className="font-medium text-neutral-900 dark:text-gray-200">
                          NestJS
                        </strong>{" "}
                        dan{" "}
                        <strong className="font-medium text-neutral-900 dark:text-gray-200">
                          PostgreSQL
                        </strong>
                        .
                      </li>
                      <li>
                        Mengintegrasikan sistem pembayaran pihak ketiga (Payment
                        Gateway) secara aman.
                      </li>
                      <li>
                        Mengelola media menggunakan Cloudinary dan mengamankan
                        rute API dengan autentikasi JWT.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* education */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Education
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>

                <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2 pl-8">
                  <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-white dark:ring-[#141414]"></span>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                      Universitas Muhammadiyah Pontianak
                    </h3>
                    <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                      2022 - 2026
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-gray-400 font-light text-sm md:text-base">
                    Sarjana Komputer (S1) Teknik Informatika
                  </p>
                  <p className="text-neutral-500 dark:text-gray-500 font-light text-sm mt-1">
                    IPK: 3.93 / 4.00
                  </p>
                </div>
              </section>
            </div>

            {/* extra info */}
            <div className="md:col-span-4 space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                  Links
                </h2>
                <div className="flex flex-col gap-4 text-sm font-light text-neutral-600 dark:text-gray-400">
                  <a
                    href="https://github.com/Adibayuluthfiansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                  >
                    <Github
                      size={18}
                      className="group-hover:text-black dark:group-hover:text-white transition-colors"
                    />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/adibayuluthfiansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                  >
                    <Linkedin
                      size={18}
                      className="group-hover:text-[#0A66C2] dark:group-hover:text-[#0A66C2] transition-colors"
                    />
                    LinkedIn
                  </a>
                </div>
              </section>

              {/* skills */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Node.js",
                    "NestJS",
                    "Next.js",
                    "PostgreSQL",
                    "Prisma",
                    "Solidity",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300 text-xs font-sans tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* tools */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                  Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Nginx", "Git", "Postman", "Vercel"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300 text-xs font-sans tracking-wide"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
