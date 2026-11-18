// Component: Tablero de Indicadores, Métricas y Evaluación Integral
import { METRICS_TABLE, OBSERVATION_RUBRIC, SURVEY_QUESTIONS } from '../data/metricsData.js';

export function renderKpiDashboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header -->
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 mb-2 border border-emerald-200">
            <i data-lucide="bar-chart-3" class="w-3.5 h-3.5 text-emerald-600"></i> Sistema de Medición y Evaluación (Semana 1 y 8)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Tablero de Indicadores y Resultados</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Monitoreo en 4 niveles (Kirkpatrick adaptado): Participación, Aprendizaje, Aplicación conductual en tienda y Resultados organizacionales (rotación, ausentismo y mermas).
          </p>
        </div>
        <div class="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl shrink-0">
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

      <!-- KPI Executive Highlights -->
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

      <!-- VIEW 1: 12 Indicators Table -->
      <div id="view-section-kpis" class="space-y-6">
        <!-- Interactive Chart Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <i data-lucide="trending-up" class="w-4 h-4 text-red-600"></i> Comparativa Pre vs Post Taller (Piloto D1)
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

        <!-- Filtered Table -->
        <div class="bg-white rounded-3xl card-shadow border border-slate-100 overflow-hidden">
          <div class="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 class="text-base font-extrabold text-slate-900">Matriz Completa de Indicadores (Fórmulas y Metas)</h3>
              <p class="text-xs text-slate-500">Datos propuestos para el piloto en Tiendas D1</p>
            </div>
            <!-- Category Filter -->
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
                  <th class="p-4">Meta Propuesta</th>
                  <th class="p-4">Responsable</th>
                  <th class="p-4">Estado Piloto</th>
                </tr>
              </thead>
              <tbody id="kpi-table-body" class="divide-y divide-slate-100 font-medium text-slate-700">
                <!-- Dynamically generated rows -->
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- VIEW 2: Behavioral Rubric (Hidden by default) -->
      <div id="view-section-rubric" class="space-y-6 hidden">
        <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
          <div class="border-b border-slate-100 pb-4">
            <span class="text-xs font-bold text-blue-600 uppercase tracking-wider block">Instrumento Estandarizado</span>
            <h3 class="text-xl font-black text-slate-900">Rúbrica Común de Observación Conductual (Escala 1 a 4)</h3>
            <p class="text-xs text-slate-500 mt-1">
              Puntúa conductas observables en las simulaciones (Semanas 3, 4, 6 y 8). Criterio de competencia: promedio $\ge 3.0/4.0$ sin ningún 1 en conductas críticas.
            </p>
          </div>

          <!-- Interactive Rubric Evaluator -->
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

            <!-- Live Rubric Summary -->
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

      <!-- VIEW 3: Survey Questions (Hidden by default) -->
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

                <!-- Progress Bar Pre vs Post -->
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
      t.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    });
    [viewKpis, viewRubric, viewSurvey].forEach(v => v.classList.add('hidden'));
  }

  tabKpis.addEventListener('click', () => {
    resetTabs();
    tabKpis.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewKpis.classList.remove('hidden');
  });

  tabRubric.addEventListener('click', () => {
    resetTabs();
    tabRubric.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewRubric.classList.remove('hidden');
  });

  tabSurvey.addEventListener('click', () => {
    resetTabs();
    tabSurvey.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    viewSurvey.classList.remove('hidden');
  });

  // Filter select
  const filterSelect = document.getElementById('kpi-category-filter');
  filterSelect.addEventListener('change', (e) => {
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

  // Chart 1: Pre vs Post Learning and Perception
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
            label: 'Cierre Piloto (Sem 8)',
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

  // Chart 2: Stress and Conflicts Reduction
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

// Rubric scoring evaluator state
const rubricScores = [3, 3, 3, 3, 3];

function initRubricEvaluator() {
  document.querySelectorAll('.rubric-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = parseInt(btn.getAttribute('data-row'));
      const val = parseInt(btn.getAttribute('data-val'));

      rubricScores[row] = val;

      // Update row buttons
      document.querySelectorAll(`.rubric-btn[data-row="${row}"]`).forEach(b => {
        b.className = 'rubric-btn p-3 rounded-xl border text-left transition-all border-slate-200 bg-white text-slate-600 hover:border-slate-300';
      });

      btn.className = 'rubric-btn p-3 rounded-xl border text-left transition-all border-blue-600 bg-blue-50/60 font-bold text-blue-950 shadow-sm';

      // Update badge
      const badge = document.getElementById(`rubric-score-badge-${row}`);
      const levelNames = { 1: 'No se observa (1)', 2: 'Parcial (2)', 3: 'Competente (3)', 4: 'Consistente (4)' };
      badge.textContent = `Nivel: ${levelNames[val]}`;

      // Recalculate average
      const avg = (rubricScores.reduce((a, b) => a + b, 0) / rubricScores.length).toFixed(2);
      const avgElem = document.getElementById('rubric-avg-score');
      const compBadge = document.getElementById('rubric-competence-badge');

      avgElem.textContent = `${avg} / 4.00`;

      if (avg >= 3.0 && !rubricScores.includes(1)) {
        compBadge.textContent = "Nivel Competente Alcanzado";
        compBadge.className = "text-xs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30";
      } else {
        compBadge.textContent = "Requiere Refuerzo (Puntaje < 3.0 o conducta en nivel 1)";
        compBadge.className = "text-xs font-bold text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded border border-rose-500/30";
      }
    });
  });
}
