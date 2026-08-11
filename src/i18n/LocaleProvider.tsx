import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { L10n, Locale } from "@/types/content";
import { DEFAULT_LOCALE, STORAGE_KEY, isLocale } from "./locales";
import { es } from "./es";
import { en } from "./en";
import type { DictPath } from "./dictionary";

const DICTS = { es, en } satisfies Record<Locale, unknown>;

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  if (isLocale(fromUrl)) return fromUrl;
  const browser = window.navigator.languages ?? [window.navigator.language];
  const match = browser.find((l) => l.toLowerCase().startsWith("en"));
  return match ? "en" : DEFAULT_LOCALE;
}

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Traduce una clave del diccionario de UI, p.ej. t('nav.about') */
  t: (path: DictPath) => string;
  /** Resuelve un campo de contenido localizado, p.ej. tl(project.title) */
  tl: (value: L10n) => string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = DICTS[locale];
    return {
      locale,
      setLocale,
      t: (path) => (getByPath(dict, path) as string) ?? path,
      tl: (value) => value[locale] ?? value[DEFAULT_LOCALE],
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
