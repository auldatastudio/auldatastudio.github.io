/* =========================================================
   main.js — Aulia Data Studio
   ---------------------------------------------------------
   GANTI 3 NILAI DI BAWAH INI sebelum website dipakai.
   ========================================================= */

(function () {
  'use strict';

  var CONFIG = {
    /* Nomor WhatsApp format internasional, tanpa "+" dan tanpa spasi.
       Contoh: 6281234567890 */
    whatsapp: '62XXXXXXXXXX',

    /* Email publik untuk ditampilkan di halaman. */
    email: 'hello@example.com',

    /* URL profil LinkedIn. Kosongkan ('') untuk menyembunyikan tautannya. */
    linkedin: ''
  };

  var LANG_KEY = 'aulia-lang';
  var WA_TEXT = {
    id: {
      consult: 'Halo Aulia Data Studio, saya mau konsultasi 30 menit soal data usaha saya.',
      training: 'Halo Aulia Data Studio, saya mau minta proposal training data untuk lembaga saya. Bidang usaha: ___. Jumlah peserta: ___. Topik: ___.'
    }
  };

  var dict = (window.AULIA_I18N && window.AULIA_I18N.en) || {};

  /* ---------- penyimpan teks asli (Indonesia) ---------- */
  var originals = [];
  var originalTitle = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  var originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

  function remember(el) {
    if (el.dataset.i18n) {
      originals.push({ el: el, kind: 'text', key: el.dataset.i18n, value: el.textContent });
    } else if (el.dataset.i18nHtml !== undefined) {
      originals.push({ el: el, kind: 'html', key: el.dataset.i18nHtml, value: el.innerHTML });
    }
    var attrSpec = el.dataset.i18nAttr;
    if (attrSpec) {
      attrSpec.split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var attr = bits[0].trim();
        var key = bits[1].trim();
        originals.push({ el: el, kind: 'attr', attr: attr, key: key, value: el.getAttribute(attr) || '' });
      });
    }
  }

  document.querySelectorAll('[data-i18n], [data-i18n-html], [data-i18n-attr]').forEach(remember);

  /* ---------- tautan WhatsApp / email / LinkedIn ---------- */
  function currentLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'id';
  }

  function waMessage(kind, lang) {
    var table = lang === 'en' ? dict : WA_TEXT.id;
    var key = 'wa.' + kind;
    return table[key] || WA_TEXT.id[kind] || '';
  }

  function waHref(kind, lang) {
    var text = waMessage(kind, lang);
    return 'https://wa.me/' + CONFIG.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');
  }

  function refreshLinks() {
    var lang = currentLang();

    document.querySelectorAll('[data-wa]').forEach(function (a) {
      a.setAttribute('href', waHref(a.dataset.wa, lang));
    });

    document.querySelectorAll('[data-email]').forEach(function (a) {
      a.setAttribute('href', 'mailto:' + CONFIG.email);
      if (!a.hasAttribute('data-keep-label')) a.textContent = CONFIG.email;
    });

    document.querySelectorAll('[data-linkedin]').forEach(function (a) {
      if (CONFIG.linkedin) {
        a.setAttribute('href', CONFIG.linkedin);
        a.hidden = false;
      } else {
        a.hidden = true;
      }
    });

    /* separator "·" hanya tampil kalau LinkedIn ditampilkan */
    document.querySelectorAll('[data-li-sep]').forEach(function (el) {
      el.hidden = !CONFIG.linkedin;
    });
  }

  /* ---------- bahasa ---------- */
  function applyLang(lang, persist) {
    lang = lang === 'en' ? 'en' : 'id';
    document.documentElement.lang = lang;

    originals.forEach(function (item) {
      var translated = lang === 'en' ? dict[item.key] : undefined;

      if (item.kind === 'attr') {
        item.el.setAttribute(item.attr, translated !== undefined ? translated : item.value);
        return;
      }
      var value = translated !== undefined ? translated : item.value;
      if (translated === undefined && lang === 'en') {
        console.warn('[i18n] Terjemahan belum ada untuk kunci: ' + item.key);
      }
      if (item.kind === 'html') {
        item.el.innerHTML = value;
      } else {
        item.el.textContent = value;
      }
    });

    document.title = (lang === 'en' && dict['meta.title']) ? dict['meta.title'] : originalTitle;
    if (metaDesc) {
      metaDesc.setAttribute('content', (lang === 'en' && dict['meta.description']) ? dict['meta.description'] : originalDesc);
    }

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    refreshLinks();
    if (persist) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* mode privat */ }
    }
  }

  function initialLang() {
    var param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'en' || param === 'id') return param;
    try {
      var saved = localStorage.getItem(LANG_KEY);
      if (saved === 'en' || saved === 'id') return saved;
    } catch (e) { /* abaikan */ }
    return 'id';
  }

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.dataset.lang, true);
    });
  });

  /* ---------- navigasi mobile ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  function closeNav() {
    if (!nav || !burger) return;
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    var label = currentLang() === 'en' ? 'Open menu' : 'Buka menu';
    burger.setAttribute('aria-label', label);
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      var label = open
        ? (currentLang() === 'en' ? 'Close menu' : 'Tutup menu')
        : (currentLang() === 'en' ? 'Open menu' : 'Buka menu');
      burger.setAttribute('aria-label', label);
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) closeNav();
    });
  }

  /* ---------- header saat scroll & sticky CTA ---------- */
  var header = document.querySelector('.site-header');
  var sticky = document.querySelector('.sticky-cta');
  var hero = document.getElementById('hero');
  var contact = document.getElementById('kontak');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (header) header.classList.toggle('is-scrolled', y > 8);

    if (sticky) {
      var pastHero = hero ? y > hero.offsetHeight * 0.6 : y > 400;
      var atContact = false;
      if (contact) {
        var rect = contact.getBoundingClientRect();
        atContact = rect.top < window.innerHeight * 0.85;
      }
      sticky.classList.toggle('is-visible', pastHero && !atContact);
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });

  /* ---------- animasi muncul saat digulir ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.card, .steps li, .facts > div');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el, index) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('reveal');
        el.style.transitionDelay = (Math.min(index % 4, 3) * 60) + 'ms';
        observer.observe(el);
      }
    });

    /* jaring pengaman: apa pun yang terjadi, semua konten tetap tampil */
    window.setTimeout(function () {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-in');
      });
    }, 2500);
  }

  /* ---------- inisialisasi ---------- */
  applyLang(initialLang(), false);
  onScroll();

  if (CONFIG.whatsapp.indexOf('X') !== -1) {
    console.warn('[Aulia Data Studio] Nomor WhatsApp belum diisi. Ganti CONFIG.whatsapp di assets/js/main.js.');
  }
  if (CONFIG.email.indexOf('example.com') !== -1) {
    console.warn('[Aulia Data Studio] Email masih placeholder. Ganti CONFIG.email di assets/js/main.js.');
  }
})();
