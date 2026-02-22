"use client";

import { motion } from "framer-motion";
import { IntersectingDots } from "./IntersectingDots";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 bg-[#1a1a1a] overflow-hidden py-24 md:py-0">
      <div className="absolute top-24 md:top-28 left-0 w-full flex justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <IntersectingDots />
        </motion.div>
      </div>

      {/* main container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-12 items-center z-10 pt-16 md:pt-0">
        {/* left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center order-2 md:order-1"
        >
          {/* job title */}
          <motion.div variants={itemVariants}>
            <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6 ml-1">
              FullStack Developer
            </p>
          </motion.div>

          {/* main name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white leading-[0.9] tracking-tight mb-6">
              Adibayu <br />
              <span className="text-gray-500">Luthfiansyah.</span>
            </h1>
          </motion.div>

          {/* quote */}
          <motion.div variants={itemVariants} className="max-w-lg ml-1">
            <p className="text-gray-400 font-serif text-base md:text-lg leading-relaxed font-light tracking-wide">
              {`"I firmly believe that exceptional code should tackle genuine
            problems and generate meaningful impact. I'm driven by the vision of
            creating software that enhances communities and accelerates business
            success"`}
            </p>
          </motion.div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative h-100 md:h-125 w-full order-1 md:order-2 flex items-center"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 85%, transparent 100%)",
          }}
        >
          <Image
            src="/hero.png"
            alt="Foto profil Adibayu Luthfiansyah"
            fill
            className="object-contain object-center grayscale-20 hover:grayscale-0 transition-all duration-700 ease-in-out"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
