/**
 * Dwarkamai Digital Seva CSC - Main JavaScript
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initLoader();
    initStickyHeader();
    initScrollTop();
    initCounters();
    initLightbox();
    initGalleryFilter();
    initServiceFilter();
    initContactForm();
    initActiveNav();
    initAOS();
  });

  function initLoader() {
    var loader = document.getElementById('page-loader');
    if (!loader) return;
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('hidden'); }, 400);
    });
    setTimeout(function () { loader.classList.add('hidden'); }, 2800);
  }

  function initStickyHeader() {
    var header = document.querySelector('.main-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  function initScrollTop() {
    var btn = document.getElementById('scrollToTop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 350);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    function animate(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var start = performance.now();
      var duration = 2000;
      function update(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(update);
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animate(entry.target);
        }
      });
    }, { threshold: 0.45 });

    counters.forEach(function (c) { observer.observe(c); });
  }

  function initLightbox() {
    var items = document.querySelectorAll('[data-lightbox]');
    if (!items.length) return;
    var overlay = document.getElementById('lightbox-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'lightbox-overlay';
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML =
        '<div class="lightbox-content">' +
        '<button class="lightbox-close" aria-label="Close">&times;</button>' +
        '<img src="" alt="Preview">' +
        '<p class="lightbox-caption"></p></div>';
      document.body.appendChild(overlay);
    }
    var img = overlay.querySelector('img');
    var caption = overlay.querySelector('.lightbox-caption');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function close() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      img.src = '';
    }

    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        img.src = item.getAttribute('href') || item.querySelector('img').src;
        caption.textContent = item.getAttribute('data-caption') || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  function initGalleryFilter() {
    var btns = document.querySelectorAll('.gallery-filter button');
    var cols = document.querySelectorAll('.gallery-col');
    if (!btns.length || !cols.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        cols.forEach(function (col) {
          var cat = col.getAttribute('data-category');
          col.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
        });
      });
    });
  }

  function initServiceFilter() {
    var search = document.getElementById('serviceSearch');
    var filters = document.querySelectorAll('.category-filters button');
    var cards = document.querySelectorAll('.service-item');
    if (!cards.length) return;

    var activeCategory = 'all';

    function applyFilter() {
      var q = search ? search.value.toLowerCase().trim() : '';
      cards.forEach(function (card) {
        var title = (card.textContent || '').toLowerCase();
        var cat = card.getAttribute('data-category') || '';
        var matchCat = activeCategory === 'all' || cat === activeCategory;
        var matchSearch = !q || title.indexOf(q) !== -1;
        card.style.display = (matchCat && matchSearch) ? '' : 'none';
      });
    }

    if (search) search.addEventListener('input', applyFilter);
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category') || 'all';
        applyFilter();
      });
    });
  }

  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (document.getElementById('cName') || {}).value || '';
      var mobile = (document.getElementById('cMobile') || {}).value || '';
      var email = (document.getElementById('cEmail') || {}).value || '';
      var subject = (document.getElementById('cSubject') || {}).value || '';
      var message = (document.getElementById('cMessage') || {}).value || '';
      if (!name.trim() || !mobile.trim() || !message.trim()) {
        alert('कृपया नाव, मोबाईल आणि संदेश भरा.');
        return;
      }
      var text = 'नमस्कार दलाल इंटरप्राईजेस,%0A%0Aनाव: ' + encodeURIComponent(name) +
        '%0Aमोबाईल: ' + encodeURIComponent(mobile) +
        '%0Aईमेल: ' + encodeURIComponent(email || '-') +
        '%0Aविषय: ' + encodeURIComponent(subject || 'सेवा चौकशी') +
        '%0A%0Aसंदेश:%0A' + encodeURIComponent(message);
      window.open('https://wa.me/917448162684?text=' + text, '_blank');
    });
  }

  function initActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
    });
  }

  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 750, easing: 'ease-in-out', once: true, offset: 70 });
    }
  }
})();

