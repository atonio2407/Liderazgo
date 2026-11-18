// Component: Herramienta PAUSA Interactive Assistant for Store Leaders
export function renderPausaTool(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Intro Banner -->
      <div class="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-6 md:p-8 card-shadow relative overflow-hidden">
        <div class="relative z-10 max-w-2xl">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-red-950 mb-3 shadow-sm">
            <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> Técnica de Autorregulación Operativa (Semana 3)
          </span>
          <h2 class="text-3xl font-black tracking-tight">Herramienta P.A.U.S.A.</h2>
          <p class="text-red-100 text-sm mt-2 leading-relaxed font-medium">
            Creada especialmente para situaciones de alta tensión en tienda D1: horas pico de fila, descuadres de caja, demoras de camión o fricciones entre colaboradores. No se trata de reprimir la emoción, sino de crear una pausa entre el detonante y tu respuesta de liderazgo.
          </p>
        </div>
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <!-- Main Layout: Left = Guided Steps & Wizard, Right = 30s Breathing Exercise & Triggers -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Interactive PAUSA Steps Wizard (Cols 7) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white rounded-3xl p-6 md:p-8 card-shadow border border-slate-100">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <h3 class="text-lg font-bold text-slate-900">Asistente Interactivo de Regulación</h3>
                <p class="text-xs text-slate-500">Aplica la técnica ante una situación tensa antes de emitir una instrucción</p>
              </div>
              <span id="pausa-step-indicator" class="text-xs font-bold px-3 py-1 rounded-xl bg-red-100 text-red-700">
                Paso 1 de 5
              </span>
            </div>

            <!-- Steps Container -->
            <div id="pausa-wizard-body" class="space-y-6">
              <!-- Dynamically populated step content -->
            </div>

            <!-- Wizard Navigation Controls -->
            <div class="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
              <button id="btn-pausa-prev" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <i data-lucide="chevron-left" class="w-4 h-4 inline mr-1"></i> Anterior
              </button>
              <button id="btn-pausa-next" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-md transition-all">
                Siguiente Paso <i data-lucide="chevron-right" class="w-4 h-4 inline ml-1"></i>
              </button>
            </div>
          </div>

          <!-- Historial de Pausas Registradas en Tienda -->
          <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                <i data-lucide="clipboard-list" class="w-4 h-4 text-red-600"></i> Bitácora de Prácticas PAUSA Registradas
              </h4>
              <span id="pausa-log-count" class="text-xs text-slate-400 font-semibold">0 registros</span>
            </div>
            <div id="pausa-log-list" class="space-y-3 text-xs text-slate-500">
              <p class="text-center py-4 text-slate-400 italic">No has guardado prácticas aún. Completa el asistente para registrar tu primera aplicación real.</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Breathing Tool & Operational Triggers (Cols 5) -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Guided Breathing Box -->
          <div class="bg-slate-900 text-white rounded-3xl p-6 card-shadow relative overflow-hidden flex flex-col items-center text-center">
            <span class="text-[11px] font-bold text-yellow-400 uppercase tracking-wider mb-1">
              Desactivación Fisiológica (30 Segundos)
            </span>
            <h4 class="text-lg font-bold mb-4">Pausa de Regulación Consciente</h4>

            <!-- Visual Breathing Circle -->
            <div class="relative w-44 h-44 flex items-center justify-center my-4">
              <div id="breathe-ring" class="absolute inset-0 rounded-full bg-red-600/30 animate-pulse-ring"></div>
              <div id="breathe-circle" class="breathe-circle w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-yellow-400 shadow-lg flex flex-col items-center justify-center text-center p-2 text-white">
                <span id="breathe-label" class="text-xs font-extrabold tracking-wide uppercase">Prepárate</span>
                <span id="breathe-timer" class="text-2xl font-black">4s</span>
              </div>
            </div>

            <p id="breathe-instruction" class="text-xs text-slate-300 max-w-xs mb-5 font-medium min-h-[32px]">
              Presiona iniciar para regular tu ritmo cardíaco y oxígeno cerebral antes de intervenir en tienda.
            </p>

            <button id="btn-toggle-breathe" class="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-md transition-transform active:scale-95 flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i> Iniciar Pausa de 30s
            </button>
          </div>

          <!-- D1 Store Triggers Cheat Sheet -->
          <div class="bg-white rounded-3xl p-6 card-shadow border border-slate-100 space-y-4">
            <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
              <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i> Detonantes Típicos en Tiendas D1
            </h4>
            <div class="space-y-3 text-xs">
              <div class="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                <span class="font-bold text-amber-900 block mb-0.5">1. Fila de clientes y lentitud en cobro</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> Mirar con desespero y apresurar de mala manera al cajero.<br><strong>Respuesta PAUSA:</strong> Abrir caja de respaldo o ayudar a empacar mientras mantienes la calma.</p>
              </div>
              <div class="p-3 rounded-xl bg-rose-50/70 border border-rose-100">
                <span class="font-bold text-rose-900 block mb-0.5">2. Mercancía mal ubicada o mal rotada</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> Gritar al pasillo: '¿quién surtió esto tan mal?'.<br><strong>Respuesta PAUSA:</strong> Llamar al encargado en privado, mostrar el error con hechos y corregir el criterio.</p>
              </div>
              <div class="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                <span class="font-bold text-blue-900 block mb-0.5">3. Queja por distribución de turno</span>
                <p class="text-slate-600 text-[11px]"><strong>Respuesta impulsiva:</strong> 'Aquí mando yo y no se queje'.<br><strong>Respuesta PAUSA:</strong> Escuchar la dificultad física o personal y revisar la matriz objetiva de turnos.</p>
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

// Wizard state and logic
let currentStep = 1;
const pausaFormData = {
  situacion: '',
  emocion: '',
  hechos: '',
  respuesta: '',
  evaluacion: ''
};

function initPausaWizard() {
  renderStep(currentStep);

  const btnNext = document.getElementById('btn-pausa-next');
  const btnPrev = document.getElementById('btn-pausa-prev');

  btnNext.addEventListener('click', () => {
    saveCurrentStepData(currentStep);
    if (currentStep < 5) {
      currentStep++;
      renderStep(currentStep);
    } else {
      // Finalize and save
      savePausaPractice();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      saveCurrentStepData(currentStep);
      currentStep--;
      renderStep(currentStep);
    }
  });
}

function renderStep(step) {
  const container = document.getElementById('pausa-wizard-body');
  const stepIndicator = document.getElementById('pausa-step-indicator');
  const btnPrev = document.getElementById('btn-pausa-prev');
  const btnNext = document.getElementById('btn-pausa-next');

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

      <!-- Quick presets -->
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

  // Attach presets click
  container.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('pausa-input').value = btn.textContent.trim();
      pausaFormData[curr.field] = btn.textContent.trim();
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function saveCurrentStepData(step) {
  const fields = { 1: 'situacion', 2: 'emocion', 3: 'hechos', 4: 'respuesta', 5: 'evaluacion' };
  const input = document.getElementById('pausa-input');
  if (input) {
    pausaFormData[fields[step]] = input.value;
  }
}

function savePausaPractice() {
  saveCurrentStepData(5);

  const logs = JSON.parse(localStorage.getItem('lidera_d1_pausa_logs') || '[]');
  const newEntry = {
    id: Date.now(),
    date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }),
    situacion: pausaFormData.situacion || 'Situación en tienda no descrita',
    emocion: pausaFormData.emocion || 'No especificada',
    hechos: pausaFormData.hechos || 'No especificados',
    respuesta: pausaFormData.respuesta || 'Respuesta aplicada con éxito',
    evaluacion: pausaFormData.evaluacion || 'Completado'
  };

  logs.unshift(newEntry);
  localStorage.setItem('lidera_d1_pausa_logs', JSON.stringify(logs));

  // Reset form
  currentStep = 1;
  pausaFormData.situacion = '';
  pausaFormData.emocion = '';
  pausaFormData.hechos = '';
  pausaFormData.respuesta = '';
  pausaFormData.evaluacion = '';

  renderStep(currentStep);
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
  countSpan.textContent = `${logs.length} registro${logs.length === 1 ? '' : 's'}`;

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

// 30 Seconds Breathing Timer
let breatheInterval = null;
let breatheRunning = false;

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
    let cycleTime = 0; // 0-4 Inhale, 4-8 Hold, 8-12 Exhale

    breatheInterval = setInterval(() => {
      totalSeconds--;
      cycleTime = (cycleTime + 1) % 12;

      if (cycleTime < 4) {
        label.textContent = "INHALA";
        instruction.textContent = "Inhala aire profundamente por la nariz llevando el aire al abdomen...";
        circle.className = "breathe-circle inhale w-28 h-28 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${4 - cycleTime}s`;
      } else if (cycleTime < 8) {
        label.textContent = "SOSTÉN";
        instruction.textContent = "Mantén el aire con serenidad, relaja hombros y mandíbula...";
        circle.className = "breathe-circle hold w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${8 - cycleTime}s`;
      } else {
        label.textContent = "EXHALA";
        instruction.textContent = "Suelta el aire lentamente por la boca liberando toda la tensión acumulada...";
        circle.className = "breathe-circle exhale w-28 h-28 rounded-full bg-gradient-to-tr from-red-600 to-rose-500 shadow-xl flex flex-col items-center justify-center text-center p-2 text-white";
        timer.textContent = `${12 - cycleTime}s`;
      }

      if (totalSeconds <= 0) {
        stopBreathing();
        label.textContent = "¡LISTO!";
        timer.textContent = "30s";
        instruction.textContent = "Tu ritmo cardíaco ha descendido. Ahora estás en condiciones de responder con liderazgo consciente.";
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
