"use client";

import { useTranslations } from "next-intl";
import IdeShell from "@/components/ide/IdeShell";

export default function Contact() {
  const t = useTranslations("contact");

  const contactLinks = [
    {
      label: t("emailLabel"),
      value: t("emailValue"),
      href: "mailto:adibayu@adibayuluthfiansyah.dev",
    },
    {
      label: t("whatsappLabel"),
      value: t("whatsappValue"),
      href: "https://wa.me/62895704119180",
    },
    {
      label: t("instagramLabel"),
      value: t("instagramValue"),
      href: "https://instagram.com/adibayuluthfiansyah",
    },
  ];

  return (
    <IdeShell>
    <section id="contact" className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
      <div className="max-w-5xl mx-auto bg-surface-container-lowest border border-outline-variant/40">
        <div className="px-space-md py-space-sm bg-surface-container flex items-center gap-space-xs">
          <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary-container">
            alternate_email
          </span>
          <span className="font-code-inline text-code-inline text-on-surface-variant">
            ~/contact.tsx
          </span>
        </div>

        <div className="p-space-md md:p-space-xl">
          <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase mb-space-xs">
            {t("label")}
          </p>
          <h1 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold mb-space-lg">
            {t("heading1")} {t("heading2")}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-space-xs border border-outline-variant/40 bg-surface-container-low p-space-md min-h-[44px] hover:border-primary-container transition-colors"
              >
                <span className="flex items-center justify-between font-label-md text-label-md text-outline group-hover:text-secondary transition-colors">
                  {link.label}
                  {/* External-link cue: the single arrow in this pane, marks off-site targets. */}
                  <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                    arrow_outward
                  </span>
                </span>
                <span className="font-code-inline text-code-inline text-on-surface break-all">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
    </IdeShell>
  );
}
