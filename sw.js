/* Service Worker for ServiceCo */
const SW_VERSION = 'v1.0.0';
const PRECACHE = `serviceco-precache-${SW_VERSION}`;
const RUNTIME = `serviceco-runtime-${SW_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './offline.html',
  './manifest.webmanifest',
  './images/web-design.svg',
  './images/seo.svg',
  './images/cloud-hosting.svg',
  './images/analytics.svg',
  './images/support.svg',
  './images/ecommerce.svg',
  './images/icon-192.svg',
  './images/icon-512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => {
      if (![PRECACHE, RUNTIME].includes(key)) return caches.delete(key);
    }))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // HTML navigation requests: network-first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(RUNTIME).then(cache => cache.put(request, copy));
        return response;
      }).catch(async () => {
        const cached = await caches.match(request);
        return cached || caches.match('./offline.html');
      })
    );
    return;
  }

  // CSS/JS: stale-while-revalidate
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(
      caches.open(RUNTIME).then(async cache => {
        const cached = await cache.match(request);
        const networkPromise = fetch(request).then(response => {
          cache.put(request, response.clone());
          return response;
        }).catch(() => undefined);
        return cached || networkPromise || fetch(request);
      })
    );
    return;
  }

  // Images: cache-first
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        const copy = response.clone();
        caches.open(RUNTIME).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => caches.match('./images/icon-192.svg')))
    );
    return;
  }
});