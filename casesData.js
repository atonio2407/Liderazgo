// Realistic Interactive Roleplay Cases for Store Leaders at Tiendas D1

const ROLEPLAY_CASES = window.ROLEPLAY_CASES = [
  {
    id: "caso-inventario",
    title: "Caso 1: Error en Inventario Crítico bajo Presión de Cierre",
    context: "Son las 8:30 PM. La tienda debe cerrar a las 9:00 PM y el supervisor de zona solicitó el reporte de mermas urgente. Al auditar la nevera de lácteos y carnes frías, encuentras un descuadre de $380.000 COP por registros de fechas de vencimiento omitidos por Julián, un auxiliar que lleva 3 meses en la tienda.",
    emotionalState: "Sientes frustración inmediata, presión en el pecho y el impulso de salir al pasillo y reprocharle a Julián delante de los demás por arruinar el indicador de merma del mes.",
    question: "¿Cómo decides intervenir en este momento crítico?",
    options: [
      {
        id: "A",
        text: "Sales de inmediato a la bodega donde está Julián con otros dos compañeros y le dices en voz alta: '¡Julián, otra vez nos tiraste la merma! ¿Cuántas veces tengo que explicarte cómo revisar las fechas? ¡Por culpa de esto el supervisor nos va a sancionar a todos!'",
        leadershipStyle: "Liderazgo Autoritario / Reactivo Impulsivo",
        eiLevel: "Baja Autoconciencia y nulo Autocontrol (Puntaje Rúbrica: 1/4)",
        impact: "Desastroso para el clima de tienda. Julián se siente humillado frente a sus pares, se cierra a la defensiva, la moral del equipo decae y se incrementa el riesgo de que en el futuro oculten mermas o errores por miedo al castigo público.",
        feedback: "Caíste en la trampa del secuestro emocional. No hubo pausa ni separación entre la emoción sentida y la respuesta emitida. La corrección en público viola el principio básico de respeto y no resuelve el error de inventario.",
        score: 1,
        isOptimal: false
      },
      {
        id: "B",
        text: "Decides no decirle nada hoy para evitar un problema, arreglas tú mismo el conteo hasta las 10:00 PM y piensas que en la reunión de la próxima semana lanzarás una indirecta general a todo el equipo sobre la importancia de las fechas.",
        leadershipStyle: "Liderazgo Pasivo / Evitativo",
        eiLevel: "Autocontrol por supresión, sin Manejo Asertivo de Relaciones (Puntaje Rúbrica: 2/4)",
        impact: "Genera sobrecarga personal en ti, agotamiento y no desarrolla al colaborador. Julián no se entera de su fallo específico y lo repetirá mañana, mientras tú acumulas resentimiento silencioso.",
        feedback: "Evitar la conversación difícil no es inteligencia emocional; es evasión del rol de líder. El estándar debe corregirse oportunamente para que haya aprendizaje operativo.",
        score: 2,
        isOptimal: false
      },
      {
        id: "C",
        text: "Aplicas la herramienta PAUSA: respiras hondo 30 segundos, aíslas la rabia de la tarea operativa. Llamas a Julián a la oficina en privado, le muestras la planilla física con el descuadre exacto ($380.000 COP), escuchas su versión sobre qué dificultad tuvo en el turno, corriges el proceso de registro y acuerdan una doble verificación antes de las 6 PM para mañana.",
        leadershipStyle: "Liderazgo Consciente y Situacional",
        eiLevel: "Alta Inteligencia Emocional: Autocontrol, Empatía y Feedback Asertivo (Puntaje Rúbrica: 4/4)",
        impact: "Excelente. Se corrige el proceso sin destruir la dignidad del colaborador. Julián asume la responsabilidad con claridad, comprende el impacto económico para la tienda y aprende a solicitar apoyo a tiempo.",
        feedback: "¡Respuesta ejemplar! Separaste el hecho observable del juicio personal, corregiste en privado, escuchaste antes de dictaminar y cerraste con un compromiso medible.",
        score: 4,
        isOptimal: true
      }
    ]
  },
  {
    id: "caso-distribucion",
    title: "Caso 2: Inconformidad por Carga Desigual en Surtido vs. Caja",
    context: "Durante el cambio de turno del mediodía, Paola (cajera y auxiliar) te dice visiblemente molesta delante del mostrador: 'Jefe, estoy cansada de que siempre me toque a mí descargar el camión de abarrotes pesados y limpiar el baño, mientras a Mateo siempre lo deja fresco en la caja registradora con aire acondicionado. ¡Usted tiene consentidos aquí!'.",
    emotionalState: "Te sientes atacado en tu autoridad e imparcialidad, sintiendo deseos de responder: 'Aquí quien manda soy yo y usted hace lo que le toque'.",
    question: "¿Cuál es tu mejor respuesta aplicando liderazgo emocional?",
    options: [
      {
        id: "A",
        text: "Le respondes en el mostrador: 'A ver Paola, usted aquí no viene a cuestionar mis decisiones ni a fijarse en lo que hace su compañero. Si no le gusta la distribución, en Gestión Humana le reciben la renuncia'.",
        leadershipStyle: "Liderazgo Autoritario Agresivo",
        eiLevel: "Nula Empatía y Reactividad a la Defensiva (Puntaje: 1/4)",
        impact: "Destruye la confianza del equipo. El resto de auxiliares perciben un ambiente hostil donde quejarse es causal de amenaza de despido. Se incrementa el ausentismo y la rotación voluntaria en la tienda.",
        feedback: "Tomaste la queja como un ataque a tu ego en vez de como un síntoma de opacidad en la asignación de tareas. La amenaza genera sumisión aparente pero desmotivación profunda.",
        score: 1,
        isOptimal: false
      },
      {
        id: "B",
        text: "Le pides a Paola pasar a la bodega o zona de descanso para hablar en privado. Le dices: 'Paola, entiendo que te sientas cansada y frustrada; el trabajo pesado de descarga es exigente. Revisemos juntos la matriz de rotación del mes para ver las horas que ha tenido cada uno en caja y en bodega, y definamos un rol transparente para la semana'.",
        leadershipStyle: "Liderazgo Participativo y Consciente",
        eiLevel: "Empatía, Escucha Activa y Resolución Objetiva de Conflictos (Puntaje: 4/4)",
        impact: "Desescala el conflicto de raíz. Paola se siente escuchada y respetada. Al contrastar con datos objetivos (matriz de tareas), se eliminan los sesgos de 'preferencias' y se ajusta la carga de manera justa y verificable.",
        feedback: "¡Brillante! Trasladaste la conversación a un espacio privado, validaste la emoción de cansancio sin perder el control, y recurriste a criterios objetivos y transparentes para tomar decisiones.",
        score: 4,
        isOptimal: true
      },
      {
        id: "C",
        text: "Para que no pelee, le dices: 'Bueno Paola, váyase usted a la caja y yo mando a Mateo ya mismo al camión a ver si le gusta', sin hablar antes con Mateo.",
        leadershipStyle: "Liderazgo Complaciente Reactivo",
        eiLevel: "Falta de Criterio Estratégico y Arbitrariedad (Puntaje: 2/4)",
        impact: "Resuelves una queja inmediata creando un conflicto nuevo con Mateo, quien ahora sentirá que lo castigan sin explicación. Muestra debilidad e improvisación en la gestión operativa.",
        feedback: "Ceder impulsivamente ante una queja ruidosa no es empatía; es improvisación. El liderazgo situacional requiere criterios estables y comunicación con ambas partes.",
        score: 2,
        isOptimal: false
      }
    ]
  },
  {
    id: "caso-quincena",
    title: "Caso 3: Ausencia Inesperada en Sábado de Quincena",
    context: "Sábado 15 del mes, 11:30 AM. La tienda tiene filas de más de 8 carritos por caja. Uno de los auxiliares clave de turno avisa por WhatsApp que tuvo una emergencia familiar y no podrá asistir. Los dos colaboradores restantes están acelerados, cometiendo errores de cobro y quejándose del calor y la sobrecarga.",
    emotionalState: "Sientes angustia por el tiempo de espera de los clientes, temor a reclamos y la tentación de exigirles a los dos que 'rindan el doble' sin brindarles apoyo.",
    question: "¿Cómo lideras la tienda en esta hora de alta exigencia?",
    options: [
      {
        id: "A",
        text: "Aplicas el 'Pulso de Tienda Express' de 2 minutos: reúnes a los dos colaboradores, les informas con serenidad la situación, abres tú mismo la caja auxiliar de respaldo para absorber el pico, priorizas cobro y seguridad, y pospones el surtido no perecedero para la tarde baja.",
        leadershipStyle: "Liderazgo Situacional, Transformacional y Ejemplarizante",
        eiLevel: "Gestión Óptima del Estrés, Modelamiento de Calma y Apoyo Operativo (Puntaje: 4/4)",
        impact: "Impacto altamente positivo. El equipo ve al jefe remando a su lado en el momento más duro. Los clientes son atendidos más rápido, el estrés se comparte y se previenen renuncias por sobrecarga no gestionada.",
        feedback: "¡Liderazgo operativo en su máxima expresión! Supiste priorizar lo no negociable (cobro al cliente), transmitiste tranquilidad al equipo y demostraste liderazgo con el ejemplo.",
        score: 4,
        isOptimal: true
      },
      {
        id: "B",
        text: "Te encierras en la oficina a llamar con desespero al supervisor de zona para quejarte de que no tienes gente, mientras le gritas a los cajeros desde la puerta que cobren más rápido.",
        leadershipStyle: "Liderazgo Ausente bajo Estrés",
        eiLevel: "Pánico y Desconexión con el Equipo (Puntaje: 1/4)",
        impact: "El equipo colapsa, aumentan los errores de digitación de billetes y productos, y la experiencia del cliente es pésima.",
        feedback: "Bajo presión extrema, el líder es el termostato emocional de la tienda. Si el líder entra en pánico, el equipo se desborda por completo.",
        score: 1,
        isOptimal: false
      }
    ]
  }
];
