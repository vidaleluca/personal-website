import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { ConsentProvider } from "@/components/ConsentProvider";

const SITE_URL = "https://vidalelu.ca";
const SITE_NAME = "Luca Vidale";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luca Vidale — Tech Entrepreneur & Head of Innovation",
    template: "%s — Luca Vidale",
  },
  description:
    "Imprenditore tecnologico e innovation leader. Founder con track record di exit, attualmente Head of Innovation in Engineering Group. Milano, Italia.",
  applicationName: SITE_NAME,
  authors: [{ name: "Luca Vidale", url: SITE_URL }],
  creator: "Luca Vidale",
  publisher: "Luca Vidale",
  keywords: [
    "Luca Vidale",
    "Tech Entrepreneur",
    "Head of Innovation",
    "Engineering Group",
    "Crispy Bacon",
    "TechMass",
    "Startup Founder",
    "Digital Transformation",
    "Innovation Strategy",
    "Product Strategy",
    "Advisory",
    "Board Member",
    "Milano",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "it-IT": "/it",
      "en-US": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Luca",
    lastName: "Vidale",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Luca Vidale — Tech Entrepreneur & Head of Innovation",
    description:
      "Imprenditore tecnologico. Founder con track record di exit industriale, oggi Head of Innovation in Engineering Group.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Luca Vidale — Tech Entrepreneur & Head of Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luca Vidale — Tech Entrepreneur & Head of Innovation",
    description:
      "Imprenditore tecnologico. Founder con track record di exit industriale, oggi Head of Innovation in Engineering Group.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="bg-ink-950" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-ink-950 focus:rounded-full focus:font-medium"
        >
          Skip to content
        </a>
        <ConsentProvider>
          {children}
          <Analytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
