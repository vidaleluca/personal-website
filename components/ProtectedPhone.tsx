"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { useT } from "./LanguageProvider";

const BASE = 40;
const OFFSETS = [11, 17, 11, 11, 11, 11, 10, 15, 15, 8, 9, 17];
const PREFIX = "+";
const GROUPS = [2, 3, 7];

function assemble(): string {
  const digits = OFFSETS.map((o) => String.fromCharCode(BASE + o));
  const parts: string[] = [];
  let i = 0;
  for (const g of GROUPS) {
    parts.push(digits.slice(i, i + g).join(""));
    i += g;
  }
  return PREFIX + parts.join(" ");
}

export default function ProtectedPhone() {
  const { t } = useT();
  const [revealed, setRevealed] = useState<string | null>(null);

  const onReveal = () => {
    if (revealed) return;
    setRevealed(assemble());
  };

  const onCall = () => {
    const n = revealed ?? assemble();
    setRevealed(n);
    if (typeof window !== "undefined") {
      window.location.href = `tel:${n.replace(/\s/g, "")}`;
    }
  };

  return (
    <div>
      <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">
        {t.contact.phone}
      </p>
      {revealed ? (
        <button
          onClick={onCall}
          aria-label="Call phone number"
          className="font-display text-xl md:text-2xl font-semibold hover:text-accent transition-colors"
        >
          <span className="inline-flex items-center gap-3">
            <Phone size={18} />
            <span>{revealed}</span>
          </span>
        </button>
      ) : (
        <button
          onClick={onReveal}
          onFocus={onReveal}
          onMouseEnter={onReveal}
          aria-label="Reveal phone number"
          className="font-display text-xl md:text-2xl font-semibold text-ink-200 hover:text-accent transition-colors"
        >
          <span className="inline-flex items-center gap-3">
            <Phone size={18} />
            <span className="tracking-wider">
              {t.contact.phoneClickToReveal}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
