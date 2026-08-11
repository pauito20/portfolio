import type { Locale } from "@/types/content";

export const LOCALES: readonly Locale[] = ["es", "en"] as const;
export const DEFAULT_LOCALE: Locale = "es";
export const STORAGE_KEY = "pgl.locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}
