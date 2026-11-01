"use client";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import BufferlineHeader from "./BufferlineHeader";
import StatuslineFooter from "./StatuslineFooter";

const ExplorerSidebar = lazy(() => import("./ExplorerSidebar"));
const FileTreePanel = lazy(() => import("./FileTreePanel"));

export default function IdeShell({ children }: { children: React.ReactNode }) {
  const t = useTranslations("ide.header");
  const [drawer, setDrawer] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!drawer) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const returnFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : trigger;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusable = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>(focusableSelector) ?? []).filter(
        (element) => element.getClientRects().length > 0,
      );

    const frame = requestAnimationFrame(() => closeRef.current?.focus());

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setDrawer(false);
        return;
      }
      if (event.key !== "Tab") return;

      const items = getFocusable();
      if (!items.length) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      (returnFocus ?? trigger)?.focus();
    };
  }, [drawer]);

  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[200] focus:bg-primary-container focus:text-on-primary-container focus:px-4 focus:py-2"
      >
        {t("skipToContent")}
      </a>
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-surface-container-lowest z-40 flex-col pt-11 pb-8">
        <div className="flex-1 min-h-0 overflow-y-auto">
          <Suspense fallback={null}>
            <ExplorerSidebar />
          </Suspense>
        </div>
      </aside>
      <div className="hidden lg:block fixed left-64 top-11 bottom-6 w-72 bg-surface-container-lowest z-30 border-r border-outline-variant/40">
        <Suspense fallback={null}>
          <FileTreePanel />
        </Suspense>
      </div>
      <div className="lg:pl-[34rem] flex flex-col min-h-screen">
        <BufferlineHeader
          onMenu={() => setDrawer(true)}
          menuBtnRef={triggerRef}
          menuExpanded={drawer}
          menuControls="mobile-drawer"
        />
        <main id="main" className="w-full flex-1 pt-11 pb-14 lg:pb-8">
          <span id="top" className="sr-only">
            top
          </span>
          {children}
        </main>
        <StatuslineFooter />
      </div>

      {drawer && (
        <div
          ref={panelRef}
          id="mobile-drawer"
          className="fixed inset-0 z-[100] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t("menuLabel")}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-surface/80" onClick={() => setDrawer(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 max-w-[85vw] bg-surface-container-lowest pt-11 pb-8 overflow-y-auto">
            <button
              ref={closeRef}
              onClick={() => setDrawer(false)}
              aria-label={t("closeMenu")}
              className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-outline hover:text-on-surface"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
                close
              </span>
            </button>
            <Suspense fallback={null}>
              <ExplorerSidebar onNavigate={() => setDrawer(false)} />
            </Suspense>
            <div className="mx-space-md h-px bg-outline-variant/40" aria-hidden="true" />
            <Suspense fallback={null}>
              <FileTreePanel onNavigate={() => setDrawer(false)} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
