"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";

function LocaleButton({
  code,
  active,
  onSelect,
  disabled,
}: {
  code: string;
  active: boolean;
  onSelect: (locale: string) => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={() => onSelect(code)}
      disabled={disabled}
      aria-pressed={active}
      className={`px-1 font-code-inline text-code-inline transition-colors cursor-pointer ${
        active ? "text-secondary font-bold" : "text-outline hover:text-on-surface"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="flex items-center" role="group" aria-label="Language">
      <LocaleButton code="en" active={locale === "en"} onSelect={onSelectChange} disabled={isPending} />
      <span aria-hidden="true" className="text-outline text-code-inline">|</span>
      <LocaleButton code="id" active={locale === "id"} onSelect={onSelectChange} disabled={isPending} />
    </div>
  );
}
