import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToSection from "@/components/ScrollToSection";
import { LOCALES, Locale } from "@/lib/i18n";
import { SECTIONS, Section, isSection } from "@/lib/sections";

export function generateStaticParams() {
  const out: { locale: string; section: string }[] = [];
  for (const locale of LOCALES) {
    for (const section of SECTIONS) {
      out.push({ locale, section });
    }
  }
  return out;
}

const sectionTitles: Record<Locale, Record<Section, string>> = {
  it: {
    about: "Chi sono",
    skills: "Competenze",
    experience: "Esperienze",
    education: "Formazione",
    contact: "Contatti",
  },
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;
  if (!LOCALES.includes(locale as Locale) || !isSection(section)) return {};
  const title = sectionTitles[locale as Locale][section];
  return {
    title,
    alternates: {
      canonical: `/${locale}/${section}`,
      languages: {
        "it-IT": `/it/${section}`,
        "en-US": `/en/${section}`,
        "x-default": `/it/${section}`,
      },
    },
    openGraph: {
      locale: locale === "it" ? "it_IT" : "en_US",
      url: `https://vidalelu.ca/${locale}/${section}`,
    },
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!LOCALES.includes(locale as Locale) || !isSection(section)) notFound();

  return (
    <>
      <Navigation />
      <main id="main" className="relative">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <ScrollToSection id={section} />
      </main>
      <Footer />
    </>
  );
}
