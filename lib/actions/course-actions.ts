"use server"

import type { Course } from "@/types/course"

// Datos de ejemplo para usar cuando la base de datos no está disponible
const mockCourses: Course[] = [
  {
    id: "1",
    title: "Administración de procesos",
    description: "Aprende a optimizar y gestionar procesos empresariales para maximizar la eficiencia operativa.",
    longDescription:
      "Este curso te enseña las metodologías más efectivas para identificar, analizar, mejorar y controlar los procesos empresariales. Aprenderás a utilizar herramientas como mapeo de procesos, análisis de valor agregado, y técnicas de mejora continua para optimizar operaciones y reducir costos.",
    image: "/images/courses/administracion-procesos.webp",
    duration: "8 semanas",
    students: 285,
    rating: 4.6,
    price: 149000,
    category: "gestion-empresarial",
    instructor: {
      name: "Ricardo Gómez",
      bio: "Consultor en optimización de procesos con más de 12 años de experiencia en empresas multinacionales.",
      image: "/professional-man.png",
    },
    modules: [
      {
        title: "Fundamentos de la gestión de procesos",
        lessons: [
          { title: "Introducción a la administración de procesos", duration: "45 min" },
          { title: "Identificación y mapeo de procesos clave", duration: "60 min" },
          { title: "Análisis de valor agregado", duration: "50 min" },
        ],
      },
      {
        title: "Mejora continua de procesos",
        lessons: [
          { title: "Metodologías de mejora: Lean y Six Sigma", duration: "55 min" },
          { title: "Implementación de indicadores de desempeño", duration: "40 min" },
          { title: "Automatización de procesos", duration: "65 min" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Administración del tiempo",
    description:
      "Domina técnicas efectivas para gestionar tu tiempo y aumentar tu productividad personal y profesional.",
    longDescription:
      "Aprende a priorizar tareas, eliminar distracciones y organizar tu agenda para maximizar tu eficiencia. Este curso te enseñará métodos probados como la técnica Pomodoro, la matriz de Eisenhower y sistemas de planificación que te ayudarán a lograr más con menos estrés.",
    image: "/images/courses/administracion-tiempo.webp",
    duration: "4 semanas",
    students: 563,
    rating: 4.8,
    price: 120000,
    category: "productividad",
    instructor: {
      name: "Laura Mendoza",
      bio: "Coach de productividad y especialista en sistemas de gestión del tiempo y hábitos de alto rendimiento.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "3",
    title: "Agilidad organizacional",
    description:
      "Transforma tu organización con principios y prácticas ágiles para adaptarse rápidamente a los cambios del mercado.",
    longDescription:
      "Este curso te proporciona las herramientas para implementar la mentalidad y metodologías ágiles en cualquier tipo de organización. Aprenderás a crear equipos autoorganizados, gestionar el trabajo con Scrum y Kanban, y fomentar una cultura de innovación continua y adaptación.",
    image: "/images/courses/agilidad-organizacional.webp",
    duration: "10 semanas",
    students: 324,
    rating: 4.7,
    price: 180000,
    category: "gestion-empresarial",
    instructor: {
      name: "Daniel Torres",
      bio: "Agile Coach certificado con experiencia liderando transformaciones ágiles en empresas del Fortune 500.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "4",
    title: "Agudeza estratégica",
    description:
      "Desarrolla tu capacidad para identificar oportunidades de negocio y tomar decisiones estratégicas efectivas.",
    longDescription:
      "Este curso está diseñado para ayudarte a perfeccionar tu pensamiento estratégico y visión de negocio. Aprenderás a analizar entornos competitivos, identificar tendencias emergentes, y desarrollar estrategias innovadoras que generen ventajas competitivas sostenibles para tu organización.",
    image: "/images/courses/agudeza-estrategica.webp",
    duration: "8 semanas",
    students: 241,
    rating: 4.9,
    price: 199000,
    category: "habilidades-directivas",
    instructor: {
      name: "Carolina Herrera",
      bio: "Consultora estratégica y ex-directora de planificación en multinacionales del sector tecnológico.",
      image: "/professional-woman-diverse.png",
    },
  },
  {
    id: "5",
    title: "Aparejamieto Seguro de Carga",
    description:
      "Aprende las técnicas y normativas para asegurar correctamente cargas en el transporte, garantizando seguridad y cumplimiento legal.",
    longDescription:
      "Este curso práctico te enseña los métodos correctos para el apareamiento y sujeción de diferentes tipos de cargas. Cubrimos normativas internacionales, cálculo de fuerzas, selección de equipos de sujeción, y procedimientos para prevenir accidentes durante el transporte terrestre, marítimo o aéreo.",
    image: "/images/courses/aparejamiento-seguro-carga.webp",
    duration: "6 semanas",
    students: 189,
    rating: 4.5,
    price: 150000,
    category: "logistica",
    instructor: {
      name: "Jorge Ramírez",
      bio: "Especialista en logística y transporte con certificación internacional en seguridad de cargas.",
      image: "/professional-man.png",
    },
  },
  {
    id: "6",
    title: "Astucia en las relaciones interpersonales",
    description:
      "Perfecciona tus habilidades sociales para crear conexiones auténticas y manejar relaciones profesionales con inteligencia.",
    longDescription:
      "Desarrolla la capacidad de leer situaciones sociales, entender dinámicas interpersonales y responder de manera efectiva. Este curso combina psicología social con inteligencia emocional para ayudarte a construir mejores relaciones profesionales, resolver conflictos y ampliar tu influencia de manera ética.",
    image: "/images/courses/astucia-relaciones-interpersonales.webp",
    duration: "7 semanas",
    students: 415,
    rating: 4.8,
    price: 140000,
    category: "habilidades-blandas",
    instructor: {
      name: "Valentina Cortés",
      bio: "Psicóloga organizacional especializada en inteligencia social y comunicación efectiva.",
      image: "/diverse-professional-woman.png",
    },
  },
  {
    id: "7",
    title: "Astucia política",
    description:
      "Aprende a navegar eficazmente las dinámicas políticas en entornos corporativos manteniendo tu integridad.",
    longDescription:
      "Este curso te enseña a comprender y manejar las dinámicas de poder e influencia en organizaciones complejas. Aprenderás a construir alianzas estratégicas, comunicar tus ideas con persuasión, y avanzar en iniciativas importantes sin comprometer tus valores éticos.",
    image: "/images/courses/astucia-politica.webp",
    duration: "6 semanas",
    students: 278,
    rating: 4.6,
    price: 160000,
    category: "habilidades-directivas",
    instructor: {
      name: "Fernando Álvarez",
      bio: "Ex-ejecutivo de multinacionales y asesor en dinámicas organizacionales y liderazgo corporativo.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "8",
    title: "Autoconocimiento",
    description:
      "Explora tus fortalezas, valores y motivaciones para desarrollar un mayor equilibrio personal y profesional.",
    longDescription:
      "Este curso de desarrollo personal te guía en un viaje de autodescubrimiento con herramientas prácticas y ejercicios reflexivos. Aprenderás a identificar tus valores centrales, reconocer patrones de comportamiento, y utilizar tus fortalezas naturales para crear una vida más auténtica y satisfactoria.",
    image: "/images/courses/autoconocimiento.webp",
    duration: "8 semanas",
    students: 526,
    rating: 4.9,
    price: 130000,
    category: "desarrollo-personal",
    instructor: {
      name: "Elena Martínez",
      bio: "Coach de desarrollo personal certificada y especialista en psicología positiva.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "9",
    title: "Calidad de las decisiones",
    description:
      "Mejora tu capacidad para tomar decisiones efectivas con metodologías estructuradas y pensamiento crítico.",
    longDescription:
      "Aprende a evaluar situaciones complejas, analizar alternativas y tomar decisiones más acertadas. Este curso combina psicología cognitiva con métodos analíticos para ayudarte a evitar sesgos, gestionar la incertidumbre y aplicar marcos de decisión estructurados en diferentes contextos profesionales.",
    image: "/images/courses/calidad-decisiones.webp",
    duration: "6 semanas",
    students: 342,
    rating: 4.7,
    price: 150000,
    category: "habilidades-directivas",
    instructor: {
      name: "Andrés Gutiérrez",
      bio: "Consultor estratégico especializado en análisis de decisiones y gestión de riesgos.",
      image: "/professional-man.png",
    },
  },
  {
    id: "10",
    title: "Capacidad para escuchar",
    description: "Desarrolla la habilidad de escucha activa para mejorar tus relaciones personales y profesionales.",
    longDescription:
      "Más allá de simplemente oír, este curso te enseña a escuchar con atención plena, empatía y comprensión genuina. Aprenderás técnicas prácticas para superar barreras a la escucha efectiva, hacer preguntas poderosas y demostrar que has comprendido verdaderamente el mensaje de tu interlocutor.",
    image: "/images/courses/capacidad-para-escuchar.webp",
    duration: "4 semanas",
    students: 487,
    rating: 4.8,
    price: 100000,
    category: "habilidades-blandas",
    instructor: {
      name: "Claudia Vega",
      bio: "Especialista en comunicación interpersonal y facilitadora de diálogos organizacionales.",
      image: "/professional-woman-smiling.png",
    },
  },
  {
    id: "11",
    title: "Coaching para definir tu vocación profesional",
    description: "Descubre tu verdadera vocación y diseña un plan de carrera alineado con tus valores y fortalezas.",
    longDescription:
      "Este programa de coaching te guía a través de un proceso estructurado para descubrir qué te apasiona realmente. Mediante evaluaciones personalizadas, ejercicios de reflexión y metodologías probadas, identificarás tus talentos naturales y diseñarás un camino profesional que te brinde satisfacción y propósito.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 356,
    rating: 4.9,
    price: 180000,
    category: "desarrollo-personal",
    instructor: {
      name: "Alejandra Soto",
      bio: "Coach de carrera certificada con más de 500 procesos de orientación vocacional completados.",
      image: "/diverse-professional-woman.png",
    },
  },
  {
    id: "12",
    title: "Como crear una cooperativa en Colombia",
    description:
      "Guía práctica y completa para establecer y gestionar exitosamente una cooperativa en el contexto colombiano.",
    longDescription:
      "Aprende todos los aspectos legales, administrativos y estratégicos para formar una cooperativa en Colombia. El curso cubre el marco normativo, los requisitos de constitución, los modelos de gobernanza, la gestión financiera especial de cooperativas y estrategias para su sostenibilidad y crecimiento.",
    image: "/images/logo-utede.png",
    duration: "10 semanas",
    students: 214,
    rating: 4.6,
    price: 200000,
    category: "emprendimiento",
    instructor: {
      name: "Roberto Jiménez",
      bio: "Abogado especialista en economía solidaria y asesor de cooperativas en Colombia.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "13",
    title: "Comprensión de otras personas",
    description: "Desarrolla empatía y comprensión intercultural para mejorar tus relaciones en entornos diversos.",
    longDescription:
      "Este curso te enseña a desarrollar una mayor sensibilidad hacia diferentes perspectivas, culturas y estilos de comunicación. Aprenderás a reconocer prejuicios inconscientes, practicar la empatía cognitiva y emocional, y construir relaciones basadas en el respeto mutuo y la comprensión genuina.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 398,
    rating: 4.7,
    price: 120000,
    category: "habilidades-blandas",
    instructor: {
      name: "Carmen Rodríguez",
      bio: "Especialista en comunicación intercultural con experiencia en entornos corporativos globales.",
      image: "/professional-woman-diverse.png",
    },
  },
  {
    id: "14",
    title: "Crea tu Propia Licencia de Derechos de Autor",
    description: "Aprende a proteger tus creaciones intelectuales y artísticas con licencias personalizadas.",
    longDescription:
      "Este curso práctico te muestra cómo crear, implementar y hacer valer licencias para tus obras creativas. Cubrimos fundamentos legales del derecho de autor, comparación entre diferentes tipos de licencias (desde copyright tradicional hasta Creative Commons), y el proceso paso a paso para crear términos que protejan tus intereses mientras permiten los usos que deseas autorizar.",
    image: "/images/logo-utede.png",
    duration: "5 semanas",
    students: 247,
    rating: 4.5,
    price: 130000,
    category: "legal",
    instructor: {
      name: "Mariana López",
      bio: "Abogada especializada en propiedad intelectual y derechos de autor en entornos digitales.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "15",
    title: "Empuje por obtener resultados",
    description:
      "Desarrolla la mentalidad y las estrategias para superar obstáculos y alcanzar resultados excepcionales.",
    longDescription:
      "Este curso te ayuda a cultivar la determinación y perseverancia necesarias para lograr objetivos ambiciosos. Aprenderás a establecer metas desafiantes pero alcanzables, desarrollar planes de acción efectivos, y mantener la motivación incluso frente a dificultades y contratiempos.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 384,
    rating: 4.8,
    price: 140000,
    category: "habilidades-directivas",
    instructor: {
      name: "Gabriel Restrepo",
      bio: "Ex-deportista olímpico y actual coach de alto rendimiento para ejecutivos y emprendedores.",
      image: "/professional-man.png",
    },
  },
  {
    id: "16",
    title: "Establecimiento de prioridades",
    description: "Aprende a identificar lo verdaderamente importante y organizar tu trabajo para maximizar el impacto.",
    longDescription:
      "Este curso práctico te enseña a distinguir entre lo urgente y lo importante, y a tomar decisiones estratégicas sobre cómo invertir tu tiempo y recursos. Aprenderás metodologías probadas para evaluar tareas, gestionar demandas competitivas y alinear tus actividades diarias con tus objetivos a largo plazo.",
    image: "/images/logo-utede.png",
    duration: "4 semanas",
    students: 429,
    rating: 4.7,
    price: 100000,
    category: "productividad",
    instructor: {
      name: "Sara Vargas",
      bio: "Consultora en gestión del tiempo y productividad para ejecutivos y equipos de alto rendimiento.",
      image: "/professional-woman-smiling.png",
    },
  },
  {
    id: "17",
    title: "Facebook para negocios y personas",
    description: "Domina Facebook para promocionar tu negocio, construir una comunidad y aumentar tus ventas.",
    longDescription:
      "Desde configurar una página de empresa efectiva hasta implementar estrategias avanzadas de marketing, este curso cubre todo lo que necesitas para aprovechar Facebook Business. Aprenderás a crear contenido que genere engagement, configurar y optimizar campañas publicitarias, analizar métricas clave y convertir seguidores en clientes.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 562,
    rating: 4.6,
    price: 130000,
    category: "marketing-digital",
    instructor: {
      name: "Diego Morales",
      bio: "Especialista en marketing digital con certificación oficial de Meta y amplia experiencia en campañas de redes sociales.",
      image: "/young-entrepreneur-man.png",
    },
  },
  {
    id: "18",
    title: "Garantiza el Crecimiento de tu Empresa en 90 días",
    description: "Estrategias probadas y plan de acción para impulsar el crecimiento acelerado de tu negocio.",
    longDescription:
      "Este programa intensivo te guía a través de un sistema estructurado para identificar oportunidades de crecimiento rápido y ejecutar iniciativas de alto impacto. Aprenderás a optimizar tu propuesta de valor, implementar técnicas de venta avanzadas, y crear sistemas para escalar tu operación de manera sostenible.",
    image: "/images/logo-utede.png",
    duration: "12 semanas",
    students: 298,
    rating: 4.8,
    price: 250000,
    category: "emprendimiento",
    instructor: {
      name: "Rafael Ochoa",
      bio: "Emprendedor serial y consultor de crecimiento empresarial con más de 15 empresas asesoradas.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "19",
    title: "Habilidad de motivar a personas",
    description: "Aprende técnicas efectivas para inspirar a otros y generar compromiso en equipos de trabajo.",
    longDescription:
      "Este curso te enseña los principios psicológicos de la motivación humana y cómo aplicarlos en contextos laborales. Descubrirás cómo conectar el trabajo con propósitos significativos, personalizar tu enfoque según diferentes perfiles, y crear un ambiente que fomente la motivación intrínseca y el desarrollo continuo.",
    image: "/images/logo-utede.png",
    duration: "7 semanas",
    students: 364,
    rating: 4.8,
    price: 160000,
    category: "habilidades-directivas",
    instructor: {
      name: "Ana María Duarte",
      bio: "Psicóloga organizacional y consultora en desarrollo de liderazgo y gestión del talento.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "20",
    title: "Habilidad de relacionarse con sus compañeros",
    description:
      "Mejora tus relaciones laborales y aprende a trabajar efectivamente en equipo independientemente de las diferencias personales.",
    longDescription:
      "Este curso práctico te enseña a construir relaciones profesionales positivas incluso con personas de diferentes estilos de comunicación, valores o perspectivas. Aprenderás a establecer confianza mutua, resolver conflictos constructivamente, y colaborar de manera efectiva para lograr objetivos compartidos.",
    image: "/images/logo-utede.png",
    duration: "5 semanas",
    students: 417,
    rating: 4.7,
    price: 120000,
    category: "habilidades-blandas",
    instructor: {
      name: "Patricia Mejía",
      bio: "Especialista en dinámica de equipos y facilitadora de procesos de integración organizacional.",
      image: "/diverse-professional-woman.png",
    },
  },
  {
    id: "21",
    title: "Instagram para negocios y personas",
    description:
      "Estrategias efectivas para crear una presencia impactante en Instagram y convertirla en una herramienta de negocio.",
    longDescription:
      "Aprende a crear contenido visual atractivo, construir una comunidad comprometida y monetizar tu presencia en Instagram. El curso cubre desde los fundamentos de la plataforma hasta estrategias avanzadas de marketing, incluyendo creación de contenido, hashtags efectivos, Instagram Shopping, colaboraciones con influencers y análisis de métricas.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 584,
    rating: 4.7,
    price: 130000,
    category: "marketing-digital",
    instructor: {
      name: "Valeria Torres",
      bio: "Creadora de contenido digital y consultora de marketing en Instagram para marcas nacionales e internacionales.",
      image: "/professional-woman-smiling.png",
    },
  },
  {
    id: "22",
    title: "Introducción a la Experiencia de Usuario",
    description:
      "Descubre los fundamentos del diseño UX y cómo crear productos digitales centrados en las necesidades del usuario.",
    longDescription:
      "Este curso introductorio te enseña los principios y metodologías clave del diseño de experiencia de usuario (UX). Aprenderás a realizar investigación de usuarios, crear personas y user journeys, diseñar wireframes y prototipos, y conducir pruebas de usabilidad para crear productos digitales que realmente satisfagan las necesidades de tus usuarios.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 423,
    rating: 4.8,
    price: 150000,
    category: "tecnologia",
    instructor: {
      name: "Javier Montoya",
      bio: "Diseñador UX/UI con experiencia en startups y empresas tecnológicas internacionales.",
      image: "/young-entrepreneur-man.png",
    },
  },
  {
    id: "23",
    title: "Introducción a la programación",
    description: "Aprende los fundamentos de la programación y da tus primeros pasos en el desarrollo de software.",
    longDescription:
      "Este curso está diseñado para principiantes absolutos que quieren iniciarse en el mundo de la programación. Aprenderás conceptos fundamentales como variables, condicionales, bucles y funciones a través de ejemplos prácticos y proyectos guiados que te permitirán construir tus primeras aplicaciones sencillas.",
    image: "/images/logo-utede.png",
    duration: "10 semanas",
    students: 685,
    rating: 4.6,
    price: 160000,
    category: "tecnologia",
    instructor: {
      name: "Rodrigo Vélez",
      bio: "Ingeniero de software y educador con más de 10 años enseñando programación a principiantes.",
      image: "/professional-man.png",
    },
    modules: [
      {
        title: "Fundamentos de la programación",
        lessons: [
          { title: "¿Qué es la programación?", duration: "45 min" },
          { title: "Variables y tipos de datos", duration: "60 min" },
          { title: "Operadores y expresiones", duration: "50 min" },
        ],
      },
      {
        title: "Estructuras de control",
        lessons: [
          { title: "Condicionales: if, else, switch", duration: "55 min" },
          { title: "Bucles: for, while, do-while", duration: "60 min" },
          { title: "Funciones y reutilización de código", duration: "65 min" },
        ],
      },
    ],
  },
  {
    id: "24",
    title: "Introducción al Growth Hacking",
    description:
      "Aprende las estrategias y metodologías para impulsar el crecimiento acelerado de productos digitales.",
    longDescription:
      "Este curso te introduce en la mentalidad y técnicas del Growth Hacking, el enfoque centrado en el crecimiento rápido a través de experimentación constante. Aprenderás a implementar el framework AARRR (adquisición, activación, retención, referencia, ingresos), diseñar experimentos escalables, y utilizar datos para optimizar cada etapa del embudo de conversión.",
    image: "/images/logo-utede.png",
    duration: "7 semanas",
    students: 376,
    rating: 4.7,
    price: 170000,
    category: "marketing-digital",
    instructor: {
      name: "Sebastián Rivas",
      bio: "Growth Hacker con experiencia en startups de rápido crecimiento y productos SaaS.",
      image: "/young-entrepreneur-man.png",
    },
  },
  {
    id: "25",
    title: "Manejo de lo paradójico",
    description:
      "Desarrolla la capacidad de navegar situaciones complejas y aparentemente contradictorias en entornos empresariales modernos.",
    longDescription:
      "Este curso avanzado te enseña a gestionar las paradojas inherentes al liderazgo y la gestión empresarial contemporánea. Aprenderás a equilibrar demandas aparentemente opuestas como estabilidad vs. cambio, control vs. autonomía, o centralización vs. descentralización, encontrando soluciones integradoras que maximicen ambos valores.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 264,
    rating: 4.8,
    price: 190000,
    category: "habilidades-directivas",
    instructor: {
      name: "Isabel Romero",
      bio: "PhD en comportamiento organizacional y consultora de empresas en transformación y gestión del cambio.",
      image: "/professional-woman-diverse.png",
    },
  },
  {
    id: "26",
    title: "Manejo de situaciones ambiguas",
    description:
      "Aprende a tomar decisiones efectivas y operar con confianza en entornos de incertidumbre y ambigüedad.",
    longDescription:
      "En un mundo cada vez más volátil e impredecible, este curso te ayuda a desarrollar las habilidades para navegar la ambigüedad con confianza. Aprenderás a recopilar y analizar información incompleta, mantener la agilidad mental, tomar decisiones con datos limitados y liderar equipos hacia una dirección clara incluso cuando el panorama general no lo es.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 297,
    rating: 4.7,
    price: 150000,
    category: "habilidades-directivas",
    instructor: {
      name: "Manuel Castaño",
      bio: "Experto en gestión del cambio y liderazgo en entornos VUCA (volátiles, inciertos, complejos y ambiguos).",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "27",
    title: "Manejo de visión y propósito",
    description: "Aprende a crear y comunicar una visión inspiradora que movilice a tu equipo u organización.",
    longDescription:
      "Este curso te enseña a desarrollar y articular una visión clara y motivadora para tu equipo o empresa. Aprenderás a conectar objetivos con un propósito trascendente, comunicar la visión de manera inspiradora, y traducirla en acciones concretas que mantengan a todos alineados y comprometidos con el rumbo definido.",
    image: "/images/logo-utede.png",
    duration: "7 semanas",
    students: 312,
    rating: 4.9,
    price: 170000,
    category: "habilidades-directivas",
    instructor: {
      name: "Alejandro Medina",
      bio: "Ex-CEO de multinacional y consultor en liderazgo visional y transformación organizacional.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "28",
    title: "Negociación",
    description:
      "Domina las estrategias y tácticas de negociación para lograr acuerdos beneficiosos en cualquier situación.",
    longDescription:
      "Este curso integral te proporciona las herramientas y metodologías para convertirte en un negociador efectivo. Aprenderás a prepararte estratégicamente, entender los intereses subyacentes, crear valor para todas las partes, y manejar tácticas difíciles mientras construyes relaciones a largo plazo.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 457,
    rating: 4.8,
    price: 180000,
    category: "habilidades-blandas",
    instructor: {
      name: "Carlos Pardo",
      bio: "Negociador profesional con experiencia en acuerdos comerciales internacionales y resolución de conflictos.",
      image: "/professional-man.png",
    },
    modules: [
      {
        title: "Fundamentos de la negociación",
        lessons: [
          { title: "Introducción a la negociación basada en principios", duration: "45 min" },
          { title: "Preparación estratégica para la negociación", duration: "60 min" },
          { title: "Entendiendo intereses vs. posiciones", duration: "50 min" },
        ],
      },
      {
        title: "Estrategias avanzadas",
        lessons: [
          { title: "Creación de valor en la negociación", duration: "55 min" },
          { title: "Manejo de tácticas difíciles", duration: "60 min" },
          { title: "Cierre de acuerdos sostenibles", duration: "50 min" },
        ],
      },
    ],
  },
  {
    id: "29",
    title: "Orientación hacia el cliente",
    description: "Implementa estrategias efectivas para crear experiencias excepcionales centradas en el cliente.",
    longDescription:
      "Este curso te enseña a desarrollar una verdadera mentalidad centrada en el cliente en toda tu organización. Aprenderás a entender profundamente las necesidades explícitas e implícitas de tus clientes, diseñar experiencias memorables, implementar sistemas de feedback efectivos, y crear una cultura donde cada decisión se tome pensando primero en quien compra tus productos o servicios.",
    image: "/images/logo-utede.png",
    duration: "7 semanas",
    students: 364,
    rating: 4.7,
    price: 150000,
    category: "gestion-empresarial",
    instructor: {
      name: "Laura Quintero",
      bio: "Especialista en customer experience y ex-directora de servicio al cliente en empresas del sector retail.",
      image: "/professional-woman-smiling.png",
    },
  },
  {
    id: "30",
    title: "Orientado a la acción",
    description:
      "Supera la parálisis por análisis y desarrolla la capacidad de pasar de la planificación a la ejecución efectiva.",
    longDescription:
      "Este curso práctico te ayuda a desarrollar una mentalidad orientada a resultados y la iplina de ejecución. Aprenderás a combatir la procrastinación, manejar la aversión al riesgo, implementar sistemas de acción inmediata, y mantener el impulso hasta completar los proyectos y alcanzar tus objetivos.",
    image: "/images/logo-utede.png",
    duration: "5 semanas",
    students: 428,
    rating: 4.6,
    price: 130000,
    category: "productividad",
    instructor: {
      name: "Daniel Ruiz",
      bio: "Coach de productividad y especialista en sistemas de implementación y ejecución de proyectos.",
      image: "/young-entrepreneur-man.png",
    },
  },
  {
    id: "31",
    title: "Perseverancia",
    description:
      "Desarrolla la resiliencia y determinación necesarias para superar obstáculos y alcanzar tus metas más importantes.",
    longDescription:
      "Este curso combina psicología positiva con estrategias prácticas para cultivar la perseverancia y la tenacidad. Aprenderás a fortalecer tu mentalidad de crecimiento, manejar el fracaso como parte del proceso, recuperarte de los contratiempos, y mantener la motivación incluso en circunstancias desafiantes.",
    image: "/images/logo-utede.png",
    duration: "6 semanas",
    students: 387,
    rating: 4.8,
    price: 120000,
    category: "desarrollo-personal",
    instructor: {
      name: "Natalia Vergara",
      bio: "Psicóloga especializada en resiliencia y autora de libros sobre superación personal.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "32",
    title: "Planificación",
    description: "Domina las metodologías y herramientas para planificar proyectos y actividades de manera efectiva.",
    longDescription:
      "Este curso práctico te enseña a diseñar planes sólidos pero flexibles para cualquier tipo de proyecto personal o profesional. Aprenderás a establecer objetivos SMART, descomponer proyectos en tareas manejables, asignar recursos eficientemente, anticipar riesgos, y crear sistemas de seguimiento para garantizar la ejecución exitosa.",
    image: "/images/logo-utede.png",
    duration: "7 semanas",
    students: 345,
    rating: 4.6,
    price: 140000,
    category: "productividad",
    instructor: {
      name: "Pablo Herrera",
      bio: "Project Manager certificado PMP con experiencia en planificación de proyectos complejos.",
      image: "/professional-man.png",
    },
  },
  {
    id: "33",
    title: "Relacionamiento interpersonal inteligente",
    description: "Desarrolla habilidades avanzadas para construir y mantener relaciones profesionales efectivas.",
    longDescription:
      "Este curso integra inteligencia emocional, comunicación efectiva y psicología social para ayudarte a construir relaciones auténticas y productivas. Aprenderás a conectar genuinamente con diversos tipos de personas, gestionar interacciones difíciles, y construir una red de relaciones profesionales basadas en la confianza mutua y el beneficio recíproco.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 394,
    rating: 4.8,
    price: 160000,
    category: "habilidades-blandas",
    instructor: {
      name: "Marcela Durán",
      bio: "Consultora en desarrollo de habilidades sociales y especialista en comunicación interpersonal.",
      image: "/diverse-professional-woman.png",
    },
  },
  {
    id: "34",
    title: "Sistemas de trabajo total",
    description: "Aprende a diseñar e implementar sistemas integrales para optimizar procesos organizacionales.",
    longDescription:
      "Este curso avanzado te enseña a analizar y diseñar sistemas de trabajo que integren personas, tecnología y procesos. Aprenderás a identificar ineficiencias sistémicas, aplicar principios de diseño sociotécnico, implementar mejoras holísticas y crear entornos de trabajo que maximicen tanto la productividad como la satisfacción de las personas.",
    image: "/images/logo-utede.png",
    duration: "10 semanas",
    students: 274,
    rating: 4.7,
    price: 200000,
    category: "gestion-empresarial",
    instructor: {
      name: "Roberto Alonso",
      bio: "Ingeniero industrial y consultor en optimización de sistemas organizacionales.",
      image: "/professional-man-suit.png",
    },
  },
  {
    id: "35",
    title: "Superando el paradigma educativo",
    description: "Explora nuevos modelos de aprendizaje y desarrollo humano más allá de la educación tradicional.",
    longDescription:
      "Este curso innovador te invita a cuestionar y reinventar cómo entendemos el aprendizaje y la educación. Explorarás modelos alternativos de aprendizaje, desde la educación autodirigida hasta las comunidades de práctica, y descubrirás cómo crear entornos de aprendizaje que fomenten la curiosidad natural, el pensamiento crítico y el desarrollo integral.",
    image: "/images/logo-utede.png",
    duration: "8 semanas",
    students: 312,
    rating: 4.9,
    price: 170000,
    category: "educacion",
    instructor: {
      name: "Sofía Mendoza",
      bio: "Investigadora en innovación educativa y fundadora de iniciativas de aprendizaje alternativo.",
      image: "/professional-woman-academic.png",
    },
  },
  {
    id: "36",
    title: "WhatsApp para negocios y personas",
    description: "Aprovecha todo el potencial de WhatsApp Business para atención al cliente, ventas y marketing.",
    longDescription:
      "Este curso práctico te enseña a utilizar WhatsApp como una poderosa herramienta de comunicación para tu negocio. Aprenderás a configurar una cuenta de WhatsApp Business, crear catálogos de productos, automatizar respuestas, implementar estrategias de atención al cliente, y utilizar la plataforma para marketing y ventas respetando las políticas y mejores prácticas.",
    image: "/images/logo-utede.png",
    duration: "4 semanas",
    students: 536,
    rating: 4.6,
    price: 100000,
    category: "marketing-digital",
    instructor: {
      name: "Vanessa Ortiz",
      bio: "Especialista en marketing digital y estrategias de comunicación a través de plataformas de mensajería.",
      image: "/professional-woman-smiling.png",
    },
  },
]

// Función para filtrar y paginar los datos de ejemplo
function getFilteredMockCourses({
  query = "",
  category = "",
  skillType = "",
  priceRange = "",
  page = 1,
  pageSize = 8,
}) {
  let filteredCourses = [...mockCourses]

  if (query) {
    const queryLower = query.toLowerCase()
    filteredCourses = filteredCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(queryLower) || course.description.toLowerCase().includes(queryLower),
    )
  }

  if (category) {
    filteredCourses = filteredCourses.filter((course) => course.category.toLowerCase() === category.toLowerCase())
  }

  if (skillType) {
    if (skillType === "blandas") {
      filteredCourses = filteredCourses.filter(
        (course) => course.category.includes("blandas") || ["habilidades-blandas"].includes(course.category),
      )
    } else if (skillType === "duras") {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.category.includes("duras") || ["tecnologia", "gestion-empresarial"].includes(course.category),
      )
    }
  }

  // Filtrar por rango de precio
  if (priceRange) {
    if (priceRange === "free") {
      filteredCourses = filteredCourses.filter((course) => course.price === 0)
    } else if (priceRange === "0-100000") {
      filteredCourses = filteredCourses.filter((course) => course.price > 0 && course.price < 100000)
    } else if (priceRange === "100000-150000") {
      filteredCourses = filteredCourses.filter((course) => course.price >= 100000 && course.price <= 150000)
    } else if (priceRange === "150000-200000") {
      filteredCourses = filteredCourses.filter((course) => course.price > 150000 && course.price <= 200000)
    } else if (priceRange === "200000-plus") {
      filteredCourses = filteredCourses.filter((course) => course.price > 200000)
    }
  }

  // Aplicar paginación
  const startIndex = (page - 1) * pageSize
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + pageSize)
  const totalPages = Math.ceil(filteredCourses.length / pageSize)

  return { courses: paginatedCourses, totalPages }
}

// Funciones exportadas para usar directamente los datos quemados
export async function getCourses({
  query = "",
  category = "",
  skillType = "",
  priceRange = "",
  page = 1,
  pageSize = 8,
}: {
  query?: string
  category?: string
  skillType?: string
  priceRange?: string
  page?: number
  pageSize?: number
}) {
  console.log("Fetching courses with params:", { query, category, skillType, priceRange, page, pageSize })
  return getFilteredMockCourses({ query, category, skillType, priceRange, page, pageSize })
}

export async function getCourseById(id: string) {
  console.log("Fetching course with id:", id)
  const course = mockCourses.find((course) => course.id === id)
  return course || null
}
