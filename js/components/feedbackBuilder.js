// Component: Feedback Respetuoso y Reconocimiento Específico (Semana 5)

export function renderFeedbackBuilder(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-8">
      <!-- Header -->
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
        <!-- Tab selector: Feedback vs Reconocimiento -->
        <div class="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl shrink-0">
          <button id="tab-btn-feedback" class="active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all">
            <i data-lucide="sliders" class="w-3.5 h-3.5 inline mr-1 text-red-600"></i> Feedback Correctivo
          </button>
          <button id="tab-btn-recognition" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all">
            <i data-lucide="award" class="w-3.5 h-3.5 inline mr-1 text-yellow-500"></i> Reconocimiento
          </button>
        </div>
      </div>

      <!-- Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Form Builder (Cols 7) -->
        <div class="lg:col-span-7 space-y-6">
          <!-- Feedback Mode -->
          <div id="feedback-form-panel" class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-xs font-bold text-red-600 uppercase tracking-wider block">Método de los 4 Pasos</span>
              <h3 class="text-lg font-bold text-slate-900">Preparar Conversación de Retroalimentación</h3>
              <p class="text-xs text-slate-500">Recuerda: siempre en privado y centrado en conductas observables, jamás en la persona.</p>
            </div>

            <div class="space-y-4 text-xs">
              <!-- Colaborador y Cargo -->
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

              <!-- Paso 1: Hecho Observable -->
              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  1. Hecho Observable (Describe con datos exactos lo que ocurrió, sin adjetivos descalificadores)
                </label>
                <textarea id="fb-step1" rows="2" placeholder="Ej: Ayer en el turno de las 3:00 PM, 6 referencias de lácteos quedaron sin rotar por fecha de vencimiento..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium"></textarea>
              </div>

              <!-- Paso 2: Impacto Operativo -->
              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  2. Impacto Operativo (Explica el efecto en la merma, clientes o compañeros)
                </label>
                <textarea id="fb-step2" rows="2" placeholder="Ej: Esto incrementa el riesgo de mermas vencidas para la tienda y afecta el inventario que audita el supervisor..." class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium"></textarea>
              </div>

              <!-- Paso 3: Pregunta de Escucha -->
              <div>
                <label class="block font-bold text-slate-800 mb-1">
                  3. Pregunta de Escucha Activa (Invita al colaborador a explicar qué obstáculo tuvo)
                </label>
                <input type="text" id="fb-step3" value="¿Qué dificultad u obstáculo tuviste en ese momento que te impidió verificar las fechas?" class="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 outline-none font-medium text-slate-800">
              </div>

              <!-- Paso 4: Acuerdo y Seguimiento -->
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

          <!-- Recognition Mode (Hidden by default) -->
          <div id="recognition-form-panel" class="bg-white p-6 md:p-8 rounded-3xl card-shadow border border-slate-100 space-y-6 hidden">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-xs font-bold text-amber-600 uppercase tracking-wider block">Cultura de Reconocimiento</span>
              <h3 class="text-lg font-bold text-slate-900">Diseñar Reconocimiento Específico</h3>
              <p class="text-xs text-slate-500">Reconoce conductas observables y esfuerzo real, no frases genéricas.</p>
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

        <!-- Live Script Preview & Log (Cols 5) -->
        <div class="lg:col-span-5 space-y-6">
          <!-- Script Output Card -->
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

          <!-- Bitácora de Prácticas Registradas -->
          <div class="bg-white p-6 rounded-3xl card-shadow border border-slate-100 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i> Bitácora de Prácticas (Semana 5)
              </h4>
              <span id="feedback-log-counter" class="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                Meta: ≥ 80%
              </span>
            </div>
            <div id="feedback-history-list" class="space-y-2 text-xs">
              <!-- Dynamically populated -->
            </div>
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

  tabFeedback.addEventListener('click', () => {
    tabFeedback.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    tabRecognition.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    panelFeedback.classList.remove('hidden');
    panelRecognition.classList.add('hidden');
  });

  tabRecognition.addEventListener('click', () => {
    tabRecognition.className = 'active px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 shadow-sm transition-all';
    tabFeedback.className = 'px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 transition-all';
    panelRecognition.classList.remove('hidden');
    panelFeedback.classList.add('hidden');
  });

  // Generate feedback script
  const btnGenFb = document.getElementById('btn-generate-feedback');
  btnGenFb.addEventListener('click', () => {
    const name = document.getElementById('fb-collab-name').value || 'Colaborador';
    const role = document.getElementById('fb-collab-role').value;
    const step1 = document.getElementById('fb-step1').value || 'Se evidenció una discrepancia en el procedimiento operativo.';
    const step2 = document.getElementById('fb-step2').value || 'Esto genera retrasos en la tienda e impacto en la auditoría.';
    const step3 = document.getElementById('fb-step3').value || '¿Qué obstáculo tuviste?';
    const step4 = document.getElementById('fb-step4').value || 'Acordamos revisar el proceso juntos mañana.';

    const scriptText = `
[CONVERSACIÓN PRIVADA EN OFICINA / BODEGA]
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
Líder: "¿Estamos de acuerdo con este compromiso?"
    `;

    document.getElementById('script-preview').innerText = scriptText;

    // Save practice to log
    savePracticeLog({
      type: 'Feedback',
      name,
      role,
      summary: step1,
      date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })
    });

    if (window.confetti) window.confetti({ particleCount: 40, spread: 50 });
  });

  // Generate recognition script
  const btnGenRec = document.getElementById('btn-generate-recognition');
  btnGenRec.addEventListener('click', () => {
    const name = document.getElementById('rec-collab-name').value || 'Colaborador';
    const behavior = document.getElementById('rec-behavior').value || 'Tu compromiso y agilidad en el turno de hoy.';
    const impact = document.getElementById('rec-impact').value || 'Hizo una gran diferencia para los clientes y el equipo.';

    const scriptText = `
[RECONOCIMIENTO ESPECÍFICO EN TIENDA]
Líder: "Hola ${name}, quiero tomarme un minuto para agradecerte y reconocer algo puntual que hiciste hoy..."

CONDUCTA OBSERVABLE:
"${behavior}"

IMPACTO POSITIVO:
"${impact}"

Líder: "Gracias por tu esfuerzo y por ser un ejemplo de actitud en nuestra tienda D1. ¡Excelente trabajo!"
    `;

    document.getElementById('script-preview').innerText = scriptText;

    savePracticeLog({
      type: 'Reconocimiento',
      name,
      role: 'Equipo Tienda',
      summary: behavior,
      date: new Date().toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })
    });

    if (window.confetti) window.confetti({ particleCount: 50, spread: 60 });
  });

  // Copy button
  const btnCopy = document.getElementById('btn-copy-script');
  btnCopy.addEventListener('click', () => {
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
