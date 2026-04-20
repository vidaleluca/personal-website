"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useT } from "./LanguageProvider";

export default function Experience() {
  const { t } = useT();

  const tagText: Record<"CURRENT" | "EXIT" | "CLOSED", string> = {
    CURRENT: t.experience.tags.current,
    EXIT: t.experience.tags.exit,
    CLOSED: t.experience.tags.closed,
  };

  const tagColors: Record<string, string> = {
    CURRENT: "bg-accent text-ink-950",
    EXIT: "bg-ink-100 text-ink-950",
    CLOSED: "bg-ink-700 text-ink-300",
  };

  return (
    <section id="experience" className="relative section-pad">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="eyebrow">{t.experience.eyebrow}</span>
            <h2 className="mt-6 font-display font-semibold text-display-md text-balance max-w-3xl">
              {t.experience.headingLead}{" "}
              <span className="italic font-light text-ink-400">
                {t.experience.headingEm}
              </span>{" "}
              {t.experience.headingTail}
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/vidaleluca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost self-start min-h-11"
          >
            {t.experience.linkedin} <ExternalLink size={16} />
          </a>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[11px] md:left-1/2 w-px bg-ink-800 md:-translate-x-px" />

          <ol className="space-y-14 md:space-y-24">
            {t.experience.items.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.li
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid md:grid-cols-2 gap-5 md:gap-16 ${
                    isEven ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute top-[6px] left-[11px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-[6px] ring-ink-950 z-10"
                  />

                  <div
                    className={`pl-10 md:pl-0 ${
                      isEven ? "md:pr-20 md:text-right" : "md:pl-20"
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2.5 mb-3 ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-mono text-[11px] md:text-xs text-ink-400 uppercase tracking-widest">
                        {exp.period}
                      </span>
                      {exp.tag && (
                        <span
                          className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                            tagColors[exp.tag] || "bg-ink-700 text-ink-200"
                          }`}
                        >
                          {tagText[exp.tag as keyof typeof tagText]}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-balance">
                      {exp.company}
                    </h3>
                    <p className="text-ink-300 text-base md:text-lg">
                      {exp.role}
                    </p>
                    <p className="text-ink-500 text-sm mt-1">{exp.location}</p>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${
                      isEven ? "md:pl-20" : "md:pr-20 md:text-right"
                    }`}
                  >
                    <p className="text-ink-200 leading-relaxed text-base md:text-lg">
                      {exp.description}
                    </p>
                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${
                        isEven ? "" : "md:justify-end"
                      }`}
                    >
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono px-3 py-1 rounded-full border border-ink-700 text-ink-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
