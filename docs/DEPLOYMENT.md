# Deployment & Domain Configuration

## Static Frontend

You can deploy the static frontend (`index.html`, `styles.css`, `script.js`, `sw.js`, `offline.html`, `manifest.webmanifest`, `images/`) to any static host:
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Steps (generic):
1. Build: No build step needed. Ensure files are committed.
2. Set correct content-types for `.webmanifest` (`application/manifest+json`) and `.webp`.
3. Ensure HTTPS is enabled for service workers.
4. Set a `404` to serve `index.html` (for SPA-style navigation) or to your static 404 page.

## Node.js Backend (optional)
If using the backend, deploy to:
- Render, Railway, Fly.io, Vercel Functions, or a VPS.

Env vars:
- `ADMIN_SECRET` — required for stealth admin login
- `DATABASE_URL` — path to SQLite file or `file:./data/app.db`

Persistence:
- Mount a volume for SQLite file in production.

## Domain Setup

1. Buy a domain from your registrar.
2. Point `A` record to host IP (VPS) or use CNAME per provider (e.g., `yourapp.netlify.app`).
3. Configure SSL via provider or Let’s Encrypt (auto on Netlify/Vercel/CF Pages).
4. Set primary domain and add redirect from `www` to apex (or vice versa).

## Caching & SW Notes

- Service worker precaches shell and uses runtime strategies for assets.
- Update `SW_VERSION` in `sw.js` to invalidate old caches after deploy.
- Keep `offline.html` accessible in precache.

## SEO & Sitemap

- Add `sitemap.xml` and `robots.txt` in root for production.
- Exclude stealth admin route via `noindex`.