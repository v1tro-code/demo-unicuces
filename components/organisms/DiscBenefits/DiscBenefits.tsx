import { Target, Users, Lightbulb, TrendingUp, Briefcase, Heart } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Autoconocimiento",
      description:
        "Comprende tus fortalezas, debilidades y cómo reaccionas ante diferentes situaciones para mejorar tu desarrollo personal.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Mejores relaciones",
      description:
        "Aprende a comunicarte de manera más efectiva con diferentes tipos de personalidades y mejora tus relaciones interpersonales.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Toma de decisiones",
      description:
        "Identifica tu estilo natural de toma de decisiones y cómo adaptarlo para obtener mejores resultados en diferentes contextos.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Desarrollo profesional",
      description:
        "Descubre qué roles y entornos laborales se alinean mejor con tu perfil para potenciar tu carrera profesional.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Liderazgo efectivo",
      description:
        "Desarrolla un estilo de liderazgo adaptativo que te permita conectar con diferentes tipos de colaboradores.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Gestión del estrés",
      description:
        "Reconoce tus desencadenantes de estrés y desarrolla estrategias personalizadas para gestionarlo de manera efectiva.",
    },
  ]

  return (
    <section className="py-16 bg-muted" id="beneficios">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios del programa </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubre cómo la evaluación  puede transformar tu vida personal y profesional a través de un mayor
            autoconocimiento y mejores relaciones interpersonales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
