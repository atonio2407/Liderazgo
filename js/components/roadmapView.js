// Roadmap 8-Weeks Component for "Lidera D1"
import { WEEKS_DATA } from '../data/programData.js';

export function renderRoadmap(containerId) {
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
            Diseño pedagógico articulado: 20% conceptual, 50% simulación guiada, 20% aplicación en piso y 10% evaluación.
          </p>
        </div>
        <div class="flex items-center gap-2">
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
          <!-- Content injected dynamically -->
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
        <!-- Week header pill & duration -->
        <div class="flex items-center justify-between mb-3">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-xl font-black text-sm bg-red-600 text-yellow-300 shadow-sm">
            ${item.week}
          </span>
          <span class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
            <i data-lucide="clock" class="w-3 h-3 text-slate-400"></i> ${item.duration}
          </span>
        </div>

        <!-- Title -->
        <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-red-600 transition-colors">
          ${item.title}
        </h3>

        <!-- Badges -->
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

        <!-- Objective snippet -->
        <p class="text-xs text-slate-500 mt-3 line-clamp-3">
          ${item.objective}
        </p>
      </div>

      <!-- Card footer -->
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
  // Card click to show modal
  document.querySelectorAll('.week-card').forEach(card => {
    card.addEventListener('click', () => {
      const weekNum = parseInt(card.getAttribute('data-week'));
      openWeekModal(weekNum);
    });
  });

  // Filter buttons
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
      <!-- Modal Header -->
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

      <!-- Quick Metrics Grid -->
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

      <!-- Objective & Theoretical basis -->
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

      <!-- Procedure step by step -->
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

      <!-- Practical Retail Case -->
      <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-inner">
        <span class="text-xs font-bold text-yellow-400 uppercase flex items-center gap-1.5 mb-1.5">
          <i data-lucide="store" class="w-4 h-4"></i> Caso Práctico en Tienda D1
        </span>
        <p class="text-xs text-slate-200 leading-relaxed">
          ${item.practicalCase}
        </p>
      </div>

      <!-- Indicator & Rubric Target Box -->
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

      <!-- Modal Footer -->
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
