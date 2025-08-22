(function () {
  'use strict';

  const state = {
    lang: (localStorage.getItem('site_lang') || 'en'),
    services: [],
  };

  const selectors = {
    statusBanner: document.getElementById('status-banner'),
    year: document.getElementById('year'),
    serviceGrid: document.getElementById('service-grid'),
    galleryGrid: document.getElementById('gallery-grid'),
    blogList: document.getElementById('blog-list'),
    langSelect: document.getElementById('lang-select'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    contactForm: document.getElementById('contact-form'),
  };

  const i18nText = {
    en: {
      nav_services: 'Services',
      nav_gallery: 'Gallery',
      nav_blog: 'Blog',
      nav_contact: 'Contact',
      hero_title: 'Authentic Vedic Rituals & Astrology',
      hero_sub: 'Book consultations, puja, and karmkand services with trusted pandit ji.',
      cta_book: 'Book Consultation',
      cta_news: 'Join Newsletter',
      services_heading: 'Our Services',
      gallery_heading: 'Gallery',
      blog_heading: 'Blog',
      news_heading: 'Newsletter',
      news_subscribe: 'Subscribe',
      contact_heading: 'Contact',
      contact_send: 'Send',
      add_to_cart: 'Enquire',
    },
    hi: {
      nav_services: 'सेवाएं',
      nav_gallery: 'गैलरी',
      nav_blog: 'ब्लॉग',
      nav_contact: 'संपर्क',
      hero_title: 'प्रामाणिक वैदिक अनुष्ठान और ज्योतिष',
      hero_sub: 'विश्वसनीय पंडित जी के साथ परामर्श, पूजा और कर्मकांड सेवाएं बुक करें।',
      cta_book: 'परामर्श बुक करें',
      cta_news: 'न्यूज़लेटर जॉइन करें',
      services_heading: 'हमारी सेवाएं',
      gallery_heading: 'गैलरी',
      blog_heading: 'ब्लॉग',
      news_heading: 'न्यूज़लेटर',
      news_subscribe: 'सदस्यता लें',
      contact_heading: 'संपर्क',
      contact_send: 'भेजें',
      add_to_cart: 'पूछताछ',
    },
    kn: {
      nav_services: 'ಸೇವೆಗಳು',
      nav_gallery: 'ಗ್ಯಾಲರಿ',
      nav_blog: 'ಬ್ಲಾಗ್',
      nav_contact: 'ಸಂಪರ್ಕ',
      hero_title: 'ಪ್ರಾಮಾಣಿಕ ವೇದಿಕ ವಿಧಿಗಳು ಮತ್ತು ಜ್ಯೋತಿಷ್ಯ',
      hero_sub: 'ವಿಶ್ವಾಸಾರ್ಹ ಪಂಡಿತ್ ಜಿಯವರೊಂದಿಗೆ ಸಲಹೆ, ಪೂಜೆ ಮತ್ತು ಕರ್ಮಕಾಂಡ ಸೇವೆಗಳು.',
      cta_book: 'ಸಲಹೆ ಬುಕ್ ಮಾಡಿ',
      cta_news: 'ನ್ಯೂಸ್‌ಲೇಟರ್ ಸೇರಿ',
      services_heading: 'ನಮ್ಮ ಸೇವೆಗಳು',
      gallery_heading: 'ಗ್ಯಾಲರಿ',
      blog_heading: 'ಬ್ಲಾಗ್',
      news_heading: 'ನ್ಯೂಸ್‌ಲೇಟರ್',
      news_subscribe: 'ಸಬ್ಸ್ಕ್ರೈಬ್',
      contact_heading: 'ಸಂಪರ್ಕ',
      contact_send: 'ಕಳುಹಿಸಿ',
      add_to_cart: 'ವಿಚಾರಿಸಿ',
    }
  };

  function translatePage() {
    const dict = i18nText[state.lang] || i18nText.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val) el.textContent = val;
    });
  }

  function showBanner(kind, message, timeoutMs = 4000) {
    const banner = selectors.statusBanner;
    if (!banner) return;
    banner.className = `banner banner-${kind}`;
    banner.textContent = message;
    banner.hidden = false;
    if (timeoutMs > 0) {
      window.setTimeout(() => { banner.hidden = true; }, timeoutMs);
    }
  }

  async function fetchJson(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(String(res.status));
      return await res.json();
    } catch (e) {
      showBanner('warning', 'Using cached content.');
      const cached = await caches.match(url);
      if (cached) {
        try { return await cached.json(); } catch {}
      }
      throw e;
    }
  }

  async function loadServices() {
    const path = `./content/services.${state.lang}.json`;
    try {
      state.services = await fetchJson(path);
    } catch {
      // fallback order
      try { state.services = await fetchJson('./content/services.hi.json'); }
      catch { state.services = await fetchJson('./content/services.en.json'); }
    }
  }

  function renderServices() {
    const grid = selectors.serviceGrid;
    if (!grid) return;
    grid.innerHTML = '';
    for (const svc of state.services) {
      const card = document.createElement('article');
      card.className = 'service-card';
      const priceHtml = '';
      card.innerHTML = `
        <div class="media">
          <img src="${svc.image}" alt="${svc.alt}" width="128" height="128" loading="lazy" decoding="async" />
        </div>
        <h3 class="title">${svc.title}</h3>
        <p class="desc">${svc.description}</p>
        <div class="row">
          <span class="price"></span>
          <a class="btn btn-primary" href="#contact" data-i18n="add_to_cart">Enquire</a>
        </div>
      `;
      grid.appendChild(card);
    }
  }

  function renderGallery() {
    const grid = selectors.galleryGrid;
    if (!grid) return;
    grid.innerHTML = '';
    const images = Array.from(document.querySelectorAll('#service-grid img')).slice(0, 8).map(img => img.getAttribute('src'));
    for (const src of images) {
      const img = document.createElement('img');
      img.src = src || './images/icon-192.svg';
      img.alt = 'Gallery image';
      img.loading = 'lazy';
      img.decoding = 'async';
      grid.appendChild(img);
    }
  }

  function renderBlog() {
    const list = selectors.blogList;
    if (!list) return;
    list.innerHTML = '';
    const posts = [
      { title: 'Daily Horoscope', excerpt: 'General guidance for today.' },
      { title: 'Vastu Tips', excerpt: 'Improve harmony at home.' },
    ];
    for (const p of posts) {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.innerHTML = `<h3>${p.title}</h3><p class="desc">${p.excerpt}</p>`;
      list.appendChild(card);
    }
  }

  function registerEventListeners() {
    selectors.langSelect?.addEventListener('change', async (e) => {
      const target = e.target;
      if (!(target instanceof HTMLSelectElement)) return;
      state.lang = target.value;
      localStorage.setItem('site_lang', state.lang);
      translatePage();
      try {
        await loadServices();
        renderServices();
        renderGallery();
      } catch (err) {
        showBanner('error', 'Failed to load content.');
      }
    });

    selectors.newsletterForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = selectors.newsletterEmail?.value || '';
      if (!email) return;
      try {
        const key = 'newsletter_local';
        const items = JSON.parse(localStorage.getItem(key) || '[]');
        items.push({ email, at: Date.now() });
        localStorage.setItem(key, JSON.stringify(items));
        showBanner('success', 'Subscribed.');
        selectors.newsletterForm.reset();
      } catch {
        showBanner('warning', 'Could not save subscription locally.');
      }
    });

    selectors.contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      showBanner('success', 'Message sent (saved locally).');
    });

    window.addEventListener('online', () => showBanner('success', 'You are back online.'));
    window.addEventListener('offline', () => showBanner('warning', 'You are offline. Content may be outdated.'));

    window.addEventListener('error', () => showBanner('error', 'Something went wrong. Please try again.'));
    window.addEventListener('unhandledrejection', () => showBanner('error', 'A network or script error occurred.'));
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').catch(() => {
      showBanner('warning', 'Service worker registration failed.');
    });
  }

  async function init() {
    try {
      if (selectors.year) selectors.year.textContent = String(new Date().getFullYear());
      if (selectors.langSelect) selectors.langSelect.value = state.lang;
      translatePage();
      await loadServices();
      renderServices();
      renderGallery();
      renderBlog();
      registerEventListeners();
      registerServiceWorker();
      if (!navigator.onLine) {
        showBanner('warning', 'You are offline. Content may be limited.');
      }
    } catch (err) {
      console.error('Initialization failed', err);
      showBanner('error', 'Initialization failed.');
    }
  }

  init();
})();