"use client";

const WORDS = [
  "Innovation",
  "Product Strategy",
  "Scalable Architecture",
  "Exit Strategy",
  "Cloud",
  "AI",
  "Data-driven",
  "Startup Execution",
];

export default function Marquee() {
  const loop = [...WORDS, ...WORDS];

  return (
    <section
      aria-hidden
      className="relative py-6 sm:py-8 md:py-10 border-y border-ink-800 overflow-hidden"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((w, i) => (
          <span
            key={i}
            className="mx-5 sm:mx-8 md:mx-12 text-2xl sm:text-4xl md:text-6xl font-display font-semibold tracking-tight text-ink-700 hover:text-accent transition-colors"
          >
            {w}
            <span className="ml-5 sm:ml-8 md:ml-12 text-accent/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
