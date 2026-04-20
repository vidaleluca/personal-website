"use client";

import { useEffect } from "react";
import { DEFAULT_LOCALE, LOCALES, Locale } from "@/lib/i18n";

const STORAGE_KEY = "vidalelu.ca:locale";

export default function RootPage() {
  useEffect(() => {
    let target: Locale = DEFAULT_LOCALE;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && LOCALES.includes(stored)) {
        target = stored;
      } else {
        const browser = (navigator.language || "it").slice(0, 2) as Locale;
        if (LOCALES.includes(browser)) target = browser;
      }
    } catch {}
    window.location.replace(`/${target}`);
  }, []);

  return (
    <main className="min-h-[100svh] flex items-center justify-center">
      <span className="sr-only">Redirecting…</span>
      <span
        aria-hidden
        className="w-3 h-3 rounded-full bg-accent animate-pulse"
      />
    </main>
  );
}
