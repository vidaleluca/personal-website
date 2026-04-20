"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useT } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";

export default function Navigation() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        role="banner"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink-950/70 backdrop-blur-xl border-b border-ink-800"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="section-container flex items-center justify-between h-16 lg:h-20"
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
            <span className="font-display font-semibold tracking-tight">
              Luca Vidale
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-300 hover:text-accent transition-colors link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <a href="#contact" className="btn-primary text-sm py-2 px-4">
              {t.nav.cta}
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2.5 -mr-2 text-ink-100 min-w-11 min-h-11 flex items-center justify-center"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink-950/95 backdrop-blur-2xl pt-24"
          >
            <ul className="flex flex-col gap-2 section-container">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="border-b border-ink-800"
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 text-2xl sm:text-3xl font-display font-medium tracking-tight hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.06 }}
                className="pt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  {t.nav.cta}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
