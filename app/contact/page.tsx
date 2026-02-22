"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const contactLinks = [
    {
      label: "Email",
      value: "adibayuluthfiansyah@gmail.com",
      href: "mailto:adibayuluthfiansyah@gmail.com",
    },
    {
      label: "WhatsApp",
      value: "+62 895 7041 xxxx",
      href: "https://wa.me/0895704119180",
    },
    {
      label: "Instagram",
      value: "@adibayuluthfiansyah",
      href: "https://instagram.com/adibayuluthfiansyah",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center">
        {/* heaader */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-gray-500 mb-6 ml-1">
            Contact
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif italic text-white leading-[0.85] tracking-tight">
            {`Let's build `}
            <br />
            <span className="text-gray-500">something great.</span>
          </h3>
        </motion.div>

        {/* contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.8 },
                },
              }}
              className="group flex flex-col gap-2 border-t border-white/10 pt-6 hover:border-white transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-300 transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <span className="text-xl md:text-2xl font-serif italic text-white/80 group-hover:text-white transition-colors">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
