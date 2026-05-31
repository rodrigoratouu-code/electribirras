const IDEAS = [
  {
    id: 15,
    name: 'Engineering as Marketing',
    category: 'Herramientas gratuitas',
    description: 'Crea una utilidad online gratis que resuelva un problema real de tu audiencia.',
    stages: ['prelaunch', 'early', 'growth'],
    budgets: ['free', 'low'],
    goals: ['leads', 'lowbudget', 'productled'],
    steps: ['Identifica la pregunta que tu cliente hace antes de comprar', 'Construye una mini-herramienta (calculadora, auditor, generador)', 'Captura el email para desbloquear el resultado completo'],
    outcome: 'Tráfico cualificado y leads recurrentes sin depender solo de ads.',
    resources: 'Tiempo: 2–4 semanas · Presupuesto: bajo · Skills: desarrollo web'
  },
  {
    id: 17,
    name: 'Quiz Marketing',
    category: 'Herramientas gratuitas',
    description: 'Un quiz interactivo que cualifica leads mientras entretiene y educa.',
    stages: ['early', 'growth'],
    budgets: ['free', 'low'],
    goals: ['leads', 'lowbudget'],
    steps: ['Define 5–7 preguntas sobre el dolor del cliente', 'Segmenta resultados en 3 perfiles distintos', 'Ofrece CTA personalizado según el perfil obtenido'],
    outcome: 'Mayor tasa de conversión que un formulario estático y contenido compartible.',
    resources: 'Tiempo: 1 semana · Presupuesto: mínimo · Skills: copywriting'
  },
  {
    id: 18,
    name: 'Calculator Marketing',
    category: 'Herramientas gratuitas',
    description: 'Calculadora de ROI, ahorro o precio que posiciona tu expertise.',
    stages: ['early', 'growth', 'scale'],
    budgets: ['free', 'low'],
    goals: ['leads', 'authority'],
    steps: ['Elige una métrica que tu cliente necesita calcular', 'Publica la herramienta con URL optimizada para SEO', 'Enlaza desde blog, ads y email signature'],
    outcome: 'Rankings en búsquedas de alta intención y backlinks naturales.',
    resources: 'Tiempo: 1–2 semanas · Presupuesto: bajo'
  },
  {
    id: 1,
    name: 'Easy Keyword Ranking',
    category: 'Contenido & SEO',
    description: 'Ataca keywords de baja competencia donde puedes rankear en semanas.',
    stages: ['early', 'growth'],
    budgets: ['free'],
    goals: ['lowbudget', 'authority'],
    steps: ['Busca long-tail con KD bajo en tu nicho', 'Crea landing o artículo ultra-específico', 'Interlinka desde tu home y publica en redes'],
    outcome: 'Tráfico orgánico constante con inversión mínima.',
    resources: 'Tiempo: continuo · Presupuesto: gratis'
  },
  {
    id: 4,
    name: 'Programmatic SEO',
    category: 'Contenido & SEO',
    description: 'Genera páginas a escala con plantillas: ubicaciones, comparativas, integraciones.',
    stages: ['growth', 'scale'],
    budgets: ['low', 'medium'],
    goals: ['leads', 'authority'],
    steps: ['Identifica un patrón de búsqueda repetible', 'Diseña plantilla + dataset (ciudades, sectores…)', 'Lanza 50–500 páginas indexables de calidad'],
    outcome: 'Volumen masivo de tráfico long-tail cualificado.',
    resources: 'Tiempo: 4–8 semanas · Presupuesto: medio · Skills: dev + SEO'
  },
  {
    id: 11,
    name: 'Páginas de comparación',
    category: 'Competencia',
    description: 'Páginas "[Tu marca] vs [Competidor]" para capturar búsquedas de alta intención.',
    stages: ['growth', 'scale'],
    budgets: ['free', 'low'],
    goals: ['leads'],
    steps: ['Lista 3–5 competidores directos', 'Compara features, precio y casos de uso con honestidad', 'Optimiza meta title y schema FAQ'],
    outcome: 'Conversión de usuarios que ya están evaluando opciones.',
    resources: 'Tiempo: 3–5 días por página · Presupuesto: bajo'
  },
  {
    id: 31,
    name: 'Google Ads de alta intención',
    category: 'Paid Ads',
    description: 'Captura búsquedas con intención de compra: marca, categoría y competidores.',
    stages: ['early', 'growth', 'scale'],
    budgets: ['low', 'medium', 'high'],
    goals: ['leads'],
    steps: ['Estructura campañas por intención (brand / generic / competitor)', 'Landing dedicada por grupo de anuncios', 'Mide CPL y escala lo que convierte'],
    outcome: 'Leads inmediatos mientras el SEO madura.',
    resources: 'Tiempo: setup 1 semana · Presupuesto: variable · Skills: Google Ads'
  },
  {
    id: 28,
    name: 'LinkedIn Ads B2B',
    category: 'Paid Ads',
    description: 'Segmentación por cargo, sector y tamaño de empresa para ventas B2B.',
    stages: ['growth', 'scale'],
    budgets: ['medium', 'high'],
    goals: ['leads', 'authority'],
    steps: ['Define ICP: cargo + industria + empresa', 'Prueba lead gen forms vs landing externa', 'Retargeting a visitantes del sitio'],
    outcome: 'Pipeline B2B predecible con CPL más alto pero LTV mayor.',
    resources: 'Presupuesto: medio-alto · Skills: LinkedIn Campaign Manager'
  },
  {
    id: 38,
    name: 'Reddit Marketing',
    category: 'Social & Community',
    description: 'Participa en subreddits relevantes con valor genuino antes de promocionar.',
    stages: ['early', 'growth'],
    budgets: ['free'],
    goals: ['lowbudget', 'authority'],
    steps: ['Identifica 5 subreddits donde está tu audiencia', 'Responde preguntas durante 2 semanas sin vender', 'Comparte recursos propios cuando aporten valor real'],
    outcome: 'Tráfico de nicho y credibilidad en comunidades activas.',
    resources: 'Tiempo: 30 min/día · Presupuesto: gratis'
  },
  {
    id: 35,
    name: 'Community Marketing',
    category: 'Social & Community',
    description: 'Construye un espacio propio: Slack, Discord o grupo donde tu audiencia se reúna.',
    stages: ['early', 'growth', 'scale'],
    budgets: ['free', 'low'],
    goals: ['authority', 'productled'],
    steps: ['Define la promesa del espacio (no solo tu producto)', 'Invita a 20 miembros fundadores manualmente', 'Facilita conversaciones semanales con temas guía'],
    outcome: 'Retención, feedback directo y boca a boca orgánico.',
    resources: 'Tiempo: continuo · Presupuesto: bajo'
  },
  {
    id: 47,
    name: 'Email del fundador',
    category: 'Email',
    description: 'Email de bienvenida personal del fundador que humaniza la marca.',
    stages: ['prelaunch', 'early'],
    budgets: ['free'],
    goals: ['leads', 'lowbudget', 'productled'],
    steps: ['Escribe en primera persona contando el "por qué"', 'Incluye una sola acción clara (responder, agendar, probar)', 'Automatiza pero mantén tono humano'],
    outcome: 'Mayor apertura y conexión emocional vs emails genéricos.',
    resources: 'Tiempo: 2 horas · Presupuesto: gratis'
  },
  {
    id: 51,
    name: 'Secuencia de onboarding',
    category: 'Email',
    description: 'Serie de emails que guía al usuario hasta su primer valor ("aha moment").',
    stages: ['early', 'growth'],
    budgets: ['free', 'low'],
    goals: ['productled'],
    steps: ['Mapea el camino hasta la activación', 'Escribe 5–7 emails con un CTA cada uno', 'Mide apertura y click en cada paso'],
    outcome: 'Menos churn y más usuarios que llegan al valor rápido.',
    resources: 'Tiempo: 1 semana · Herramienta: MailerLite, Brevo, etc.'
  },
  {
    id: 78,
    name: 'Lanzamiento Product Hunt',
    category: 'Lanzamientos',
    description: 'Lanzamiento coordinado en Product Hunt para visibilidad y backlinks.',
    stages: ['prelaunch', 'early'],
    budgets: ['free', 'low'],
    goals: ['leads', 'authority'],
    steps: ['Prepara assets, video demo y primeros comentarios', 'Moviliza comunidad el día D a las 00:01 PT', 'Responde cada comentario en las primeras 24h'],
    outcome: 'Pico de tráfico, early adopters y señal social.',
    resources: 'Tiempo: 2 semanas prep · Presupuesto: bajo'
  },
  {
    id: 79,
    name: 'Waitlist con referidos',
    category: 'Lanzamientos',
    description: 'Lista de espera donde invitar amigos sube tu posición en la cola.',
    stages: ['prelaunch'],
    budgets: ['free', 'low'],
    goals: ['leads', 'productled'],
    steps: ['Landing simple con propuesta de valor clara', 'Sistema de puntos por referido (viral loop)', 'Updates semanales por email a la waitlist'],
    outcome: 'Base de emails pre-lanzamiento con crecimiento viral.',
    resources: 'Tiempo: 1 semana · Skills: landing + email'
  },
  {
    id: 87,
    name: 'Powered-by Marketing',
    category: 'Product-Led',
    description: '"Powered by [Tu marca]" en productos de clientes como distribución pasiva.',
    stages: ['growth', 'scale'],
    budgets: ['free'],
    goals: ['productled', 'leads'],
    steps: ['Añade badge discreto pero visible en plan gratuito', 'Enlaza a landing optimizada para conversión', 'Ofrece incentivo por upgrade que quite el badge'],
    outcome: 'Cada cliente se convierte en canal de adquisición.',
    resources: 'Tiempo: dev 2–3 días · Presupuesto: gratis'
  },
  {
    id: 93,
    name: 'Viral Loops',
    category: 'Product-Led',
    description: 'Mecánica donde usar el producto invita naturalmente a otros usuarios.',
    stages: ['early', 'growth'],
    budgets: ['low', 'medium'],
    goals: ['productled', 'leads'],
    steps: ['Identifica acción que requiere colaboración o compartir', 'Incentiva ambos lados (referidor + referido)', 'Mide k-factor y optimiza el funnel'],
    outcome: 'Crecimiento compuesto sin CAC lineal.',
    resources: 'Tiempo: 2–4 semanas dev · Presupuesto: medio'
  },
  {
    id: 70,
    name: 'Conference Speaking',
    category: 'Eventos',
    description: 'Charlas en eventos del sector para autoridad y networking directo.',
    stages: ['growth', 'scale'],
    budgets: ['low', 'medium'],
    goals: ['authority'],
    steps: ['Propón charla con datos propios o case study único', 'Graba y repurpose en LinkedIn y YouTube', 'Follow-up a asistentes en 48h'],
    outcome: 'Pipeline de alto valor y posicionamiento experto.',
    resources: 'Tiempo: prep 10–20h · Presupuesto: viaje/evento'
  },
  {
    id: 107,
    name: 'Podcast propio o invitado',
    category: 'Contenido',
    description: 'Serie de episodios o tour como invitado en podcasts del nicho.',
    stages: ['early', 'growth', 'scale'],
    budgets: ['free', 'low'],
    goals: ['authority', 'lowbudget'],
    steps: ['Lista 20 podcasts donde está tu ICP', 'Pitch con 3 temas concretos (no genéricos)', 'Incluye CTA único y trackeable por episodio'],
    outcome: 'Audiencia fiel y confianza de largo plazo.',
    resources: 'Tiempo: 2–4h/episodio · Presupuesto: bajo'
  },
  {
    id: 3,
    name: 'Glossary Marketing',
    category: 'Contenido & SEO',
    description: 'Glosario de términos del sector: cada definición es una página SEO.',
    stages: ['early', 'growth'],
    budgets: ['free', 'low'],
    goals: ['authority', 'lowbudget'],
    steps: ['Lista 30–50 términos que busca tu audiencia', 'Plantilla: definición + ejemplo + CTA suave', 'Interlinka términos relacionados'],
    outcome: 'Dominio topical y tráfico de "qué es X".',
    resources: 'Tiempo: continuo · Presupuesto: bajo · Ideal para agencias'
  },
  {
    id: 21,
    name: 'Website Scanner',
    category: 'Herramientas gratuitas',
    description: 'Auditor web gratis: velocidad, SEO básico o accesibilidad.',
    stages: ['early', 'growth'],
    budgets: ['low', 'medium'],
    goals: ['leads'],
    steps: ['Elige 3–5 métricas que puedas analizar automáticamente', 'Informe visual con score y recomendaciones', 'CTA: "Te lo arreglamos nosotros"'],
    outcome: 'Lead magnet de alto valor para servicios web.',
    resources: 'Tiempo: 3–6 semanas · Presupuesto: medio · Perfecto para Electrobirras'
  }
];

const STEPS = [
  {
    key: 'business',
    title: '¿Qué tipo de negocio tienes?',
    options: [
      { value: 'ecommerce', label: 'E-commerce / Tienda online', icon: '🛒' },
      { value: 'saas', label: 'SaaS / Software', icon: '⚙️' },
      { value: 'local', label: 'Negocio local / Servicios', icon: '📍' },
      { value: 'agency', label: 'Agencia / Consultoría', icon: '🎯' },
      { value: 'startup', label: 'Startup en lanzamiento', icon: '🚀' }
    ]
  },
  {
    key: 'stage',
    title: '¿En qué etapa estás?',
    options: [
      { value: 'prelaunch', label: 'Pre-lanzamiento', desc: 'Aún no has lanzado' },
      { value: 'early', label: 'Etapa temprana', desc: 'Primeros clientes' },
      { value: 'growth', label: 'Crecimiento', desc: 'Tracción y escalando' },
      { value: 'scale', label: 'Escala', desc: 'Equipos y procesos' }
    ]
  },
  {
    key: 'budget',
    title: '¿Presupuesto de marketing?',
    options: [
      { value: 'free', label: 'Gratis', desc: 'Solo tiempo' },
      { value: 'low', label: 'Bajo', desc: '< 500 €/mes' },
      { value: 'medium', label: 'Medio', desc: '500 – 2.000 €/mes' },
      { value: 'high', label: 'Alto', desc: '> 2.000 €/mes' }
    ]
  },
  {
    key: 'goal',
    title: '¿Cuál es tu objetivo principal?',
    options: [
      { value: 'leads', label: 'Conseguir leads ya', desc: 'Resultados rápidos' },
      { value: 'authority', label: 'Construir autoridad', desc: 'Marca y confianza' },
      { value: 'lowbudget', label: 'Crecer sin budget', desc: 'Orgánico y creativo' },
      { value: 'productled', label: 'Crecimiento product-led', desc: 'El producto vende solo' }
    ]
  }
];

const BUSINESS_BOOST = {
  ecommerce: [18, 31, 33, 4],
  saas: [15, 93, 87, 51, 11],
  local: [1, 31, 38, 3],
  agency: [3, 21, 70, 107, 17],
  startup: [79, 78, 47, 15]
};

let currentStep = 0;
let answers = {};

function scoreIdeas() {
  const scored = IDEAS.map((idea) => {
    let score = 0;
    if (idea.stages.includes(answers.stage)) score += 3;
    if (idea.budgets.includes(answers.budget)) score += 2;
    if (idea.goals.includes(answers.goal)) score += 3;
    if (BUSINESS_BOOST[answers.business]?.includes(idea.id)) score += 2;
    return { ...idea, score };
  });

  return scored
    .filter((i) => i.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

function renderProgress() {
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  if (!fill || !label) return;
  const pct = ((currentStep + 1) / STEPS.length) * 100;
  fill.style.width = pct + '%';
  label.textContent = `Paso ${currentStep + 1} de ${STEPS.length}`;
}

function renderStep() {
  const container = document.getElementById('quiz-step');
  const step = STEPS[currentStep];
  if (!container || !step) return;

  container.innerHTML = `
    <h2 class="quiz-question">${step.title}</h2>
    <div class="quiz-options" role="radiogroup" aria-label="${step.title}">
      ${step.options.map((opt) => `
        <button type="button" class="quiz-option${answers[step.key] === opt.value ? ' selected' : ''}"
          data-value="${opt.value}" role="radio" aria-checked="${answers[step.key] === opt.value}">
          ${opt.icon ? `<span class="option-icon">${opt.icon}</span>` : ''}
          <span class="option-body">
            <span class="option-label">${opt.label}</span>
            ${opt.desc ? `<span class="option-desc">${opt.desc}</span>` : ''}
          </span>
        </button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.quiz-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      answers[step.key] = btn.dataset.value;
      container.querySelectorAll('.quiz-option').forEach((b) => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-checked', 'true');
      document.getElementById('btn-next').disabled = false;
    });
  });

  document.getElementById('btn-back').disabled = currentStep === 0;
  document.getElementById('btn-next').disabled = !answers[step.key];
  document.getElementById('btn-next').textContent =
    currentStep === STEPS.length - 1 ? 'Ver mis ideas →' : 'Siguiente →';

  renderProgress();
}

function renderResults() {
  const ideas = scoreIdeas();
  const quiz = document.getElementById('quiz-panel');
  const results = document.getElementById('results-panel');
  if (!quiz || !results) return;

  quiz.hidden = true;
  results.hidden = false;

  const businessLabel = STEPS[0].options.find((o) => o.value === answers.business)?.label || '';
  const stageLabel = STEPS[1].options.find((o) => o.value === answers.stage)?.label || '';
  const goalLabel = STEPS[3].options.find((o) => o.value === answers.goal)?.label || '';

  document.getElementById('results-summary').textContent =
    `${businessLabel} · ${stageLabel} · Objetivo: ${goalLabel}`;

  document.getElementById('ideas-list').innerHTML = ideas.map((idea, i) => `
    <article class="idea-card" style="animation-delay: ${i * 0.1}s">
      <header class="idea-header">
        <span class="idea-rank">#${i + 1}</span>
        <span class="idea-category">${idea.category}</span>
      </header>
      <h3 class="idea-name">${idea.name}</h3>
      <p class="idea-desc">${idea.description}</p>
      <div class="idea-block">
        <h4>Por qué encaja contigo</h4>
        <p>Combina tu etapa (${stageLabel.toLowerCase()}), presupuesto y objetivo de ${goalLabel.toLowerCase()}.</p>
      </div>
      <div class="idea-block">
        <h4>Cómo empezar</h4>
        <ol>${idea.steps.map((s) => `<li>${s}</li>`).join('')}</ol>
      </div>
      <div class="idea-meta">
        <span class="idea-outcome"><strong>Resultado:</strong> ${idea.outcome}</span>
        <span class="idea-resources"><strong>Recursos:</strong> ${idea.resources}</span>
      </div>
    </article>
  `).join('');

  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('progress-label').textContent = '¡Listo!';
}

function resetQuiz() {
  currentStep = 0;
  answers = {};
  document.getElementById('quiz-panel').hidden = false;
  document.getElementById('results-panel').hidden = true;
  renderStep();
}

function copyPlan() {
  const cards = document.querySelectorAll('.idea-card');
  let text = 'PLAN DE MARKETING — Electrobirras Idea Finder\n\n';
  cards.forEach((card, i) => {
    text += `${i + 1}. ${card.querySelector('.idea-name').textContent}\n`;
    text += `${card.querySelector('.idea-desc').textContent}\n\n`;
  });
  text += 'Generado en electrobirras.com · Implementación: contacto@electrobirras.com';
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('btn-copy');
    const orig = btn.textContent;
    btn.textContent = '¡Copiado!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderStep();

  document.getElementById('btn-next').addEventListener('click', () => {
    if (!answers[STEPS[currentStep].key]) return;
    if (currentStep < STEPS.length - 1) {
      currentStep++;
      renderStep();
    } else {
      renderResults();
    }
  });

  document.getElementById('btn-back').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  });

  document.getElementById('btn-restart').addEventListener('click', resetQuiz);
  document.getElementById('btn-copy').addEventListener('click', copyPlan);
});
