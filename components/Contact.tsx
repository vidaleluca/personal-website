"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Linkedin } from "lucide-react";
import ProtectedPhone from "./ProtectedPhone";
import { useT } from "./LanguageProvider";

export default function Contact() {
  const { t } = useT();

  return (
    <section id="contact" className="relative section-pad overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent/5 blur-[120px]"
      />
      <div className="section-container relative">
        <div className="max-w-4xl">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 font-display font-semibold text-display-lg text-balance"
          >
            {t.contact.headingLead}{" "}
            <span className="italic font-light text-ink-400">
              {t.contact.headingMid}
            </span>{" "}
            {t.contact.headingTail}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed"
          >
            {t.contact.description}
          </motion.p>
        </div>

        <motion.a
          href="mailto:hey@vidalelu.ca"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group mt-16 flex items-end justify-between gap-6 border-b border-ink-700 hover:border-accent transition-colors pb-6"
        >
          <span className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight break-all">
            hey@vidalelu.ca
          </span>
          <ArrowUpRight
            size={40}
            className="shrink-0 text-ink-400 group-hover:text-accent group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500"
          />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <div>
            <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">
              {t.contact.email}
            </p>
            <a
              href="mailto:hey@vidalelu.ca"
              className="font-display text-xl md:text-2xl font-semibold hover:text-accent transition-colors link-underline"
            >
              <span className="inline-flex items-center gap-3">
                <Mail size={18} /> hey@vidalelu.ca
              </span>
            </a>
          </div>

          <ProtectedPhone />

          <div>
            <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">
              {t.contact.location}
            </p>
            <p className="font-display text-xl md:text-2xl font-semibold">
              <span className="inline-flex items-center gap-3">
                <MapPin size={18} /> {t.contact.locationValue}
              </span>
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">
              {t.contact.social}
            </p>
            <a
              href="https://www.linkedin.com/in/vidaleluca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl md:text-2xl font-semibold hover:text-accent transition-colors link-underline"
            >
              <span className="inline-flex items-center gap-3">
                <Linkedin size={18} /> LinkedIn
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
