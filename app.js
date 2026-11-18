// Main Application Orchestrator for "Lidera D1: Emociones que Mueven la Tienda"
// Standard Script Mode (Compatible with file:/// and web servers)
const PROGRAM_INFO = window.PROGRAM_INFO;
const PILLARS_EI = window.PILLARS_EI;
const LEADERSHIP_APPROACHES = window.LEADERSHIP_APPROACHES;
const BENCHMARKING_DATA = window.BENCHMARKING_DATA;
const WEEKS_DATA = window.WEEKS_DATA;
const METRICS_TABLE = window.METRICS_TABLE;
const OBSERVATION_RUBRIC = window.OBSERVATION_RUBRIC;
const SURVEY_QUESTIONS = window.SURVEY_QUESTIONS;
const ROLEPLAY_CASES = window.ROLEPLAY_CASES;
const D1_LOGO_BASE64 = window.D1_LOGO_BASE64;

// Route configuration
const ROUTES = {
  overview: { title: 'Inicio / Programa', render: renderOverview },
  roadmap: { title: 'Ruta 8 Semanas', render: renderRoadmap },
  pausa: { title: 'Herramienta PAUSA', render: renderPausaTool },
  pulso: { title: 'Pulso de Tienda', render: renderPulsoTienda },
  cases: { title: 'Simulador de Casos', render: renderRoleplayCases },
  feedback: { title: 'Feedback y Reconocimiento', render: renderFeedbackBuilder },
  kpis: { title: 'Indicadores y Métricas', render: renderKpiDashboard },
  dofa: { title: 'DOFA y Continuidad', render: renderDofaTracker }
};

// ==========================================
// 1. OVERVIEW VIEW
// ==========================================
function renderOverview(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-10">
      <!-- Hero Banner D1 Style -->
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 md:p-12 card-shadow relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="flex items-center gap-4">
            <img src="${window.D1_LOGO_BASE64 || 'logo-d1.png'}" alt="Logo Tiendas D1" class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white p-1.5 shadow-lg object-contain shrink-0">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-yellow-400 text-red-950 shadow-sm uppercase tracking-wider">
                  Programa de Formación • 8 Semanas
                </span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
                  Tiendas D1 Colombia
                </span>
              </div>
              <h1 class="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mt-1">
                Emociones que Mueven la Tienda
              </h1>
            </div>
          </div>
          <p class="text-red-100 text-sm md:text-base leading-relaxed font-medium">
            Articulación de Inteligencia Emocional y Liderazgo Operativo para Jefes de Tienda, Supervisores de Zona y Coordinadores de D1. Fortaleciendo la autorregulación, la comunicación asertiva y el manejo de conflictos sin separar el bienestar de las exigencias del hard discount.
          </p>
          <!-- CTAs -->
          <div class="pt-2 flex flex-wrap gap-3">
            <button id="hero-btn-roadmap" class="px-6 py-3 rounded-2xl bg-yellow-400 text-slate-950 font-black text-xs hover:bg-yellow-300 shadow-md transition-all flex items-center gap-2">
              <i data-lucide="map" class="w-4 h-4"></i> Explorar Ruta de 8 Semanas
            </button>
            <button id="hero-btn-pausa" class="px-6 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs backdrop-blur-sm transition-all flex items-center gap-2">
              <i data-lucide="shield-alert" class="w-4 h-4 text-yellow-300"></i> Probar Herramienta PAUSA
            </button>
            <button id="hero-btn-pulso" class="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2">
              <i data-lucide="activity" class="w-4 h-4 text-amber-400"></i> Pulso de Tienda
            </button>
          </div>
        </div>
        <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Duración del Programa</span>
          <span class="text-xl md:text-2xl font-black text-slate-900">${PROGRAM_INFO.duration}</span>
          <span class="text-[11px] text-slate-500 mt-1 block">8 módulos estructurados</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Dedicación Semanal</span>
          <span class="text-xl md:text-2xl font-black text-red-600">60–90 min</span>
          <span class="text-[11px] text-slate-500 mt-1 block">+ 10-15 min práctica diaria</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Población Objetivo</span>
          <span class="text-xl md:text-2xl font-black text-slate-900">Jefes y Supervisores</span>
          <span class="text-[11px] text-slate-500 mt-1 block">Líderes de piso de venta</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Enfoque Pedagógico</span>
          <span class="text-xl md:text-2xl font-black text-emerald-600">50% Simulación</span>
          <span class="text-[11px] text-slate-500 mt-1 block">Juego de roles y rúbricas</span>
        </div>
      </div>

      <!-- Problem Diagnosis & Operational Context -->
      <div class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 space-y-4">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-xl bg-red-100 text-red-700 font-black flex items-center justify-center text-sm">
            <i data-lucide="store" class="w-4 h-4"></i>
          </span>
          <div>
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Contexto Operativo</span>
            <h3 class="text-xl font-black text-slate-900">Diagnóstico del Problema en Tiendas D1</h3>
          </div>
        </div>
        <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
          En el modelo de descuento duro de Tiendas D1, las tiendas operan con equipos reducidos y alta rotación de tareas: descarga de camiones, estiba pesada, cobro en caja, surtido continuo y auditorías de mermas. Ante los picos de afluencia o demoras, la tensión suele trasladarse al equipo a través de instrucciones apresuradas o correcciones en público.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="font-bold text-slate-900 block mb-1 flex items-center gap-1.5 text-red-600">
              <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i> Presión por Indicadores
            </span>
            <p class="text-slate-600 text-[11px]">Traslado de la exigencia de metas mediante instrucciones centradas solo en fallas o mermas.</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="font-bold text-slate-900 block mb-1 flex items-center gap-1.5 text-amber-600">
              <i data-lucide="scale" class="w-3.5 h-3.5"></i> Cargas Desiguales
            </span>
            <p class="text-slate-600 text-[11px]">Percepción de favoritismo en la asignación de tareas pesadas (bodega/aseo vs caja).</p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span class="font-bold text-slate-900 block mb-1 flex items-center gap-1.5 text-blue-600">
              <i data-lucide="user-x" class="w-3.5 h-3.5"></i> Correcciones Impulsivas
            </span>
            <p class="text-slate-600 text-[11px]">Llamados de atención frente a clientes o compañeros que dañan la confianza y el clima.</p>
          </div>
        </div>
      </div>

      <!-- Unit 1: 5 Pillars of Emotional Intelligence -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Unidad Teórica 1</span>
            <h3 class="text-2xl font-black text-slate-900">Pilares de la Inteligencia Emocional en Tienda</h3>
          </div>
          <span class="text-xs text-slate-400 font-medium">Conductas Observables</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${PILLARS_EI.map(p => `
            <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100 flex flex-col justify-between space-y-4 card-hover">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-sm">
                    <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                  </div>
                  <h4 class="font-black text-base text-slate-900">${p.name}</h4>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed font-medium">
                  ${p.simpleExp}
                </p>
              </div>
              <div class="bg-red-50/50 p-3.5 rounded-2xl border border-red-100/60 text-[11px] text-slate-700">
                <strong class="text-red-900 block mb-0.5">En Tienda D1:</strong>
                ${p.storeApp}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Unit 2: 5 Leadership Approaches -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Unidad Teórica 2</span>
            <h3 class="text-2xl font-black text-slate-900">Enfoques de Liderazgo Articulados</h3>
          </div>
          <span class="text-xs text-slate-400 font-medium">Uso y Precauciones</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${LEADERSHIP_APPROACHES.map(item => `
            <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100 flex flex-col justify-between space-y-3 card-hover">
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="font-black text-sm text-slate-900">${item.name}</h4>
                  <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800">${item.badge}</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  <strong>Uso en tienda:</strong> ${item.use}
                </p>
              </div>
              <div class="bg-slate-50 p-3 rounded-xl border border-slate-200/60 text-[11px] text-slate-500">
                <strong class="text-slate-800">Precaución:</strong> ${item.precaution}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Benchmarking Matrix -->
      <div class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 space-y-6">
        <div class="border-b border-slate-100 pb-3">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-wider block">Referentes del Sector</span>
          <h3 class="text-xl font-black text-slate-900">Aprendizajes del Benchmarking</h3>
          <p class="text-xs text-slate-500">Buenas prácticas analizadas y traducidas al contexto específico de D1</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          ${BENCHMARKING_DATA.map(b => `
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <span class="font-extrabold text-sm text-slate-900 block">${b.referent}</span>
              <div>
                <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Aprendizaje Considerado</span>
                <p class="text-slate-600 leading-relaxed">${b.learning}</p>
              </div>
              <div class="pt-2 border-t border-slate-200/60">
                <span class="text-[10px] uppercase font-bold text-red-600 block mb-0.5">Adaptación en Lidera D1</span>
                <p class="text-slate-800 font-medium leading-relaxed">${b.adaptation}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('hero-btn-roadmap')?.addEventListener('click', () => { window.location.hash = '#roadmap'; });
  document.getElementById('hero-btn-pausa')?.addEventListener('click', () => { window.location.hash = '#pausa'; });
  document.getElementById('hero-btn-pulso')?.addEventListener('click', () => { window.location.hash = '#pulso'; });

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 2. ROADMAP VIEW
// ==========================================
function renderRoadmap(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header / Filter bar -->
      <div class="bg-white p-6 rounded-2xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 mb-2">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Estructura Semanal Oficial
          </span>
          <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight">Ruta de Formación: 8 Semanas en Tienda</h2>
          <p class="text-slate-500 text-sm mt-1">
            Diseño pedagógico: 20% conceptual, 50% simulación guiada, 20% aplicación en piso y 10% evaluación.
          </p>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <button id="btn-filter-all" class="filter-pill active px-4 py-2 rounded-xl text-xs font-bold transition-all bg-red-600 text-white shadow-sm">
            Todas (8)
          </button>
          <button id="btn-filter-f1" class="filter-pill px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">
            Fase 1: Diagnóstico (1-2)
          </button>
          <button id="btn-filter-f2" class="filter-pill px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">
            Fase 2: Herramientas (3-5)
          </button>
          <button id="btn-filter-f3" class="filter-pill px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">
            Fase 3: Transferencia (6-8)
          </button>
        </div>
      </div>

      <!-- Timeline Grid -->
      <div id="weeks-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${renderWeekCards(WEEKS_DATA)}
      </div>

      <!-- Modal container for week details -->
      <div id="week-detail-modal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div id="week-modal-content" class="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto card-shadow p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        </div>
      </div>
    </div>
  `;

  attachRoadmapEvents();
  if (window.lucide) window.lucide.createIcons();
}

function renderWeekCards(weeks) {
  return weeks.map(item => `
    <div class="week-card group bg-white rounded-2xl p-5 card-shadow border border-slate-100 flex flex-col justify-between card-hover cursor-pointer" data-week="${item.week}">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl font-black text-sm bg-red-600 text-yellow-300 shadow-sm">
            ${item.week}
          </span>
          <span class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            <i data-lucide="clock" class="w-3 h-3 text-slate-400"></i> ${item.duration}
          </span>
        </div>

        <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-red-600 transition-colors">
          ${item.title}
        </h3>

        <div class="mt-3 space-y-1.5">
          <div class="text-[11px] font-medium text-slate-600 flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg">
            <i data-lucide="brain" class="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5"></i>
            <span class="line-clamp-2"><strong>IE:</strong> ${item.competencyEI}</span>
          </div>
          <div class="text-[11px] font-medium text-slate-600 flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg">
            <i data-lucide="compass" class="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5"></i>
            <span class="line-clamp-2"><strong>Liderazgo:</strong> ${item.leadershipStyle}</span>
          </div>
        </div>

        <p class="text-xs text-slate-500 mt-3 line-clamp-3">
          ${item.objective}
        </p>
      </div>

      <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="font-semibold text-red-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Ver Ficha Completa <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </span>
        <span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
          ${item.target.split(' ')[0]} ${item.target.split(' ')[1] || ''}
        </span>
      </div>
    </div>
  `).join('');
}

function attachRoadmapEvents() {
  document.querySelectorAll('.week-card').forEach(card => {
    card.addEventListener('click', () => {
      const weekNum = parseInt(card.getAttribute('data-week'));
      openWeekModal(weekNum);
    });
  });

  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('bg-red-600', 'text-white', 'shadow-sm');
        p.classList.add('bg-slate-100', 'text-slate-600');
      });
      pill.classList.remove('bg-slate-100', 'text-slate-600');
      pill.classList.add('bg-red-600', 'text-white', 'shadow-sm');

      const grid = document.getElementById('weeks-grid');
      if (pill.id === 'btn-filter-all') {
        grid.innerHTML = renderWeekCards(WEEKS_DATA);
      } else if (pill.id === 'btn-filter-f1') {
        grid.innerHTML = renderWeekCards(WEEKS_DATA.filter(w => w.week <= 2));
      } else if (pill.id === 'btn-filter-f2') {
        grid.innerHTML = renderWeekCards(WEEKS_DATA.filter(w => w.week >= 3 && w.week <= 5));
      } else if (pill.id === 'btn-filter-f3') {
        grid.innerHTML = renderWeekCards(WEEKS_DATA.filter(w => w.week >= 6));
      }
      attachRoadmapEvents();
      if (window.lucide) window.lucide.createIcons();
    });
  });
}

function openWeekModal(weekNum) {
  const item = WEEKS_DATA.find(w => w.week === weekNum);
  if (!item) return;

  const modal = document.getElementById('week-detail-modal');
  const modalContent = document.getElementById('week-modal-content');

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-start justify-between border-b border-slate-100 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-red-600 text-yellow-300 font-black text-xl flex items-center justify-center shadow-md">
            ${item.week}
          </div>
          <div>
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider">Módulo Semanal Oficial</span>
            <h3 class="text-xl md:text-2xl font-black text-slate-900">${item.title}</h3>
            <span class="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-0.5">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i> Duración estimada: ${item.duration}
            </span>
          </div>
        </div>
        <button id="close-week-modal" class="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-red-50/60 p-4 rounded-2xl border border-red-100">
          <span class="text-xs font-bold text-red-800 uppercase flex items-center gap-1.5 mb-1">
            <i data-lucide="brain" class="w-4 h-4 text-red-600"></i> Competencia Inteligencia Emocional
          </span>
          <p class="text-sm font-semibold text-slate-900">${item.competencyEI}</p>
        </div>
        <div class="bg-amber-50/60 p-4 rounded-2xl border border-amber-100">
          <span class="text-xs font-bold text-amber-800 uppercase flex items-center gap-1.5 mb-1">
            <i data-lucide="compass" class="w-4 h-4 text-amber-600"></i> Enfoque de Liderazgo
          </span>
          <p class="text-sm font-semibold text-slate-900">${item.leadershipStyle}</p>
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <h4 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Objetivo del Taller</h4>
          <p class="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-medium">
            ${item.objective}
          </p>
        </div>
        <div>
          <h4 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">Fundamento Teórico</h4>
          <p class="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            ${item.theoreticalBasis}
          </p>
        </div>
      </div>

      <div>
        <h4 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Procedimiento Operativo Paso a Paso</h4>
        <div class="space-y-2">
          ${item.procedure.map((step, idx) => `
            <div class="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 text-xs text-slate-700">
              <span class="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                ${idx + 1}
              </span>
              <span class="leading-relaxed font-medium">${step}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-inner">
        <span class="text-xs font-bold text-yellow-400 uppercase flex items-center gap-1.5 mb-1.5">
          <i data-lucide="store" class="w-4 h-4"></i> Caso Práctico en Tienda D1
        </span>
        <p class="text-xs text-slate-200 leading-relaxed">
          ${item.practicalCase}
        </p>
      </div>

      <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1 mb-0.5">
            <i data-lucide="target" class="w-3.5 h-3.5 text-emerald-600"></i> ${item.indicator}
          </span>
          <p class="text-xs text-emerald-950 font-mono">Fórmula: ${item.formula}</p>
        </div>
        <div class="shrink-0 bg-white px-3 py-2 rounded-xl border border-emerald-200 shadow-sm text-center">
          <span class="text-[10px] uppercase font-bold text-slate-400 block">Criterio / Meta</span>
          <span class="text-xs font-black text-emerald-700">${item.target}</span>
        </div>
      </div>

      <div class="flex justify-end gap-3 pt-3 border-t border-slate-100">
        <button id="btn-close-modal-footer" class="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
          Cerrar Ficha
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');

  document.getElementById('close-week-modal').addEventListener('click', () => modal.classList.add('hidden'));
  document.getElementById('btn-close-modal-footer').addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 3. PAUSA TOOL VIEW
// ==========================================
let currentPausaStep = 1;
const pausaFormData = { situacion: '', emocion: '', hechos: '', respuesta: '', evaluacion: '' };
let breatheInterval = null;
let breatheRunning = false;

function renderPausaTool(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 md:p-8 card-shadow relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-red-950 mb-3 shadow-sm">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Técnica de Autorregulación Operativa (Semana 3)
          </span>
          <h2 class="text-3xl font-black tracking-tight">Herramienta P.A.U.S.A.</h2>
          <p class="text-red-100 text-sm mt-2 leading-relaxed font-medium">
            Creada especialmente para situaciones de alta tensión en tienda D1: horas pico de fila, descuadres de caja, demoras de camión o fricciones entre colaboradores.
          </p>
        </div>
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 class="text-lg font-bold text-slate-900">Asistente Interactivo de Regulación</h3>
                <p class="text-xs text-slate-500">Aplica la técnica ante una situación tensa antes de intervenir</p>
              </div>
              <span id="pausa-step-indicator" class="text-xs font-bold px-3 py-1 rounded-xl bg-red-100 text-red-700">
                Paso 1 de 5
              </span>
            </div>

            <div id="pausa-wizard-body" class="space-y-6"></div>

            <div class="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
              <button id="btn-pausa-prev" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <i data-lucide="chevron-left" class="w-4 h-4 inline mr-1"></i> Anterior
              </button>
              <button id="btn-pausa-next" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-md transition-all">
                Siguiente Paso <i data-lucide="chevron-right" class="w-4 h-4 inline ml-1"></i>
              </button>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <i data-lucide="clipboard-list" class="w-4 h-4 text-red-600"></i> Bitácora de Prácticas PAUSA Registradas
              </h4>
              <span id="pausa-log-count" class="text-xs text-slate-400 font-semibold">0 registros</span>
            </div>
            <div id="pausa-log-list" class="space-y-3 text-xs text-slate-500"></div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="bg-slate-900 text-white rounded-3xl p-6 card-shadow relative overflow-hidden flex flex-col items-center text-center">
            <span class="text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-1">
              Desactivación Fisiológica (30 Segundos)
            </span>
            <h4 class="text-lg font-bold mb-4">Pausa de Regulación Consciente</h4>

            <div class="relative w-44 h-44 flex items-center justify-center my-4">
              <div id="breathe-ring" class="absolute inset-0 rounded-full bg-red-600/30 animate-pulse-ring"></div>
              <div id="breathe-circle" class="breathe-circle w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-yellow-400 shadow-lg flex flex-col items-center justify-center text-center p-2 text-white">
                <span id="breathe-label" class="text-xs font-extrabold tracking-wide uppercase">Prepárate</span>
                <span id="breathe-timer" class="text-2xl font-black">4s</span>
              </div>
            </div>

            <p id="breathe-instruction" class="text-xs text-slate-300 max-w-xs mb-5 font-medium min-h-[32px]">
              Presiona iniciar para regular tu ritmo cardíaco antes de intervenir en tienda.
            </p>

            <button id="btn-toggle-breathe" class="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-md transition-transform active:scale-95 flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i> Iniciar Pausa de 30s
            </button>
          </div>

          <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100 space-y-4">
            <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i> Detonantes Típicos en Tiendas D1
            </h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                <span class="font-bold text-amber-900 block mb-0.5">1. Fila de clientes y lentitud en cobro</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> Apresurar de mala manera al cajero.<br><strong>Respuesta PAUSA:</strong> Abrir caja de respaldo o ayudar a empacar mientras mantienes la calma.</p>
              </div>
              <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-100">
                <span class="font-bold text-rose-900 block mb-0.5">2. Mercancía mal ubicada o mal rotada</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> Gritar: '¿quién surtió esto tan mal?'.<br><strong>Respuesta PAUSA:</strong> Llamar al encargado en privado, mostrar el hecho objetivo y corregir el criterio.</p>
              </div>
              <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                <span class="font-bold text-blue-900 block mb-0.5">3. Queja por distribución de turno</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> 'Aquí mando yo y no se queje'.<br><strong>Respuesta PAUSA:</strong> Escuchar la dificultad objetiva y revisar la matriz de turnos equitativa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initPausaWizard();
  initBreathingCircle();
  renderPausaLogs();
  if (window.lucide) window.lucide.createIcons();
}

function initPausaWizard() {
  renderPausaStep(currentPausaStep);

  const btnNext = document.getElementById('btn-pausa-next');
  const btnPrev = document.getElementById('btn-pausa-prev');

  btnNext?.addEventListener('click', () => {
    saveCurrentPausaData(currentPausaStep);
    if (currentPausaStep < 5) {
      currentPausaStep++;
      renderPausaStep(currentPausaStep);
    } else {
      savePausaPractice();
    }
  });

  btnPrev?.addEventListener('click', () => {
    if (currentPausaStep > 1) {
      saveCurrentPausaData(currentPausaStep);
      currentPausaStep--;
      renderPausaStep(currentPausaStep);
    }
  });
}

function renderPausaStep(step) {
  const container = document.getElementById('pausa-wizard-body');
  const stepIndicator = document.getElementById('pausa-step-indicator');
  const btnPrev = document.getElementById('btn-pausa-prev');
  const btnNext = document.getElementById('btn-pausa-next');

  if (!container || !stepIndicator || !btnPrev || !btnNext) return;

  stepIndicator.textContent = `Paso ${step} de 5`;
  btnPrev.disabled = step === 1;

  if (step === 5) {
    btnNext.innerHTML = 'Guardar en Bitácora <i data-lucide="check-circle" class="w-4 h-4 inline ml-1"></i>';
    btnNext.className = 'px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all';
  } else {
    btnNext.innerHTML = 'Siguiente Paso <i data-lucide="chevron-right" class="w-4 h-4 inline ml-1"></i>';
    btnNext.className = 'px-6 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-md transition-all';
  }

  const stepsConfig = {
    1: {
      letter: "P",
      title: "Párate un instante",
      badge: "Pausa Consciente",
      desc: "Haz un alto breve (físico y mental). No respondas inmediatamente desde la aceleración del momento. Respira.",
      field: "situacion",
      label: "¿Qué situación operativa acaba de ocurrir en la tienda?",
      placeholder: "Ej: Llegó mercancía sin avisar, el datáfono no conecta y hay 8 personas en fila...",
      presetPrompt: "Seleccionar ejemplo rápido de D1:",
      presets: [
        "Descuadre de inventario de lácteos antes del cierre de tienda",
        "Colaborador llega 20 minutos tarde al relevo de caja en hora pico",
        "Discusión acalorada entre dos auxiliares por el aseo de bodega"
      ]
    },
    2: {
      letter: "A",
      title: "Atiende a tu emoción",
      badge: "Autoconciencia Emocional",
      desc: "Identifica qué estás sintiendo en este instante sin juzgarlo: ¿frustración, rabia, angustia, impotencia, agotamiento?",
      field: "emocion",
      label: "¿Cuál es la emoción predominante y qué señales sientes en el cuerpo?",
      placeholder: "Ej: Siento rabia y tensión en los hombros; tengo ganas de reclamar inmediatamente...",
      presetPrompt: "Emociones frecuentes en tienda:",
      presets: [
        "Frustración intensa y aceleración del ritmo cardíaco",
        "Angustia por incumplir el indicador de mermas o tiempo de fila",
        "Impotencia por la falta de personal y sensación de sobrecarga"
      ]
    },
    3: {
      letter: "U",
      title: "Ubica los hechos objetivos",
      badge: "Separación Hecho vs. Juicio",
      desc: "Separa la realidad verificable de tus interpretaciones. Evita generalizaciones como 'siempre me fallan' o 'son flojos'.",
      field: "hechos",
      label: "¿Cuáles son los datos concretos y observables sin adjetivos?",
      placeholder: "Ej: El auxiliar no ingresó 4 códigos de fecha en la planilla de las 5 PM. Faltan registrar $120.000 COP...",
      presetPrompt: "Hechos objetivos:",
      presets: [
        "La merma física no coincide en 12 unidades respecto al sistema",
        "El turno de apertura no completó el surtido del pasillo 1 a las 8:30 AM",
        "El cliente lleva 6 minutos esperando autorización de anulación"
      ]
    },
    4: {
      letter: "S",
      title: "Selecciona una respuesta útil",
      badge: "Liderazgo Consciente",
      desc: "Elige la conducta que resuelva la operación y preserve la dignidad y respeto del colaborador. Define tu tono de voz.",
      field: "respuesta",
      label: "¿Qué conducta o instrucción concreta vas a aplicar ahora?",
      placeholder: "Ej: Llamaré a Carlos a la oficina en privado, le mostraré el reporte físico, escucharé su motivo y fijaremos apoyo...",
      presetPrompt: "Respuestas constructivas:",
      presets: [
        "Conversar en privado, mostrar el hecho observable y acordar doble verificación",
        "Priorizar la fila abriendo caja de soporte y posponer el reclamo para el cambio de turno",
        "Escuchar la versión de ambas partes antes de tomar una decisión de distribución"
      ]
    },
    5: {
      letter: "A",
      title: "Actúa y revisa el impacto",
      badge: "Cierre y Evaluación",
      desc: "Ejecuta la respuesta acordada con serenidad y luego verifica si lograste desescalar la tensión y resolver el problema.",
      field: "evaluacion",
      label: "¿Cómo resultó la intervención y qué aprendes para la próxima vez?",
      placeholder: "Ej: Se corrigió la planilla sin discusiones. El auxiliar agradeció que no le llamara la atención en público...",
      presetPrompt: "Criterios de éxito:",
      presets: [
        "Se mantuvo el respeto mutuo y se estableció un acuerdo de verificación con fecha",
        "La operación se normalizó sin generar resentimiento en el equipo",
        "Evité una discusión innecesaria que habría afectado a los clientes en tienda"
      ]
    }
  };

  const curr = stepsConfig[step];
  container.innerHTML = `
    <div class="space-y-4 animate-in fade-in duration-150">
      <div class="flex items-center gap-3">
        <span class="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-yellow-400 text-white font-black text-2xl flex items-center justify-center shadow-md">
          ${curr.letter}
        </span>
        <div>
          <span class="text-xs font-bold text-red-600 uppercase tracking-wider">${curr.badge}</span>
          <h4 class="text-lg font-black text-slate-900">${curr.title}</h4>
        </div>
      </div>
      <p class="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
        ${curr.desc}
      </p>

      <div class="space-y-2 pt-2">
        <label class="block text-xs font-bold text-slate-800">${curr.label}</label>
        <textarea id="pausa-input" rows="3" class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all placeholder:text-slate-400 font-medium" placeholder="${curr.placeholder}">${pausaFormData[curr.field] || ''}</textarea>
      </div>

      <div class="pt-1">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">${curr.presetPrompt}</span>
        <div class="flex flex-wrap gap-1.5">
          ${curr.presets.map(p => `
            <button type="button" class="preset-btn text-[11px] font-semibold bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 px-2.5 py-1 rounded-lg transition-colors border border-slate-200/60">
              ${p}
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.textContent.trim();
      const input = document.getElementById('pausa-input');
      if (input) input.value = val;
      pausaFormData[curr.field] = val;
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function saveCurrentPausaData(step) {
  const fields = { 1: 'situacion', 2: 'emocion', 3: 'hechos', 4: 'respuesta', 5: 'evaluacion' };
  const input = document.getElementById('pausa-input');
  if (input) {
    pausaFormData[fields[step]] = input.value;
  }
}

function savePausaPractice() {
  saveCurrentPausaData(5);

  const logs = JSON.parse(localStorage.getItem('lidera_d1_pausa_logs') || '[]');
  const newEntry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
    situacion: pausaFormData.situacion || 'Situación en tienda',
    emocion: pausaFormData.emocion || 'No especificada',
    hechos: pausaFormData.hechos || 'No especificados',
    respuesta: pausaFormData.respuesta || 'Respuesta aplicada con éxito',
    evaluacion: pausaFormData.evaluacion || 'Completado'
  };

  logs.unshift(newEntry);
  localStorage.setItem('lidera_d1_pausa_logs', JSON.stringify(logs));

  currentPausaStep = 1;
  pausaFormData.situacion = '';
  pausaFormData.emocion = '';
  pausaFormData.hechos = '';
  pausaFormData.respuesta = '';
  pausaFormData.evaluacion = '';

  renderPausaStep(currentPausaStep);
  renderPausaLogs();

  if (window.confetti) {
    window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
  }
}

function renderPausaLogs() {
  const container = document.getElementById('pausa-log-list');
  const countSpan = document.getElementById('pausa-log-count');
  if (!container) return;

  const logs = JSON.parse(localStorage.getItem('lidera_d1_pausa_logs') || '[]');
  if (countSpan) countSpan.textContent = `${logs.length} registro${logs.length === 1 ? '' : 's'}`;

  if (logs.length === 0) {
    container.innerHTML = `<p class="text-center py-4 text-slate-400 italic">No has guardado prácticas aún. Completa el asistente para registrar tu primera aplicación real.</p>`;
    return;
  }

  container.innerHTML = logs.slice(0, 4).map(item => `
    <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
      <div class="flex items-center justify-between text-[11px] font-bold text-slate-800">
        <span class="text-red-700 truncate max-w-[200px]">${item.situacion}</span>
        <span class="text-slate-400 font-normal">${item.date}</span>
      </div>
      <p class="text-[11px] text-slate-600"><strong>Respuesta:</strong> ${item.respuesta}</p>
    </div>
  `).join('');
}

function initBreathingCircle() {
  const btn = document.getElementById('btn-toggle-breathe');
  const circle = document.getElementById('breathe-circle');
  const label = document.getElementById('breathe-label');
  const timer = document.getElementById('breathe-timer');
  const instruction = document.getElementById('breathe-instruction');

  if (!btn) return;

  btn.addEventListener('click', () => {
    if (breatheRunning) {
      stopBreathing();
    } else {
      startBreathing();
    }
  });

  function startBreathing() {
    breatheRunning = true;
    btn.innerHTML = '<i data-lucide="square" class="w-4 h-4"></i> Detener Pausa';
    btn.classList.replace('bg-yellow-400', 'bg-red-600');
    btn.classList.replace('text-slate-950', 'text-white');

    let totalSeconds = 30;
    let cycleTime = 0;

    breatheInterval = setInterval(() => {
      totalSeconds--;
      cycleTime = (cycleTime + 1) % 12;

      if (cycleTime < 4) {
        label.textContent = "INHALA";
        instruction.textContent = "Inhala profundamente por la nariz llevando el aire al abdomen...";
        circle.className = "breathe-circle inhale w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${4 - cycleTime}s`;
      } else if (cycleTime < 8) {
        label.textContent = "SOSTÉN";
        instruction.textContent = "Mantén el aire con serenidad, relaja hombros y mandíbula...";
        circle.className = "breathe-circle hold w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${8 - cycleTime}s`;
      } else {
        label.textContent = "EXHALA";
        instruction.textContent = "Suelta el aire lentamente por la boca liberando la tensión...";
        circle.className = "breathe-circle exhale w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${12 - cycleTime}s`;
      }

      if (totalSeconds <= 0) {
        stopBreathing();
        label.textContent = "¡LISTO!";
        timer.textContent = "30s";
        instruction.textContent = "Ritmo cardíaco regulado. Ahora puedes responder con liderazgo consciente.";
        if (window.confetti) window.confetti({ particleCount: 40, spread: 50 });
      }
    }, 1000);

    if (window.lucide) window.lucide.createIcons();
  }

  function stopBreathing() {
    breatheRunning = false;
    clearInterval(breatheInterval);
    btn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Iniciar Pausa de 30s';
    btn.classList.replace('bg-red-600', 'bg-yellow-400');
    btn.classList.replace('text-white', 'text-slate-950');
    circle.className = "breathe-circle w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-yellow-400 shadow-lg flex flex-col items-center justify-center text-center p-2 text-white";
    label.textContent = "PREPÁRATE";
    timer.textContent = "4s";
    if (window.lucide) window.lucide.createIcons();
  }
}

// ==========================================
// 4. PULSO DE TIENDA VIEW
// ==========================================
let selectedMorale = 4;

function renderPulsoTienda(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 mb-2 border border-amber-200">
            <i data-lucide="activity" class="w-3.5 h-3.5 text-amber-600"></i> Ritual Operativo Diario (Semana 7)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Pulso de Tienda</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Microritual de 5 a 10 minutos al iniciar el turno. Mide el clima emocional, define prioridades y previene sobrecargas.
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Meta Operativa</span>
            <span class="text-sm font-black text-slate-800">≥ 80% registros</span>
          </div>
          <div class="bg-red-50 p-3.5 rounded-2xl border border-red-200 text-center">
            <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider block">Registros Hoy</span>
            <span id="pulso-today-count" class="text-sm font-black text-red-700">0</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
          <div class="border-b border-slate-100 pb-3">
            <h3 class="font-extrabold text-slate-900 text-lg">Nuevo Registro de Turno</h3>
            <p class="text-xs text-slate-500">Diligencia antes de iniciar la jornada con tu equipo</p>
          </div>

          <form id="form-pulso-tienda" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Nombre o Número de Tienda D1</label>
                <input type="text" id="pulso-store" value="Tienda D1 - Poblado Central #142" required class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold text-slate-800">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">Turno Operativo</label>
                <select id="pulso-shift" class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold text-slate-800">
                  <option value="Apertura (6:00 AM - 2:00 PM)">Apertura (6:00 AM - 2:00 PM)</option>
                  <option value="Intermedio / Pico (10:00 AM - 6:00 PM)">Intermedio / Pico (10:00 AM - 6:00 PM)</option>
                  <option value="Cierre (1:30 PM - 9:30 PM)">Cierre (1:30 PM - 9:30 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-2">
                1. ¿Cuál es el nivel de energía y clima emocional percibido al arrancar?
              </label>
              <div class="grid grid-cols-5 gap-2 text-center" id="pulso-morale-group">
                <button type="button" data-val="1" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😫</span> Tenso (1)
                </button>
                <button type="button" data-val="2" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😟</span> Dudoso (2)
                </button>
                <button type="button" data-val="3" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😐</span> Neutro (3)
                </button>
                <button type="button" data-val="4" class="morale-btn active p-3 rounded-xl border-2 border-red-600 bg-red-50 text-xs font-bold text-red-900 transition-all">
                  <span class="text-2xl block mb-1">🙂</span> Motivado (4)
                </button>
                <button type="button" data-val="5" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">🔥</span> Enfocado (5)
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                2. Prioridad Crítica del Turno
              </label>
              <select id="pulso-priority" class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold text-slate-800">
                <option value="Agilidad en Cajas y Control de Filas (Hora Pico)">Agilidad en Cajas y Control de Filas (Hora Pico)</option>
                <option value="Recepción de Camión y Surtido de Abarrotes">Recepción de Camión y Surtido de Abarrotes</option>
                <option value="Auditoría de Fechas y Control de Mermas (Carnes y Lácteos)">Auditoría de Fechas y Control de Mermas (Carnes y Lácteos)</option>
                <option value="Aseo Profundo de Bodega y Piso de Venta">Aseo Profundo de Bodega y Piso de Venta</option>
                <option value="Cuadre y Cierre Administrativo Seguro">Cuadre y Cierre Administrativo Seguro</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                3. Alerta Operativa o Riesgo de Fricción
              </label>
              <input type="text" id="pulso-risk" placeholder="Ej: Falta 1 auxiliar por cita médica; posible congestión a las 12:30 PM..." class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                4. Acción Concreta de Respaldo del Líder
              </label>
              <input type="text" id="pulso-support" placeholder="Ej: Cubriré la caja 2 de 12:00 a 1:00 PM y verificaré el relevo con calma..." class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
            </div>

            <button type="submit" class="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs shadow-md hover:from-red-700 hover:to-rose-700 transition-all flex items-center justify-center gap-2">
              <i data-lucide="check-check" class="w-4 h-4"></i> Guardar Pulso de Turno y Notificar al Equipo
            </button>
          </form>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl card-shadow space-y-4">
            <span class="text-[11px] font-bold text-yellow-400 uppercase tracking-wider block">
              Indicador de Transferencia en Piso
            </span>
            <div class="flex items-baseline gap-2">
              <span id="pulso-compliance-rate" class="text-4xl font-black text-white">88%</span>
              <span class="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Meta Cumplida</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed font-medium">
              El 88% de los líderes de tienda documentan al menos dos aplicaciones reales semanales en su operación.
            </p>
          </div>

          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-slate-900">Historial Reciente de Pulsos</h4>
              <button id="btn-clear-pulso" class="text-[11px] font-bold text-slate-400 hover:text-red-600 transition-colors">Limpiar</button>
            </div>
            <div id="pulso-history-list" class="space-y-3"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  initPulsoEvents();
  renderPulsoHistory();
  if (window.lucide) window.lucide.createIcons();
}

function initPulsoEvents() {
  const moraleBtns = document.querySelectorAll('.morale-btn');
  moraleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moraleBtns.forEach(b => {
        b.classList.remove('border-2', 'border-red-600', 'bg-red-50', 'text-red-900');
        b.classList.add('border-slate-200', 'text-slate-600');
      });
      btn.classList.remove('border-slate-200', 'text-slate-600');
      btn.classList.add('border-2', 'border-red-600', 'bg-red-50', 'text-red-900');
      selectedMorale = parseInt(btn.getAttribute('data-val'));
    });
  });

  const form = document.getElementById('form-pulso-tienda');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const store = document.getElementById('pulso-store').value;
    const shift = document.getElementById('pulso-shift').value;
    const priority = document.getElementById('pulso-priority').value;
    const risk = document.getElementById('pulso-risk').value || 'Sin riesgos reportados';
    const support = document.getElementById('pulso-support').value || 'Acompañamiento en piso de venta';

    const history = JSON.parse(localStorage.getItem('lidera_d1_pulso_history') || '[]');
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
      store,
      shift,
      morale: selectedMorale,
      priority,
      risk,
      support
    };

    history.unshift(newEntry);
    localStorage.setItem('lidera_d1_pulso_history', JSON.stringify(history));

    document.getElementById('pulso-risk').value = '';
    document.getElementById('pulso-support').value = '';

    renderPulsoHistory();

    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  });

  const btnClear = document.getElementById('btn-clear-pulso');
  btnClear?.addEventListener('click', () => {
    if (confirm('¿Deseas reiniciar los registros de Pulso de Tienda?')) {
      localStorage.removeItem('lidera_d1_pulso_history');
      renderPulsoHistory();
    }
  });
}

function renderPulsoHistory() {
  const container = document.getElementById('pulso-history-list');
  const todaySpan = document.getElementById('pulso-today-count');
  if (!container) return;

  const defaultMock = [
    {
      id: 1,
      date: "Hoy, 06:15 AM",
      store: "Tienda D1 - Poblado Central #142",
      shift: "Apertura (6:00 AM - 2:00 PM)",
      morale: 4,
      priority: "Recepción de Camión y Surtido de Abarrotes",
      risk: "Camión con 15 min de retraso; coordinar descarga ágil",
      support: "Jefe de tienda apoyará estibando pasillo 2"
    },
    {
      id: 2,
      date: "Ayer, 01:45 PM",
      store: "Tienda D1 - Belén Parque #89",
      shift: "Cierre (1:30 PM - 9:30 PM)",
      morale: 3,
      priority: "Auditoría de Fechas y Control de Mermas",
      risk: "Revisar nevera de carnes frías con calma",
      support: "Retroalimentación en privado al auxiliar nuevo"
    }
  ];

  const saved = JSON.parse(localStorage.getItem('lidera_d1_pulso_history') || 'null');
  const data = saved || defaultMock;

  if (todaySpan) todaySpan.textContent = data.length.toString();

  const moraleEmojis = { 1: '😫', 2: '😟', 3: '😐', 4: '🙂', 5: '🔥' };

  container.innerHTML = data.slice(0, 5).map(item => `
    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
      <div class="flex items-center justify-between font-bold text-slate-800">
        <span class="flex items-center gap-1.5">
          <span class="text-base">${moraleEmojis[item.morale] || '🙂'}</span>
          <span class="truncate max-w-[180px]">${item.shift.split('(')[0]}</span>
        </span>
        <span class="text-[10px] font-semibold text-slate-400">${item.date}</span>
      </div>
      <p class="text-slate-600 text-[11px]"><strong>Prioridad:</strong> ${item.priority}</p>
      <div class="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-lg border border-amber-100">
        <strong>Apoyo del Líder:</strong> ${item.support}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 5. ROLEPLAY SIMULATOR VIEW
// ==========================================
function renderRoleplayCases(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 mb-2 border border-purple-200">
            <i data-lucide="gamepad-2" class="w-3.5 h-3.5 text-purple-600"></i> Simulación Conductual Guiada (50% Metodología)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Simulador de Decisiones en Tienda</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Enfrenta situaciones reales de presión operativa extraídas de los casos de Tiendas D1. Elige tu curso de acción y observa el impacto en el clima del equipo.
          </p>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1 shrink-0" id="case-selector-bar">
          ${ROLEPLAY_CASES.map((c, i) => `
            <button data-case-index="${i}" class="case-btn ${i === 0 ? 'active bg-red-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'} px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap">
              Caso ${i + 1}
            </button>
          `).join('')}
        </div>
      </div>

      <div id="case-active-view" class="space-y-6"></div>
    </div>
  `;

  initRoleplay(0);
  if (window.lucide) window.lucide.createIcons();
}

function initRoleplay(caseIndex) {
  const caseItem = ROLEPLAY_CASES[caseIndex];
  if (!caseItem) return;

  document.querySelectorAll('.case-btn').forEach((btn, idx) => {
    if (idx === caseIndex) {
      btn.className = 'case-btn active bg-red-600 text-white shadow-md px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap';
    } else {
      btn.className = 'case-btn bg-slate-100 text-slate-600 hover:bg-slate-200 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap';
    }
  });

  const view = document.getElementById('case-active-view');
  if (!view) return;

  view.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div class="lg:col-span-7 space-y-6">
        <div class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 space-y-5">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <span class="text-xs font-black text-red-600 uppercase tracking-wider">Escenario Operativo</span>
            <span class="text-xs font-bold text-slate-400">Tienda D1 en Vivo</span>
          </div>
          <h3 class="text-xl font-black text-slate-900 leading-snug">${caseItem.title}</h3>
          
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed font-medium">
            <p><strong>Contexto de tienda:</strong> ${caseItem.context}</p>
          </div>

          <div class="bg-amber-50/80 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed font-medium">
            <p class="flex items-center gap-2 font-bold mb-1">
              <i data-lucide="flame" class="w-4 h-4 text-amber-600"></i> Tu Estado Emocional Inicial:
            </p>
            ${caseItem.emotionalState}
          </div>

          <div class="pt-2">
            <h4 class="text-sm font-black text-slate-900 mb-3">${caseItem.question}</h4>
            <div class="space-y-3">
              ${caseItem.options.map(opt => `
                <button data-opt-id="${opt.id}" class="option-card w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-red-500 bg-white hover:bg-red-50/20 transition-all group flex items-start gap-3">
                  <span class="w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shrink-0 bg-slate-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    ${opt.id}
                  </span>
                  <span class="text-xs text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 pt-1">
                    ${opt.text}
                  </span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div id="option-feedback-panel" class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 text-center py-12 space-y-3">
          <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
            <i data-lucide="help-circle" class="w-8 h-8"></i>
          </div>
          <h4 class="text-sm font-bold text-slate-800">Selecciona una de las opciones</h4>
          <p class="text-xs text-slate-400 max-w-xs mx-auto">
            Descubre de inmediato la retroalimentación, el estilo de liderazgo que reflejas y la calificación en la rúbrica de observación.
          </p>
        </div>
      </div>
    </div>
  `;

  view.querySelectorAll('.option-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const optId = btn.getAttribute('data-opt-id');
      const chosenOpt = caseItem.options.find(o => o.id === optId);

      view.querySelectorAll('.option-card').forEach(b => {
        b.classList.remove('border-red-600', 'bg-red-50/40', 'border-emerald-600', 'bg-emerald-50/40');
        b.classList.add('border-slate-200');
      });

      if (chosenOpt.isOptimal) {
        btn.classList.add('border-emerald-600', 'bg-emerald-50/40');
      } else {
        btn.classList.add('border-red-600', 'bg-red-50/40');
      }

      renderOptionAssessment(chosenOpt);
    });
  });

  document.querySelectorAll('.case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-case-index'));
      initRoleplay(idx);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderOptionAssessment(opt) {
  const panel = document.getElementById('option-feedback-panel');
  if (!panel) return;

  const scoreBadgeColors = {
    1: 'bg-red-100 text-red-800 border-red-200',
    2: 'bg-amber-100 text-amber-800 border-amber-200',
    3: 'bg-blue-100 text-blue-800 border-blue-200',
    4: 'bg-emerald-100 text-emerald-800 border-emerald-200'
  };

  panel.className = "bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 text-left space-y-5 animate-in fade-in duration-200";

  panel.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold ${scoreBadgeColors[opt.score]} border">
        Rúbrica de Liderazgo: Nivel ${opt.score}/4
      </span>
      <span class="text-xs font-bold ${opt.isOptimal ? 'text-emerald-600' : 'text-red-500'}">
        ${opt.isOptimal ? 'Conducta Óptima' : 'Oportunidad de Mejora'}
      </span>
    </div>

    <div class="space-y-2">
      <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Estilo de Liderazgo Reflejado</span>
        <p class="text-xs font-black text-slate-800">${opt.leadershipStyle}</p>
      </div>
      <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Inteligencia Emocional Observada</span>
        <p class="text-xs font-black text-slate-800">${opt.eiLevel}</p>
      </div>
    </div>

    <div>
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Impacto en la Tienda y en el Equipo</span>
      <p class="text-xs text-slate-700 leading-relaxed font-medium bg-red-50/50 p-3.5 rounded-xl border border-red-100/60">
        ${opt.impact}
      </p>
    </div>

    <div class="bg-slate-900 text-white p-4 rounded-2xl shadow-inner">
      <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block mb-1">
        Retroalimentación Pedagógica
      </span>
      <p class="text-xs text-slate-200 leading-relaxed">
        ${opt.feedback}
      </p>
    </div>
  `;

  if (opt.isOptimal && window.confetti) {
    window.confetti({ particleCount: 50, spread: 50 });
  }

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 6. FEEDBACK BUILDER VIEW
// ==========================================
function renderFeedbackBuilder(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 mb-2 border border-blue-200">
            <i data-lucide="message-square" class="w-3.5 h-3.5 text-blue-600"></i> Herramienta Conductual (Semana 5)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Constructor de Feedback y Reconocimiento</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Estructura conversaciones de mejora en privado y sin herir la dignidad del colaborador, y elabora reconocimientos sinceros y específicos que motiven al equipo.
          </p>
        </div>
        <div class="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl shrink-0">
          <button id="tab-btn-feedback" class="active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all">
            <i data-lucide="sliders" class="w-3.5 h-3.5 inline mr-1 text-red-600"></i> Feedback Correctivo
          </button>
          <button id="tab-btn-recognition" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all">
            <i data-lucide="award" class="w-3.5 h-3.5 inline mr-1 text-yellow-500"></i> Reconocimiento
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 space-y-6">
          <div id="feedback-form-panel" class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Método de los 4 Pasos</span>
              <h3 class="text-lg font-bold text-slate-900">Preparar Conversación de Retroalimentación</h3>
              <p class="text-xs text-slate-500">Recuerda: siempre en privado y centrado en conductas observables.</p>
            </div>

            <div class="space-y-4 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Nombre del Colaborador</label>
                  <input type="text" id="fb-collab-name" placeholder="Ej: Julián Gómez" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold">
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Cargo / Función</label>
                  <select id="fb-collab-role" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold">
                    <option value="Auxiliar de Tienda (Surtido e Inventario)">Auxiliar de Tienda (Surtido e Inventario)</option>
                    <option value="Cajero / Atención al Cliente">Cajero / Atención al Cliente</option>
                    <option value="Auxiliar de Carnes y Frío">Auxiliar de Carnes y Frío</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  1. Hecho Observable (Describe con datos exactos lo que ocurrió, sin adjetivos)
                </label>
                <textarea id="fb-step1" rows="2" placeholder="Ej: Ayer en el turno de las 3:00 PM, 6 referencias de lácteos quedaron sin rotar por fecha de vencimiento..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium"></textarea>
              </div>

              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  2. Impacto Operativo (Explica el efecto en la merma, clientes o compañeros)
                </label>
                <textarea id="fb-step2" rows="2" placeholder="Ej: Esto incrementa el riesgo de mermas vencidas para la tienda y afecta el inventario que audita el supervisor..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium"></textarea>
              </div>

              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  3. Pregunta de Escucha Activa
                </label>
                <input type="text" id="fb-step3" value="¿Qué dificultad u obstáculo tuviste en ese momento que te impidió verificar las fechas?" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
              </div>

              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  4. Acuerdo Concreto y Momento de Revisión
                </label>
                <input type="text" id="fb-step4" placeholder="Ej: Aplicarás la lista de chequeo de fechas a las 5 PM y mañana a las 6 PM revisamos juntos 5 minutos..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
              </div>

              <div class="pt-2 flex gap-3">
                <button id="btn-generate-feedback" class="flex-1 py-3 rounded-2xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-md transition-all flex items-center justify-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4"></i> Generar Guion de Conversación
                </button>
              </div>
            </div>
          </div>

          <div id="recognition-form-panel" class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6 hidden">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Cultura de Reconocimiento</span>
              <h3 class="text-lg font-bold text-slate-900">Diseñar Reconocimiento Específico</h3>
              <p class="text-xs text-slate-500">Reconoce conductas observables y esfuerzo real.</p>
            </div>

            <div class="space-y-4 text-xs">
              <div>
                <label class="block font-bold text-slate-700 mb-1">Colaborador o Equipo Reconocido</label>
                <input type="text" id="rec-collab-name" placeholder="Ej: Mateo Valencia / Equipo de Apertura" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none font-semibold">
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Conducta Observable Destacada</label>
                <textarea id="rec-behavior" rows="2" placeholder="Ej: Durante la hora pico del mediodía mantuviste un trato impecable con los clientes y ayudaste a empacar en caja 2..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none font-medium"></textarea>
              </div>
              <div>
                <label class="block font-bold text-slate-700 mb-1">Impacto Positivo para la Tienda y el Equipo</label>
                <input type="text" id="rec-impact" placeholder="Ej: Logramos bajar el tiempo de fila y transmitiste calma al resto de compañeros..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-yellow-500 outline-none font-medium">
              </div>
              <button id="btn-generate-recognition" class="w-full py-3 rounded-2xl bg-amber-500 text-slate-950 font-black text-xs hover:bg-amber-400 shadow-md transition-all flex items-center justify-center gap-2">
                <i data-lucide="award" class="w-4 h-4"></i> Generar Nota de Reconocimiento
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="bg-slate-900 text-white p-6 rounded-3xl card-shadow space-y-4 relative">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
              <span class="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="scroll-text" class="w-4 h-4"></i> Guion Listo para Tienda
              </span>
              <button id="btn-copy-script" class="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-lg transition-colors">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i> Copiar
              </button>
            </div>
            <div id="script-preview" class="text-xs space-y-3 font-mono leading-relaxed text-slate-200 min-h-[180px]">
              <p class="text-slate-400 italic font-sans text-center pt-8">
                Completa los campos a la izquierda y presiona "Generar Guion" para ver la estructura de conversación recomendada.
              </p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Bitácora de Prácticas (Semana 5)
              </h4>
              <span class="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                Meta: ≥ 80%
              </span>
            </div>
            <div id="feedback-history-list" class="space-y-2 text-xs"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  initFeedbackEvents();
  renderFeedbackHistory();
  if (window.lucide) window.lucide.createIcons();
}

function initFeedbackEvents() {
  const tabFeedback = document.getElementById('tab-btn-feedback');
  const tabRecognition = document.getElementById('tab-btn-recognition');
  const panelFeedback = document.getElementById('feedback-form-panel');
  const panelRecognition = document.getElementById('recognition-form-panel');

  tabFeedback?.addEventListener('click', () => {
    tabFeedback.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    tabRecognition.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    panelFeedback.classList.remove('hidden');
    panelRecognition.classList.add('hidden');
  });

  tabRecognition?.addEventListener('click', () => {
    tabRecognition.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    tabFeedback.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    panelRecognition.classList.remove('hidden');
    panelFeedback.classList.add('hidden');
  });

  const btnGenFb = document.getElementById('btn-generate-feedback');
  btnGenFb?.addEventListener('click', () => {
    const name = document.getElementById('fb-collab-name').value || 'Colaborador';
    const role = document.getElementById('fb-collab-role').value;
    const step1 = document.getElementById('fb-step1').value || 'Se evidenció una discrepancia en el procedimiento operativo.';
    const step2 = document.getElementById('fb-step2').value || 'Esto genera retrasos en la tienda e impacto en la auditoría.';
    const step3 = document.getElementById('fb-step3').value || '¿Qué obstáculo tuviste?';
    const step4 = document.getElementById('fb-step4').value || 'Acordamos revisar el proceso juntos mañana.';

    const scriptText = `[CONVERSACIÓN PRIVADA EN OFICINA / BODEGA]
Líder: "Hola ${name}, gracias por venir unos minutos a conversar conmigo..."

1. HECHO OBSERVABLE:
"${step1}"

2. IMPACTO OPERATIVO:
"${step2}"

3. ESCUCHA ACTIVA:
"${step3}"
(Pausa: Escuchar atentamente sin interrumpir ni desacreditar)

4. ACUERDO DE MEJORA Y SEGUIMIENTO:
"${step4}"
Líder: "¿Estamos de acuerdo con este compromiso?"`;

    const preview = document.getElementById('script-preview');
    if (preview) preview.innerText = scriptText;

    savePracticeLog({
      type: 'Feedback',
      name,
      role,
      summary: step1,
      date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })
    });

    if (window.confetti) window.confetti({ particleCount: 40, spread: 50 });
  });

  const btnGenRec = document.getElementById('btn-generate-recognition');
  btnGenRec?.addEventListener('click', () => {
    const name = document.getElementById('rec-collab-name').value || 'Colaborador';
    const behavior = document.getElementById('rec-behavior').value || 'Tu compromiso y agilidad en el turno de hoy.';
    const impact = document.getElementById('rec-impact').value || 'Hizo una gran diferencia para los clientes y el equipo.';

    const scriptText = `[RECONOCIMIENTO ESPECÍFICO EN TIENDA]
Líder: "Hola ${name}, quiero tomarme un minuto para agradecerte y reconocer algo puntual que hiciste hoy..."

CONDUCTA OBSERVABLE:
"${behavior}"

IMPACTO POSITIVO:
"${impact}"

Líder: "Gracias por tu esfuerzo y por ser un ejemplo de actitud en nuestra tienda D1. ¡Excelente trabajo!"`;

    const preview = document.getElementById('script-preview');
    if (preview) preview.innerText = scriptText;

    savePracticeLog({
      type: 'Reconocimiento',
      name,
      role: 'Equipo Tienda',
      summary: behavior,
      date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })
    });

    if (window.confetti) window.confetti({ particleCount: 50, spread: 60 });
  });

  const btnCopy = document.getElementById('btn-copy-script');
  btnCopy?.addEventListener('click', () => {
    const text = document.getElementById('script-preview').innerText;
    navigator.clipboard.writeText(text).then(() => {
      btnCopy.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Copiado';
      setTimeout(() => {
        btnCopy.innerHTML = '<i data-lucide="copy" class="w-3.5 h-3.5"></i> Copiar';
        if (window.lucide) window.lucide.createIcons();
      }, 2000);
      if (window.lucide) window.lucide.createIcons();
    });
  });
}

function savePracticeLog(entry) {
  const logs = JSON.parse(localStorage.getItem('lidera_d1_feedback_logs') || '[]');
  logs.unshift({ id: Date.now(), ...entry });
  localStorage.setItem('lidera_d1_feedback_logs', JSON.stringify(logs));
  renderFeedbackHistory();
}

function renderFeedbackHistory() {
  const container = document.getElementById('feedback-history-list');
  if (!container) return;

  const defaultMock = [
    { type: 'Feedback', name: 'Julián G.', role: 'Auxiliar Surtido', summary: 'Corrección de registro en merma de lácteos', date: '14 Nov' },
    { type: 'Reconocimiento', name: 'Camila P.', role: 'Cajera', summary: 'Excelente manejo asertivo ante cliente alterado', date: '16 Nov' }
  ];

  const saved = JSON.parse(localStorage.getItem('lidera_d1_feedback_logs') || 'null');
  const data = saved || defaultMock;

  container.innerHTML = data.slice(0, 4).map(item => `
    <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
      <div>
        <span class="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-md ${item.type === 'Feedback' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-900'} mb-0.5">
          ${item.type}
        </span>
        <p class="font-bold text-slate-800 text-[11px]">${item.name} <span class="text-slate-400 font-normal">(${item.role})</span></p>
        <p class="text-slate-500 text-[10px] truncate max-w-[200px]">${item.summary}</p>
      </div>
      <span class="text-[10px] text-slate-400 font-semibold">${item.date}</span>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 7. KPI DASHBOARD VIEW
// ==========================================
const rubricScores = [3, 3, 3, 3, 3];

function renderKpiDashboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 mb-2 border border-emerald-200">
            <i data-lucide="bar-chart-3" class="w-3.5 h-3.5 text-emerald-600"></i> Sistema de Medición y Evaluación (Semana 1 y 8)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Tablero de Indicadores y Resultados</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Monitoreo en 4 niveles (Kirkpatrick adaptado): Participación, Aprendizaje, Aplicación conductual en tienda y Resultados organizacionales.
          </p>
        </div>
        <div class="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl shrink-0 flex-wrap">
          <button id="tab-dash-kpis" class="active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all">
            <i data-lucide="table" class="w-3.5 h-3.5 inline mr-1 text-red-600"></i> Matriz de 12 Indicadores
          </button>
          <button id="tab-dash-rubric" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all">
            <i data-lucide="check-square" class="w-3.5 h-3.5 inline mr-1 text-blue-600"></i> Rúbrica 1-4
          </button>
          <button id="tab-dash-survey" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all">
            <i data-lucide="smile" class="w-3.5 h-3.5 inline mr-1 text-amber-500"></i> Encuesta de Clima
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Asistencia a Sesiones</span>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-black text-slate-900">89%</span>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Meta: ≥85%</span>
          </div>
          <span class="text-[11px] text-slate-500 mt-1 block">Compromiso en tienda</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Aprendizaje (Pre vs Post)</span>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-black text-red-600">+22 pp</span>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Meta: +20pp</span>
          </div>
          <span class="text-[11px] text-slate-500 mt-1 block">De 61% a 83% de aciertos</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Líderes Competentes</span>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-black text-emerald-600">84%</span>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Meta: ≥80%</span>
          </div>
          <span class="text-[11px] text-slate-500 mt-1 block">Puntaje rúbrica ≥ 3.0/4.0</span>
        </div>
        <div class="bg-white p-5 rounded-2xl card-shadow border border-slate-100">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Percepción Favorable</span>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-black text-amber-600">74%</span>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Meta: +10pp</span>
          </div>
          <span class="text-[11px] text-slate-500 mt-1 block">+18 puntos vs línea base</span>
        </div>
      </div>

      <div id="view-section-kpis" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <i data-lucide="trending-up" class="w-4 h-4 text-red-600"></i> Comparativa Pre vs Post Programa (Tiendas D1)
            </h4>
            <div class="h-64 relative">
              <canvas id="chart-pre-post"></canvas>
            </div>
          </div>
          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <i data-lucide="heart-pulse" class="w-4 h-4 text-emerald-600"></i> Reducción de Tensión y Conflictos
            </h4>
            <div class="h-64 relative">
              <canvas id="chart-tension"></canvas>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl card-shadow border border-slate-100 overflow-hidden">
          <div class="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 class="text-base font-extrabold text-slate-900">Matriz Integral de Indicadores (Fórmulas y Metas)</h3>
              <p class="text-xs text-slate-500">Métricas operativas y de clima para Tiendas D1</p>
            </div>
            <select id="kpi-category-filter" class="text-xs p-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold text-slate-700">
              <option value="all">Todas las Categorías (12)</option>
              <option value="Participación">Participación</option>
              <option value="Proceso">Proceso</option>
              <option value="Aprendizaje">Aprendizaje</option>
              <option value="Aplicación">Aplicación</option>
              <option value="Percepción">Percepción</option>
              <option value="Bienestar">Bienestar</option>
              <option value="Organizacional">Organizacional</option>
              <option value="Continuidad">Continuidad</option>
            </select>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-50/80 text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-100">
                  <th class="p-4">Semana</th>
                  <th class="p-4">Tipo</th>
                  <th class="p-4">Indicador</th>
                  <th class="p-4">Fórmula</th>
                  <th class="p-4">Meta Establecida</th>
                  <th class="p-4">Responsable</th>
                  <th class="p-4">Estado Actual</th>
                </tr>
              </thead>
              <tbody id="kpi-table-body" class="divide-y divide-slate-100 font-medium text-slate-700"></tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="view-section-rubric" class="space-y-6 hidden">
        <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
          <div class="border-b border-slate-100 pb-4">
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wider block">Instrumento Estandarizado</span>
            <h3 class="text-xl font-black text-slate-900">Rúbrica Común de Observación Conductual (Escala 1 a 4)</h3>
            <p class="text-xs text-slate-500 mt-1">
              Puntúa conductas observables en las simulaciones (Semanas 3, 4, 6 y 8). Criterio de competencia: promedio $\ge 3.0/4.0$ sin ningún 1 en conductas críticas.
            </p>
          </div>

          <div class="space-y-6">
            ${OBSERVATION_RUBRIC.map((item, idx) => `
              <div class="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-extrabold text-sm text-slate-900">${item.behavior}</h4>
                    <p class="text-xs text-slate-500">${item.description}</p>
                  </div>
                  <span id="rubric-score-badge-${idx}" class="text-xs font-bold px-3 py-1 rounded-xl bg-blue-100 text-blue-800">
                    Nivel 3: Competente
                  </span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                  ${[1, 2, 3, 4].map(level => `
                    <button data-row="${idx}" data-val="${level}" class="rubric-btn p-3 rounded-xl border text-left transition-all ${level === 3 ? 'border-blue-600 bg-blue-50/60 font-bold text-blue-950 shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}">
                      <span class="text-[10px] uppercase font-black block mb-1 text-slate-400">Nivel ${level}</span>
                      <p class="text-[11px] leading-snug">${item.levels[level]}</p>
                    </button>
                  `).join('')}
                </div>
              </div>
            `).join('')}

            <div class="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block">Promedio de Competencia Calculado</span>
                <div class="flex items-baseline gap-2">
                  <span id="rubric-avg-score" class="text-3xl font-black">3.00 / 4.00</span>
                  <span id="rubric-competence-badge" class="text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">Nivel Competente Alcanzado</span>
                </div>
              </div>
              <p class="text-xs text-slate-300 max-w-sm">
                Esta rúbrica permite calibrar al observador en conductas estrictamente verificables, eliminando la subjetividad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="view-section-survey" class="space-y-6 hidden">
        <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
          <div class="border-b border-slate-100 pb-4">
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Voz del Colaborador en Tienda</span>
            <h3 class="text-xl font-black text-slate-900">Encuesta Anónima de Percepción del Equipo (8 Preguntas)</h3>
            <p class="text-xs text-slate-500 mt-1">
              Aplicada en Semana 1 (Línea Base) y Semana 8 (Cierre). Escala 1 a 5 (Totalmente en desacuerdo a Totalmente de acuerdo). Indicador: Respuestas favorables (4 o 5).
            </p>
          </div>

          <div class="space-y-3">
            ${SURVEY_QUESTIONS.map(q => `
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div class="flex items-start justify-between gap-4">
                  <span class="font-bold text-slate-800 leading-snug">
                    <span class="inline-block w-5 h-5 rounded-full bg-red-100 text-red-700 font-black text-center mr-1 text-[11px]">${q.id}</span>
                    ${q.text}
                  </span>
                  <div class="shrink-0 flex items-center gap-3">
                    <span class="text-slate-400 font-semibold text-[11px]">Inicial: <strong>${q.preFavorable}%</strong></span>
                    <span class="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold text-[11px] border border-emerald-200">
                      Final: <strong>${q.postFavorable}%</strong> (+${q.postFavorable - q.preFavorable}pp)
                    </span>
                  </div>
                </div>

                <div class="space-y-1 pt-1">
                  <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                    <div class="bg-slate-400 h-full" style="width: ${q.preFavorable}%"></div>
                  </div>
                  <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                    <div class="bg-emerald-500 h-full" style="width: ${q.postFavorable}%"></div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  initKpiTabs();
  renderKpiTable('all');
  initCharts();
  initRubricEvaluator();
  if (window.lucide) window.lucide.createIcons();
}

function initKpiTabs() {
  const tabKpis = document.getElementById('tab-dash-kpis');
  const tabRubric = document.getElementById('tab-dash-rubric');
  const tabSurvey = document.getElementById('tab-dash-survey');

  const viewKpis = document.getElementById('view-section-kpis');
  const viewRubric = document.getElementById('view-section-rubric');
  const viewSurvey = document.getElementById('view-section-survey');

  function resetTabs() {
    [tabKpis, tabRubric, tabSurvey].forEach(t => {
      if (t) t.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    });
    [viewKpis, viewRubric, viewSurvey].forEach(v => v?.classList.add('hidden'));
  }

  tabKpis?.addEventListener('click', () => {
    resetTabs();
    tabKpis.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewKpis?.classList.remove('hidden');
  });

  tabRubric?.addEventListener('click', () => {
    resetTabs();
    tabRubric.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewRubric?.classList.remove('hidden');
  });

  tabSurvey?.addEventListener('click', () => {
    resetTabs();
    tabSurvey.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewSurvey?.classList.remove('hidden');
  });

  const filterSelect = document.getElementById('kpi-category-filter');
  filterSelect?.addEventListener('change', (e) => {
    renderKpiTable(e.target.value);
  });
}

function renderKpiTable(category) {
  const tbody = document.getElementById('kpi-table-body');
  if (!tbody) return;

  const filtered = category === 'all' 
    ? METRICS_TABLE 
    : METRICS_TABLE.filter(m => m.category.toLowerCase().includes(category.toLowerCase()));

  tbody.innerHTML = filtered.map(item => `
    <tr class="hover:bg-slate-50/80 transition-colors">
      <td class="p-4 font-bold text-slate-900">${item.week}</td>
      <td class="p-4">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">${item.category}</span>
      </td>
      <td class="p-4 font-bold text-slate-900 max-w-xs">${item.name}</td>
      <td class="p-4 font-mono text-[11px] text-slate-600 max-w-xs">${item.formula}</td>
      <td class="p-4 font-bold text-emerald-700">${item.target}</td>
      <td class="p-4 text-slate-500 text-[11px]">${item.responsible}</td>
      <td class="p-4">
        <span class="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          <i data-lucide="check" class="w-3 h-3 text-emerald-600"></i> ${item.simulatedPost}${item.unit}
        </span>
      </td>
    </tr>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function initCharts() {
  if (typeof Chart === 'undefined') return;

  const ctx1 = document.getElementById('chart-pre-post');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Asistencia', 'Diagnósticos', 'Conocimientos', 'Simulación 1-4', 'Feedback', 'Percepción'],
        datasets: [
          {
            label: 'Línea Base (Sem 1)',
            data: [68, 40, 61, 42, 15, 56],
            backgroundColor: '#CBD5E1',
            borderRadius: 6
          },
          {
            label: 'Cierre del Programa (Sem 8)',
            data: [89, 95, 83, 84, 86, 74],
            backgroundColor: '#E30613',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', size: 11, weight: 'bold' } } }
        },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' } }
        }
      }
    });
  }

  const ctx2 = document.getElementById('chart-tension');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8'],
        datasets: [
          {
            label: 'Percepción de Estrés del Líder (1-5)',
            data: [4.1, 4.0, 3.6, 3.3, 3.1, 2.9, 2.8, 2.7],
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.3,
            fill: true
          },
          {
            label: 'Conflictos reportados x100 colab.',
            data: [8.4, 8.2, 7.5, 6.8, 5.9, 5.1, 4.6, 4.2],
            borderColor: '#EF4444',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', size: 11, weight: 'bold' } } }
        }
      }
    });
  }
}

function initRubricEvaluator() {
  document.querySelectorAll('.rubric-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = parseInt(btn.getAttribute('data-row'));
      const val = parseInt(btn.getAttribute('data-val'));

      rubricScores[row] = val;

      document.querySelectorAll(`.rubric-btn[data-row="${row}"]`).forEach(b => {
        b.className = 'rubric-btn p-3 rounded-xl border text-left transition-all border-slate-200 bg-white text-slate-600 hover:border-slate-300';
      });

      btn.className = 'rubric-btn p-3 rounded-xl border text-left transition-all border-blue-600 bg-blue-50/60 font-bold text-blue-950 shadow-sm';

      const badge = document.getElementById(`rubric-score-badge-${row}`);
      const levelNames = { 1: 'No se observa (1)', 2: 'Parcial (2)', 3: 'Competente (3)', 4: 'Consistente (4)' };
      if (badge) badge.textContent = `Nivel: ${levelNames[val]}`;

      const avg = (rubricScores.reduce((a, b) => a + b, 0) / rubricScores.length).toFixed(2);
      const avgElem = document.getElementById('rubric-avg-score');
      const compBadge = document.getElementById('rubric-competence-badge');

      if (avgElem) avgElem.textContent = `${avg} / 4.00`;

      if (compBadge) {
        if (avg >= 3.0 && !rubricScores.includes(1)) {
          compBadge.textContent = "Nivel Competente Alcanzado";
          compBadge.className = "text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30";
        } else {
          compBadge.textContent = "Requiere Refuerzo (Puntaje < 3.0 o conducta en nivel 1)";
          compBadge.className = "text-xs font-bold text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded border border-rose-500/30";
        }
      }
    });
  });
}

// ==========================================
// 8. DOFA & CONTINUITY VIEW
// ==========================================
function renderDofaTracker(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-800 mb-2 border border-rose-200">
            <i data-lucide="target" class="w-3.5 h-3.5 text-rose-600"></i> Autodiagnóstico y Plan de Continuidad
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">DOFA de Liderazgo y Plan 30–60 Días</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Herramienta individual para conectar el diagnóstico inicial (Semana 1) con los compromisos de sostenibilidad y transferencia operativa tras el cierre del taller (Semana 8).
          </p>
        </div>
        <button id="btn-print-plan" class="px-5 py-2.5 rounded-2xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-md transition-all flex items-center gap-2 shrink-0">
          <i data-lucide="printer" class="w-4 h-4"></i> Imprimir / Guardar PDF
        </button>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Semana 1: Línea Base</span>
            <h3 class="text-lg font-black text-slate-900">Matriz DOFA Personal del Líder D1</h3>
          </div>
          <span class="text-xs text-slate-400 font-medium">Confidencial y formativo</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div class="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <label class="block font-black text-emerald-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i> Fortalezas (Internas)
            </label>
            <p class="text-[11px] text-emerald-800">¿Qué cualidades o destrezas operativas facilitan tu rol en tienda?</p>
            <textarea id="dofa-f" rows="3" class="w-full p-3 rounded-xl border border-emerald-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none font-medium" placeholder="Ej: Rapidez en la toma de decisiones, conocimiento técnico de mermas y cajas, orientación al orden..."></textarea>
          </div>

          <div class="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <label class="block font-black text-blue-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="sparkles" class="w-4 h-4 text-blue-600"></i> Oportunidades (Entorno D1)
            </label>
            <p class="text-[11px] text-blue-800">¿Qué espacios de formación o acompañamiento puedes aprovechar?</p>
            <textarea id="dofa-o" rows="3" class="w-full p-3 rounded-xl border border-blue-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none font-medium" placeholder="Ej: Programa Lidera D1, sesiones de mentoría con el supervisor, espacios de retroalimentación de turno..."></textarea>
          </div>

          <div class="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <label class="block font-black text-amber-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600"></i> Debilidades (A Mejorar)
            </label>
            <p class="text-[11px] text-amber-800">¿Qué conductas reactivas o impaciencias se te presentan cuando hay mucha presión?</p>
            <textarea id="dofa-d" rows="3" class="w-full p-3 rounded-xl border border-amber-200 bg-white focus:ring-2 focus:ring-amber-500 outline-none font-medium" placeholder="Ej: Impaciencia ante la lentitud en cajas, tendencia a corregir con tono seco o en voz alta..."></textarea>
          </div>

          <div class="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <label class="block font-black text-rose-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="shield-alert" class="w-4 h-4 text-rose-600"></i> Amenazas (Riesgos Operativos)
            </label>
            <p class="text-[11px] text-rose-800">¿Qué factores externos de la tienda aumentan el estrés o la fatiga de tu equipo?</p>
            <textarea id="dofa-a" rows="3" class="w-full p-3 rounded-xl border border-rose-200 bg-white focus:ring-2 focus:ring-rose-500 outline-none font-medium" placeholder="Ej: Alta rotación de personal nuevo sin experiencia previa, retrasos imprevistos del CEDI..."></textarea>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Semana 8: Cierre y Sostenibilidad</span>
            <h3 class="text-lg font-black text-slate-900">Plan de Sostenibilidad y Continuidad (30–60 Días)</h3>
          </div>
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">Meta Sostenibilidad: ≥ 80%</span>
        </div>

        <div class="space-y-4 text-xs">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span class="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center text-xs">1</span>
              Compromiso Observable 1 (Autorregulación y Comunicación)
            </span>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="md:col-span-2">
                <label class="block font-bold text-slate-600 mb-1">Acción Concreta en Tienda</label>
                <input type="text" id="plan-act-1" value="Aplicar la técnica PAUSA antes de corregir cualquier error de merma o inventario, haciéndolo siempre en privado." class="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
              </div>
              <div>
                <label class="block font-bold text-slate-600 mb-1">Fecha de Auditoría / Supervisor</label>
                <input type="date" id="plan-date-1" value="2026-12-15" class="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span class="font-extrabold text-slate-800 text-sm flex items-center gap-1.5">
              <span class="w-6 h-6 rounded-lg bg-red-600 text-white font-bold flex items-center justify-center text-xs">2</span>
              Compromiso Observable 2 (Clima y Distribución de Tareas)
            </span>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="md:col-span-2">
                <label class="block font-bold text-slate-600 mb-1">Acción Concreta en Tienda</label>
                <input type="text" id="plan-act-2" value="Realizar el check-in diario 'Pulso de Tienda' al inicio de cada turno y rotar de forma equitativa el surtido pesado." class="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
              </div>
              <div>
                <label class="block font-bold text-slate-600 mb-1">Fecha de Auditoría / Supervisor</label>
                <input type="date" id="plan-date-2" value="2027-01-15" class="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-800">
              </div>
            </div>
          </div>

          <div class="pt-3 flex justify-end">
            <button id="btn-save-dofa-plan" class="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs hover:from-red-700 hover:to-rose-700 shadow-md transition-all flex items-center gap-2">
              <i data-lucide="save" class="w-4 h-4"></i> Guardar DOFA y Compromisos en Bitácora
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  initDofaEvents();
  loadSavedDofa();
  if (window.lucide) window.lucide.createIcons();
}

function initDofaEvents() {
  const btnSave = document.getElementById('btn-save-dofa-plan');
  btnSave?.addEventListener('click', () => {
    const dofaData = {
      f: document.getElementById('dofa-f').value,
      o: document.getElementById('dofa-o').value,
      d: document.getElementById('dofa-d').value,
      a: document.getElementById('dofa-a').value,
      act1: document.getElementById('plan-act-1').value,
      date1: document.getElementById('plan-date-1').value,
      act2: document.getElementById('plan-act-2').value,
      date2: document.getElementById('plan-date-2').value,
      savedAt: new Date().toLocaleDateString('es-CO')
    };

    localStorage.setItem('lidera_d1_dofa_plan', JSON.stringify(dofaData));

    btnSave.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> ¡Guardado Exitosamente!';
    btnSave.className = 'px-6 py-3 rounded-2xl bg-emerald-600 text-white font-black text-xs shadow-md transition-all flex items-center gap-2';

    setTimeout(() => {
      btnSave.innerHTML = '<i data-lucide="save" class="w-4 h-4"></i> Guardar DOFA y Compromisos en Bitácora';
      btnSave.className = 'px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs hover:from-red-700 hover:to-rose-700 shadow-md transition-all flex items-center gap-2';
      if (window.lucide) window.lucide.createIcons();
    }, 2500);

    if (window.confetti) window.confetti({ particleCount: 50, spread: 60 });
    if (window.lucide) window.lucide.createIcons();
  });

  const btnPrint = document.getElementById('btn-print-plan');
  btnPrint?.addEventListener('click', () => {
    window.print();
  });
}

function loadSavedDofa() {
  const saved = JSON.parse(localStorage.getItem('lidera_d1_dofa_plan') || 'null');
  if (!saved) return;

  if (saved.f && document.getElementById('dofa-f')) document.getElementById('dofa-f').value = saved.f;
  if (saved.o && document.getElementById('dofa-o')) document.getElementById('dofa-o').value = saved.o;
  if (saved.d && document.getElementById('dofa-d')) document.getElementById('dofa-d').value = saved.d;
  if (saved.a && document.getElementById('dofa-a')) document.getElementById('dofa-a').value = saved.a;
  if (saved.act1 && document.getElementById('plan-act-1')) document.getElementById('plan-act-1').value = saved.act1;
  if (saved.date1 && document.getElementById('plan-date-1')) document.getElementById('plan-date-1').value = saved.date1;
  if (saved.act2 && document.getElementById('plan-act-2')) document.getElementById('plan-act-2').value = saved.act2;
  if (saved.date2 && document.getElementById('plan-date-2')) document.getElementById('plan-date-2').value = saved.date2;
}

// ==========================================
// ROUTER & NAVIGATION CONTROLLER
// ==========================================
function initApp() {
  window.addEventListener('hashchange', handleNavigation);
  setupMobileMenu();

  // Populate logos if present
  const navLogo = document.getElementById('nav-d1-logo');
  if (navLogo && window.D1_LOGO_BASE64) navLogo.src = window.D1_LOGO_BASE64;
  const footerLogo = document.getElementById('footer-d1-logo');
  if (footerLogo && window.D1_LOGO_BASE64) footerLogo.src = window.D1_LOGO_BASE64;

  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  if (window.D1_LOGO_BASE64) favicon.href = window.D1_LOGO_BASE64;

  if (!window.location.hash) {
    window.location.hash = '#overview';
  }
  handleNavigation();
}
window.initApp = initApp;

function handleNavigation() {
  const hash = window.location.hash.replace('#', '') || 'overview';
  const route = ROUTES[hash] || ROUTES.overview;

  const appRoot = document.getElementById('app-root');
  if (!appRoot) return;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHash = link.getAttribute('href')?.replace('#', '');
    if (linkHash === hash) {
      link.className = 'nav-link active px-3.5 py-2 rounded-xl text-xs font-black transition-all bg-red-600 text-yellow-300 shadow-sm flex items-center gap-1.5';
    } else {
      link.className = 'nav-link px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center gap-1.5';
    }
  });

  route.render('app-root');

  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupMobileMenu() {
  const btnToggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (btnToggle && menu) {
    btnToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// Global Toast helper
window.showToast = function (message, type = 'info') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const colors = {
    info: 'bg-slate-900 text-white',
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white'
  };

  toast.className = `p-3.5 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `<i data-lucide="bell" class="w-4 h-4"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  if (window.lucide) window.lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Bootstrap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
