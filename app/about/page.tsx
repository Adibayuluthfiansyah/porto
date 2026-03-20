"use client";

import { motion } from "framer-motion";
import FadeInScroll from "@/components/ui/FadeInScroll";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerAnimation";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 bg-transparent text-neutral-900 dark:text-white transition-colors duration-500 py-20 md:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* left*/}
        <FadeInScroll
          direction="left"
          className="md:col-span-4 md:sticky md:top-32"
        >
          <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-neutral-700 dark:text-gray-300 transition-colors mb-4 md:mb-6 ml-1">
            About Me
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-700 dark:text-gray-300 transition-colors leading-tight">
            Get To Know <br />
            <span className="text-gray-500">Me.</span>
          </h3>
        </FadeInScroll>

        {/* right */}
        <StaggerContainer className="md:col-span-8 space-y-8 md:space-y-12 mt-2 md:mt-0">
          {/* bio */}
          <StaggerItem className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-neutral-700 dark:text-gray-300 transition-colors font-sans">
            <p className="mb-6">
              {" I'm a "}
              <span className="text-neutral-900 dark:text-white transition-colors font-medium">
                Full Stack Developer
              </span>{" "}
              with 1+ years of experience building production-grade web
              applications. My journey started with a passion for coding and a
              curiosity about how the web works, which quickly evolved into a
              career focused on backend architecture and scalable systems.
              transactions to government management systems. My specialty?
              Turning complex business requirements into clean, scalable code.
            </p>
            <p>
              I have hands-on experience developing end-to-end systems - from
              designing RESTful APIs and managing databases to implementing
              responsive and performant user interfaces. My projects span modern
              e-commerce ecosystems, SaaS platforms with automated workflows,
              and government digital transformation initiatives.
              <br />
              <br />
              {` Currently, I'm actively exploring AI-assisted coding workflows -
              learning how tools like GitHub Copilot and AI-powered IDEs can
              accelerate development while maintaining code quality. The future
              of software development is collaborative intelligence between
              humans and AI, and I'm positioning myself at that intersection.`}
              <br />
              <br />I am open to freelance opportunities, collaboration, and
              continuous growth as an engineer.
            </p>
          </StaggerItem>

          {/* dot*/}
          <StaggerItem>
            <div className="w-full h-[1px] bg-neutral-300 dark:bg-white/10 transition-colors" />
          </StaggerItem>

          {/* Tech Stack & Fokus */}
          <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {/* Backend & Database */}
            <FadeInScroll direction="up" delay={0.1}>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6">
                Backend & Database
              </h4>
              <ul className="space-y-3 md:space-y-4 font-serif italic text-base md:text-lg text-neutral-700 dark:text-gray-300 transition-colors">
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  TypeScript
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Node.js / NestJS
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Go (Golang)
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Prisma / PostgreSQL
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  RESTful APIs
                </li>
              </ul>
            </FadeInScroll>

            {/* Frontend & Tools */}
            <FadeInScroll direction="up" delay={0.2}>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6">
                Frontend & Tools
              </h4>
              <ul className="space-y-3 md:space-y-4 font-sans font-light text-base md:text-lg text-neutral-700 dark:text-gray-300 transition-colors">
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  React / Next.js
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Tailwind CSS
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Docker & Nginx
                </li>
                <li className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default">
                  Git / DevOps
                </li>
              </ul>
            </FadeInScroll>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
