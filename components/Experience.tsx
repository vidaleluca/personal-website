"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import { useT } from "./LanguageProvider";

export default function Experience() {
  const { t } = useT();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 55%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

        <div ref={timelineRef} className="relative">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-3 md:left-1/2 w-px bg-ink-800 md:-translate-x-px"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-3 md:left-1/2 w-px bg-accent md:-translate-x-px shadow-[0_0_12px_rgba(212,255,74,0.4)]"
          />

          <ol className="space-y-16 md:space-y-28">
            {t.experience.items.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <li key={`${exp.company}-${i}`} className="relative">
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px 0px -40% 0px" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="absolute top-1 left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-[6px] ring-ink-950 z-10"
                  />
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.8, 1] }}
                    viewport={{ once: true, margin: "-120px 0px -40% 0px" }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    className="absolute top-1 left-3 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent/40 blur-sm z-0"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`grid md:grid-cols-2 gap-6 md:gap-24 ${
                      isEven ? "" : "md:[&>*:first-child]:col-start-2"
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 0,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1,
                      }}
                      className={`pl-14 md:pl-0 ${
                        isEven ? "md:pr-12 md:text-right" : "md:pl-12"
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
                      <p className="text-ink-500 text-sm mt-1">
                        {exp.location}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2,
                      }}
                      className={`pl-14 md:pl-0 ${
                        isEven ? "md:pl-12" : "md:pr-12 md:text-right"
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
                        {exp.skills.map((s, si) => (
                          <motion.span
                            key={s}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + si * 0.06,
                            }}
                            className="text-xs font-mono px-3 py-1 rounded-full border border-ink-700 text-ink-300"
                          >
                            {s}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
