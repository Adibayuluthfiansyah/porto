"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <motion.a
            href="/CV.pdf"
            download="Adibayu_Luthfiansyah_Resume.pdf"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-none hover:bg-neutral-700 dark:hover:bg-gray-200 transition-all shadow-lg"
          >
            <Download
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
            Download PDF
          </motion.a>
        </motion.div>

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
                <h1 className="text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-900 dark:text-white transition-colors leading-tight break-words">
                  Adibayu Luthfiansyah Setyawan
                </h1>
                <p className="text-sm font-sans uppercase tracking-[0.3em] text-neutral-500 dark:text-gray-400">
                  Full Stack Developer & Software Engineer
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-gray-400 font-light w-full">
                <a
                  href="mailto:adibayuluthfiansyah@gmail.com"
                  className="flex items-start sm:items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0 mt-0.5 sm:mt-0" />
                  <span className="break-all sm:break-normal">
                    adibayu@adibayuluthfiansyah.dev
                  </span>
                </a>
                <span className="flex items-start sm:items-center gap-3">
                  <Phone size={16} className="shrink-0 mt-0.5 sm:mt-0" /> +62
                  895 7041 19180
                </span>
                <span className="flex items-start sm:items-center gap-3">
                  <MapPin size={16} className="shrink-0 mt-0.5 sm:mt-0" />{" "}
                  Pontianak, Indonesia
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
                  Dedicated Software Engineer with a strong foundation in
                  building scalable architectures and modern full-stack
                  applications. Passionate about translating complex technical
                  challenges into efficient, user-centric solutions. Adept at
                  leveraging modern web technologies and best engineering
                  practices to deliver secure, high-performance systems that
                  drive business value and continuous growth.
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
                        Frontend Developer Intern
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        November 2025 - Januari 2026
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      Dinas Sosial Kabupaten Kubu Raya - Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Architected and developed a responsive, role-based
                        administration dashboard utilizing{" "}
                        <strong className="font-medium text-neutral-900 dark:text-gray-200">
                          Next.js
                        </strong>
                        {", "}
                        <strong className="font-medium text-neutral-900 dark:text-gray-200">
                          TypeScript
                        </strong>
                        , and Tailwind CSS.
                      </li>
                      <li>
                        Engineered a secure document management system featuring
                        structured file uploads, real-time tracking, and
                        comprehensive user administration.
                      </li>
                      <li>
                        Implemented automated activity logging and guarded
                        routes to ensure strict data privacy and system
                        security.
                      </li>
                    </ul>
                  </div>
                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2 pl-8 pb-2">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Co-Founder & Lead Engineer
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        Januari 2026 - Present
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      PT Cangkir (Cangkir Tech) — Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Co-founded a technology agency with a dedicated 3-person
                        team, spearheading the technical vision to drive digital
                        transformation for local MSMEs (UMKM) in Pontianak.
                      </li>
                      <li>
                        Leading the end-to-end development of scalable,
                        accessible digital solutions—handling everything from
                        foundational system architecture to full-stack
                        deployment.
                      </li>
                      <li>
                        Establishing robust engineering practices and aligning
                        technical strategies with business objectives to deliver
                        high-impact, cost-effective products for regional
                        clients.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* projects */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Projects
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>

                <div className="space-y-10">
                  {/* E-Commerce Platform */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2 pl-8 pb-2">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Full-Stack E-Commerce Platform
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        Personal Project
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      Next.js · NestJS · TypeScript · PostgreSQL · Prisma
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Developed a comprehensive end-to-end e-commerce solution
                        with secure role-based dashboards for Admin, Seller, and
                        Customer roles.
                      </li>
                      <li>
                        Implemented dynamic state management, seamless media
                        handling via Cloudinary, and reliable payment
                        integration using Midtrans.
                      </li>
                      <li>
                        Built robust backend architecture with NestJS and
                        PostgreSQL, featuring RESTful APIs and Prisma ORM for
                        type-safe database queries.
                      </li>
                    </ul>
                  </div>

                  {/* Invoicing SaaS */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-2 pl-8 pb-2">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Automated Invoicing SaaS
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        Personal Project
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      Next.js · TypeScript · Prisma · PostgreSQL · Midtrans
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Designed and deployed a SaaS platform for streamlining
                        billing and client management for small businesses.
                      </li>
                      <li>
                        Implemented automated invoice generation, dynamic PDF
                        exports, and scheduled email reminders via Cron jobs.
                      </li>
                      <li>
                        Integrated secure payment processing with Midtrans using
                        Next.js Server Actions and modern authentication
                        patterns.
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
                      2022 - Present (Expected Graduation: 2026)
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-gray-400 font-light text-sm md:text-base">
                    Bachelor of Computer Science in Informatics Engineering
                    Universitas Muhammadiyah Pontianak
                  </p>
                  <p className="text-neutral-500 dark:text-gray-500 font-light text-sm mt-1">
                    IPK: 3.xx / 4.00
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
                    href="https://www.linkedin.com/in/adibayu-luthfiansyah-setyawan-35251a220/"
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
                  <a
                    href="https://instagram.com/adibayuluthfiansyah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                  >
                    <Instagram
                      size={18}
                      className="group-hover:text-[#E1306C] dark:group-hover:text-[#E1306C] transition-colors"
                    />
                    Instagram
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
                    "JavaScript",
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
                  {["Docker", "Nginx", "Git", "Bruno"].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-gray-300 text-xs font-sans tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
