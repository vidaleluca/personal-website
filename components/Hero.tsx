"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { useT } from "./LanguageProvider";
import SectionLink from "./SectionLink";

function SplitWord({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {Array.from(text).map((c, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.02,
          }}
          className="inline-block"
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = useT();
  const heroRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.5 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const spotX = useTransform(smx, (v) => `${v}px`);
  const spotY = useTransform(smy, (v) => `${v}px`);

  const orbX = useTransform(smx, (v) => (v - 200) * 0.05);
  const orbY = useTransform(smy, (v) => (v - 200) * 0.05);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-16 md:pb-20"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 grid-bg mask-fade-b opacity-60"
      />
      <div className="noise" />

      <motion.div
        aria-hidden
        style={{
          background: `radial-gradient(circle 400px at var(--sx) var(--sy), rgba(212, 255, 74, 0.08), transparent 60%)`,
          ["--sx" as string]: spotX,
          ["--sy" as string]: spotY,
        }}
        className="pointer-events-none absolute inset-0 z-[2]"
      />

      <motion.div
        aria-hidden
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute top-[14%] -right-16 sm:right-[8%] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] opacity-60 md:opacity-100"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl" />
          <div className="absolute inset-[10%] rounded-full border border-accent/20" />
          <div className="absolute inset-[22%] rounded-full border border-accent/10" />
          <div className="absolute inset-[34%] rounded-full border border-accent/5" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="section-container relative z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 text-ink-300 text-sm mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono uppercase tracking-[0.25em] text-xs">
            {t.hero.status}
          </span>
        </motion.div>

        <h1 className="font-display font-semibold text-display-xl text-balance">
          <span className="block overflow-hidden leading-[0.9]">
            <SplitWord text={t.hero.headline1} delay={0.1} />
          </span>
          <span className="block overflow-hidden leading-[0.9]">
            <span className="text-ink-400 italic font-light inline-block mr-3">
              <SplitWord text={t.hero.headline2a} delay={0.25} />
            </span>
            <SplitWord text={t.hero.headline2b} delay={0.35} />
          </span>
          <span className="block overflow-hidden leading-[0.9]">
            <SplitWord text={t.hero.headline3a} delay={0.55} />
            <span className="inline-block mx-3" />
            <SplitWord
              text={t.hero.headline3b}
              delay={0.7}
              className="text-accent"
            />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 sm:mt-14 md:mt-16 grid md:grid-cols-12 gap-8 md:gap-10 items-end"
        >
          <div className="md:col-span-5 md:col-start-1 space-y-6">
            <p className="text-ink-300 text-lg leading-relaxed max-w-md">
              {t.hero.intro}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-ink-400">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} /> {t.hero.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles size={14} /> {t.hero.currentRole}
              </span>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <SectionLink section="contact" className="btn-primary group">
                {t.hero.ctaPrimary}
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:rotate-[-45deg]"
                />
              </SectionLink>
              <SectionLink section="experience" className="btn-ghost">
                {t.hero.ctaSecondary}
              </SectionLink>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 sm:pt-10 border-t border-ink-800"
        >
          {t.hero.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + i * 0.08 }}
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                {s.n}
              </div>
              <div className="mt-2 text-xs text-ink-400 font-mono uppercase tracking-widest">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity: titleOpacity }}
        className="pointer-events-none hidden xl:flex absolute right-8 bottom-8 z-10 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-400 [writing-mode:vertical-rl] rotate-180">
          {t.hero.scrollHint}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-gradient-to-b from-ink-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
