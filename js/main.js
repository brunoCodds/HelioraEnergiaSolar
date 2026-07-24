(function () {
  "use strict";

  /* ---------------------------------------------------------
     Header sólido ao rolar + menu mobile
  --------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var overlay = document.querySelector(".nav-overlay");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-solid", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function openMenu() {
    nav.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    if (overlay) overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (overlay) overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.contains("is-open") ? closeMenu() : openMenu();
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    if (overlay) overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  /* ---------------------------------------------------------
     Placeholders de imagem
     Toda <img> com atributo data-ph vira um bloco de aviso
     caso o arquivo ainda não exista em /images.
  --------------------------------------------------------- */
  document.querySelectorAll("img[data-ph]").forEach(function (img) {
    img.addEventListener("error", function () {
      var wrap = img.parentElement;
      if (!wrap) return;
      var ph = document.createElement("div");
      ph.className = "ph";
      ph.setAttribute("data-label", img.getAttribute("data-ph"));
      ph.style.position = "absolute";
      ph.style.inset = "0";
      wrap.style.position = wrap.style.position || "relative";
      img.style.display = "none";
      wrap.appendChild(ph);
    });
  });

  /* ---------------------------------------------------------
     Revelar seções ao rolar
  --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     Gráfico em arco — Economia em seu bolso
  --------------------------------------------------------- */
  var arcSegs = document.querySelectorAll(".arc-seg");
  if (arcSegs.length && "IntersectionObserver" in window) {
    var arcIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        arcSegs.forEach(function (seg) {
          var len = parseFloat(seg.getAttribute("data-length"));
          var pct = parseFloat(seg.getAttribute("data-percent"));
          seg.style.strokeDasharray = len;
          seg.style.strokeDashoffset = len - (len * pct) / 100;
        });
        arcIO.disconnect();
      });
    }, { threshold: 0.4 });
    arcIO.observe(document.querySelector(".arc-chart"));
  }

  /* ---------------------------------------------------------
     Filtro da galeria (página Instalações)
  --------------------------------------------------------- */
  var chips = document.querySelectorAll(".filter-chip");
  var items = document.querySelectorAll(".gallery-item");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var f = chip.getAttribute("data-filter");
      items.forEach(function (item) {
        var match = f === "all" || item.getAttribute("data-category") === f;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------------------------------------------------------
     Lightbox da galeria
  --------------------------------------------------------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImgWrap = lightbox.querySelector(".lightbox-img-wrap");
    var lbCaption = lightbox.querySelector(".lightbox-caption");
    var visibleItems = [];
    var currentIndex = 0;

    function buildLightboxContent(item) {
      var srcImg = item.querySelector("img");
      var label = srcImg.getAttribute("data-ph") || srcImg.getAttribute("alt") || "";
      var caption = item.getAttribute("data-caption") || srcImg.getAttribute("alt") || "";
      lbImgWrap.innerHTML = "";
      var clone = document.createElement("img");
      clone.src = srcImg.getAttribute("src");
      clone.alt = caption;
      clone.setAttribute("data-ph", label);
      clone.addEventListener("error", function () {
        var ph = document.createElement("div");
        ph.className = "ph";
        ph.setAttribute("data-label", label);
        ph.style.aspectRatio = "4/3";
        clone.style.display = "none";
        lbImgWrap.appendChild(ph);
      });
      lbImgWrap.appendChild(clone);
      lbCaption.textContent = caption;
    }

    function openLightbox(index) {
      visibleItems = Array.prototype.filter.call(items, function (i) {
        return !i.classList.contains("is-hidden");
      });
      currentIndex = index;
      buildLightboxContent(visibleItems[currentIndex]);
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function step(dir) {
      if (!visibleItems.length) return;
      currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
      buildLightboxContent(visibleItems[currentIndex]);
    }

    items.forEach(function (item, idx) {
      item.addEventListener("click", function () {
        var all = Array.prototype.slice.call(items);
        openLightbox(all.filter(function (i) { return !i.classList.contains("is-hidden"); }).indexOf(item));
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function () { step(-1); });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    });
  }

  /* ---------------------------------------------------------
     Formulário de contato (demonstrativo — sem back-end)
  --------------------------------------------------------- */
  var form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = form.parentElement.querySelector(".form-success");
      if (success) success.classList.add("is-visible");
      form.reset();
    });
  }
})();
