/**
 * SYGNIFIC — main.js
 * Shared JS: sticky header, mobile nav, fade-in on scroll,
 * smooth scroll, form handling.
 */

(function () {
  'use strict';

  /* ── STICKY / TRANSPARENT HEADER ─────────────────────────── */

  const header = document.querySelector('.site-header');

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // Run on load

  /* ── MOBILE NAV ───────────────────────────────────────────── */

  const hamburger  = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  function openMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleMobileNav() {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMobileNav() : openMobileNav();
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }

  // Close button inside the nav
  const mobileNavClose = document.querySelector('.mobile-nav-close');
  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  // Close when a mobile link is tapped
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ── ACTIVE NAV LINK ──────────────────────────────────────── */

  (function markActiveNavLink() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Normalise: strip trailing slash
      const normalised = href.replace(/\/$/, '') || '/';

      if (
        normalised === path ||
        (path === '' && (normalised === '/' || normalised === '/index.html'))
      ) {
        link.setAttribute('aria-current', 'page');
      }
    });
  })();

  /* ── FADE-IN ON SCROLL (Intersection Observer) ───────────── */

  const fadeEls = document.querySelectorAll(
    '.fade-in, .fade-in-group, .approach-col, .why-panel, .value-card'
  );

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {

    // Standard observer for most elements
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    // Dedicated observer for .sol-text panels:
    // higher threshold on mobile so the colour reveal fires
    // when the panel is well into the viewport (not before it enters).
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const solObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            solObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isMobile ? 0.35 : 0.1,
        rootMargin: isMobile ? '0px 0px -80px 0px' : '0px 0px -48px 0px'
      }
    );

    fadeEls.forEach(el => {
      if (el.classList.contains('sol-text')) {
        solObserver.observe(el);
      } else {
        observer.observe(el);
      }
    });

  } else {
    fadeEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ── SMOOTH SCROLL for anchor links ──────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = (header ? header.offsetHeight : 80) + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── CONTACT FORM HANDLING ────────────────────────────────── */

  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    const submitBtn  = contactForm.querySelector('[type="submit"]');
    const successMsg = document.querySelector('.form-success');
    const errorMsg   = document.querySelector('.form-error');

    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!submitBtn) return;

      // Loading state
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';

      // Hide previous messages
      if (successMsg) successMsg.hidden = true;
      if (errorMsg)   errorMsg.hidden   = true;

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data),
        });

        const json = await response.json();

        if (json.success) {
          if (successMsg) successMsg.hidden = false;
          contactForm.reset();
        } else {
          throw new Error(json.message || 'Server error');
        }
      } catch {
        if (errorMsg) errorMsg.hidden = false;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  /* ── BACK TO TOP ─────────────────────────────────────────── */

  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── CURRENT YEAR in footer ───────────────────────────────── */

  const yearEl = document.querySelector('.footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


})();
