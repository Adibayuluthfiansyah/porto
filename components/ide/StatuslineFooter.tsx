"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function StatuslineFooter() {
  const t = useTranslations("ide.status");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 lg:left-[34rem] right-0 h-6 bg-surface-container z-30 flex items-center justify-between font-code-inline text-code-inline">
      <div className="flex items-center h-full">
        <div className="h-full px-space-md bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center tracking-wider">
          {t("mode")}
        </div>
        <div className="h-full px-space-sm hidden sm:flex items-center gap-space-xs text-on-surface-variant">
          <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
            fork_right
          </span>
          <span>{t("branch")}</span>
        </div>
        <div className="h-full px-space-sm flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="h-full px-space-sm hidden md:flex items-center font-label-md text-label-md text-on-surface-variant">
          {t("encoding")}
        </div>
        <div className="h-full px-space-sm hidden md:flex items-center font-label-md text-label-md text-primary">
          {t("filetype")}
        </div>
        <div className="h-full px-space-md bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-space-xs">
          <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
            schedule
          </span>
          <span>{time}</span>
        </div>
      </div>
    </footer>
  );
}
