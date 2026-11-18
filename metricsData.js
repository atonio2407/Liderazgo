// Metrics and Indicators for "Lidera D1: Emociones que Mueven la Tienda"

const METRICS_TABLE = window.METRICS_TABLE = [
  {
    id: "asistencia",
    week: "1 a 8",
    category: "Participación",
    name: "Asistencia Media a Sesiones",
    formula: "(Asistencias registradas / Asistencias programadas) × 100",
    baseline: "Por establecer con registros de la tienda",
    target: "≥ 85%",
    instrument: "Listas de asistencia y firmas digitales",
    frequency: "Semanal y al cierre",
    responsible: "Facilitador / Gestión Humana",
    evidence: "Planillas de asistencia fechadas",
    simulatedPre: 68,
    simulatedPost: 89,
    unit: "%"
  },
  {
    id: "diagnosticos",
    week: "1",
    category: "Proceso",
    name: "Diagnósticos Iniciales Completos",
    formula: "(Diagnósticos completos / Participantes inscritos) × 100",
    baseline: "Por establecer en semana 1",
    target: "≥ 90%",
    instrument: "Lista de verificación diagnóstica",
    frequency: "Semana 1",
    responsible: "Gestión Humana",
    evidence: "Encuesta de clima, prueba y DOFA individual",
    simulatedPre: 40,
    simulatedPost: 95,
    unit: "%"
  },
  {
    id: "conocimientos",
    week: "2 a 6",
    category: "Aprendizaje",
    name: "Mejora en Conocimientos (Pre vs Post)",
    formula: "% Correcto final − % Correcto inicial (puntos porcentuales)",
    baseline: "Prueba inicial de la Semana 1 (Media: 61%)",
    target: "+20 puntos porcentuales (≥ 81%)",
    instrument: "Prueba estandarizada pre/post (15 preguntas)",
    frequency: "Semanas 1 y 8",
    responsible: "Facilitador del programa",
    evidence: "Resultados agregados de pruebas",
    simulatedPre: 61,
    simulatedPost: 83,
    unit: "pp"
  },
  {
    id: "competencia_simulada",
    week: "3, 4 y 6",
    category: "Aplicación",
    name: "Líderes Competentes en Simulación Conductual",
    formula: "(Líderes con puntaje ≥ 3.0/4.0 / Líderes evaluados) × 100",
    baseline: "Primera rúbrica aplicada (Línea base: ~42%)",
    target: "≥ 80% al cierre",
    instrument: "Rúbrica conductual común (5 dimensiones, 1 a 4)",
    frequency: "Semanas 3, 4, 6 y 8",
    responsible: "Supervisor de zona / Facilitador",
    evidence: "Rúbricas de observación fechadas",
    simulatedPre: 42,
    simulatedPost: 84,
    unit: "%"
  },
  {
    id: "practicas_feedback",
    week: "5",
    category: "Proceso / Aplicación",
    name: "Prácticas de Feedback y Reconocimiento Completadas",
    formula: "(Líderes que registran ambas prácticas / Total participantes) × 100",
    baseline: "0% al inicio (no existía protocolo formal)",
    target: "≥ 80%",
    instrument: "Bitácora semanal de jefatura",
    frequency: "Semana 5 y seguimiento en Semana 7",
    responsible: "Jefe de tienda y Supervisor",
    evidence: "Registros de bitácora sin datos sensibles",
    simulatedPre: 15,
    simulatedPost: 86,
    unit: "%"
  },
  {
    id: "aplicaciones_tienda",
    week: "7",
    category: "Aplicación",
    name: "Aplicaciones Documentadas en Piso de Venta",
    formula: "(Líderes con ≥ 2 registros válidos / Total participantes) × 100",
    baseline: "Por establecer mediante diagnóstico",
    target: "≥ 80%",
    instrument: "Bitácora de 'Pulso de Tienda'",
    frequency: "Semana 7",
    responsible: "Supervisor de zona",
    evidence: "Registros de práctica en situaciones reales",
    simulatedPre: 20,
    simulatedPost: 88,
    unit: "%"
  },
  {
    id: "percepcion_equipo",
    week: "1 y 8",
    category: "Percepción",
    name: "Respuestas Favorables sobre Apoyo y Comunicación",
    formula: "(Respuestas favorables 4 o 5 / Total respuestas válidas) × 100",
    baseline: "Encuesta inicial anónima (Línea base: 56%)",
    target: "+10 puntos porcentuales (≥ 66%)",
    instrument: "Encuesta anónima al equipo de tienda (8 preguntas)",
    frequency: "Semana 1 y Semana 8",
    responsible: "Gestión Humana / Analista de Clima",
    evidence: "Resultados agregados por tienda",
    simulatedPre: 56,
    simulatedPost: 74,
    unit: "%"
  },
  {
    id: "percepcion_estres",
    week: "1 y 8",
    category: "Bienestar",
    name: "Percepción de Estrés y Sobrecarga del Líder",
    formula: "Promedio de escala 1–5 de malestar percibido (menor es mejor)",
    baseline: "Encuesta inicial no clínica (Media: 4.1 / 5.0)",
    target: "Reducción significativa (≤ 2.8 / 5.0)",
    instrument: "Cuestionario breve de percepción de estrés",
    frequency: "Antes y después",
    responsible: "Gestión Humana / Seguridad y Salud en el Trabajo",
    evidence: "Reporte agregado de bienestar",
    simulatedPre: 4.1,
    simulatedPost: 2.7,
    unit: "/5"
  },
  {
    id: "conflictos_reportados",
    week: "1 a 8",
    category: "Organizacional",
    name: "Conflictos Operativos Escacalados por cada 100 Colab.",
    formula: "(Conflictos reportados / Promedio de colaboradores del período) × 100",
    baseline: "Período previo comparable (Línea base: 8.4)",
    target: "Monitoreo y reducción (Tendencia a la baja: ~4.5)",
    instrument: "Registro formal de quejas e incidentes en tienda",
    frequency: "Mensual, antes y después",
    responsible: "Gestión Humana / Operaciones",
    evidence: "Registro agregado de casos atendidos",
    simulatedPre: 8.4,
    simulatedPost: 4.2,
    unit: "x100"
  },
  {
    id: "tasa_rotacion",
    week: "Seguimiento",
    category: "Organizacional",
    name: "Tasa de Rotación Voluntaria en Tiendas Intervenidas",
    formula: "(Salidas voluntarias del período / Promedio colaboradores) × 100",
    baseline: "Período previo equivalente (Línea base: 6.8% mensual)",
    target: "Observar tendencia de retención",
    instrument: "Reporte administrativo de novedades de personal",
    frequency: "Mensual y trimestral post-taller",
    responsible: "Gestión Humana",
    evidence: "Reportes agregados de nómina y retiro",
    simulatedPre: 6.8,
    simulatedPost: 4.5,
    unit: "%"
  },
  {
    id: "tasa_ausentismo",
    week: "Seguimiento",
    category: "Organizacional",
    name: "Tasa de Ausentismo no Justificado",
    formula: "(Horas de ausencia no médica / Horas laborales programadas) × 100",
    baseline: "Período previo equivalente (Línea base: 4.9%)",
    target: "Observar tendencia y estabilidad operativa",
    instrument: "Registro biométrico de control de turnos",
    frequency: "Mensual",
    responsible: "Gestión Humana / Operaciones",
    evidence: "Consolidado de horas trabajadas vs programadas",
    simulatedPre: 4.9,
    simulatedPost: 3.1,
    unit: "%"
  },
  {
    id: "planes_continuidad",
    week: "8",
    category: "Continuidad",
    name: "Planes Individuales de Mejora Formalizados",
    formula: "(Planes completos a 30-60 días / Planes comprometidos) × 100",
    baseline: "No aplica antes del cierre",
    target: "≥ 80%",
    instrument: "Formato estructurado de compromisos a 30-60 días",
    frequency: "Semana 8 y revisión a 60 días",
    responsible: "Jefe de tienda y Supervisor de zona",
    evidence: "Planes individuales firmados con fecha de control",
    simulatedPre: 0,
    simulatedPost: 92,
    unit: "%"
  }
];

const OBSERVATION_RUBRIC = window.OBSERVATION_RUBRIC = [
  {
    behavior: "1. Regula su reacción",
    description: "Manejo sereno de la emoción ante la tensión o el error ajeno.",
    levels: {
      1: "No se observa: Reacciona impulsivamente, levanta la voz o descalifica al colaborador delante de otros.",
      2: "Parcial: Intenta hacer pausas breves, pero pierde el foco, el tono de voz o muestra fastidio evidente.",
      3: "Competente: Mantiene un tono respetuoso, sereno y se centra estrictamente en los hechos operativos.",
      4: "Consistente: Además de mantener la serenidad, modela calma activa al equipo y ayuda a desescalar la tensión."
    }
  },
  {
    behavior: "2. Escucha activa",
    description: "Atención genuina a la perspectiva del colaborador antes de emitir juicio.",
    levels: {
      1: "No se observa: Interrumpe sistemáticamente, no deja hablar o descarta la versión del empleado.",
      2: "Parcial: Permite que el colaborador hable, pero no confirma lo entendido ni hace preguntas aclaratorias.",
      3: "Competente: Pregunta qué ocurrió, no interrumpe, resume lo escuchado y verifica la comprensión mutua.",
      4: "Consistente: Integra las perspectivas de las partes, detecta obstáculos de raíz y aclara todas las dudas."
    }
  },
  {
    behavior: "3. Comunica con claridad y respeto",
    description: "Transmisión de expectativas, hechos e instrucciones sin ambigüedades ni agresión.",
    levels: {
      1: "No se observa: Emite mensajes confusos, generalizantes ('usted siempre falla') o agresivos.",
      2: "Parcial: Señala el problema existente pero no define con claridad el siguiente paso o estándar esperado.",
      3: "Competente: Explica el hecho observable, el impacto operativo y la acción concreta requerida con respeto.",
      4: "Consistente: Comprueba comprensión activa, adapta el mensaje al nivel de experiencia del auxiliar y cierra con claridad."
    }
  },
  {
    behavior: "4. Maneja el conflicto y distribución",
    description: "Resolución de discrepancias y asignación de cargas con base en criterios justos.",
    levels: {
      1: "No se observa: Culpa, impone decisiones arbitrarias o ignora el conflicto latente entre compañeros.",
      2: "Parcial: Escucha las partes, pero no establece acuerdos operativos claros ni responsables.",
      3: "Competente: Desactiva la confrontación y acuerda acción concreta, responsable y momento de revisión.",
      4: "Consistente: Previene la recurrencia, revisa la equidad de las cargas de trabajo y audita el proceso."
    }
  },
  {
    behavior: "5. Reconoce y desarrolla",
    description: "Orientación constructiva al aprendizaje y validación oportuna de los logros.",
    levels: {
      1: "No se observa: Solo señala errores e incumplimientos; nunca ofrece reconocimiento ni acompañamiento.",
      2: "Parcial: Brinda felicitaciones o comentarios genéricos ('buen trabajo') sin especificar qué conducta destaca.",
      3: "Competente: Entrega feedback específico y oportuno, reconociendo conductas observables y esfuerzo real.",
      4: "Consistente: Equilibra permanentemente la exigencia de metas con el reconocimiento y el desarrollo personal."
    }
  }
];

const SURVEY_QUESTIONS = window.SURVEY_QUESTIONS = [
  { id: 1, text: "Mi líder comunica con claridad las prioridades del turno.", preFavorable: 64, postFavorable: 86 },
  { id: 2, text: "Mi líder escucha mi versión antes de tomar una decisión que me afecta.", preFavorable: 48, postFavorable: 75 },
  { id: 3, text: "Las correcciones y llamadas de atención se realizan con respeto y en privado.", preFavorable: 52, postFavorable: 79 },
  { id: 4, text: "La distribución de tareas (caja, surtido, aseo) se explica con criterios claros y justos.", preFavorable: 45, postFavorable: 72 },
  { id: 5, text: "Recibo reconocimiento oportuno cuando realizo bien mi trabajo en la tienda.", preFavorable: 42, postFavorable: 69 },
  { id: 6, text: "Puedo pedir ayuda o expresar una dificultad operativa sin temor a una reacción humillante.", preFavorable: 58, postFavorable: 81 },
  { id: 7, text: "Mi líder ayuda a resolver los desacuerdos entre compañeros de manera constructiva.", preFavorable: 50, postFavorable: 74 },
  { id: 8, text: "En general, percibo apoyo y respaldo de mi líder durante las jornadas más exigentes.", preFavorable: 61, postFavorable: 83 }
];
