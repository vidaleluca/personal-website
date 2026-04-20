"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useT } from "./LanguageProvider";

export default function About() {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const items = [
    t.about.focus,
    t.about.languages,
    t.about.highlights,
    t.about.current,
  ];

  return (
    <section id="about" ref={ref} className="relative section-pad">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              {t.about.eyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display font-semibold text-display-md text-balance"
            >
              {t.about.headingLead}{" "}
              <span className="italic font-light text-ink-400">
                {t.about.headingEm}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ y }}
              className="mt-10 flex flex-col items-center lg:items-start gap-6"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-xl opacity-60"
                />
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border border-ink-700 ring-2 ring-accent/20 bg-ink-800">
                  <Image
                    src="/profile.jpg"
                    alt="Ritratto di Luca Vidale"
                    fill
                    sizes="(min-width: 640px) 240px, 208px"
                    priority
                    className="object-cover object-[center_22%]"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent ring-4 ring-ink-950"
                />
              </div>

              <div className="text-center lg:text-left">
                <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-1">
                  {t.about.roleLabel}
                </p>
                <p className="font-display text-lg font-semibold leading-tight">
                  {t.about.role}{" "}
                  <span className="text-accent">{t.about.roleCompany}</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg md:text-xl leading-relaxed text-ink-200">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {t.about.p1a}
              <span className="text-ink-50 font-medium">{t.about.p1b}</span>
              {t.about.p1c}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {t.about.p2a}
              <span className="text-accent">{t.about.p2b}</span>
              {t.about.p2c}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t.about.p3}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-8 grid sm:grid-cols-2 gap-6"
            >
              {items.map((i) => (
                <div
                  key={i.k}
                  className="border-l-2 border-ink-700 hover:border-accent focus-within:border-accent transition-colors pl-4 py-1"
                >
                  <p className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-1">
                    {i.k}
                  </p>
                  <p className="text-ink-100 text-base">{i.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
