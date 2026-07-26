const CONFIG = {
  // ✏️ EDITA: tu número de WhatsApp Business
  whatsappNumber: "50370000000",

  // ✏️ EDITA: teléfono fijo
  phoneNumber: "+50322000000",

  // ✏️ EDITA: disciplinas del gym
  disciplines: [
    {
      icon: "🏋️",
      name: "CROSSFIT",
      desc: "WODs brutales, levantamiento olímpico y gimnásticos. Cada día es diferente, cada día es más fuerte.",
      tags: ["FUERZA", "CARDIO", "FLEXIBILIDAD"],
    },
    {
      icon: "🥊",
      name: "MMA",
      desc: "Artes marciales mixtas completas. Striking, clinch, ground game. Entrena como un luchador profesional.",
      tags: ["COMBATE", "RESISTENCIA", "TÉCNICA"],
    },
    {
      icon: "🦵",
      name: "MUAY THAI",
      desc: "El arte de los 8 miembros. Puños, codos, rodillas y patadas. Precisión y potencia devastadora.",
      tags: ["STRIKING", "COORDINACIÓN", "POTENCIA"],
    },
    {
      icon: "🤼",
      name: "BJJ",
      desc: "Jiu-Jitsu Brasileño. Sumisiones, barridos y control posicional. El ajedrez del combate.",
      tags: ["GRAPPLING", "ESTRATEGIA", "FLEXIBILIDAD"],
    },
    {
      icon: "🥋",
      name: "BOXEO",
      desc: "El dulce arte de golpear. Jab, cross, hook, uppercut. Footwork y defensa de élite.",
      tags: ["CARDIO", "REFLEJOS", "DISCIPLINA"],
    },
    {
      icon: "💪",
      name: "FUERZA",
      desc: "Programación de fuerza pura. Squat, deadlift, bench, press. Mueve peso serio.",
      tags: ["POWERLIFTING", "HIPERTROFIA", "CORE"],
    },
  ],

  // ✏️ EDITA: planes de membresía
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

  // ✏️ EDITA: testimonios
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
      <span class="disc-card__icon">${d.icon}</span>
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
        ${p.featured ? "⚡ EMPEZAR AHORA" : "ELEGIR PLAN"}
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

function initWhatsappLinks() {
  document.querySelectorAll(".whatsapp-btn").forEach((btn) => {
    const msg =
      btn.getAttribute("data-wa-msg") ||
      "Hola, quiero info sobre FORJA.";
    btn.href =
      "https://wa.me/" +
      CONFIG.whatsappNumber +
      "?text=" +
      encodeURIComponent(msg);
    btn.target = "_blank";
    btn.rel = "noopener";
  });
}

function initPhoneLinks() {
  const phoneBtn = document.getElementById("ctaPhoneBtn");
  if (phoneBtn) phoneBtn.href = "tel:" + CONFIG.phoneNumber;
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

document.addEventListener("DOMContentLoaded", () => {
  renderDisciplines();
  renderPlans();
  renderReviews();
  initCalculator();
  initWhatsappLinks();
  initPhoneLinks();
  initHeaderScroll();
  initMobileNav();
  initReveal();
  initSmoothScroll();
});
