"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import FileIcon from "./FileIcon";

const items = [
  { href: "/" as const, label: "dashboard", icon: "terminal" },
  { href: "/about" as const, label: "about", icon: "description" },
  { href: "/projects" as const, label: "projects", icon: "folder" },
  { href: "/blog" as const, label: "writing", icon: "markdown" },
  { href: "/resume" as const, label: "resume", icon: "picture_as_pdf" },
];

export default function ExplorerNav({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("ide.explorer");
  const pathname = usePathname();
  const labels: Record<string, string> = {
    dashboard: t("dashboard"),
    about: t("about"),
    projects: t("projects"),
    writing: t("writing"),
    resume: t("resume"),
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col">
        <div className="h-10 px-space-md flex items-center gap-space-xs">
          <span aria-hidden="true" className="material-symbols-outlined text-primary text-[18px]">
            folder_open
          </span>
          <span className="font-label-lg text-label-lg text-primary tracking-wider uppercase">
            {t("title")}
          </span>
        </div>
        <div className="px-space-md py-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md py-space-xs">
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              expand_more
            </span>
            <span>HOME</span>
          </div>
          <nav aria-label={t("title")} className="flex flex-col gap-space-xs pl-space-sm">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-space-xs px-space-sm py-space-xs min-h-[44px] font-code-inline text-code-inline transition-colors ${
                    isActive
                      ? "bg-surface-container text-primary font-bold"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                  }`}
                >
                  <FileIcon
                    filename={item.label === "projects" ? "projects/" : `${item.label}.md`}
                    icon={item.icon}
                  />
                  <span>{labels[item.label]}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="mt-auto px-space-md py-space-sm flex items-center justify-between">
        <span className="font-label-sm text-label-sm text-primary">{t("version")}</span>
        <Image
          src="/hero.webp"
          alt={useTranslations("ide.header")("avatarAlt")}
          width={32}
          height={32}
          className="w-8 h-8 object-cover grayscale"
        />
      </div>
    </div>
  );
}
