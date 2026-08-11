import { useLocale } from "@/i18n/useLocale";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-glow focus:px-4 focus:py-2 focus:text-bg focus:font-medium"
    >
      {t("nav.skipToContent")}
    </a>
  );
}
