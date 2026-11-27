const CONFIG = {
  // EDIT: tu número de WhatsApp Business
  whatsappNumber: "50370000000",

  // EDIT: teléfono fijo
  phoneNumber: "+50322000000",

  // EDIT: disciplinas del gym
  disciplines: [
    {
      icon: "weight",
      name: "CROSSFIT",
      desc: "WODs brutales, levantamiento olímpico y gimnásticos. Cada día es diferente, cada día es más fuerte.",
      tags: ["FUERZA", "CARDIO", "FLEXIBILIDAD"],
    },
    {
      icon: "glove",
      name: "MMA",
      desc: "Artes marciales mixtas completas. Striking, clinch, ground game. Entrena como un luchador profesional.",
      tags: ["COMBATE", "RESISTENCIA", "TÉCNICA"],
    },
    {
      icon: "bolt",
      name: "MUAY THAI",
      desc: "El arte de los 8 miembros. Puños, codos, rodillas y patadas. Precisión y potencia devastadora.",
      tags: ["STRIKING", "COORDINACIÓN", "POTENCIA"],
    },
    {
      icon: "people",
      name: "BJJ",
      desc: "Jiu-Jitsu Brasileño. Sumisiones, barridos y control posicional. El ajedrez del combate.",
      tags: ["GRAPPLING", "ESTRATEGIA", "FLEXIBILIDAD"],
    },
    {
      icon: "target",
      name: "BOXEO",
      desc: "El dulce arte de golpear. Jab, cross, hook, uppercut. Footwork y defensa de élite.",
      tags: ["CARDIO", "REFLEJOS", "DISCIPLINA"],
    },
    {
      icon: "trend",
      name: "FUERZA",
      desc: "Programación de fuerza pura. Squat, deadlift, bench, press. Mueve peso serio.",
      tags: ["POWERLIFTING", "HIPERTROFIA", "CORE"],
    },
  ],

  // EDIT: planes de membresía
  plans: [
    {
      name: "GUERRERO",
      desc: "Para los que empiezan a forjarse.",
      price: "$35",
      period: "/MES",
      features: [
        "Acceso a 1 disciplina",
        "Lunes a viernes",
        "1 sesión diaria",
        "Evaluación inicial",
        "App de seguimiento",
      ],
      featured: false,
    },
    {
      name: "ESPARTANO",
      desc: "El plan más popular. Sin límites.",
      price: "$55",
      period: "/MES",
      features: [
        "Acceso a TODAS las disciplinas",
        "Lunes a sábado",
        "Sesiones ilimitadas",
        "Evaluación mensual",
        "Plan nutricional básico",
        "Acceso a open gym",
      ],
      featured: true,
    },
    {
      name: "ÉLITE",
      desc: "Para competidores y obsesivos.",
      price: "$85",
      period: "/MES",
      features: [
        "Todo lo del plan Espartano",
        "Coaching 1-a-1 semanal",
        "Plan nutricional completo",
        "Análisis de rendimiento",
        "Acceso prioritario",
        "Invitado gratis 2x/mes",
      ],
      featured: false,
    },
  ],

  // EDIT: testimonios
  reviews: [
    {
      name: "Diego Hernández",
      discipline: "CROSSFIT · 2 AÑOS",
      text: "Llegué pesando 105kg sin poder hacer un pull-up. Ahora compito en regionales. FORJA me cambió la vida.",
      stars: 5,
    },
    {
      name: "Valentina Torres",
      discipline: "MMA · 1 AÑO",
      text: "El ambiente es brutal pero de la mejor manera. Los coaches realmente se preocupan por tu progreso. Es adictivo.",
      stars: 5,
    },
    {
      name: "Roberto Mejía",
      discipline: "MUAY THAI · 3 AÑOS",
      text: "Probé 5 gimnasios antes de llegar aquí. Ninguno tiene la energía, el equipo ni la comunidad de FORJA.",
      stars: 5,
    },
  ],

  // Multiplicadores de calorías por disciplina
  calorieMultipliers: {
    crossfit: { base: 12, fat: 85, cardio: 90, muscle: 70 },
    mma: { base: 13, fat: 80, cardio: 95, muscle: 65 },
    muaythai: { base: 14, fat: 90, cardio: 92, muscle: 55 },
    boxing: { base: 11, fat: 82, cardio: 88, muscle: 50 },
    bjj: { base: 10, fat: 70, cardio: 75, muscle: 60 },
    strength: { base: 8, fat: 55, cardio: 45, muscle: 95 },
  },
  intensityMultipliers: {
    moderate: 0.75,
    high: 1.0,
    extreme: 1.3,
  },
};

// ---------------------------------------------------------
// A partir de aquí es lógica del sitio.
// ---------------------------------------------------------

function renderDisciplines() {
  const grid = document.getElementById("disciplinesGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.disciplines
    .map(
      (d) => `
    <div class="disc-card reveal">
      <span class="disc-card__icon"><svg class="ui-icon" aria-hidden="true"><use href="#icon-${d.icon}"></use></svg></span>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <div class="disc-card__meta">
        ${d.tags.map((t) => `<span class="disc-card__tag">${t}</span>`).join("")}
      </div>
    </div>
  `
    )
    .join("");
}

function renderPlans() {
  const grid = document.getElementById("plansGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.plans
    .map(
      (p) => `
    <div class="plan-card${p.featured ? " plan-card--featured" : ""} reveal">
      <h3 class="plan-card__name">${p.name}</h3>
      <p class="plan-card__desc">${p.desc}</p>
      <div class="plan-card__price">
        <span class="plan-card__price-amount">${p.price}</span>
        <span class="plan-card__price-period">${p.period}</span>
      </div>
      <div class="plan-card__features">
        ${p.features.map((f) => `<span class="plan-card__feature">${f}</span>`).join("")}
      </div>
      <a href="#clase-gratis" class="btn ${p.featured ? "btn--neon" : "btn--ghost"}" style="width:100%;">
        ${p.featured ? "EMPEZAR AHORA" : "ELEGIR PLAN"}
      </a>
    </div>
  `
    )
    .join("");
}

function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.reviews
    .map((r) => {
      const initials = r.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2);
      const stars = "★".repeat(r.stars) + "☆".repeat(5 - r.stars);
      return `
      <div class="review-card reveal">
        <div class="review-card__top">
          <div class="review-card__avatar">${initials}</div>
          <div>
            <p class="review-card__name">${r.name}</p>
            <span class="review-card__discipline">${r.discipline}</span>
            <div class="review-card__stars">${stars}</div>
          </div>
        </div>
        <p class="review-card__text">"${r.text}"</p>
      </div>
    `;
    })
    .join("");
}

function initCalculator() {
  const btn = document.getElementById("calcBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const weight = parseFloat(document.getElementById("calcWeight").value) || 70;
    const duration = parseFloat(document.getElementById("calcDuration").value) || 60;
    const intensity = document.getElementById("calcIntensity").value;
    const discipline = document.getElementById("calcDiscipline").value;

    const mult = CONFIG.calorieMultipliers[discipline];
    const intMult = CONFIG.intensityMultipliers[intensity];

    const calories = Math.round(weight * (duration / 60) * mult.base * intMult);

    // Animate number
    const caloriesEl = document.getElementById("calcCalories");
    animateNumber(caloriesEl, 0, calories, 800);

    // Animate bars
    const fatAdj = Math.min(mult.fat * intMult, 100);
    const cardioAdj = Math.min(mult.cardio * intMult, 100);
    const muscleAdj = Math.min(mult.muscle * intMult, 100);

    setTimeout(() => {
      document.getElementById("barFat").style.width = fatAdj + "%";
      document.getElementById("barCardio").style.width = cardioAdj + "%";
      document.getElementById("barMuscle").style.width = muscleAdj + "%";
    }, 100);
  });
}

function animateNumber(el, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(start + range * eased);
    el.textContent = current.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  const stickyCta = document.getElementById("stickyCta");
  const heroEl = document.querySelector(".hero");
  if (!header || !heroEl) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle("is-scrolled", window.scrollY > 60);
        const threshold = heroEl.offsetTop + heroEl.offsetHeight * 0.6;
        if (stickyCta)
          stickyCta.classList.toggle("is-visible", window.scrollY > threshold);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener("click", () =>
    navLinks.classList.toggle("is-open")
  );
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("is-open"))
  );
}

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    });
  });
}


const EN_TEXT = {
  "DISCIPLINAS": "DISCIPLINES",
  "NOSOTROS": "ABOUT",
  "PLANES": "PLANS",
  "CALCULADORA": "CALCULATOR",
  "CONTACTO": "CONTACT",
  "CLASE GRATIS": "FREE CLASS",
  "INSCRIPCIONES ABIERTAS — CUPOS LIMITADOS": "ENROLLMENT OPEN — LIMITED SPOTS",
  "ROMPE TUS": "BREAK YOUR",
  "LÍMITES.": "LIMITS.",
  "Crossfit de alto rendimiento & artes marciales mixtas. No es un gimnasio. Es una": "High performance CrossFit and mixed martial arts. More than a gym, it's a",
  "forja": "forge",
  "donde se construyen guerreros.": "where athletes are built.",
  "PRUEBA UNA CLASE GRATIS": "TRY A FREE CLASS",
  "VER PLANES →": "VIEW PLANS →",
  "ATLETAS ACTIVOS": "ACTIVE ATHLETES",
  "COACHES ÉLITE": "ELITE COACHES",
  "HORARIO BESTIA": "TRAINING HOURS",
  "FUERZA": "STRENGTH",
  "DISCIPLINA": "DISCIPLINE",
  "ADRENALINA": "ADRENALINE",
  "BOXEO": "BOXING",
  "ELIGE TU": "CHOOSE YOUR",
  "Programas diseñados por coaches de élite para forjar tu mejor versión.": "Programs designed by elite coaches to help you reach your potential.",
  "AÑOS": "YEARS",
  "FORJANDO": "BUILDING",
  "GUERREROS": "ATHLETES",
  "ESTO NO ES UN": "THIS IS MORE THAN A",
  "GIMNASIO": "GYM",
  "FORJA nació de la idea de que el entrenamiento real no ocurre en máquinas de espejo. Aquí levantamos barras, tiramos golpes y sudamos juntos. Sin egos, sin excusas.": "FORJA was built on the idea that real training goes beyond machines and mirrors. Here we lift, spar, and push through together. No egos, no excuses.",
  "COACHES CERTIFICADOS": "CERTIFIED COACHES",
  "Competidores activos y exatletas profesionales.": "Active competitors and former professional athletes.",
  "METODOLOGÍA PROGRESIVA": "PROGRESSIVE TRAINING",
  "Programación periódica que evoluciona contigo.": "Structured programming that evolves with you.",
  "EQUIPO DE COMPETICIÓN": "COMPETITION EQUIPMENT",
  "Rogue, Assault, Concept2 — solo lo mejor.": "Rogue, Assault, Concept2 — quality equipment.",
  "COMUNIDAD BRUTAL": "STRONG COMMUNITY",
  "Más que compañeros, familia que se empuja al límite.": "Training partners who push each other forward.",
  "QUIERO ENTRENAR →": "I WANT TO TRAIN →",
  "PLANES DE": "MEMBERSHIP",
  "MEMBRESÍA": "PLANS",
  "Elige el plan que se adapte a tu nivel y objetivos. Sin contratos, sin letras chiquitas.": "Choose a plan that fits your level and goals. No contracts or hidden terms.",
  "CALCULADORA DE": "PERFORMANCE",
  "RENDIMIENTO": "CALCULATOR",
  "Descubre cuántas calorías puedes quemar por sesión según tu perfil.": "Estimate how many calories you could burn in a session based on your profile.",
  "PESO (KG)": "WEIGHT (KG)",
  "DURACIÓN (MIN)": "DURATION (MIN)",
  "INTENSIDAD": "INTENSITY",
  "MODERADA": "MODERATE",
  "ALTA": "HIGH",
  "EXTREMA": "EXTREME",
  "CALCULAR": "CALCULATE",
  "CALORÍAS ESTIMADAS": "ESTIMATED CALORIES",
  "KCAL / SESIÓN": "KCAL / SESSION",
  "GRASA QUEMADA": "FAT BURN",
  "RENDIMIENTO CARDIO": "CARDIO PERFORMANCE",
  "GANANCIA MUSCULAR": "MUSCLE GAIN",
  "QUIERO QUEMAR ESO →": "START TRAINING →",
  "VOCES DE LA": "VOICES OF THE",
  "// AHORA O NUNCA": "// START TODAY",
  "TU PRIMERA CLASE": "YOUR FIRST CLASS",
  "ES GRATIS.": "IS FREE.",
  "Sin compromiso. Sin excusas. Ven, entrena y decide si FORJA es para ti.": "No commitment. No excuses. Come train and see if FORJA is for you.",
  "Spoiler: lo es.": "Spoiler: it is.",
  "RESERVAR MI CLASE GRATIS": "BOOK MY FREE CLASS",
  "Sin compromiso": "No commitment",
  "Respuesta inmediata": "Quick response",
  "Cupos limitados": "Limited spots",
  "ENCUENTRA LA": "FIND THE",
  "UBICACIÓN": "LOCATION",
  "HORARIOS": "HOURS",
  "Boulevard de los Héroes #456": "Boulevard de los Héroes #456",
  "Lun - Vie: 6:00 AM – 10:00 PM": "Mon - Fri: 6:00 AM – 10:00 PM",
  "Sábados: 7:00 AM – 2:00 PM": "Saturdays: 7:00 AM – 2:00 PM",
  "Donde se forjan guerreros.": "Where athletes are forged.",
  "LA FORJA": "THE FORGE",
  "Nosotros": "About",
  "Planes": "Plans",
  "Testimonios": "Testimonials",
  "Clase gratis": "Free class",
  "Reserva demo": "Demo booking",
  "© 2026 FORJA. TODOS LOS DERECHOS RESERVADOS.": "© 2026 FORJA. ALL RIGHTS RESERVED.",
  "SAN SALVADOR, EL SALVADOR": "SAN SALVADOR, EL SALVADOR",
  "¿LISTO PARA LA FORJA?": "READY TO TRAIN?",
  "Primera clase GRATIS": "First class FREE",
  "RESERVAR": "BOOK",
  "RESERVA TU CLASE": "BOOK YOUR CLASS",
  "Elige una disciplina y un horario para probar la reserva.": "Choose a discipline and a time to try the booking flow.",
  "Selecciona una disciplina": "Select a discipline",
  "Boxeo": "Boxing",
  "Fuerza": "Strength",
  "FECHA": "DATE",
  "HORA": "TIME",
  "Selecciona un horario": "Select a time",
  "CONFIRMAR RESERVA DEMO": "CONFIRM DEMO BOOKING",
  "No se envían datos ni se crea una reserva real.": "No data is sent and no real booking is created.",
  "RESERVA SIMULADA": "BOOKING SIMULATED",
  "No se ha enviado ninguna solicitud al gimnasio.": "No request was sent to the gym.",
  "CERRAR": "CLOSE",
  "WODs brutales, levantamiento olímpico y gimnásticos. Cada día es diferente, cada día es más fuerte.": "Challenging WODs, Olympic lifts, and gymnastics. Every day brings a new challenge.",
  "CARDIO": "CARDIO",
  "FLEXIBILIDAD": "MOBILITY",
  "Artes marciales mixtas completas. Striking, clinch, ground game. Entrena como un luchador profesional.": "Mixed martial arts training: striking, clinch, and ground game.",
  "COMBATE": "COMBAT",
  "RESISTENCIA": "ENDURANCE",
  "TÉCNICA": "TECHNIQUE",
  "El arte de los 8 miembros. Puños, codos, rodillas y patadas. Precisión y potencia devastadora.": "The art of eight limbs: punches, elbows, knees, and kicks.",
  "STRIKING": "STRIKING",
  "COORDINACIÓN": "COORDINATION",
  "POTENCIA": "POWER",
  "Jiu-Jitsu Brasileño. Sumisiones, barridos y control posicional. El ajedrez del combate.": "Brazilian Jiu-Jitsu: submissions, sweeps, and positional control.",
  "GRAPPLING": "GRAPPLING",
  "ESTRATEGIA": "STRATEGY",
  "El dulce arte de golpear. Jab, cross, hook, uppercut. Footwork y defensa de élite.": "Boxing fundamentals: jab, cross, hook, uppercut, footwork, and defense.",
  "REFLEJOS": "REFLEXES",
  "Programación de fuerza pura. Squat, deadlift, bench, press. Mueve peso serio.": "Strength programming: squat, deadlift, bench, and press.",
  "HIPERTROFIA": "HYPERTROPHY",
  "GUERRERO": "WARRIOR",
  "Para los que empiezan a forjarse.": "For those starting their journey.",
  "/MES": "/MONTH",
  "Acceso a 1 disciplina": "Access to 1 discipline",
  "Lunes a viernes": "Monday to Friday",
  "1 sesión diaria": "1 session per day",
  "Evaluación inicial": "Initial assessment",
  "App de seguimiento": "Progress tracking app",
  "ESPARTANO": "SPARTAN",
  "El plan más popular. Sin límites.": "The most popular plan. No limits.",
  "Acceso a TODAS las disciplinas": "Access to ALL disciplines",
  "Lunes a sábado": "Monday to Saturday",
  "Sesiones ilimitadas": "Unlimited sessions",
  "Evaluación mensual": "Monthly assessment",
  "Plan nutricional básico": "Basic nutrition plan",
  "Acceso a open gym": "Open gym access",
  "ÉLITE": "ELITE",
  "Para competidores y obsesivos.": "For dedicated competitors.",
  "Todo lo del plan Espartano": "Everything in the Spartan plan",
  "Coaching 1-a-1 semanal": "Weekly 1-on-1 coaching",
  "Plan nutricional completo": "Full nutrition plan",
  "Análisis de rendimiento": "Performance analysis",
  "Acceso prioritario": "Priority access",
  "Invitado gratis 2x/mes": "Free guest twice a month",
  "EMPEZAR AHORA": "GET STARTED",
  "ELEGIR PLAN": "CHOOSE PLAN",
  "CROSSFIT · 2 AÑOS": "CROSSFIT · 2 YEARS",
  "MMA · 1 AÑO": "MMA · 1 YEAR",
  "MUAY THAI · 3 AÑOS": "MUAY THAI · 3 YEARS",
  "Llegué pesando 105kg sin poder hacer un pull-up. Ahora compito en regionales. FORJA me cambió la vida.": "I arrived at 105 kg unable to do a pull-up. Now I compete regionally. FORJA changed my life.",
  "El ambiente es brutal pero de la mejor manera. Los coaches realmente se preocupan por tu progreso. Es adictivo.": "The atmosphere is intense in the best way. The coaches care about your progress. It's addictive.",
  "Probé 5 gimnasios antes de llegar aquí. Ninguno tiene la energía, el equipo ni la comunidad de FORJA.": "I tried five gyms before FORJA. None had this energy, equipment, or community."
};
const EN_ATTRIBUTES = {
  "Abrir menú": "Open menu",
  "Coaches de FORJA": "FORJA coaches",
  "ROMPE TUS LÍMITES.": "BREAK YOUR LIMITS."
};

let currentLanguage = "es";
function initLanguageSwitch() {
  const buttons = document.querySelectorAll(".language-btn");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const key = node.nodeValue.trim().replace(/\s+/g, " ");
    const plain = key.replace(/^"|"$/g, "");
    if (plain && EN_TEXT[plain]) nodes.push({ node, original: node.nodeValue, key: plain, quoted: plain !== key });
  }
  const attributes = [];
  document.querySelectorAll("[alt], [aria-label], [data-text]").forEach((element) => {
    ["alt", "aria-label", "data-text"].forEach((name) => {
      const original = element.getAttribute(name);
      if (original && EN_ATTRIBUTES[original]) attributes.push({ element, name, original });
    });
  });

  function setLanguage(language) {
    if (language !== "es" && language !== "en") return;
    currentLanguage = language;
    const english = language === "en";
    document.documentElement.lang = language;
    document.title = english ? "FORJA — CrossFit & Martial Arts | Train Beyond Limits" : "FORJA — Crossfit & Artes Marciales | Entrena Sin Límites";
    document.querySelector('meta[name="description"]').content = english
      ? "FORJA is a bilingual gym landing page concept with martial arts, membership plans, a calorie estimator, and a demo class booking."
      : "FORJA — Box de entrenamiento de alto rendimiento. Crossfit, MMA y artes marciales. Prueba tu primera clase GRATIS. Fuerza, disciplina y adrenalina.";
    nodes.forEach(({ node, original, key, quoted }) => {
      if (!english) node.nodeValue = original;
      else {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = leading + (quoted ? '"' : "") + EN_TEXT[key] + (quoted ? '"' : "") + trailing;
      }
    });
    attributes.forEach(({ element, name, original }) => element.setAttribute(name, english ? EN_ATTRIBUTES[original] : original));
    buttons.forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (window.bookingSelection) window.renderBookingSummary();
  }
  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  setLanguage("es");
}

function initDemoBooking() {
  const dialog = document.getElementById("bookingDialog");
  const form = document.getElementById("bookingForm");
  const success = document.getElementById("bookingSuccess");
  const dateInput = document.getElementById("bookingDate");
  const date = new Date();
  dateInput.min = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");

  window.renderBookingSummary = () => {
    const selection = window.bookingSelection;
    if (!selection) return;
    const [year, month, day] = selection.date.split("-").map(Number);
    const formatted = new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : "es-SV", {
      year: "numeric", month: "long", day: "numeric"
    }).format(new Date(year, month - 1, day));
    const discipline = document.querySelector('#bookingDiscipline option[value="' + selection.discipline + '"]');
    const label = discipline ? discipline.textContent : selection.discipline;
    document.getElementById("bookingSummary").textContent = currentLanguage === "en"
      ? label + " · " + formatted + " at " + selection.time + ". This is a preview only."
      : label + " · " + formatted + " a las " + selection.time + ". Esta es solo una vista previa.";
  };

  document.querySelectorAll(".booking-trigger").forEach((button) => button.addEventListener("click", () => {
    form.reset();
    success.hidden = true;
    form.hidden = false;
    window.bookingSelection = null;
    dialog.showModal();
  }));
  dialog.querySelector(".booking-dialog__close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".booking-done").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (dateInput.value < dateInput.min) {
      dateInput.setCustomValidity(currentLanguage === "en" ? "Choose a future date." : "Elige una fecha futura.");
      dateInput.reportValidity();
      return;
    }
    dateInput.setCustomValidity("");
    window.bookingSelection = {
      discipline: document.getElementById("bookingDiscipline").value,
      date: dateInput.value,
      time: document.getElementById("bookingTime").value
    };
    window.renderBookingSummary();
    form.hidden = true;
    success.hidden = false;
  });
  dateInput.addEventListener("input", () => dateInput.setCustomValidity(""));
}

document.addEventListener("DOMContentLoaded", () => {
  renderDisciplines();
  renderPlans();
  renderReviews();
  initCalculator();
  initHeaderScroll();
  initMobileNav();
  initReveal();
  initSmoothScroll();
  initDemoBooking();
  initLanguageSwitch();
});
