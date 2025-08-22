(function () {
  'use strict';

  const cartStorageKey = 'serviceco_cart_v1';
  const currency = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });

  const servicesData = [
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Modern, responsive websites focused on UX and conversions.',
      price: 1499,
      image: './images/web-design.svg',
      alt: 'Illustration of a browser window for web design'
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      description: 'Improve rankings, speed, and structured data for search visibility.',
      price: 899,
      image: './images/seo.svg',
      alt: 'Magnifying glass representing SEO search optimization'
    },
    {
      id: 'cloud-hosting',
      title: 'Cloud Hosting',
      description: 'Secure, scalable hosting with CDN and automated backups.',
      price: 499,
      image: './images/cloud-hosting.svg',
      alt: 'Cloud icon representing cloud hosting'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Track user behavior and KPIs with dashboards and reports.',
      price: 699,
      image: './images/analytics.svg',
      alt: 'Chart showing analytics performance'
    },
    {
      id: 'support',
      title: 'Priority Support',
      description: '24/7 SLA-backed support with incident response and monitoring.',
      price: 299,
      image: './images/support.svg',
      alt: 'Headset representing customer support'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Setup',
      description: 'Product catalog, payments, and shipping integrations.',
      price: 1299,
      image: './images/ecommerce.svg',
      alt: 'Shopping cart representing e-commerce'
    }
  ];

  const selectors = {
    statusBanner: document.getElementById('status-banner'),
    year: document.getElementById('year'),
    serviceGrid: document.getElementById('service-grid'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    checkoutButton: document.getElementById('checkout-button'),
    clearCartButton: document.getElementById('clear-cart-button')
  };

  if (selectors.year) {
    selectors.year.textContent = String(new Date().getFullYear());
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

  function loadCartFromStorage() {
    try {
      const raw = localStorage.getItem(cartStorageKey);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error('Failed to parse cart from storage', err);
      return [];
    }
  }

  function saveCartToStorage(cartItems) {
    try {
      localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
    } catch (err) {
      console.error('Failed to save cart', err);
      showBanner('warning', 'Could not save cart to your device.');
    }
  }

  let cart = loadCartFromStorage();

  function formatCurrency(amount) {
    try {
      return currency.format(amount);
    } catch {
      return `$${(Math.round(amount * 100) / 100).toFixed(2)}`;
    }
  }

  function findServiceById(id) {
    return servicesData.find(s => s.id === id);
  }

  function addToCart(serviceId) {
    const existing = cart.find(item => item.id === serviceId);
    if (existing) {
      existing.quantity += 1;
    } else {
      const svc = findServiceById(serviceId);
      if (!svc) return;
      cart.push({ id: svc.id, title: svc.title, price: svc.price, quantity: 1 });
    }
    saveCartToStorage(cart);
    renderCart();
    showBanner('success', 'Added to cart.');
  }

  function removeFromCart(serviceId) {
    cart = cart.reduce((acc, item) => {
      if (item.id !== serviceId) { acc.push(item); return acc; }
      const nextQty = item.quantity - 1;
      if (nextQty > 0) { acc.push({ ...item, quantity: nextQty }); }
      return acc;
    }, []);
    saveCartToStorage(cart);
    renderCart();
  }

  function clearCart() {
    cart = [];
    saveCartToStorage(cart);
    renderCart();
  }

  function renderServices() {
    const grid = selectors.serviceGrid;
    if (!grid) return;
    grid.innerHTML = '';
    for (const svc of servicesData) {
      const card = document.createElement('article');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="media">
          <img src="${svc.image}" alt="${svc.alt}" width="128" height="128" loading="lazy" decoding="async" />
        </div>
        <h3 class="title">${svc.title}</h3>
        <p class="desc">${svc.description}</p>
        <div class="row">
          <span class="price">${formatCurrency(svc.price)}</span>
          <button class="btn btn-primary" data-add-to-cart="${svc.id}" type="button">Add to cart</button>
        </div>
      `;
      grid.appendChild(card);
    }
  }

  function renderCart() {
    const list = selectors.cartItems;
    if (!list) return;
    list.innerHTML = '';
    let total = 0;
    for (const item of cart) {
      const li = document.createElement('li');
      li.className = 'cart-item';
      total += item.price * item.quantity;
      li.innerHTML = `
        <span class="name">${item.title}</span>
        <span class="qty">x${item.quantity}</span>
        <button class="remove" data-remove-item="${item.id}" aria-label="Remove one ${item.title}" title="Remove one">✕</button>
      `;
      list.appendChild(li);
    }
    if (selectors.cartTotal) {
      selectors.cartTotal.textContent = `Total: ${formatCurrency(total)}`;
    }
  }

  function handleGridClick(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const addId = target.getAttribute('data-add-to-cart');
    if (addId) {
      addToCart(addId);
    }
    const removeId = target.getAttribute('data-remove-item');
    if (removeId) {
      removeFromCart(removeId);
    }
  }

  function handleCheckoutClick() {
    if (!cart.length) {
      showBanner('info', 'Your cart is empty.');
      return;
    }
    showBanner('success', 'Checkout simulated. Thank you!');
    clearCart();
  }

  function handleClearCartClick() {
    if (!cart.length) return;
    clearCart();
    showBanner('info', 'Cart cleared.');
  }

  function registerEventListeners() {
    selectors.serviceGrid?.addEventListener('click', handleGridClick);
    selectors.cartItems?.addEventListener('click', handleGridClick);
    selectors.checkoutButton?.addEventListener('click', handleCheckoutClick);
    selectors.clearCartButton?.addEventListener('click', handleClearCartClick);

    window.addEventListener('online', () => showBanner('success', 'You are back online.'));
    window.addEventListener('offline', () => showBanner('warning', 'You are offline. Content may be outdated.'));

    window.addEventListener('error', () => showBanner('error', 'Something went wrong. Please try again.'));
    window.addEventListener('unhandledrejection', () => showBanner('error', 'A network or script error occurred.'));
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').then(() => {
      // Registered
    }).catch(() => {
      showBanner('warning', 'Service worker registration failed.');
    });
  }

  function init() {
    try {
      renderServices();
      renderCart();
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