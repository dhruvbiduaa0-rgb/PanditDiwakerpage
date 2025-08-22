# Shree – Jyotish evam Karmkand Karyalay

Multilingual static site with PWA caching and placeholders for backend features.

## Features
- Fast static frontend (HTML, CSS, JS)
- Service worker: precache + runtime caching, offline fallback
- Placeholder images and services
- Docs for content extraction and deployment

## Local Usage
- Open `index.html` with a local server to enable service worker:
  - Python: `python3 -m http.server 5173`
  - Node: `npx http-server -p 5173` (install `http-server` if needed)
- Visit `http://localhost:5173`

## Updating Cache
- Bump `SW_VERSION` in `sw.js` and redeploy to invalidate old caches.

## Content
- See `docs/CONTENT.md` for services data and images plan.

## Deployment
- See `docs/DEPLOYMENT.md` for steps and domain configuration.

## Roadmap
- Add Node.js backend with SQLite
- Admin panel (stealth) with secure key
- Newsletter + contact forms with DB
- Gallery, blog, and i18n content