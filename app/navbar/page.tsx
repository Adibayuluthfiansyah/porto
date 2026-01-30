"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: { height: 0, opacity: 0 },
    open: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-50 bg-transparent mix-blend-difference text-white px-4 py-6 md:px-8 md:py-8"
    >
      <nav className="w-full grid grid-cols-2 md:grid-cols-3 items-center">
        {/* LOGO */}
        <div className="flex shrink-0 items-center tracking-widest justify-start">
          <Link
            href="/"
            className="text-2xl font-semibold font-sans tracking-widest uppercase"
          >
            ADIBAYU
          </Link>
        </div>

        {/* TIME & LOCATION */}
        <div className="hidden md:flex flex-col items-center justify-center gap-1 text-center opacity-80">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60">
            Pontianak, ID
          </span>
          <span className="font-serif italic text-sm">{time}</span>
        </div>

        {/* MENU */}
        <div className="flex justify-end items-center">
          <div className="hidden md:flex space-x-8 items-center">
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="group relative overflow-hidden h-5"
              >
                <span className="block font-sans text-xs font-semibold uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-300">
                  {item}
                </span>
                <span className="absolute top-full left-0 block font-sans text-xs font-semibold uppercase tracking-widest group-hover:-translate-y-full transition-transform duration-300">
                  {item}
                </span>
              </Link>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            style={{ mixBlendMode: "normal" }}
            className="fixed inset-0 top-0 left-0 w-full bg-[#0a0a0a] text-white z-60 flex flex-col justify-center items-center md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 p-2"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {["ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-4xl italic hover:text-gray-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50">
              <span className="text-[10px] uppercase tracking-widest">
                Pontianak, ID
              </span>
              <span className="text-xs">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
