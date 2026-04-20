export const SECTIONS = [
  "about",
  "skills",
  "experience",
  "education",
  "contact",
] as const;

export type Section = (typeof SECTIONS)[number];

export function isSection(s: string): s is Section {
  return (SECTIONS as readonly string[]).includes(s);
}
