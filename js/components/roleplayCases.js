// Component: Simulador de Casos y Roleplay Interactivo para Tiendas D1
import { ROLEPLAY_CASES } from '../data/casesData.js';

export function renderRoleplayCases(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header -->
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 mb-2 border border-purple-200">
            <i data-lucide="gamepad-2" class="w-3.5 h-3.5 text-purple-600"></i> Simulación Conductual Guiada (50% Metodología)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Simulador de Decisiones en Tienda</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Enfrenta situaciones reales de presión operativa extraídas de los casos de Tiendas D1. Elige tu curso de acción y observa el impacto en el clima del equipo y en la rúbrica de liderazgo.
          </p>
        </div>
        <!-- Case Selector Buttons -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 shrink-0" id="case-selector-bar">
          ${ROLEPLAY_CASES.map((c, i) => `
            <button data-case-index="${i}" class="case-btn ${i === 0 ? 'active bg-red-600 text-white shadow-md' : 'bg-slate-100 text-slate-600'} px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap">
              Caso ${i + 1}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Case Content Box -->
      <div id="case-active-view" class="space-y-6">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `;

  initRoleplay(0);
  if (window.lucide) window.lucide.createIcons();
}

function initRoleplay(caseIndex) {
  const caseItem = ROLEPLAY_CASES[caseIndex];
  if (!caseItem) return;

  // Update button classes
  document.querySelectorAll('.case-btn').forEach((btn, idx) => {
    if (idx === caseIndex) {
      btn.className = 'case-btn active bg-red-600 text-white shadow-md px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap';
    } else {
      btn.className = 'case-btn bg-slate-100 text-slate-600 hover:bg-slate-200 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap';
    }
  });

  const view = document.getElementById('case-active-view');
  view.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left: Scenario Context and Options (Cols 7) -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Situation Card -->
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

      <!-- Right: Live Feedback & Rubric Assessment (Cols 5) -->
      <div class="lg:col-span-5 space-y-6">
        <div id="option-feedback-panel" class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100 text-center py-12 space-y-3">
          <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
            <i data-lucide="help-circle" class="w-8 h-8"></i>
          </div>
          <h4 class="text-sm font-bold text-slate-800">Selecciona una de las opciones</h4>
          <p class="text-xs text-slate-400 max-w-xs mx-auto">
            Descubre de inmediato la retroalimentación pedagógica, el estilo de liderazgo que reflejas y la calificación en la rúbrica de observación.
          </p>
        </div>
      </div>
    </div>
  `;

  // Option selection
  view.querySelectorAll('.option-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const optId = btn.getAttribute('data-opt-id');
      const chosenOpt = caseItem.options.find(o => o.id === optId);

      // Highlight selected
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

  // Attach tab switcher
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

    <!-- Style and EI Analysis -->
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

    <!-- Impact on Store -->
    <div>
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Impacto en la Tienda y en el Equipo</span>
      <p class="text-xs text-slate-700 leading-relaxed font-medium bg-red-50/50 p-3.5 rounded-xl border border-red-100/60">
        ${opt.impact}
      </p>
    </div>

    <!-- Pedagogical Feedback -->
    <div class="bg-slate-900 text-white p-4 rounded-2xl shadow-inner">
      <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-wider block mb-1">
        Retroalimentación del Facilitador
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
