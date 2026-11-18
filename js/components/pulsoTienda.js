// Component: Pulso de Tienda (Daily Check-in for Store Leaders - Week 7)

export function renderPulsoTienda(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header -->
      <div class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 mb-2 border border-amber-200">
            <i data-lucide="activity" class="w-3.5 h-3.5 text-amber-600"></i> Ritual Operativo Diario (Semana 7)
          </span>
          <h2 class="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Pulso de Tienda</h2>
          <p class="text-slate-500 text-sm mt-1 max-w-xl">
            Microritual de 5 a 10 minutos al iniciar o relevar el turno. Mide la temperatura emocional del equipo, define prioridades sin ambigüedades y previene fricciones por sobrecarga.
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <div class="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-center">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Meta Piloto</span>
            <span class="text-sm font-black text-slate-800">≥ 80% registros</span>
          </div>
          <div class="bg-red-50 p-3.5 rounded-2xl border border-red-200 text-center">
            <span class="text-[10px] font-bold text-red-500 uppercase tracking-wider block">Registros Hoy</span>
            <span id="pulso-today-count" class="text-sm font-black text-red-700">0</span>
          </div>
        </div>
      </div>

      <!-- Main Layout: Form (Left) & Live Store Dashboard (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Daily Form (Cols 7) -->
        <div class="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
          <div class="border-b border-slate-100 pb-3">
            <h3 class="font-extrabold text-slate-900 text-lg">Nuevo Registro de Turno</h3>
            <p class="text-xs text-slate-500">Diligencia antes de iniciar la jornada con tu equipo</p>
          </div>

          <form id="form-pulso-tienda" class="space-y-5">
            <!-- Store and Shift Info -->
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

            <!-- Temperature / Morale Rating (1 to 5) -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-2">
                1. ¿Cuál es el nivel de energía y clima emocional percibido al arrancar?
              </label>
              <div class="grid grid-cols-5 gap-2 text-center" id="pulso-morale-group">
                <button type="button" data-val="1" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😫</span> Tenso / Cansado (1)
                </button>
                <button type="button" data-val="2" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😟</span> Con Preocupación (2)
                </button>
                <button type="button" data-val="3" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">😐</span> Neutro / Operativo (3)
                </button>
                <button type="button" data-val="4" class="morale-btn active p-3 rounded-xl border-2 border-red-600 bg-red-50 text-xs font-bold text-red-900 transition-all">
                  <span class="text-2xl block mb-1">🙂</span> Motivado (4)
                </button>
                <button type="button" data-val="5" class="morale-btn p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:border-red-500 transition-all">
                  <span class="text-2xl block mb-1">🔥</span> Imparable / Enfocado (5)
                </button>
              </div>
            </div>

            <!-- Operational Priorities -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                2. Prioridad Crítica del Turno (¿En qué se enfoca el esfuerzo principal?)
              </label>
              <select id="pulso-priority" class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-semibold text-slate-800">
                <option value="Agilidad en Cajas y Control de Filas (Hora Pico)">Agilidad en Cajas y Control de Filas (Hora Pico)</option>
                <option value="Recepción de Camión y Surtido de Abarrotes">Recepción de Camión y Surtido de Abarrotes</option>
                <option value="Auditoría de Fechas y Control de Mermas (Carnes y Lácteos)">Auditoría de Fechas y Control de Mermas (Carnes y Lácteos)</option>
                <option value="Aseo Profundo de Bodega y Piso de Venta">Aseo Profundo de Bodega y Piso de Venta</option>
                <option value="Cuadre y Cierre Administrativo Seguro">Cuadre y Cierre Administrativo Seguro</option>
              </select>
            </div>

            <!-- Risk / Bottleneck Alert -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                3. Alerta Operativa o Riesgo de Fricción
              </label>
              <input type="text" id="pulso-risk" placeholder="Ej: Falta 1 auxiliar por cita médica; posible congestión a las 12:30 PM..." class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
            </div>

            <!-- Leader Commitment -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                4. Acción Concreta de Respaldo del Líder
              </label>
              <input type="text" id="pulso-support" placeholder="Ej: Cubriré la caja 2 de 12:00 a 1:00 PM y verificaré el relevo con calma..." class="w-full text-xs p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
            </div>

            <!-- Submit -->
            <button type="submit" class="w-full py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-xs shadow-md hover:from-red-700 hover:to-rose-700 transition-all flex items-center justify-center gap-2">
              <i data-lucide="check-check" class="w-4 h-4"></i> Guardar Pulso de Turno y Notificar al Equipo
            </button>
          </form>
        </div>

        <!-- Live Shift Feed & Analytics (Cols 5) -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Summary Card -->
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl card-shadow space-y-4">
            <span class="text-[11px] font-bold text-yellow-400 uppercase tracking-wider block">
              Indicador de Transferencia en Piso
            </span>
            <div class="flex items-baseline gap-2">
              <span id="pulso-compliance-rate" class="text-4xl font-black text-white">88%</span>
              <span class="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Cumple Meta Piloto</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed font-medium">
              El 88% de los jefes de tienda en el piloto han realizado y documentado al menos dos aplicaciones reales semanales.
            </p>
          </div>

          <!-- History Feed -->
          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-slate-900">Historial Reciente de Pulsos</h4>
              <button id="btn-clear-pulso" class="text-[11px] font-bold text-slate-400 hover:text-red-600 transition-colors">Limpiar</button>
            </div>
            <div id="pulso-history-list" class="space-y-3">
              <!-- Dynamically rendered -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  initPulsoEvents();
  renderPulsoHistory();
  if (window.lucide) window.lucide.createIcons();
}

let selectedMorale = 4;

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
  form.addEventListener('submit', (e) => {
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
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar los registros de Pulso de Tienda?')) {
        localStorage.removeItem('lidera_d1_pulso_history');
        renderPulsoHistory();
      }
    });
  }
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
