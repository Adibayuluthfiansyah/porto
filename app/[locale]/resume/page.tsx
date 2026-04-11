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
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
      <style jsx global>{`
        @media print {
          nav,
          footer,
          .no-print {
            display: none !important;
          }
          section {
            page-break-inside: avoid;
          }
          * {
            color: black !important;
            background: white !important;
          }
          .border-l,
          [class*="border-"] {
            border-color: #333 !important;
          }
          .rounded-full {
            background-color: #000 !important;
          }
          * {
            box-shadow: none !important;
            transition: none !important;
          }
          main {
            padding: 0 !important;
          }
          .max-w-5xl {
            max-width: 100% !important;
            margin: 0 !important;
          }
          .ring-4 {
            box-shadow: none !important;
          }
          body {
            margin: 0;
            padding: 20px;
          }
        }
      `}</style>
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

        {/* resume */}
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
                  Co-Founder & Full Stack Developer
                </p>
              </div>

              <div className="flex flex-col gap-3 text-sm text-neutral-600 dark:text-gray-400 font-light w-full">
                <a
                  href="mailto:adibayu@adibayuluthfiansyah.dev"
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
            {/* left col: exp, projects, education */}
            <div className="md:col-span-8 space-y-16">
              {/* profile */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Profile
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>
                <p className="text-neutral-700 dark:text-gray-300 font-light leading-relaxed text-base md:text-lg max-w-prose">
                  Co-founder and Full Stack Developer with hands-on experience
                  delivering production systems for government clients and
                  growing MSMEs. I own the full delivery lifecycle — from
                  architecture and backend design to frontend implementation and
                  deployment — using Next.js, NestJS, and TypeScript. Built and
                  shipped real products under real constraints. Self-driven,
                  client-focused, and open to full-time roles where technical
                  ownership matters.
                </p>
              </section>

              {/* experience */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6 flex items-center gap-4">
                  Experience
                  <span className="h-[1px] flex-1 bg-neutral-200 dark:bg-white/10"></span>
                </h2>

                <div className="space-y-10 md:space-y-14">
                  {/* PT Cangkir Tech */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-600 ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-neutral-900 dark:hover:border-white/50">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Co-Founder & Lead Engineer
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        January 2026 – Present
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      PT Cangkir Tech — Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Co-founded PT Cangkir Tech from zero — handling
                        everything from client acquisition and technical scoping
                        to architecture decisions and deployment, serving as the
                        sole engineer responsible for the full delivery
                        lifecycle.
                      </li>
                      <li>
                        Shipped production-grade web systems for multiple MSME
                        clients across Pontianak, translating business
                        requirements into scalable, maintainable solutions under
                        real deadlines.
                      </li>
                      <li>
                        Established engineering standards and technical roadmaps
                        that balance speed, quality, and cost-effectiveness —
                        enabling a small agency to compete and deliver at a
                        professional level.
                      </li>
                    </ul>
                  </div>

                  {/* Dinas Sosial */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-600 ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-neutral-900 dark:hover:border-white/50">
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white ring-4 ring-white dark:ring-[#141414]"></span>

                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                        Frontend Developer Intern
                      </h3>
                      <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                        November 2025 – January 2026
                      </span>
                    </div>
                    <p className="text-neutral-900 dark:text-white font-medium text-sm mb-4">
                      Dinas Sosial Kabupaten Kubu Raya — Pontianak, Indonesia
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Replaced a manual document workflow with a role-based
                        digital dashboard for a government social services
                        agency — enabling secure document management and
                        reducing processing friction across multiple user roles.
                      </li>
                      <li>
                        Built a structured file upload system with real-time
                        tracking and user administration, streamlining internal
                        case management workflows that previously relied on
                        manual coordination.
                      </li>
                      <li>
                        Implemented automated activity logging and protected
                        route architecture that met government-level data
                        security and audit trail requirements.
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

                <div className="space-y-10 md:space-y-14">
                  {/* E-Commerce */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-600 ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-neutral-900 dark:hover:border-white/50">
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
                      Next.js · NestJS · TypeScript · PostgreSQL · Prisma ·
                      Midtrans
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Designed and shipped a multi-vendor e-commerce platform
                        from scratch — supporting Admin, Seller, and Customer
                        roles with independent dashboards, enabling live product
                        management and real transactions.
                      </li>
                      <li>
                        Built a type-safe NestJS backend with Prisma ORM
                        ensuring data integrity across the stack, integrated
                        cloud-based media storage and Midtrans payment gateway
                        for a complete production checkout flow.
                      </li>
                      <li>
                        Handled the full stack end-to-end: schema design,
                        RESTful API contracts, frontend implementation, and
                        cloud deployment — with no external engineering support.
                      </li>
                    </ul>
                  </div>

                  {/* Invoicing SaaS */}
                  <div className="relative border-l border-neutral-300 dark:border-neutral-600 ml-2 pl-8 pb-2 transition-all duration-300 hover:pl-10 hover:border-neutral-900 dark:hover:border-white/50">
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
                      Next.js · TypeScript · Prisma · PostgreSQL · Midtrans ·
                      Server Actions
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      <li>
                        Built an invoicing SaaS that eliminates manual billing
                        for small businesses — automating invoice generation,
                        payment reminders via email, and collection tracking
                        through Cron-based scheduling.
                      </li>
                      <li>
                        Integrated Midtrans payment gateway with secure Next.js
                        Server Actions, delivering a production-ready checkout
                        experience with modern authentication safeguards.
                      </li>
                      <li>
                        Designed the product end-to-end: from database schema
                        and billing logic to the client-facing dashboard —
                        solving a real problem for small business owners who
                        manage invoices manually.
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

                <div className="relative border-l border-neutral-300 dark:border-neutral-600 ml-2 pl-8">
                  <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-white dark:ring-[#141414]"></span>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-serif italic text-neutral-900 dark:text-white">
                      Universitas Muhammadiyah Pontianak
                    </h3>
                    <span className="text-xs font-sans text-neutral-500 uppercase tracking-widest mt-1 md:mt-0">
                      2022 – Expected 2026
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-gray-400 font-light text-sm md:text-base">
                    Bachelor of Computer Science in Informatics Engineering
                  </p>
                  <p className="text-neutral-500 dark:text-gray-500 font-light text-sm mt-1">
                    GPA: 3.xx / 4.00
                  </p>
                </div>
              </section>
            </div>

            {/* right col */}
            <div className="md:col-span-4 space-y-12">
              {/* availability — NEW SECTION */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                  Available For
                </h2>
                <div className="flex flex-col gap-3 text-sm font-light text-neutral-600 dark:text-gray-400">
                  <div className="flex flex-col gap-1">
                    <span className="text-neutral-900 dark:text-white font-medium text-sm">
                      Full-time roles
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-gray-500 leading-relaxed">
                      Software Engineer / Full Stack Developer positions
                    </span>
                  </div>
                  <div className="h-[0.5px] bg-neutral-100 dark:bg-white/5"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-neutral-900 dark:text-white font-medium text-sm">
                      Freelance projects
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-gray-500 leading-relaxed">
                      Full-stack web dev, MVP builds for startups & MSMEs
                    </span>
                  </div>
                </div>
              </section>

              {/* links */}
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

              {/* tech stack */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "Next.js",
                    "React",
                    "NestJS",
                    "Node.js",
                    "PostgreSQL",
                    "Prisma",
                    "Go (Golang)",
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
