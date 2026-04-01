"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IntersectingDots } from "./IntersectingDots";
import TypingText from "./TypingText";
import Image from "next/image";
import { useRef, useState } from "react";
import ContactModal from "./ContactModal";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-screen flex flex-col justify-center pb-24 md:pb-0 px-4 md:px-6 lg:px-12 bg-transparent transition-colors duration-500 overflow-hidden"
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
          style={{ y, opacity, willChange: "transform, opacity" }}
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
                text={t('title')}
                className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-600 dark:text-gray-400 mb-4 md:mb-6 ml-1"
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
                  {t('firstName')}
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-gray-500 inline-block"
                >
                  {t('middleName')}
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="inline-block"
                >
                  {t('lastName')}
                </motion.span>
              </h1>
            </motion.div>

            {/* quote */}
            <motion.div variants={itemVariants} className="max-w-lg ml-1">
              <motion.p
                className="text-neutral-600 dark:text-gray-400 transition-colors font-sans text-base md:text-lg leading-relaxed font-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
              >
                {t('description')}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 ml-1 z-10"
              variants={itemVariants}
            >
              <button
                onClick={openModal}
                className="px-8 py-3 cursor-pointer bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-md shadow-neutral-950/20 dark:shadow-neutral-50/10"
              >
                {t('cta1')}
              </button>
              <a
                href="#projects"
                className="px-8 py-3 flex items-center bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-full font-medium text-sm hover:border-neutral-900 dark:hover:border-white transition-colors duration-300 text-neutral-900 dark:text-neutral-100"
              >
                {t('cta2')}
              </a>
            </motion.div>
          </motion.div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-[400px] md:h-[500px] w-full order-1 md:order-2 flex items-center"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          >
            <Image
              src="/hero.webp"
              alt={t('imageAlt')}
              width={432}
              height={578}
              className="object-contain object-center grayscale-20 hover:grayscale-0 transition-all duration-700 ease-in-out mx-auto"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Render Modal di sini */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
