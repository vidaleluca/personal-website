"use client";

import { useEffect } from "react";

export default function ScrollToSection({ id }: { id: string }) {
  useEffect(() => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      const prev = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      el.scrollIntoView({ block: "start" });
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = prev;
      });
    };
    const raf = requestAnimationFrame(() => {
      scroll();
      setTimeout(scroll, 120);
    });
    return () => cancelAnimationFrame(raf);
  }, [id]);

  return null;
}
