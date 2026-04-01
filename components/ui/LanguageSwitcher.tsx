"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center gap-2 h-4">
      <button
        onClick={() => onSelectChange("en")}
        disabled={isPending}
        className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
          locale === "en"
            ? "text-neutral-900 dark:text-white"
            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-neutral-300 dark:text-neutral-700 text-xs">|</span>
      <button
        onClick={() => onSelectChange("id")}
        disabled={isPending}
        className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
          locale === "id"
            ? "text-neutral-900 dark:text-white"
            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
        }`}
      >
        ID
      </button>
    </div>
  );
}
