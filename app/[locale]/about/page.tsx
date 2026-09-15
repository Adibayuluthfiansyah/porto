"use client";

import { useTranslations } from "next-intl";
import IdeShell from "@/components/ide/IdeShell";

export default function About() {
  const t = useTranslations("about");

  return (
    <IdeShell>
    <section id="about" className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
      <div className="max-w-5xl mx-auto bg-surface-container-lowest border border-outline-variant/40">
        <div className="px-space-md py-space-sm bg-surface-container flex items-center gap-space-xs">
          <span aria-hidden="true" className="material-symbols-outlined text-secondary text-[16px]">
            description
          </span>
          <span className="font-code-inline text-code-inline text-on-surface-variant">
            ~/about.md
          </span>
        </div>

        <div className="p-space-md md:p-space-xl grid grid-cols-1 md:grid-cols-12 gap-space-lg">
          <div className="md:col-span-4">
            <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
              {t("label")}
            </p>
            <h1 className="font-headline-lg text-headline-lg md:text-headline-xl md:leading-[44px] text-on-surface font-bold">
              {t("heading1")} {t("heading2")}
            </h1>
          </div>

          <div className="md:col-span-8">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
              {t.rich("bio1", {
                b: (chunks) => <span className="text-on-surface font-semibold">{chunks}</span>,
              })}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{t("bio2")}</p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-space-md">
              {t("bio3")}
            </p>
            <p className="font-body-md text-body-md text-secondary mt-space-md">{t("bio4")}</p>

            <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg mt-space-xl scroll-mt-20">
              <div>
                <h3 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-space-sm">
                  {t("techStack1Title")}
                </h3>
                <ul className="font-code-inline text-code-inline text-on-surface-variant flex flex-col gap-space-xs">
                  <li>TypeScript</li>
                  <li>Go (Golang) / Rust</li>
                  <li>MySQL / PostgreSQL</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-primary tracking-widest uppercase mb-space-sm">
                  {t("techStack2Title")}
                </h3>
                <ul className="font-code-inline text-code-inline text-on-surface-variant flex flex-col gap-space-xs">
                  <li>React / Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Docker</li>
                  <li>Git / DevOps / Linux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </IdeShell>
  );
}
