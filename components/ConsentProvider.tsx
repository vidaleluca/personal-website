"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Consent = { analytics: boolean; ts: number };

type Ctx = {
  consent: Consent | null;
  isLoaded: boolean;
  bannerOpen: boolean;
  setAnalytics: (v: boolean) => void;
  openBanner: () => void;
  dismissBanner: () => void;
};

const ConsentContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "vidalelu.ca:consent";

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        if (typeof parsed?.analytics === "boolean") {
          setConsent(parsed);
          setIsLoaded(true);
          return;
        }
      }
    } catch {}
    setIsLoaded(true);
    setBannerOpen(true);
  }, []);

  const persist = useCallback((next: Consent) => {
    setConsent(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const setAnalytics = useCallback(
    (v: boolean) => {
      persist({ analytics: v, ts: Date.now() });
      setBannerOpen(false);
    },
    [persist]
  );

  const openBanner = useCallback(() => setBannerOpen(true), []);
  const dismissBanner = useCallback(() => setBannerOpen(false), []);

  const value = useMemo<Ctx>(
    () => ({
      consent,
      isLoaded,
      bannerOpen,
      setAnalytics,
      openBanner,
      dismissBanner,
    }),
    [consent, isLoaded, bannerOpen, setAnalytics, openBanner, dismissBanner]
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
