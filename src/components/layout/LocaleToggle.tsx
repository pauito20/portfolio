import { useLocale } from "@/i18n/useLocale";

export function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      aria-label={t("a11y.localeToggle")}
      className="flex h-9 min-w-9 items-center justify-center rounded-full border border-border px-3 text-xs font-medium tracking-wide text-ink-dim transition hover:border-glow hover:text-ink"
    >
      {locale === "es" ? "ES" : "EN"}
    </button>
  );
}
