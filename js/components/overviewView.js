// Component: Overview / Portal Principal de "Lidera D1"
import { PROGRAM_INFO, PILLARS_EI, LEADERSHIP_APPROACHES, BENCHMARKING_DATA } from '../data/programData.js';

export function renderOverview(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-10">
      <!-- Hero Banner D1 Style -->
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 md:p-12 card-shadow relative overflow-hidden">
        <div class="relative z-10 max-w-3xl space-y-4">
          <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-yellow-400 text-red-950 shadow-sm uppercase tracking-wider">
              Propuesta Piloto • 8 Semanas
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm">
              Tiendas D1 Colombia
            </span>
          </div>
          <h1 class="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Emociones que Mueven la Tienda
          </h1>
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

  // Attach hero button clicks
  document.getElementById('hero-btn-roadmap')?.addEventListener('click', () => {
    window.location.hash = '#roadmap';
  });
  document.getElementById('hero-btn-pausa')?.addEventListener('click', () => {
    window.location.hash = '#pausa';
  });
  document.getElementById('hero-btn-pulso')?.addEventListener('click', () => {
    window.location.hash = '#pulso';
  });

  if (window.lucide) window.lucide.createIcons();
}
