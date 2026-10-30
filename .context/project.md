# Personal Portfolio Context

- **Pemilik:** Adibayu Luthfiansyah Setyawan
- **Role:** Full-Stack Developer / Software Engineer
- **Tujuan Web:** Menampilkan hasil karya (projects), artikel blog (MDX), dan menarik perhatian recruiter atau klien freelance.
- **Tone of Voice:** Profesional, percaya diri, to-the-point, tetap ramah dan modern.
- **Tech Stack Web Ini:** Next.js 16 (App Router), React 19, next-intl, Tailwind CSS 4, MDX, Vercel, Cloudflare.
- **Canonical Host:** `https://adibayuluthfiansyah.dev` (apex, non-www). Redirect `www` ke apex ditangani Cloudflare.
- **Routing:** `app/[locale]` dengan locale `en` dan `id`. Root layout ada di `app/[locale]/layout.tsx`.
- **Blog:** File MDX di `app/content/blog/`. Hanya file `.mdx` yang dibaca.
- **OG Image:** Route dinamis di `app/api/og/route.tsx`, di-cache 1 hari.
- **Env:** `NEXT_PUBLIC_GOOGLE_ANALYTICS` di `.env.local` dan Vercel Project Settings.
