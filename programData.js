// Data store for Program "Lidera D1: Emociones que Mueven la Tienda"

window.PROGRAM_INFO = {
  title: "Lidera D1: Emociones que Mueven la Tienda",
  subtitle: "Programa de Liderazgo Emocional para Tiendas D1",
  duration: "8 Semanas",
  audience: "Jefes de Tienda, Supervisores de Zona y Coordinadores Operativos",
  beneficiaries: "Cajeros, auxiliares de surtido, personal de inventario y clientes de Tiendas D1",
  methodologyDistribution: [
    { label: "Explicación Conceptual", percentage: 20, desc: "Microtalleres breves y directos" },
    { label: "Práctica Guiada y Simulación", percentage: 50, desc: "Juego de roles, resolución de casos y rúbricas" },
    { label: "Reflexión y Compromiso", percentage: 20, desc: "Aplicación inmediata en tienda y bitácora" },
    { label: "Evaluación y Métricas", percentage: 10, desc: "Línea base, rúbrica conductual y encuestas" }
  ],
  weeklyDedication: "60–90 min sesión semanal + 10–15 min de práctica diaria en tienda protegida"
};

window.PILLARS_EI = [
  {
    id: "autoconciencia",
    name: "Autoconciencia Emocional",
    icon: "brain-circuit",
    color: "from-red-500 to-rose-600",
    simpleExp: "Reconocer qué emoción se siente, qué la provoca y cómo puede afectar la propia conducta y la del equipo.",
    storeApp: "El jefe de tienda identifica su nivel de frustración o aceleración antes de corregir un error de inventario o un descuadre en caja.",
    observableBehavior: "Hace una pausa, identifica su detonante y evita responder desde la irritabilidad."
  },
  {
    id: "autocontrol",
    name: "Autocontrol y Gestión del Estrés",
    icon: "shield-alert",
    color: "from-amber-500 to-orange-600",
    simpleExp: "Regular la respuesta y elegir una conducta útil en vez de reaccionar impulsivamente bajo presión.",
    storeApp: "Hacer una pausa breve (Herramienta PAUSA), ordenar prioridades y dar instrucciones claras y con tono sereno durante una fila larga o caída del sistema.",
    observableBehavior: "Mantiene un tono de voz firme pero respetuoso, no descalifica y divide la urgencia en pasos claros."
  },
  {
    id: "automotivacion",
    name: "Automotivación",
    icon: "flame",
    color: "from-yellow-500 to-amber-600",
    simpleExp: "Mantener el esfuerzo y orientar la energía hacia objetivos alcanzables, aún ante jornadas de alto volumen.",
    storeApp: "Reconocer avances del equipo al completar el surtido matutino y dividir una meta exigente de cierre en tareas concretas por colaborador.",
    observableBehavior: "Transmite energía constructiva, celebra logros pequeños y no se enfoca únicamente en lo que falta."
  },
  {
    id: "empatia",
    name: "Empatía",
    icon: "heart-handshake",
    color: "from-emerald-500 to-teal-600",
    simpleExp: "Escuchar activamente y considerar la perspectiva, cansancio y circunstancias de otra persona antes de juzgar.",
    storeApp: "Preguntar qué dificultad técnica o física tuvo un auxiliar antes de concluir que no cumplió con su cuota de pasillo.",
    observableBehavior: "Escucha sin interrumpir, valida la dificultad planteada y busca comprender antes de emitir un juicio."
  },
  {
    id: "relaciones",
    name: "Manejo de Relaciones",
    icon: "users",
    color: "from-blue-500 to-indigo-600",
    simpleExp: "Comunicarse con asertividad y respeto, abordar diferencias de criterio y sostener acuerdos operativos.",
    storeApp: "Conversar en privado después de un desacuerdo por asignación de tareas y definir un criterio transparente para el próximo turno.",
    observableBehavior: "Genera acuerdos con responsable, tarea y fecha de verificación; aborda conflictos a tiempo y en privado."
  }
];

window.LEADERSHIP_APPROACHES = [
  {
    name: "Liderazgo Participativo",
    badge: "Colaborativo",
    use: "Consultar al equipo de tienda cuando se distribuyen tareas, rotaciones o cuando se proponen mejoras en el orden de bodega.",
    precaution: "No significa someter a votación decisiones operativas urgentes o protocolos de seguridad."
  },
  {
    name: "Liderazgo Transformacional",
    badge: "Inspirador",
    use: "Conectar las tareas diarias con el propósito de servir a la comunidad del barrio, motivar y reconocer el potencial de crecimiento de cada auxiliar.",
    precaution: "Debe acompañarse de metas claras, estándares medibles y retroalimentación constante."
  },
  {
    name: "Liderazgo Consciente",
    badge: "Inteligencia Emocional",
    use: "Actuar con plena atención al impacto de las propias palabras, el tono de voz y las necesidades emocionales del equipo en días de quincena o inventario.",
    precaution: "Ser empático y consciente no implica evitar conversaciones difíciles ni tolerar incumplimientos sistemáticos."
  },
  {
    name: "Liderazgo Situacional",
    badge: "Adaptativo",
    use: "Adaptar el nivel de supervisión: dar instrucciones muy precisas a un auxiliar nuevo y dar autonomía con delegación a un cajero experimentado.",
    precaution: "El nivel de acompañamiento debe revisarse periódicamente; no dejar solo al nuevo ni microgestionar al veterano."
  },
  {
    name: "Liderazgo Transaccional Responsable",
    badge: "Estructurado",
    use: "Definir expectativas claras, horarios, roles de surtido/caja, cumplimiento de metas de merma y seguimiento justo de resultados.",
    precaution: "No debe reducir el liderazgo a amenazas, sanciones o señalamiento exclusivo de errores."
  }
];

window.BENCHMARKING_DATA = [
  {
    referent: "Grupo Éxito",
    learning: "Desarrollo formal de líderes en tienda, cultura de conversaciones 1 a 1 de feedback continuo y tableros unificados de indicadores.",
    adaptation: "Se incorporan pruebas iniciales/finales, bitácora de feedback semanal de 4 pasos y un tablero de indicadores operativos para D1."
  },
  {
    referent: "Colsubsidio",
    learning: "Formación modular flexible y programas de salud emocional, autocuidado y manejo del estrés laboral en piso de venta.",
    adaptation: "Diseño en microtalleres de 60-90 min, herramienta PAUSA de 30 segundos y check-in diario 'Pulso de Tienda' que no sobrecarga la operación."
  },
  {
    referent: "Tecnológico de Antioquia (TDEA)",
    learning: "Investigación sobre gestión de emociones, clima en trabajadores comerciales de retail y resolución constructiva de conflictos.",
    adaptation: "Casos prácticos simulados con situaciones auténticas de retail hard-discount, escucha activa en tríos y rúbrica conductual común 1-4."
  }
];

window.WEEKS_DATA = [
  {
    week: 1,
    title: "Diagnóstico Emocional, Clima y DOFA Personal",
    duration: "75–90 min",
    objective: "Establecer la línea base de competencias de liderazgo, percepción del clima en tienda y prioridades individuales de mejora.",
    competencyEI: "Autoconciencia y Manejo de Relaciones",
    leadershipStyle: "Liderazgo Consciente y Reflexión del Propio Estilo",
    theoreticalBasis: "El autodiagnóstico estructurado permite reconocer fortalezas y áreas de oportunidad sin convertir impresiones iniciales en juicios definitivos.",
    resources: "Encuesta anónima de clima (8 preguntas), prueba corta conceptual, matriz DOFA de liderazgo y formato digital.",
    procedure: [
      "Explicar el propósito del programa, la confidencialidad de la información y el uso estrictamente formativo y agregado.",
      "Aplicar la encuesta anónima de percepción al equipo de tienda (comunicación, respeto, reconocimiento y apoyo del líder).",
      "Aplicar al líder la autoevaluación diagnóstica y prueba corta de conceptos de inteligencia emocional y liderazgo.",
      "Diligenciar la matriz DOFA personal (1 Fortaleza, 1 Oportunidad, 1 Debilidad y 1 Amenaza sobre su rol en tienda).",
      "Elegir una conducta observable prioritaria que el líder se comprometa a entrenar durante el programa."
    ],
    practicalCase: "Caso: El equipo expresa inconformidad porque percibe que las tareas pesadas de descarga y estiba siempre le tocan a los mismos. El líder debe identificar qué datos necesita levantar antes de confirmar o refutar la queja.",
    evidence: "Encuestas de línea base consolidadas, prueba diagnóstica y matriz DOFA individual con conducta meta.",
    indicator: "Porcentaje de participantes con diagnóstico completo",
    formula: "(Participantes con diagnóstico completo / Participantes inscritos) × 100",
    target: "≥ 90% completa los instrumentos (Línea base queda fijada)"
  },
  {
    week: 2,
    title: "Autoconocimiento Emocional y Estilo de Liderazgo",
    duration: "60–75 min",
    objective: "Reconocer emociones frecuentes, detonantes operativos y sus efectos inmediatos sobre la comunicación y las decisiones en tienda.",
    competencyEI: "Autoconciencia Emocional y Automotivación",
    leadershipStyle: "Liderazgo Consciente y Situacional",
    theoreticalBasis: "Identificar la cadena Situación → Emoción → Pensamiento → Respuesta permite introducir una pausa consciente antes de reaccionar impulsivamente.",
    resources: "Diario emocional breve, tarjetas de situaciones típicas de retail y hoja de compromiso semanal.",
    procedure: [
      "Comprender la secuencia cognitiva-conductual: estímulo externo, emoción sentida, pensamiento automático y conducta resultante.",
      "Registrar dos situaciones recientes de alta tensión en tienda (ej. llegada de camión con retraso o fila hasta el pasillo 3).",
      "Identificar señales fisiológicas tempranas de frustración o impaciencia (tensión en mandíbula, respiración corta, tono elevado).",
      "Analizar cómo el estilo de liderazgo automático (ej. transaccional impositivo) afecta la respuesta del colaborador.",
      "Formular un compromiso concreto y observable para gestionar el principal detonante detectado."
    ],
    practicalCase: "Caso: Llega el camión de CEDI con 18 estibas mientras hay 15 clientes en fila y solo dos colaboradores en turno. El líder siente desespero y ganas de gritar '¡muévanse todos ya!'. Debe registrar su emoción y priorizar con cabeza fría.",
    evidence: "Registro personal de detonantes operativos y compromiso conductual firmado.",
    indicator: "Porcentaje de líderes que identifican al menos dos detonantes y una respuesta alternativa",
    formula: "(Líderes que cumplen el criterio / Líderes participantes) × 100",
    target: "≥ 80% cumple el criterio observable"
  },
  {
    week: 3,
    title: "Autorregulación y la Herramienta PAUSA",
    duration: "60–75 min",
    objective: "Entrenar y dominar la técnica breve PAUSA para responder con serenidad, asertividad y claridad bajo alta presión operativa.",
    competencyEI: "Autocontrol y Gestión del Estrés",
    leadershipStyle: "Liderazgo Consciente y Situacional",
    theoreticalBasis: "La autorregulación no es reprimir la emoción; es desescalar la reactividad neurobiológica para elegir la respuesta más funcional y respetuosa.",
    resources: "Tarjeta de bolsillo PAUSA, cronómetro de respiración (30s), guiones de simulación y rúbrica conductual.",
    procedure: [
      "Presentar el acrónimo PAUSA: Párate un instante; Atiende a la emoción; Ubica los hechos; Selecciona una respuesta; Actúa y revisa.",
      "Modelar la técnica ante dos situaciones: un error grave en conteo de inventario y un reclamo acalorado de cliente.",
      "Práctica en parejas alternando los roles de líder, colaborador y observador con la rúbrica.",
      "El observador califica si el líder evitó descalificaciones, centró la conversación en hechos y definió el siguiente paso operativo.",
      "Establecer momentos específicos de la semana para aplicar PAUSA en la tienda."
    ],
    practicalCase: "Caso: En el cierre de tienda, el inventario de carnes y lácteos arroja una merma injustificada de $250.000 COP por mal registro. El líder está exhausto y siente rabia. Debe aplicar PAUSA antes de llamar al encargado del pasillo.",
    evidence: "Rúbricas de simulación calificadas y registro de al menos 1 aplicación real en tienda.",
    indicator: "Porcentaje de líderes que alcanzan nivel competente en la simulación",
    formula: "(Líderes con nivel competente o superior / Líderes evaluados) × 100",
    target: "≥ 80% alcanza nivel competente (puntuación ≥ 3/4)"
  },
  {
    week: 4,
    title: "Empatía, Escucha Activa y Comunicación Asertiva",
    duration: "75 min",
    objective: "Practicar la escucha atenta y comunicar instrucciones, límites y desacuerdos de manera clara, firme y respetuosa.",
    competencyEI: "Empatía y Manejo de Relaciones",
    leadershipStyle: "Liderazgo Participativo y Consciente",
    theoreticalBasis: "Escuchar empáticamente no significa ceder a todas las peticiones; significa comprender la vivencia del colaborador antes de tomar decisiones.",
    resources: "Guiones de escucha activa, tarjetas de frases 'tóxicas vs. asertivas' y rúbrica de observación en tríos.",
    procedure: [
      "Explicar los 4 pasos de la escucha activa: no interrumpir, resumir lo entendido, hacer preguntas de aclaración y validar emociones.",
      "Dinámica en tríos: un colaborador expone una dificultad real de turno, el líder escucha y parafrasea, y el observador evalúa.",
      "Taller de reescritura: transformar expresiones acusatorias ('usted nunca se fija') en mensajes descriptivos basados en hechos e impacto.",
      "Simulación de un reclamo por asignación de turnos dominicales.",
      "Elección de una frase ancla asertiva para usar en el piso de venta."
    ],
    practicalCase: "Caso: Un cajero afirma: 'Jefe, usted siempre me deja en la caja rápida en la hora más dura y a Carlos lo manda a surtir fresco donde no tiene que lidiar con gente'. El líder debe escuchar sin ponerse a la defensiva y analizar objetivamente la rotación.",
    evidence: "Rúbrica de escucha calificada y plantilla de conversación asertiva elaborada.",
    indicator: "Puntuación media de escucha y comunicación asertiva en la práctica",
    formula: "Suma de puntuaciones obtenidas / Número de criterios evaluados",
    target: "Promedio ≥ 3.0 / 4.0 al finalizar la sesión"
  },
  {
    week: 5,
    title: "Retroalimentación Respetuosa y Reconocimiento",
    duration: "60–75 min",
    objective: "Entregar retroalimentación correctiva constructiva en privado y brindar reconocimiento específico y oportuno del esfuerzo del equipo.",
    competencyEI: "Empatía, Automotivación y Manejo de Relaciones",
    leadershipStyle: "Liderazgo Transformacional y Transaccional Responsable",
    theoreticalBasis: "El feedback efectivo describe el comportamiento observable, su impacto y el cambio esperado; el reconocimiento alimenta la automotivación.",
    resources: "Plantilla estructurada de feedback (Hecho → Impacto → Escucha → Acuerdo), tarjetas de reconocimiento y bitácora semanal.",
    procedure: [
      "Analizar la estructura de feedback constructivo: Hecho observable (sin adjetivos) + Impacto en la operación + Escucha + Acuerdo medible.",
      "Contrastar una corrección en público (que genera humillación y resentimiento) frente a una conversación privada y respetuosa.",
      "Simular dos conversaciones: una de corrección por llegar tarde al relevo de caja y otra de reconocimiento por excelente surtido.",
      "El observador califica el uso de datos objetivos y la ausencia de descalificaciones.",
      "Compromiso de realizar en la semana al menos 1 conversación de feedback y 1 reconocimiento explícito en tienda."
    ],
    practicalCase: "Caso: Un auxiliar dejó cajas a medio abrir en el pasillo principal durante la apertura de la tienda, generando riesgo para los clientes. El líder debe retroalimentarlo en privado sin gritar y acordar el estándar de orden.",
    evidence: "Guiones de conversación registrados y bitácora con las dos prácticas realizadas en tienda.",
    indicator: "Porcentaje de líderes que completan las dos prácticas acordadas (feedback + reconocimiento)",
    formula: "(Líderes que registran feedback y reconocimiento / Líderes participantes) × 100",
    target: "≥ 80% completa ambas prácticas con registro válido"
  },
  {
    week: 6,
    title: "Conflictos, Distribución de Tareas y Decisiones bajo Presión",
    duration: "75–90 min",
    objective: "Gestionar desacuerdos interpersonales en tienda mediante hechos verificables, criterios transparentes de distribución y acuerdos de seguimiento.",
    competencyEI: "Autocontrol, Empatía y Manejo de Relaciones",
    leadershipStyle: "Liderazgo Participativo, Situacional y Transaccional",
    theoreticalBasis: "Los conflictos operativos crecen cuando hay opacidad en la carga laboral. Separar los hechos de las interpretaciones desactiva la rivalidad.",
    resources: "Matriz visual de distribución de tareas, casos de conflicto entre compañeros y formato de acta de acuerdos.",
    procedure: [
      "Presentar el protocolo de resolución en 5 pasos: Describir el hecho → Escuchar versiones individuales → Identificar criterios de equidad → Acordar solución → Fijar fecha de revisión.",
      "Trabajar en grupos sobre una matriz de carga de trabajo: surtido matutino, cajas, aseo y control de mermas con personal reducido.",
      "Definir criterios transparentes: rotación equitativa, experiencia requerida y necesidades de la operación.",
      "Simulación de un careo entre dos colaboradores que tuvieron una discusión frente a clientes.",
      "Redacción de un acta de acuerdos con tareas, responsables y seguimiento a 7 días."
    ],
    practicalCase: "Caso: Dos colaboradores discuten en voz alta porque uno de ellos no hizo el aseo del baño en su turno y el otro se niega a recibir el puesto. Los clientes están observando. El líder interviene, calma los ánimos y resuelve.",
    evidence: "Matriz de distribución equitativa diligenciada y acta de acuerdos firmada por las partes.",
    indicator: "Porcentaje de casos simulados que terminan con un acuerdo verificable",
    formula: "(Casos con acuerdo que define tarea, responsable y revisión / Casos evaluados) × 100",
    target: "≥ 80% de los casos cumple los 3 criterios obligatorios"
  },
  {
    week: 7,
    title: "Aplicación en Tienda y 'Pulso de Tienda'",
    duration: "10–15 min diarios + revisión semanal de 30 min",
    objective: "Transferir de manera sistemática las herramientas al piso de venta diario mediante el micro ritual del 'Pulso de Tienda'.",
    competencyEI: "Integración de los 5 Pilares de Inteligencia Emocional",
    leadershipStyle: "Liderazgo Situacional y Consciente en Acción",
    theoreticalBasis: "El cambio de comportamiento sostenible solo ocurre cuando el aprendizaje se practica en el entorno real de trabajo con retroalimentación inmediata.",
    resources: "Formulario diario 'Pulso de Tienda', tarjeta PAUSA, bitácora de tienda y rúbrica de campo para supervisores.",
    procedure: [
      "Implementar al inicio de cada turno el ritual de 5 minutos 'Pulso de Tienda': Prioridad del día, distribución de roles, alerta de estrés y apoyo.",
      "Aplicar al menos una técnica entrenada (PAUSA, escucha o feedback) ante un evento real en el piso de venta.",
      "Registrar de forma anónima y breve la situación, la respuesta dada y el resultado inmediato.",
      "Recoger micro-percepción de los colaboradores a través de 2 preguntas rápidas de validación.",
      "Sesión de 30 minutos con el supervisor de zona para revisar aprendizajes, facilitadores y barreras operativas encontradas."
    ],
    practicalCase: "Caso real de tienda: Durante un día de lluvia intensa, caen goteras sobre la zona de granos, se cae la línea de datáfonos y hay congestión. El líder reúne al equipo 2 minutos, aplica Pulso de Tienda y redistribuye con calma.",
    evidence: "Bitácoras diarias de 'Pulso de Tienda' y registros de situaciones documentadas.",
    indicator: "Porcentaje de líderes que documentan al menos dos aplicaciones reales en tienda",
    formula: "(Líderes con ≥2 registros válidos / Líderes participantes) × 100",
    target: "≥ 80% registra dos o más aplicaciones válidas"
  },
  {
    week: 8,
    title: "Evaluación Final y Plan de Continuidad (30–60 Días)",
    duration: "75–90 min",
    objective: "Medir el impacto comparativo frente a la línea base y formular el plan de compromisos individuales para los siguientes 60 días.",
    competencyEI: "Autoconciencia, Autorregulación y Manejo de Relaciones",
    leadershipStyle: "Integración de Liderazgo Participativo, Consciente y Situacional",
    theoreticalBasis: "La evaluación científica compara el antes y después con los mismos instrumentos, interpreta resultados con prudencia y previene la regresión de hábitos.",
    resources: "Encuesta final idéntica a la inicial, prueba post-taller, rúbrica de simulación de cierre y formato de Plan de Continuidad.",
    procedure: [
      "Aplicar la encuesta de percepción al equipo y la prueba de conocimientos al líder (mismas preguntas y escala que en Semana 1).",
      "Realizar una simulación final de integración con evaluación mediante la rúbrica conductual estándar (1 a 4).",
      "Consolidar y graficar los indicadores de participación, aprendizaje (+20 pp meta) y percepción (+10 pp meta).",
      "Analizar con franqueza los factores externos que afectaron los resultados (ej. vacantes no cubiertas, rotación externa).",
      "Elaborar el Plan de Continuidad a 30-60 días con 2 compromisos observables por líder y fechas de seguimiento con el supervisor de zona."
    ],
    practicalCase: "Caso de integración: El líder analiza un conflicto real que tuvo en el pasado en su tienda y presenta cómo lo abordaría hoy aplicando PAUSA, escucha activa, matriz de tareas y retroalimentación constructiva.",
    evidence: "Informe comparativo Pre vs. Post consolidado y Plan de Continuidad formalizado a 30-60 días.",
    indicator: "Porcentaje de participantes con evaluación final y plan de continuidad completos",
    formula: "(Participantes con ambos productos / Participantes inscritos) × 100",
    target: "≥ 80% completa la evaluación final y su plan de continuidad"
  }
];
