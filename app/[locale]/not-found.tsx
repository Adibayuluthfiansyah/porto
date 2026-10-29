import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import IdeShell from "@/components/ide/IdeShell";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <IdeShell>
      <section className="px-space-md md:px-space-xl py-space-md md:py-space-lg">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest border border-outline-variant/40">
          <div className="px-space-md py-space-sm bg-surface-container flex items-center gap-space-xs">
            <span aria-hidden="true" className="material-symbols-outlined text-error text-[16px]">
              error
            </span>
            <span className="font-code-inline text-code-inline text-on-surface-variant">
              ~/404.md
            </span>
          </div>

          <div className="p-space-md md:p-space-xl flex flex-col gap-space-md">
            <p className="font-label-lg text-label-lg text-primary tracking-wider uppercase">
              {t("label")}
            </p>
            <h1 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface font-bold">
              {t("title")}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-prose">
              {t("description")}
            </p>
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-secondary transition-colors min-h-[44px]"
            >
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              {t("backHome")}
            </Link>
          </div>
        </div>
      </section>
    </IdeShell>
  );
}
