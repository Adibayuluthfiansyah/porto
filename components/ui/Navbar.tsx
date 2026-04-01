"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
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
    if (pathname !== "/") return;
    const sections = ["home", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
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

  const menuItems = [
    { key: "about", label: t("about") },
    { key: "projects", label: t("projects") },
    { key: "contact", label: t("contact") },
  ];
  const isResumeActive = pathname === "/resume";
  const isBlogActive = pathname.startsWith("/blog");

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 w-full z-[100] bg-transparent backdrop-blur-md text-neutral-900 dark:text-white px-4 py-4 md:px-8 md:py-4 transition-colors duration-500"
    >
      <nav className="w-full flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center">
          <Link
            href="/#home"
            className="text-2xl font-semibold font-sans tracking-widest uppercase"
          >
            {t("logo")}
          </Link>
        </div>

        {/* time */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-1 opacity-80 absolute left-1/2 -translate-x-1/2">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60">
            {t("location")}
          </span>
          {mounted && <span className="font-serif italic text-sm">{time}</span>}
        </div>

        {/* menu toggle */}
        <div className="flex justify-end items-center gap-6">
          <div className="hidden md:flex space-x-6 items-center">
            {/* scroll links */}
            {menuItems.map((item) => {
              const isActive = pathname === "/" && activeSection === item.key;

              return (
                <Link
                  key={item.key}
                  href={`/#${item.key}`}
                  className="group relative flex flex-col items-center h-6"
                >
                  <span
                    className={`block font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white"}`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full mt-1"
                    />
                  )}
                </Link>
              );
            })}

            {/* resume */}
            <Link
              href="/resume"
              className="group relative flex flex-col items-center h-6"
            >
              <span
                className={`block font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${isResumeActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white"}`}
              >
                {t("resume")}
              </span>
              {isResumeActive && (
                <motion.div
                  layoutId="activeDot"
                  className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full mt-1"
                />
              )}
            </Link>

            {/* blog */}
            <Link
              href="/blog"
              className="group relative flex flex-col items-center h-6"
            >
              <span
                className={`block font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${isBlogActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white"}`}
              >
                {t("blog")}
              </span>
              {isBlogActive && (
                <motion.div
                  layoutId="activeDot"
                  className="w-1 h-1 bg-neutral-900 dark:bg-white rounded-full mt-1"
                />
              )}
            </Link>
          </div>

          {/* language switcher */}
          <div className="flex flex-col justify-start items-center h-6">
            <LanguageSwitcher />
          </div>

          {/* theme toggle */}
          <div className="flex flex-col justify-start items-center h-6">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-4 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors focus:outline-none"
                aria-label={t("toggleDarkMode")}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            ) : (
              <div className="w-4 h-4"></div>
            )}
          </div>

          {/* mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed inset-0 w-full bg-neutral-50 dark:bg-[#0a0a0a] z-[110] flex flex-col justify-center items-center md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-4 p-2"
              aria-label={t("closeMenu")}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/#${item.key}`}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-4xl italic text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl italic text-black dark:text-white underline underline-offset-8 mt-4"
              >
                {t("resume")}
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl italic text-black dark:text-white underline underline-offset-8 mt-4"
              >
                {t("blog")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
