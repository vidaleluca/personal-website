"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { DEFAULT_LOCALE, Locale, LOCALES, dict } from "@/lib/i18n";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof dict)[Locale];
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "vidalelu.ca:locale";

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const [locale, setLocaleState] = useState<Locale>(
    initialLocale ?? DEFAULT_LOCALE
  );
  const firstRender = useRef(true);

  useEffect(() => {
    if (initialLocale && initialLocale !== locale) {
      setLocaleState(initialLocale);
    }
  }, [initialLocale, locale]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
    }
  }, [locale]);

  const setLocale = (next: Locale) => {
    if (!LOCALES.includes(next) || next === locale) return;
    setLocaleState(next);
    const replaced = pathname.replace(/^\/(it|en)(?=\/|$)/, `/${next}`);
    const target = replaced.startsWith(`/${next}`) ? replaced : `/${next}`;
    router.push(target);
  };

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dict[locale] }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locale, pathname]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
