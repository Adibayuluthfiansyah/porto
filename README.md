# Portfolio

Personal portfolio for Adibayu Luthfiansyah Setyawan. Built with Next.js 16 App Router, next-intl, Tailwind CSS 4, and MDX.

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root redirects to `/en`.

## Scripts

```bash
npm run dev    # start the dev server
npm run build  # production build
npm run start  # serve the production build
npm run lint   # run ESLint
```

## Structure

- `app/[locale]/` - localized routes (`en`, `id`); the locale layout is the root layout
- `app/[locale]/[...rest]/` - catch-all route that renders the localized 404
- `app/content/blog/` - MDX blog posts
- `app/api/og/` - dynamic Open Graph image
- `components/ide/` - IDE-style shell, explorer, and dashboard
- `components/ui/` - shared UI components
- `i18n/` - next-intl routing and request config
- `messages/` - `en.json` and `id.json`
- `lib/` - shared helpers
- `proxy.ts` - next-intl middleware (Next 16 proxy convention)

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Google Analytics measurement ID |

Set the same variable in Vercel Project Settings for Production and Preview.

## Deployment

Deployed on Vercel behind Cloudflare. The canonical host is the apex domain, `https://adibayuluthfiansyah.dev`. The `www` to apex redirect is handled by Cloudflare, not by Next.js.
