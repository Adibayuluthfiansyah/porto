"use client";

import { useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useVimKeys } from "./useVimKeys";

const ascii = `█████╗ ██████╗ ██╗██████╗  █████╗ ██╗   ██╗██╗   ██╗    ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗╚██╗ ██╔╝██║   ██║    ██╔══██╗██╔════╝██║   ██║
███████║██║  ██║██║██████╔╝███████║ ╚████╔╝ ██║   ██║    ██║  ██║█████╗  ██║   ██║
██╔══██║██║  ██║██║██╔══██╗██╔══██║  ╚██╔╝  ██║   ██║    ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║██████╔╝██║██████╔╝██║  ██║   ██║   ╚██████╔╝██╗ ██████╔╝███████╗ ╚████╔╝
╚═╝  ╚═╝╚═════╝ ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝ ╚═════╝ ╚══════╝  ╚═══╝`;

interface MenuItem {
  id: string;
  href: "/about" | "/projects" | "/resume" | "/contact" | "/blog" | "/about#skills";
  icon: string;
  tone: string;
}

const menuItems: MenuItem[] = [
  { id: "about", href: "/about", icon: "person_search", tone: "text-secondary" },
  { id: "projects", href: "/projects", icon: "deployed_code", tone: "text-primary" },
  { id: "experience", href: "/resume", icon: "schedule", tone: "text-tertiary" },
  { id: "skills", href: "/about#skills", icon: "bolt", tone: "text-secondary-fixed-dim" },
  { id: "contact", href: "/contact", icon: "alternate_email", tone: "text-primary-container" },
  { id: "resume", href: "/resume", icon: "draft", tone: "text-error" },
  { id: "writing", href: "/blog", icon: "menu_book", tone: "text-tertiary-fixed-dim" },
];

export default function DashboardHero() {
  const t = useTranslations("ide.menu");
  const th = useTranslations("ide.hero");
  const tn = useTranslations("hero");
  const ti = useTranslations("ide.hints");
  const [index, setIndex] = useState(0);
  const rowRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const focusRow = (i: number) => {
    const n = (i + menuItems.length) % menuItems.length;
    setIndex(n);
    rowRefs.current[n]?.focus();
  };

  useVimKeys((key) => {
    if (key === "j" || key === "arrowdown") focusRow(index + 1);
    else if (key === "k" || key === "arrowup") focusRow(index - 1);
    else {
      const i = menuItems.findIndex((m) => t(`${m.id}.key`) === key);
      if (i >= 0) {
        focusRow(i);
        rowRefs.current[i]?.click();
      }
    }
  });

  return (
    <div className="min-h-[calc(100vh-2.75rem-1.5rem)] w-full min-w-0 overflow-x-clip flex flex-col items-center justify-center px-space-md md:px-space-xl py-space-xl">
      <div className="w-full max-w-2xl min-w-0 flex flex-col items-center">
        <h1 className="sr-only">
          {tn("firstName")} {tn("middleName")} {tn("lastName")}
        </h1>
        <pre
          aria-label="ADIBAYU.DEV"
          className="block w-full max-w-full min-w-0 font-code-inline text-secondary font-bold text-center whitespace-pre select-none overflow-hidden mb-space-xs text-[clamp(5.5px,1.75vw,13px)] leading-[1.3]"
        >
          {ascii}
        </pre>

        <div className="flex items-center gap-space-xs mt-space-xs mb-space-lg flex-wrap justify-center text-center">
          <span className="px-space-xs py-0.5 bg-surface-container-high text-secondary font-label-md text-label-md font-semibold">
            {th("role")}
          </span>
          <span aria-hidden="true" className="text-outline">
            •
          </span>
          <span className="text-on-surface-variant font-body-sm text-body-sm">{th("stack")}</span>
          <span aria-hidden="true" className="text-outline">
            •
          </span>
          <span className="px-space-xs py-0.5 bg-surface-container-high text-tertiary font-label-md text-label-md">
            {th("location")}
          </span>
        </div>

        <nav
          aria-label="Dashboard"
          className="w-full flex flex-col gap-space-xs font-code-inline text-code-inline"
        >
          {menuItems.map((item, i) => (
            <Link
              key={item.id}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              href={item.href}
              onFocus={() => setIndex(i)}
              aria-current={index === i ? "true" : undefined}
              className={`w-full flex items-center justify-between px-space-md py-space-sm min-h-[44px] bg-surface-container hover:bg-surface-container-high transition-colors group text-left cursor-pointer ${
                index === i ? "outline outline-1 outline-primary-container" : ""
              }`}
            >
              <span className="flex items-center gap-space-sm">
                <span
                  aria-hidden="true"
                  className={`material-symbols-outlined text-[18px] ${item.tone}`}
                >
                  {item.icon}
                </span>
                <span>
                  <span className="font-bold text-on-surface group-hover:text-primary">
                    {t(`${item.id}.label`)}
                  </span>
                  <span className="text-outline ml-space-xs hidden sm:inline">
                    - {t(`${item.id}.desc`)}
                  </span>
                </span>
              </span>
              <span
                aria-hidden="true"
                className="px-2 py-0.5 bg-surface text-secondary font-label-md text-label-md"
              >
                [ {t(`${item.id}.key`)} ]
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-space-lg w-full flex flex-col items-center gap-space-xs">
          <p className="font-label-md text-label-md text-on-surface-variant text-center">
            {th("telemetry")}
          </p>
          <div className="flex items-center gap-space-sm text-outline font-label-sm text-label-sm flex-wrap justify-center">
            <span className="px-1.5 py-0.5 bg-surface font-code-inline">{ti("select")}</span>
            <span className="px-1.5 py-0.5 bg-surface font-code-inline">{ti("navigate")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
