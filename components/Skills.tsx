"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Layers,
  LineChart,
  Rocket,
  Network,
  TrendingUp,
} from "lucide-react";
import { useT } from "./LanguageProvider";

const ICONS = [Compass, Layers, Network, Rocket, LineChart, TrendingUp];

export default function Skills() {
  const { t } = useT();

  return (
    <section id="skills" className="relative section-pad bg-ink-900/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">{t.skills.eyebrow}</span>
            <h2 className="mt-6 font-display font-semibold text-display-md text-balance max-w-3xl">
              {t.skills.headingLead}{" "}
              <span className="italic font-light text-ink-400">
                {t.skills.headingEm}
              </span>
              <br />
              {t.skills.headingTail}
            </h2>
          </div>
          <p className="text-ink-300 max-w-md">{t.skills.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.skills.items.map((s, i) => {
            const Icon = ICONS[i] ?? Compass;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card card-hover p-8 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Icon
                      size={22}
                      className="text-accent group-hover:text-ink-950 transition-colors duration-500"
                    />
                  </div>
                  <span className="font-mono text-xs text-ink-500">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 text-balance">
                  {s.title}
                </h3>
                <p className="text-ink-300 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
