import { Users, BookOpen, Award, Clock } from "lucide-react"
import StatItem from "@/components/molecules/StatItem/StatItem"

const StatsSection = () => {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: 50,
      suffix: "+",
      label: "Cursos especializados",
      description: "Contenido actualizado y de alta calidad",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: 1000,
      suffix: "+",
      label: "Estudiantes activos",
      description: "Comunidad en constante crecimiento",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: 15,
      suffix: "+",
      label: "Expertos certificados",
      description: "Instructores con amplia experiencia",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: 24,
      suffix: "/7",
      label: "Acceso ilimitado",
      description: "Aprende a tu propio ritmo",
    },
  ]

  return (
    <section id="stats-section" className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={index * 200} // Retraso escalonado para cada estadística
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
