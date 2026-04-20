import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { SECTIONS } from "@/lib/sections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vidalelu.ca";
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${base}/${l}`])
        ),
      },
    });
    for (const section of SECTIONS) {
      entries.push({
        url: `${base}/${locale}/${section}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${base}/${l}/${section}`])
          ),
        },
      });
    }
  }

  return entries;
}
