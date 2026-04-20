"use client";

import { useT } from "./LanguageProvider";
import { Locale } from "@/lib/i18n";

const OPTIONS: { l: Locale; label: string }[] = [
  { l: "it", label: "IT" },
  { l: "en", label: "EN" },
];

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale } = useT();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center gap-0.5 rounded-full border border-ink-700 bg-ink-900/60 backdrop-blur p-1 text-xs font-mono uppercase tracking-widest ${className}`}
    >
      {OPTIONS.map((o) => {
        const active = o.l === locale;
        return (
          <button
            key={o.l}
            onClick={() => setLocale(o.l)}
            aria-pressed={active}
            className={`relative z-10 px-3 py-1.5 min-w-[36px] rounded-full transition-colors ${
              active
                ? "bg-accent text-ink-950"
                : "text-ink-300 hover:text-ink-100"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
