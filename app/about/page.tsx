"use client";

import { motion } from "framer-motion";

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
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">
        {/* left*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-4 md:sticky md:top-32"
        >
          <h2 className="text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-neutral-700 dark:text-gray-300 transition-colors mb-4 md:mb-6 ml-1">
            About Me
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-neutral-700 dark:text-gray-300 transition-colors leading-tight">
            Get To Know <br />
            <span className="text-gray-500">Me.</span>
          </h3>
        </motion.div>

        {/* right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="md:col-span-8 space-y-12 md:space-y-16 mt-2 md:mt-0"
        >
          {/* bio */}
          <motion.div
            variants={fadeUp}
            className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-neutral-700 dark:text-gray-300 transition-colors font-sans"
          >
            <p className="mb-6">
              I am a{" "}
              <span className="text-neutral-900 dark:text-white transition-colors font-medium">
                Full Stack Developer
              </span>{" "}
              Focused on building modern, scalable, and well-structured web
              applications. I believe good software is not just about writing
              code that works, but about delivering solutions that solve
              real-world problems effectively.
            </p>
            <p>
              I have experience developing end-to-end systems — from designing
              APIs and managing databases to implementing responsive and
              efficient user interfaces. My projects include building modern API
              ecosystems and full-stack applications using TypeScript-based
              stacks.
              <br />
              <br />
              Currently, I am also exploring Web3 technologies and smart
              contract development to deepen my understanding of decentralized
              systems and blockchain architecture.
              <br />
              <br />I am open to freelance opportunities, collaboration, and
              continuous growth as an engineer.
            </p>
          </motion.div>

          {/* dot*/}
          <motion.div
            variants={fadeUp}
            className="w-full h-[1px] bg-neutral-300 dark:bg-white/10 transition-colors"
          />

          {/* Tech Stack & Fokus */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12"
          >
            {/* Backend & Web3 */}
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6">
                Backend & Web3
              </h4>
              <ul className="space-y-3 md:space-y-4 font-serif italic text-base md:text-lg text-neutral-700 dark:text-gray-300 transition-colors">
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  TypeScript
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Node.js / NestJS
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Prisma / PostgreSQL
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Solidity (Learning)
                </li>
              </ul>
            </div>

            {/* Frontend & Tools */}
            <div>
              <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-6">
                Frontend & Tools
              </h4>
              <ul className="space-y-3 md:space-y-4 font-sans font-light text-base md:text-lg text-neutral-700 dark:text-gray-300 transition-colors">
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  React / Next.js
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Tailwind CSS
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Docker & Nginx
                </li>
                <li className="hover:text-white transition-colors duration-300 cursor-default">
                  Git / DevOps
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
