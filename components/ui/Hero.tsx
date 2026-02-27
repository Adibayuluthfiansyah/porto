"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IntersectingDots } from "./IntersectingDots";
import TypingText from "./TypingText";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-6 lg:px-12 bg-transparent transition-colors duration-500 overflow-hidden"
    >
      {/*dots*/}
      <div className="absolute top-24 md:top-28 left-0 w-full flex justify-center z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <IntersectingDots />
        </motion.div>
      </div>

      {/* main container */}
      <motion.div
        style={{ y, opacity }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-12 items-center z-10 pt-16 md:pt-0"
      >
        {/* left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center order-2 md:order-1"
        >
          {/* job title with typing animation */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TypingText
              text="FULLSTACK DEVELOPER"
              className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 md:mb-6 ml-1"
              delay={100}
              typingSpeed={30}
            />
          </motion.div>

          {/* main name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-neutral-900 dark:text-white transition-colors leading-[0.9] tracking-tight mb-6 wrap-break-word">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block"
              >
                Adibayu
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-gray-500 inline-block"
              >
                Luthfiansyah
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="inline-block"
              >
                Setyawan
              </motion.span>
            </h1>
          </motion.div>

          {/* quote */}
          <motion.div variants={itemVariants} className="max-w-lg ml-1">
            <motion.p
              className="text-neutral-600 dark:text-gray-400 transition-colors font-serif text-base md:text-lg leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              {`"I firmly believe that exceptional code should tackle genuine
            problems and generate meaningful impact. I'm driven by the vision of
            creating software that enhances communities and accelerates business
            success"`}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
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
      </motion.div>
    </section>
  );
}
