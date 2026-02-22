"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
      className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-4 py-4 md:px-8 md:py-4"
    >
      <nav className="w-full grid grid-cols-2 md:grid-cols-3 items-center">
        {/* logo */}
        <div className="flex shrink-0 items-center tracking-widest justify-start">
          <Link
            href="/"
            className="text-2xl font-semibold font-sans tracking-widest uppercase"
          >
            ADIBAYU
          </Link>
        </div>

        {/* time and location */}
        <div className="hidden md:flex flex-col items-center justify-center gap-1 text-center opacity-80">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60">
            Pontianak, ID
          </span>
          <span className="font-serif italic text-sm">{time}</span>
        </div>

        {/* menu */}
        <div className="flex justify-end items-center">
          <div className="hidden md:flex space-x-8 items-center">
            {["ABOUT", "PROJECTS", "CONTACT"].map((item) => {
              const targetId = item.toLowerCase();
              const isActive = activeSection === targetId;

              return (
                <Link
                  key={item}
                  href={`#${targetId}`}
                  className="group relative overflow-hidden h-6 flex flex-col items-center"
                >
                  <span
                    className={`block font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${isActive ? "text-white" : "text-gray-500 group-hover:text-white"}`}
                  >
                    {item}
                  </span>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="activeDot"
                        className="w-1 h-2 bg-white rounded-full mt-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>

          {/* mobile hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 focus:outline-none transition-colors"
            >
              <span className="sr-only">Menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            style={{ mixBlendMode: "normal" }}
            className="fixed inset-0 top-0 left-0 w-full bg-[#0a0a0a] text-white z-[60] flex flex-col justify-center items-center md:hidden"
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
                  href={`#${item.toLowerCase()}`}
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
