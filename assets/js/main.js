/* Dalal Enterprises Murbad – Main JS */
(function () {
  "use strict";

  const WHATSAPP = "917448162684";
  const CALL_PRIMARY = "7448162684";

  function getPage() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path === "" ? "index.html" : path;
  }

  function renderHeader() {
    const page = getPage();
    const links = [
      { href: "index.html", label: "Home", match: "index.html" },
      { href: "services.html", label: "Services", match: "services.html" },
      { href: "gallery.html", label: "Gallery", match: "gallery.html" },
      { href: "about.html", label: "About Us", match: "about.html" },
      { href: "contact.html#offices", label: "Our Offices", match: "" },
      { href: "contact.html", label: "Contact Us", match: "contact.html" }
    ];

    const navHtml = links
      .map((l) => {
        const finalCls = l.match && l.match === page ? "active" : "";
        return `<li class="nav-item"><a class="nav-link ${finalCls}" href="${l.href}">${l.label}</a></li>`;
      })
      .join("");

    return `
    <div class="top-bar d-none d-md-block">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <a href="mailto:pavandalal93@gmail.com"><i class="bi bi-envelope me-1"></i> pavandalal93@gmail.com</a>
          <span class="mx-2">|</span>
          <a href="tel:+917448162684"><i class="bi bi-telephone me-1"></i> 7448162684</a>
        </div>
        <div>
          <a href="https://www.instagram.com/dalal_enterprises_murbad_3332/" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dalal sticky-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <img src="assets/images/logo/logo-dalal-enterprises.jpg" alt="Dalal Enterprises Logo">
          <span class="brand-text mr">दलाल इंटरप्राईजेस<small>मुरबाड · CSC · Xerox</small></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="nav-actions">
            <a class="btn-whatsapp" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> WhatsApp</a>
            <a class="btn-call" href="tel:+91${CALL_PRIMARY}"><i class="bi bi-telephone-fill"></i> Call Now</a>
          </div>
        </div>
      </div>
    </nav>`;
  }

  function renderFooter() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="footer-brand">
              <img src="assets/images/logo/logo-dalal-enterprises.jpg" alt="Dalal Enterprises">
              <span class="mr">दलाल इंटरप्राईजेस, मुरबाड</span>
            </div>
            <p>महा ई-सेवा, आपले सरकार, आधार सेवा, झेरॉक्स, प्रिंटिंग आणि विविध शासकीय ऑनलाइन सेवांसाठी विश्वासार्ह सेवा केंद्र.</p>
            <div class="mt-3">
              <a class="social-link" href="https://www.instagram.com/dalal_enterprises_murbad_3332/" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a class="social-link" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
              <a class="social-link" href="mailto:pavandalal93@gmail.com" aria-label="Email"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html#offices">Our Offices</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Our Services</h5>
            <a href="services.html#maha-eseva">Maha e-Seva</a>
            <a href="services.html#aadhaar">Aadhaar Services</a>
            <a href="services.html#certificates">Government Certificates</a>
            <a href="services.html#xerox">Xerox &amp; Printing</a>
            <a href="services.html#online">Online Services</a>
            <a href="services.html#schemes">Government Schemes</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Legal Information</h5>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
            <a href="refund-policy.html">Refund &amp; Cancellation Policy</a>
            <div class="mt-3">
              <a href="tel:+917448162684"><i class="bi bi-telephone me-1"></i> 7448162684</a>
              <a href="mailto:pavandalal93@gmail.com"><i class="bi bi-envelope me-1"></i> pavandalal93@gmail.com</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>Copyright © 2026 Dalal Enterprises Murbad. All Rights Reserved.</div>
          <div>मुरबाड, ठाणे, महाराष्ट्र – 421401</div>
        </div>
      </div>
    </footer>
    <div class="float-btns">
      <a class="float-btn float-whatsapp" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent("नमस्कार! दलाल इंटरप्राईजेस मुरबाड – मला सेवांबाबत माहिती हवी आहे.")}" target="_blank" rel="noopener" aria-label="WhatsApp Chat"><i class="bi bi-whatsapp"></i></a>
      <button class="float-btn float-top" id="backToTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
    </div>
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" id="lightboxPrev" aria-label="Previous"><i class="bi bi-chevron-left"></i></button>
      <img src="" alt="">
      <button class="lightbox-nav lightbox-next" id="lightboxNext" aria-label="Next"><i class="bi bi-chevron-right"></i></button>
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>`;
  }

  function injectChrome() {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) header.innerHTML = renderHeader();
    if (footer) footer.innerHTML = renderFooter();
  }

  function initScroll() {
    const nav = document.getElementById("mainNav");
    const topBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
      if (topBtn) topBtn.classList.toggle("show", window.scrollY > 400);
    });
    if (topBtn) {
      topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  function initLightbox() {
    const items = Array.from(document.querySelectorAll("[data-lightbox]"));
    if (!items.length) return;
    const box = document.getElementById("lightbox");
    const img = box.querySelector("img");
    const caption = document.getElementById("lightboxCaption");
    let index = 0;

    function show(i) {
      index = (i + items.length) % items.length;
      const el = items[index];
      img.src = el.getAttribute("data-full") || el.getAttribute("src");
      img.alt = el.getAttribute("alt") || "";
      caption.textContent = el.getAttribute("data-caption") || img.alt;
      box.classList.add("active");
      document.body.style.overflow = "hidden";
    }
    function hide() {
      box.classList.remove("active");
      document.body.style.overflow = "";
    }

    items.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        show(i);
      });
      el.style.cursor = "pointer";
    });

    document.getElementById("lightboxClose").addEventListener("click", hide);
    document.getElementById("lightboxPrev").addEventListener("click", () => show(index - 1));
    document.getElementById("lightboxNext").addEventListener("click", () => show(index + 1));
    box.addEventListener("click", (e) => { if (e.target === box) hide(); });
    document.addEventListener("keydown", (e) => {
      if (!box.classList.contains("active")) return;
      if (e.key === "Escape") hide();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }

  function initGalleryFilter() {
    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".gallery-item");
    if (!buttons.length) return;
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        items.forEach((item) => {
          const cat = item.getAttribute("data-category");
          item.style.display = filter === "all" || filter === cat ? "" : "none";
        });
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById("enquiryForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#name").value.trim();
      const mobile = form.querySelector("#mobile").value.trim();
      const email = form.querySelector("#email").value.trim();
      const subject = form.querySelector("#subject").value.trim();
      const message = form.querySelector("#message").value.trim();
      if (!name || !mobile || !message) {
        alert("कृपया नाव, मोबाईल आणि संदेश भरा.");
        return;
      }
      const text = `नमस्कार दलाल इंटरप्राईजेस,%0A%0Aनाव: ${encodeURIComponent(name)}%0Aमोबाईल: ${encodeURIComponent(mobile)}%0Aईमेल: ${encodeURIComponent(email || "-")}%0Aविषय: ${encodeURIComponent(subject || "सेवा चौकशी")}%0A%0Aसंदेश:%0A${encodeURIComponent(message)}`;
      window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    });
  }

  function ensureLoader() {
    if (document.getElementById("page-loader")) return;
    const loader = document.createElement("div");
    loader.id = "page-loader";
    loader.innerHTML = '<div class="loader-spinner"></div><div class="loader-text mr">दलाल इंटरप्राईजेस, मुरबाड</div>';
    document.body.prepend(loader);
  }

  function hideLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 500);
  }

  ensureLoader();

  document.addEventListener("DOMContentLoaded", () => {
    injectChrome();
    initScroll();
    initLightbox();
    initGalleryFilter();
    initContactForm();
    window.addEventListener("load", hideLoader);
    setTimeout(hideLoader, 1200);
  });
})();
