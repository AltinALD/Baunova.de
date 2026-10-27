/* BAUNOVA — vanilla JS: i18n, nav, form */

const translations = {
  de: {
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.process": "Ablauf",
    "nav.contact": "Kontakt",
    "nav.cta": "Angebot anfragen",
    "hero.eyebrow": "Stuttgart · Maler & Stuckateur",
    "hero.title": "Farbe, Oberfläche und Präzision — das ist BAUNOVA",
    "hero.lead":
      "Professionelle Maler- und Stuckateurarbeiten für Innen und Außen — sauber, termintreu und mit dem Anspruch moderner Handwerkskunst.",
    "hero.cta1": "Kostenlos beraten lassen",
    "hero.cta2": "Unsere Leistungen",
    "hero.b1": "Malerarbeiten",
    "hero.b2": "Stuckateur",
    "hero.b3": "Fassade & Innen",
    "services.eyebrow": "Leistungen",
    "services.title": "Maler · Stuckateur · Fassade",
    "services.lead":
      "Drei Stärken — ein Standard: sorgfältige Vorbereitung, saubere Ausführung und Oberflächen, die begeistern.",
    "services.t1.title": "Malerarbeiten",
    "services.t1.text":
      "Innenanstriche, Spachteln, Lackierarbeiten und kreative Wandgestaltung — präzise, farbstark und langlebig.",
    "services.t1.li1": "Wand- & Deckenanstrich",
    "services.t1.li2": "Spachtel- & Glätttechnik",
    "services.t1.li3": "Renovierung & Neuanstrich",
    "services.t2.title": "Stuckateurarbeiten",
    "services.t2.text":
      "Verputz, Glattputz und Oberflächentechnik — von der Untergrundvorbereitung bis zur fertigen Struktur.",
    "services.t2.li1": "Innen- & Außenputz",
    "services.t2.li2": "Glattputz & Feinputz",
    "services.t2.li3": "Reparatur & Sanierung",
    "services.t3.title": "Fassadengestaltung",
    "services.t3.text":
      "Wetterfeste Fassadenanstriche und Schutzsysteme — für Optik, Werterhalt und langfristigen Schutz.",
    "services.t3.li1": "Fassadenanstrich",
    "services.t3.li2": "Schutz & Imprägnierung",
    "services.t3.li3": "Farbkonzepte außen",
    "about.eyebrow": "Über uns",
    "about.title": "Handwerk, das Farbe und Form verbindet",
    "about.p1":
      "BAUNOVA steht für moderne Maler- und Stuckateurarbeit mit klarer Kommunikation und sichtbarer Qualität — vom ersten Anstrich bis zur fertigen Oberfläche.",
    "about.p2":
      "Unter der Leitung von Artur Plaku realisieren wir Projekte in und um Stuttgart — zuverlässig, fair und mit Liebe zum Detail.",
    "about.s1": "Einsatz & Sorgfalt",
    "about.s2": "Kernleistungen",
    "about.s3": "Standort Stuttgart",
    "process.eyebrow": "Ablauf",
    "process.title": "So arbeiten wir",
    "process.1.title": "Beratung",
    "process.1.text": "Wir hören zu, prüfen vor Ort und klären Farben, Materialien, Budget und Zeitplan.",
    "process.2.title": "Angebot",
    "process.2.text": "Sie erhalten ein klares, nachvollziehbares Angebot — ohne Überraschungen.",
    "process.3.title": "Umsetzung",
    "process.3.text": "Saubere Baustelle, fachgerechte Ausführung und regelmäßige Updates für Sie.",
    "process.4.title": "Übergabe",
    "process.4.text": "Gemeinsame Abnahme und Oberflächen, die den Namen BAUNOVA verdienen.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Projekt anfragen",
    "contact.lead":
      "Schreiben Sie uns — wir melden uns schnell mit einer unverbindlichen Einschätzung.",
    "contact.nameLabel": "Ansprechpartner",
    "contact.addressLabel": "Adresse",
    "contact.telLabel": "Telefon",
    "contact.mobileLabel": "Mobil",
    "contact.emailLabel": "E-Mail",
    "form.name": "Name *",
    "form.email": "E-Mail *",
    "form.phone": "Telefon",
    "form.service": "Leistung",
    "form.message": "Nachricht *",
    "form.opt1": "Malerarbeiten",
    "form.opt2": "Stuckateurarbeiten",
    "form.opt3": "Fassadengestaltung",
    "form.opt4": "Kombiniert / Sonstiges",
    "form.submit": "Nachricht senden",
    "form.note": "Mit dem Absenden stimmen Sie der Kontaktaufnahme zu.",
    "form.success":
      "Danke! Ihre Anfrage wurde vorbereitet — Ihr E-Mail-Programm öffnet sich gleich.",
    "footer.tag": "Maler und Stuckateur",
    "call.fab": "Anrufen",
  },
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.contact": "Contact",
    "nav.cta": "Request a quote",
    "hero.eyebrow": "Stuttgart · Painter & Plasterer",
    "hero.title": "Color, surface and precision — that is BAUNOVA",
    "hero.lead":
      "Professional painting and plastering for interiors and exteriors — clean, on schedule, and with the standard of modern craftsmanship.",
    "hero.cta1": "Get a free consultation",
    "hero.cta2": "Our services",
    "hero.b1": "Painting",
    "hero.b2": "Plastering",
    "hero.b3": "Facade & interior",
    "services.eyebrow": "Services",
    "services.title": "Painting · Plastering · Facade",
    "services.lead":
      "Three strengths — one standard: careful preparation, clean execution, and surfaces that impress.",
    "services.t1.title": "Painting",
    "services.t1.text":
      "Interior painting, filling, lacquer work and creative wall design — precise, vivid and long-lasting.",
    "services.t1.li1": "Wall & ceiling painting",
    "services.t1.li2": "Filling & smoothing",
    "services.t1.li3": "Renovation & repainting",
    "services.t2.title": "Plastering",
    "services.t2.text":
      "Plaster, smooth finishes and surface techniques — from substrate preparation to the final structure.",
    "services.t2.li1": "Interior & exterior plaster",
    "services.t2.li2": "Smooth & fine plaster",
    "services.t2.li3": "Repair & restoration",
    "services.t3.title": "Facade design",
    "services.t3.text":
      "Weather-resistant facade coatings and protection systems — for appearance, value and lasting protection.",
    "services.t3.li1": "Facade painting",
    "services.t3.li2": "Protection & impregnation",
    "services.t3.li3": "Exterior color concepts",
    "about.eyebrow": "About us",
    "about.title": "Craftsmanship that unites color and form",
    "about.p1":
      "BAUNOVA stands for modern painting and plastering with clear communication and visible quality — from the first coat to the finished surface.",
    "about.p2":
      "Under the leadership of Artur Plaku we deliver projects in and around Stuttgart — reliable, fair and detail-focused.",
    "about.s1": "Commitment & care",
    "about.s2": "Core services",
    "about.s3": "Based in Stuttgart",
    "process.eyebrow": "Process",
    "process.title": "How we work",
    "process.1.title": "Consultation",
    "process.1.text": "We listen, inspect on site and clarify colors, materials, budget and schedule.",
    "process.2.title": "Quote",
    "process.2.text": "You receive a clear, transparent offer — with no surprises.",
    "process.3.title": "Execution",
    "process.3.text": "A clean site, professional workmanship and regular updates for you.",
    "process.4.title": "Handover",
    "process.4.text": "Joint acceptance and surfaces worthy of the BAUNOVA name.",
    "contact.eyebrow": "Contact",
    "contact.title": "Request a project",
    "contact.lead":
      "Write to us — we reply quickly with a non-binding assessment.",
    "contact.nameLabel": "Contact person",
    "contact.addressLabel": "Address",
    "contact.telLabel": "Phone",
    "contact.mobileLabel": "Mobile",
    "contact.emailLabel": "Email",
    "form.name": "Name *",
    "form.email": "Email *",
    "form.phone": "Phone",
    "form.service": "Service",
    "form.message": "Message *",
    "form.opt1": "Painting",
    "form.opt2": "Plastering",
    "form.opt3": "Facade design",
    "form.opt4": "Combined / Other",
    "form.submit": "Send message",
    "form.note": "By submitting, you agree to be contacted.",
    "form.success":
      "Thank you! Your request is ready — your email app will open next.",
    "footer.tag": "Painter and Plasterer",
    "call.fab": "Call now",
  },
};

let currentLang = localStorage.getItem("bn-lang") || "de";
if (currentLang !== "de" && currentLang !== "en") currentLang = "de";

function applyTranslations(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  currentLang = lang;
  localStorage.setItem("bn-lang", lang);
}

function initLang() {
  applyTranslations(currentLang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name;
    const email = form.email;
    const phone = form.phone;
    const service = form.service;
    const message = form.message;

    [name, email, message].forEach((field) => field.classList.remove("is-invalid"));

    let valid = true;
    if (!name.value.trim()) {
      name.classList.add("is-invalid");
      valid = false;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("is-invalid");
      valid = false;
    }
    if (!message.value.trim()) {
      message.classList.add("is-invalid");
      valid = false;
    }
    if (!valid) return;

    const serviceLabel = service.options[service.selectedIndex].text;
    const subject =
      currentLang === "en"
        ? `BAUNOVA inquiry — ${serviceLabel}`
        : `Anfrage BAUNOVA — ${serviceLabel}`;

    const body = [
      currentLang === "en" ? "Hello," : "Guten Tag,",
      "",
      `Name: ${name.value.trim()}`,
      `Email: ${email.value.trim()}`,
      `${currentLang === "en" ? "Phone" : "Telefon"}: ${phone.value.trim() || "-"}`,
      `${currentLang === "en" ? "Service" : "Leistung"}: ${serviceLabel}`,
      "",
      message.value.trim(),
    ].join("\n");

    const mailto = `mailto:info@baunova.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    success.hidden = false;
    window.location.href = mailto;
    form.reset();
  });
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const fill = document.getElementById("preloaderFill");
  const pct = document.getElementById("preloaderPct");
  if (!preloader || !fill || !pct) {
    document.body.classList.remove("is-loading");
    return;
  }

  const minTime = 2200;
  const started = performance.now();
  let progress = 0;
  let finished = false;

  const tick = setInterval(() => {
    if (finished) return;
    progress = Math.min(progress + Math.random() * 11 + 3, 92);
    fill.style.width = `${progress}%`;
    fill.parentElement.setAttribute("aria-valuenow", String(Math.round(progress)));
    pct.textContent = `${Math.round(progress)}%`;
  }, 120);

  const finish = () => {
    if (finished) return;
    finished = true;
    clearInterval(tick);

    const wait = Math.max(0, minTime - (performance.now() - started));
    setTimeout(() => {
      fill.style.width = "100%";
      fill.parentElement.setAttribute("aria-valuenow", "100");
      pct.textContent = "100%";

      setTimeout(() => {
        preloader.classList.add("is-done");
        preloader.setAttribute("aria-busy", "false");
        document.body.classList.remove("is-loading");
        setTimeout(() => preloader.remove(), 800);
      }, 280);
    }, wait);
  };

  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish, { once: true });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

function initCallFab() {
  const fab = document.getElementById("callFab");
  if (!fab) return;

  const onScroll = () => {
    fab.classList.toggle("is-visible", window.scrollY > 320);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

initPreloader();
initLang();
initNav();
initForm();
initCallFab();
