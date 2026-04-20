# vidalelu.ca — Personal website

Personal portfolio of **Luca Vidale** — Tech Entrepreneur & Head of Innovation.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Dark theme with lime accent, bilingual (IT / EN), motion-reduced accessible, mobile-first.

## Stack

- Next.js 15 + React 19 (App Router, static prerender)
- TypeScript
- Tailwind CSS v3
- Framer Motion for animations
- Lucide icons
- Client-side i18n via Context (IT / EN)

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Assets to provide

Drop the following in `public/` before deploying:

- `profile.jpg` — portrait (≥ 800×1200, face in the upper third)
- `og.png` — Open Graph preview (1200×630)

See [public/README.md](public/README.md).

## Features

- Bilingual IT/EN with auto-detect + persisted toggle
- Cinematic hero: split-text reveal, mouse-reactive spotlight, parallax orb, scroll-driven transform
- Experience timeline with alternating layout
- Accessible: skip link, focus-visible, ARIA labels, semantic landmarks, reduced-motion support
- SEO: sitemap, robots, Person + WebSite JSON-LD, Open Graph, Twitter card, hreflang
- Phone number protected from crawlers (no plaintext in HTML; assembled client-side on interaction)

## Deploy

Static export ready. Deploy to Netlify / Vercel / Cloudflare Pages out of the box.

## License

Personal project — all rights reserved.
