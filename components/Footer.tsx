"use client";

import { ArrowUp } from "lucide-react";
import { useT } from "./LanguageProvider";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();
  const copyright = t.footer.copyright.replace("{year}", String(year));

  return (
    <footer role="contentinfo" className="border-t border-ink-800 py-10">
      <div className="section-container flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-ink-400">
        <p>{copyright}</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/vidaleluca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hey@vidalelu.ca"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            {t.footer.backToTop} <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
