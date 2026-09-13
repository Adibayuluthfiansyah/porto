"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import FileIcon from "./FileIcon";

const projectFiles = [
  { name: "ecommerce-platform.ts", href: "/projects" as const },
  { name: "dinsos-management.tsx", href: "/projects" as const },
  { name: "invoicing-saas.go", href: "/projects" as const },
  { name: "physicshub-contrib.md", href: "/projects" as const },
];

export default function FileTreePanel({ onNavigate }: { onNavigate?: () => void }) {
  const t = useTranslations("ide.tree");
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const q = query.trim().toLowerCase();
  const match = (name: string) => !q || name.toLowerCase().includes(q);

  const toggle = (dir: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(dir)) next.delete(dir);
      else next.add(dir);
      return next;
    });

  const row =
    "flex items-center gap-space-xs px-space-md py-1 min-h-[44px] lg:min-h-0 font-code-inline text-code-inline transition-colors";
  const leaf = `${row} pl-12 pr-space-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface`;

  const projectsVisible = projectFiles.filter((f) => match(f.name));
  const showProjectsDir = match("projects/") || projectsVisible.length > 0;
  const showBlog = match("blog/") || match("index");
  const showAbout = match("about.md");
  const showExp = match("experience.json");
  const showSkills = match("skills.ts");
  const showContact = match("contact.tsx");
  const showResume = match("resume.pdf");
  const empty =
    !showProjectsDir &&
    !showBlog &&
    !showAbout &&
    !showExp &&
    !showSkills &&
    !showContact &&
    !showResume;

  const dirBtn = (dir: string, label: string, open: boolean) => (
    <button
      onClick={() => toggle(dir)}
      aria-expanded={open}
      className={`${row} pl-8 pr-space-md w-full text-left text-on-surface hover:bg-surface-container-high cursor-pointer`}
    >
      <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-primary">
        {open ? "expand_more" : "chevron_right"}
      </span>
      <FileIcon filename="dir/" open={open} icon="folder" />
      <span className="text-secondary">{label}</span>
    </button>
  );

  const aboutActive = pathname === "/about";

  return (
    <div className="bg-surface-container-lowest flex flex-col select-none h-full overflow-y-auto">
      <div className="px-space-md py-space-sm bg-surface-container flex items-center justify-between shrink-0">
        <div className="flex items-center gap-space-xs">
          <span aria-hidden="true" className="material-symbols-outlined text-secondary text-[16px]">
            account_tree
          </span>
          <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
            {t("title")}
          </span>
        </div>
        <button
          onClick={() => setCollapsed(new Set(collapsed.size > 0 ? [] : ["projects", "blog"]))}
          aria-label={collapsed.size > 0 ? t("expandAll") : t("collapseAll")}
          title={collapsed.size > 0 ? t("expandAll") : t("collapseAll")}
          className="min-w-[44px] min-h-[44px] lg:min-w-0 lg:min-h-0 lg:w-6 lg:h-6 flex items-center justify-center text-outline hover:text-on-surface transition-colors"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            {collapsed.size > 0 ? "unfold_more" : "unfold_less"}
          </span>
        </button>
      </div>

      <div className="p-space-xs shrink-0">
        <div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface">
          <span aria-hidden="true" className="material-symbols-outlined text-primary text-[14px]">
            search
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("filterPlaceholder")}
            aria-label={t("filterPlaceholder")}
            type="text"
            className="w-full bg-transparent font-code-inline text-code-inline text-on-surface placeholder:text-outline focus:outline-none"
          />
          <span
            aria-hidden="true"
            className="font-label-sm text-label-sm text-outline px-1 bg-surface-variant"
          >
            /
          </span>
        </div>
      </div>

      <div className="flex flex-col py-space-xs">
        <div className={`${row} px-space-md text-primary`}>
          <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-secondary">
            expand_more
          </span>
          <FileIcon filename="root/" open icon="folder_open" />
          <span className="font-bold">portfolio-v4</span>
          <span className="font-label-sm text-label-sm text-outline ml-auto">{t("git")}</span>
        </div>

        {showProjectsDir && (
          <>
            {dirBtn("projects", t("projects"), !collapsed.has("projects"))}
            {!collapsed.has("projects") &&
              projectsVisible.map((f) => (
                <Link key={f.name} href={f.href} onClick={onNavigate} className={leaf}>
                  <FileIcon filename={f.name} />
                  <span>{f.name}</span>
                </Link>
              ))}
          </>
        )}

        {showBlog && (
          <>
            {dirBtn("blog", t("blog"), !collapsed.has("blog"))}
            {!collapsed.has("blog") && (
              <Link href="/blog" onClick={onNavigate} className={leaf}>
                <FileIcon filename="index.md" />
                <span>{t("blogIndex")}</span>
              </Link>
            )}
          </>
        )}

        {showAbout && (
          <Link
            href="/about"
            onClick={onNavigate}
            aria-current={aboutActive ? "page" : undefined}
            className={`${row} pl-8 pr-space-md ${
              aboutActive
                ? "bg-surface-container text-primary font-bold"
                : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
            }`}
          >
            <FileIcon filename="about.md" />
            <span className={aboutActive ? "text-primary-fixed" : undefined}>{t("about")}</span>
            {aboutActive && (
              <span className="font-label-sm text-label-sm text-primary ml-auto">
                {t("active")}
              </span>
            )}
          </Link>
        )}
        {showExp && (
          <Link href="/resume" onClick={onNavigate} className={`${leaf} pl-8`}>
            <FileIcon filename="experience.json" />
            <span>{t("experience")}</span>
          </Link>
        )}
        {showSkills && (
          <Link href="/about#skills" onClick={onNavigate} className={`${leaf} pl-8`}>
            <FileIcon filename="skills.ts" />
            <span>{t("skills")}</span>
          </Link>
        )}
        {showContact && (
          <Link href="/contact" onClick={onNavigate} className={`${leaf} pl-8`}>
            <FileIcon filename="contact.tsx" />
            <span>{t("contact")}</span>
          </Link>
        )}
        {showResume && (
          <Link href="/resume" onClick={onNavigate} className={`${leaf} pl-8`}>
            <FileIcon filename="resume.pdf" />
            <span>{t("resume")}</span>
          </Link>
        )}
        {empty && (
          <p role="status" className={`${row} pl-8 text-outline`}>
            {t("noMatch")}
          </p>
        )}
      </div>

      <div className="mt-auto p-space-sm bg-surface-container-high m-space-xs flex flex-col gap-1 shrink-0">
        <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span>{t("statusTitle")}</span>
          <span className="text-secondary font-bold">{t("statusOk")}</span>
        </div>
        <div className="flex items-center justify-between font-label-sm text-label-sm text-outline pt-1">
          <span>{t("stackMeta")}</span>
          <span>{t("i18nMeta")}</span>
        </div>
      </div>
    </div>
  );
}
