"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useT } from "./LanguageProvider";
import { useConsent } from "./ConsentProvider";

export default function ConsentBanner() {
  const { t } = useT();
  const { bannerOpen, setAnalytics, dismissBanner } = useConsent();

  return (
    <AnimatePresence>
      {bannerOpen && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-title"
          aria-describedby="consent-body"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 z-[60] max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl border border-ink-700 bg-ink-900/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
            <button
              onClick={dismissBanner}
              aria-label={t.consent.dismiss}
              className="absolute top-3 right-3 p-1.5 text-ink-400 hover:text-ink-100 transition-colors rounded-full"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Cookie size={18} className="text-accent" />
              </div>

              <div className="flex-1 min-w-0">
                <h2
                  id="consent-title"
                  className="font-display text-base sm:text-lg font-semibold leading-tight mb-1.5 pr-8"
                >
                  {t.consent.title}
                </h2>
                <p
                  id="consent-body"
                  className="text-sm text-ink-300 leading-relaxed"
                >
                  {t.consent.body}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setAnalytics(true)}
                    className="inline-flex items-center justify-center px-5 py-2 min-h-11 text-sm font-medium rounded-full bg-accent text-ink-950 hover:bg-accent-soft transition-colors"
                  >
                    {t.consent.accept}
                  </button>
                  <button
                    onClick={() => setAnalytics(false)}
                    className="inline-flex items-center justify-center px-5 py-2 min-h-11 text-sm font-medium rounded-full border border-ink-600 text-ink-100 hover:border-accent hover:text-accent transition-colors"
                  >
                    {t.consent.reject}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
