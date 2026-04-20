"use client";

import { useCallback } from "react";
import { useT } from "./LanguageProvider";
import { Section } from "@/lib/sections";

export default function SectionLink({
  section,
  children,
  className,
  onClick,
  ...rest
}: {
  section: Section | null;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { locale } = useT();
  const href = section ? `/${locale}/${section}` : `/${locale}`;

  const handle = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      e.preventDefault();
      onClick?.();
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", href);
      }
    },
    [href, onClick, section]
  );

  return (
    <a href={href} onClick={handle} className={className} {...rest}>
      {children}
    </a>
  );
}
