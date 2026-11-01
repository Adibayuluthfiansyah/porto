"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

function LocaleButton({
  code,
  active,
  onSelect,
  disabled,
  label,
}: {
  code: string;
  active: boolean;
  onSelect: (locale: string) => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      onClick={() => onSelect(code)}
      disabled={disabled}
      aria-pressed={active}
      aria-label={label}
      className={`inline-flex h-11 min-w-[44px] cursor-pointer items-center justify-center px-1 font-code-inline text-code-inline transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary lg:h-6 ${
        active ? "text-secondary font-bold" : "text-outline hover:text-on-surface"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("ide.header");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center" role="group" aria-label={t("languageLabel")}>
      <LocaleButton
        code="en"
        active={locale === "en"}
        onSelect={onSelectChange}
        disabled={isPending}
        label={t("switchToEnglish")}
      />
      <span aria-hidden="true" className="text-outline text-code-inline">|</span>
      <LocaleButton
        code="id"
        active={locale === "id"}
        onSelect={onSelectChange}
        disabled={isPending}
        label={t("switchToIndonesian")}
      />
    </div>
  );
}
