// Component: Matriz DOFA Personal y Plan de Continuidad a 30-60 Días (Semanas 1 y 8)

export function renderDofaTracker(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header -->
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

      <!-- Part 1: DOFA Personal Canvas (Semana 1) -->
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Semana 1: Línea Base</span>
            <h3 class="text-lg font-black text-slate-900">Matriz DOFA Personal del Líder D1</h3>
          </div>
          <span class="text-xs text-slate-400 font-medium">Confidencial y de uso formativo</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <!-- Fortalezas -->
          <div class="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <label class="block font-black text-emerald-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i> Fortalezas (Internas)
            </label>
            <p class="text-[11px] text-emerald-800">¿Qué cualidades o destrezas operativas facilitan tu rol de liderazgo en tienda?</p>
            <textarea id="dofa-f" rows="3" class="w-full p-3 rounded-xl border border-emerald-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none font-medium" placeholder="Ej: Rapidez en la toma de decisiones, conocimiento técnico de los procesos de mermas y cajas, orientación al orden..."></textarea>
          </div>

          <!-- Oportunidades -->
          <div class="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
            <label class="block font-black text-blue-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="sparkles" class="w-4 h-4 text-blue-600"></i> Oportunidades (Entorno D1)
            </label>
            <p class="text-[11px] text-blue-800">¿Qué espacios de formación o acompañamiento puedes aprovechar en la empresa?</p>
            <textarea id="dofa-o" rows="3" class="w-full p-3 rounded-xl border border-blue-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none font-medium" placeholder="Ej: Programa Lidera D1, sesiones de mentoría con el supervisor de zona, espacios de retroalimentación de turno..."></textarea>
          </div>

          <!-- Debilidades -->
          <div class="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <label class="block font-black text-amber-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="alert-circle" class="w-4 h-4 text-amber-600"></i> Debilidades (A Mejorar)
            </label>
            <p class="text-[11px] text-amber-800">¿Qué conductas reactivas o impaciencias se te presentan cuando hay mucha presión?</p>
            <textarea id="dofa-d" rows="3" class="w-full p-3 rounded-xl border border-amber-200 bg-white focus:ring-2 focus:ring-amber-500 outline-none font-medium" placeholder="Ej: Impaciencia ante la lentitud en cajas, tendencia a corregir con tono seco o en voz alta, dificultad para delegar tareas pesadas..."></textarea>
          </div>

          <!-- Amenazas -->
          <div class="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <label class="block font-black text-rose-900 flex items-center gap-1.5 text-sm">
              <i data-lucide="shield-alert" class="w-4 h-4 text-rose-600"></i> Amenazas (Riesgos Operativos)
            </label>
            <p class="text-[11px] text-rose-800">¿Qué factores externos de la tienda aumentan el estrés o la fatiga de tu equipo?</p>
            <textarea id="dofa-a" rows="3" class="w-full p-3 rounded-xl border border-rose-200 bg-white focus:ring-2 focus:ring-rose-500 outline-none font-medium" placeholder="Ej: Alta rotación de personal nuevo sin experiencia previa, retrasos imprevistos del CEDI, fallas técnicas en datáfonos..."></textarea>
          </div>
        </div>
      </div>

      <!-- Part 2: Plan de Continuidad a 30-60 Días (Semana 8) -->
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
        <div class="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Semana 8: Cierre y Sostenibilidad</span>
            <h3 class="text-lg font-black text-slate-900">Plan de Continuidad Post-Piloto (30–60 Días)</h3>
          </div>
          <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">Meta Piloto: ≥ 80%</span>
        </div>

        <div class="space-y-4 text-xs">
          <!-- Compromiso 1 -->
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

          <!-- Compromiso 2 -->
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
  btnSave.addEventListener('click', () => {
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
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}

function loadSavedDofa() {
  const saved = JSON.parse(localStorage.getItem('lidera_d1_dofa_plan') || 'null');
  if (!saved) return;

  if (saved.f) document.getElementById('dofa-f').value = saved.f;
  if (saved.o) document.getElementById('dofa-o').value = saved.o;
  if (saved.d) document.getElementById('dofa-d').value = saved.d;
  if (saved.a) document.getElementById('dofa-a').value = saved.a;
  if (saved.act1) document.getElementById('plan-act-1').value = saved.act1;
  if (saved.date1) document.getElementById('plan-date-1').value = saved.date1;
  if (saved.act2) document.getElementById('plan-act-2').value = saved.act2;
  if (saved.date2) document.getElementById('plan-date-2').value = saved.date2;
}
