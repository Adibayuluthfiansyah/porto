"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function BufferlineHeader({
  onMenu,
  menuBtnRef,
}: {
  onMenu: () => void;
  menuBtnRef?: React.Ref<HTMLButtonElement>;
}) {
  const t = useTranslations("ide.tabs");
  const th = useTranslations("ide.header");
  const pathname = usePathname();

  const tabs = [
    { id: "about", n: "[1]", label: t("about"), href: "/about" as const },
    { id: "projects", n: "[2]", label: t("projects"), href: "/projects" as const },
    { id: "home", n: "[3]", label: t("home"), href: "/" as const },
  ];
  const active = tabs.find((tab) => tab.href === pathname)?.id ?? "";

  return (
    <header className="fixed top-0 left-0 lg:left-[34rem] right-0 h-10 bg-surface-container-lowest z-30 flex items-center justify-between">
      <div className="flex items-center h-full overflow-x-auto">
        <button
          ref={menuBtnRef}
          onClick={onMenu}
          aria-label={th("openMenu")}
          className="lg:hidden shrink-0 w-10 h-10 flex items-center justify-center text-outline hover:text-on-surface"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
            menu
          </span>
        </button>
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center h-full px-space-md font-code-inline text-code-inline whitespace-nowrap transition-colors min-h-[44px] lg:min-h-0 ${
                isActive
                  ? "bg-surface-container-low text-secondary"
                  : "text-outline hover:text-on-surface"
              }`}
            >
              <span className={`font-label-md text-label-md mr-space-xs ${isActive ? "text-primary-container" : "text-outline"}`}>
                {tab.n}
              </span>
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex items-center gap-space-md px-space-md font-code-inline text-code-inline shrink-0">
        <span className="flex items-center gap-space-xs text-outline">
          <span aria-hidden="true" className="material-symbols-outlined text-[15px]">
            folder
          </span>
          <span>{th("path")}</span>
        </span>
        <span className="flex items-center gap-space-xs text-outline">
          <span aria-hidden="true" className="material-symbols-outlined text-[15px]">
            fork_right
          </span>
          <span>{th("branch")}</span>
        </span>
        <Image
          src="/hero.webp"
          alt={th("avatarAlt")}
          width={28}
          height={28}
          className="w-7 h-7 object-cover grayscale"
        />
      </div>
    </header>
  );
}
