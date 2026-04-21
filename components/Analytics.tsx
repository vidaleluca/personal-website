"use client";

import Script from "next/script";
import { useConsent } from "./ConsentProvider";

const GA_ID = "G-YBWHJNBQGR";

export default function Analytics() {
  const { consent } = useConsent();

  if (process.env.NODE_ENV !== "production") return null;
  if (!consent?.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
