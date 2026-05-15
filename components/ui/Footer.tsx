"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full border-t bg-neutral-100 dark:bg-[#1a1a1a] border-neutral-200 dark:border-white/10 transition-colors py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-sans">
        <div className="flex items-center">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link
            href="/#about"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/#projects"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("projects")}
          </Link>
          <Link
            href="/#contact"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("contact")}
          </Link>
          <a
            href="https://github.com/Adibayuluthfiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/adibayuluthfiansyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("linkedin")}
          </a>
          <a
            href="https://instagram.com/adibayuluthfiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:underline transition-colors"
          >
            {t("instagram")}
          </a>
          <a
            href="mailto:adibayuluthfiansyah@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 hover:underline transition-colors"
          >
            {t("gmail")}
          </a>
        </div>
      </div>
    </footer>
  );
}
