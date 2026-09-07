/* MEISTERWERK — vanilla JS: i18n, nav, form */

const translations = {
  de: {
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.process": "Ablauf",
    "nav.contact": "Kontakt",
    "nav.cta": "Angebot anfragen",
    "hero.eyebrow": "Stuttgart · Handwerk mit Präzision",
    "hero.title": "Meisterhafte Qualität für Ihr Bau- & Sanierungsprojekt",
    "hero.lead":
      "Trockenbau, Fassaden und Dämmung — sauber ausgeführt, termintreu und mit dem Anspruch eines echten Meisterwerks.",
    "hero.cta1": "Kostenlos beraten lassen",
    "hero.cta2": "Unsere Leistungen",
    "hero.b1": "Fachbetrieb",
    "hero.b2": "Termintreu",
    "hero.b3": "Saubere Baustelle",
    "services.eyebrow": "Leistungen",
    "services.title": "Trockenbau · Fassaden · Dämmung",
    "services.lead":
      "Drei Kernkompetenzen — ein Anspruch: präzise Planung, saubere Ausführung und Ergebnisse, die halten.",
    "services.t1.title": "Trockenbau",
    "services.t1.text":
      "Ständerwände, Decken, Vorsatzschalen und Raumaufteilungen — passgenau, schallschutzoptimiert und montagefertig.",
    "services.t1.li1": "Trennwände & Decken",
    "services.t1.li2": "Brand- & Schallschutz",
    "services.t1.li3": "Renovierung & Umbau",
    "services.t2.title": "Fassaden",
    "services.t2.text":
      "Moderne Fassadenlösungen für Schutz, Optik und Wertbeständigkeit — vom Einfamilienhaus bis zum Gewerbeobjekt.",
    "services.t2.li1": "Fassadenverkleidung",
    "services.t2.li2": "Sanierung & Erneuerung",
    "services.t2.li3": "Wetterfeste Systeme",
    "services.t3.title": "Dämmung",
    "services.t3.text":
      "Energieeffiziente Dämmung für Wand, Decke und Dach — spürbar weniger Verbrauch, mehr Wohnkomfort.",
    "services.t3.li1": "Innen- & Außendämmung",
    "services.t3.li2": "Wärmeschutz",
    "services.t3.li3": "Energieeinsparung",
    "about.eyebrow": "Über uns",
    "about.title": "Handwerk, dem Sie vertrauen können",
    "about.p1":
      "MEISTERWERK steht für sorgfältige Ausführung und klare Kommunikation. Wir verbinden deutsche Präzision mit leidenschaftlichem Handwerk — für Projekte, die überzeugen.",
    "about.p2":
      "Unter der Leitung von Artur Plaku realisieren wir Neubau- und Sanierungsarbeiten in und um Stuttgart — zuverlässig, fair und mit Blick auf jedes Detail.",
    "about.s1": "Einsatz & Sorgfalt",
    "about.s2": "Kernleistungen",
    "about.s3": "Standort Stuttgart",
    "process.eyebrow": "Ablauf",
    "process.title": "So arbeiten wir",
    "process.1.title": "Beratung",
    "process.1.text": "Wir hören zu, prüfen vor Ort und klären Anforderungen, Budget und Zeitplan.",
    "process.2.title": "Angebot",
    "process.2.text": "Sie erhalten ein klares, nachvollziehbares Angebot — ohne Überraschungen.",
    "process.3.title": "Umsetzung",
    "process.3.text": "Saubere Baustelle, fachgerechte Ausführung und regelmäßige Updates für Sie.",
    "process.4.title": "Übergabe",
    "process.4.text": "Gemeinsame Abnahme und ein Ergebnis, das den Namen MEISTERWERK verdient.",
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
    "form.opt1": "Trockenbau",
    "form.opt2": "Fassaden",
    "form.opt3": "Dämmung",
    "form.opt4": "Kombiniert / Sonstiges",
    "form.submit": "Nachricht senden",
    "form.note": "Mit dem Absenden stimmen Sie der Kontaktaufnahme zu.",
    "form.success":
      "Danke! Ihre Anfrage wurde vorbereitet — Ihr E-Mail-Programm öffnet sich gleich.",
    "footer.tag": "Ihr Partner für Bau & Sanierung",
  },
  sq: {
    "nav.services": "Shërbimet",
    "nav.about": "Rreth nesh",
    "nav.process": "Procesi",
    "nav.contact": "Kontakt",
    "nav.cta": "Kërko ofertë",
    "hero.eyebrow": "Stuttgart · Zejtari me saktësi",
    "hero.title": "Cilësi mjeshtri për projektin tuaj të ndërtimit & rinovimit",
    "hero.lead":
      "Trockenbau, fasada dhe izolim — ekzekutim i pastër, në afat dhe me standardin e një vepre mjeshtri.",
    "hero.cta1": "Këshillim falas",
    "hero.cta2": "Shërbimet tona",
    "hero.b1": "Firma profesionale",
    "hero.b2": "Në afat",
    "hero.b3": "Shesh i pastër",
    "services.eyebrow": "Shërbimet",
    "services.title": "Trockenbau · Fasada · Izolim",
    "services.lead":
      "Tri kompetenca kryesore — një standard: planifikim i saktë, ekzekutim i pastër dhe rezultate që zgjasin.",
    "services.t1.title": "Trockenbau",
    "services.t1.text":
      "Mure ndarëse, tavane, veshje dhe ndarje hapësirash — me saktësi, mbrojtje akustike dhe gati për montim.",
    "services.t1.li1": "Mure & tavane",
    "services.t1.li2": "Mbrojtje zjarri & zëri",
    "services.t1.li3": "Rinovime & transformime",
    "services.t2.title": "Fasada",
    "services.t2.text":
      "Zgjidhje moderne fasade për mbrojtje, pamje dhe vlerë — nga shtëpia individuale te objekti tregtar.",
    "services.t2.li1": "Veshje fasade",
    "services.t2.li2": "Rinovime & përtëritje",
    "services.t2.li3": "Sisteme rezistente",
    "services.t3.title": "Izolim",
    "services.t3.text":
      "Izolim eficient energjie për mur, tavan dhe çati — më pak shpenzim, më shumë komfort.",
    "services.t3.li1": "Izolim brenda & jashtë",
    "services.t3.li2": "Mbrojtje termike",
    "services.t3.li3": "Kursim energjie",
    "about.eyebrow": "Rreth nesh",
    "about.title": "Zejtari të cilës i besoni",
    "about.p1":
      "MEISTERWERK qëndron për ekzekutim të kujdesshëm dhe komunikim të qartë. Bashkojmë saktësinë gjermane me zejtari pasionante — për projekte që bindin.",
    "about.p2":
      "Nën drejtimin e Artur Plaku realizojmë punime ndërtimi dhe rinovimi në Stuttgart dhe rreth tij — me besueshmëri, drejtësi dhe kujdes për çdo detaj.",
    "about.s1": "Angazhim & kujdes",
    "about.s2": "Shërbime kryesore",
    "about.s3": "Vendndodhja Stuttgart",
    "process.eyebrow": "Procesi",
    "process.title": "Si punojmë",
    "process.1.title": "Këshillim",
    "process.1.text": "Dëgjojmë, kontrollojmë në vend dhe sqarojmë kërkesat, buxhetin dhe afatin.",
    "process.2.title": "Oferta",
    "process.2.text": "Merrni një ofertë të qartë dhe të kuptueshme — pa surpriza.",
    "process.3.title": "Realizimi",
    "process.3.text": "Shesh i pastër, punë profesionale dhe përditësime të rregullta për ju.",
    "process.4.title": "Dorëzimi",
    "process.4.text": "Pranim i përbashkët dhe rezultat që e meriton emrin MEISTERWERK.",
    "contact.eyebrow": "Kontakt",
    "contact.title": "Kërkoni projektin",
    "contact.lead":
      "Na shkruani — përgjigjemi shpejt me një vlerësim pa detyrim.",
    "contact.nameLabel": "Personi kontaktues",
    "contact.addressLabel": "Adresa",
    "contact.telLabel": "Telefon",
    "contact.mobileLabel": "Celular",
    "contact.emailLabel": "E-Mail",
    "form.name": "Emri *",
    "form.email": "E-Mail *",
    "form.phone": "Telefon",
    "form.service": "Shërbimi",
    "form.message": "Mesazhi *",
    "form.opt1": "Trockenbau",
    "form.opt2": "Fasada",
    "form.opt3": "Izolim",
    "form.opt4": "I kombinuar / Tjetër",
    "form.submit": "Dërgo mesazhin",
    "form.note": "Duke dërguar, pranoni që ju kontaktojmë.",
    "form.success":
      "Faleminderit! Kërkesa u përgatit — programi juaj i e-mailit hapet tani.",
    "footer.tag": "Partneri juaj për ndërtim & rinovim",
  },
};

let currentLang = localStorage.getItem("mw-lang") || "de";

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
  localStorage.setItem("mw-lang", lang);
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
      currentLang === "sq"
        ? `Kërkesë MEISTERWERK — ${serviceLabel}`
        : `Anfrage MEISTERWERK — ${serviceLabel}`;

    const body = [
      currentLang === "sq" ? "Përshëndetje," : "Guten Tag,",
      "",
      `${currentLang === "sq" ? "Emri" : "Name"}: ${name.value.trim()}`,
      `E-Mail: ${email.value.trim()}`,
      `${currentLang === "sq" ? "Telefon" : "Telefon"}: ${phone.value.trim() || "-"}`,
      `${currentLang === "sq" ? "Shërbimi" : "Leistung"}: ${serviceLabel}`,
      "",
      message.value.trim(),
    ].join("\n");

    const mailto = `mailto:info@li-trockenbau.de?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    success.hidden = false;
    window.location.href = mailto;
    form.reset();
  });
}

document.getElementById("year").textContent = String(new Date().getFullYear());

initLang();
initNav();
initForm();
