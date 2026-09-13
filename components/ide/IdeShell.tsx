"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ExplorerSidebar from "./ExplorerSidebar";
import FileTreePanel from "./FileTreePanel";
import BufferlineHeader from "./BufferlineHeader";
import StatuslineFooter from "./StatuslineFooter";

export default function IdeShell({ children }: { children: React.ReactNode }) {
  const t = useTranslations("ide.header");
  const [drawer, setDrawer] = useState(false);
  const menuBtn = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!drawer) {
      if (wasOpen.current) menuBtn.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawer(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[200] focus:bg-primary-container focus:text-on-primary-container focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-surface-container-lowest z-40 flex-col pt-10 pb-8">
        <div className="flex-1 min-h-0 overflow-y-auto">
          <ExplorerSidebar />
        </div>
      </aside>
      <div className="hidden lg:block fixed left-64 top-10 bottom-6 w-72 bg-surface-container-lowest z-30 border-r border-outline-variant/40">
        <FileTreePanel />
      </div>
      <div className="lg:pl-[34rem] flex flex-col min-h-screen">
        <BufferlineHeader onMenu={() => setDrawer(true)} menuBtnRef={menuBtn} />
        <main id="main" className="w-full flex-1 pt-10 pb-8">
          <span id="top" className="sr-only">
            top
          </span>
          {children}
        </main>
        <StatuslineFooter />
      </div>

      {drawer && (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label={t("openMenu")}>
          <div aria-hidden="true" className="absolute inset-0 bg-surface/80" onClick={() => setDrawer(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 max-w-[85vw] bg-surface-container-lowest pt-10 pb-8 overflow-y-auto">            <button
              ref={menuBtn}
              onClick={() => setDrawer(false)}
              aria-label={t("closeMenu")}
              className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-outline hover:text-on-surface"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <ExplorerSidebar onNavigate={() => setDrawer(false)} />
            <div className="mx-space-md h-px bg-outline-variant/40" aria-hidden="true" />
            <FileTreePanel onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
