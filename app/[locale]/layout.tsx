import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LOCALES, Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const isIt = locale === "it";
  return {
    title: isIt
      ? "Luca Vidale — Tech Entrepreneur & Head of Innovation"
      : "Luca Vidale — Tech Entrepreneur & Head of Innovation",
    description: isIt
      ? "Imprenditore tecnologico. Founder con track record di exit industriale, oggi Head of Innovation in Engineering Group."
      : "Tech entrepreneur. Founder with a track record of industrial exits, now Head of Innovation at Engineering Group.",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "it-IT": "/it",
        "en-US": "/en",
        "x-default": "/it",
      },
    },
    openGraph: {
      locale: isIt ? "it_IT" : "en_US",
      alternateLocale: isIt ? ["en_US"] : ["it_IT"],
      url: `https://vidalelu.ca/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();

  return (
    <LanguageProvider initialLocale={locale as Locale}>
      {children}
    </LanguageProvider>
  );
}
