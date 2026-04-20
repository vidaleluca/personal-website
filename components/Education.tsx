"use client";

import { motion } from "framer-motion";
import { GraduationCap, Languages } from "lucide-react";
import { useT } from "./LanguageProvider";

export default function Education() {
  const { t } = useT();

  return (
    <section id="education" className="relative section-pad bg-ink-900/50">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">{t.education.eyebrow}</span>
          <h2 className="mt-6 font-display font-semibold text-display-md text-balance">
            {t.education.headingLead}{" "}
            <span className="italic font-light text-ink-400">
              {t.education.headingEm}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card card-hover p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="text-accent" size={22} />
              <span className="eyebrow !text-ink-300 before:!bg-ink-600">
                {t.education.formation}
              </span>
            </div>
            <ul className="space-y-6">
              <li>
                <p className="font-display text-xl font-semibold leading-tight">
                  {t.education.masterTitle}
                </p>
                <p className="text-ink-300">{t.education.masterField}</p>
                <p className="text-ink-500 text-sm mt-1">
                  {t.education.university}
                </p>
              </li>
              <li className="pt-6 border-t border-ink-800">
                <p className="font-display text-xl font-semibold leading-tight">
                  {t.education.bachelorTitle}
                </p>
                <p className="text-ink-300">{t.education.bachelorField}</p>
                <p className="text-ink-500 text-sm mt-1">
                  {t.education.university}
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card card-hover p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <Languages className="text-accent" size={22} />
              <span className="eyebrow !text-ink-300 before:!bg-ink-600">
                {t.education.languages}
              </span>
            </div>
            <ul className="space-y-5">
              {t.education.languagesList.map((lg) => (
                <li key={lg.l}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-medium">{lg.l}</span>
                    <span className="text-xs text-ink-400">{lg.v}</span>
                  </div>
                  <div className="h-1 bg-ink-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lg.p}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
