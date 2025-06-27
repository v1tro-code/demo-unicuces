import TestimonialCard from "@/components/molecules/TestimonialCard/TestimonialCard"

// Mock data - In a real app, this would come from Supabase
const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
    image: "/professional-man-suit.png",
    testimonial:
      "Los cursos son excelentes y el contenido es de alta calidad.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Gerente de Recursos Humanos",
    image: "/professional-woman-smiling.png",
    testimonial:
      "Implementamos el programa de liderazgo en toda nuestra empresa y los resultados han sido extraordinarios. El retorno de inversión ha superado nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Miguel Sánchez",
    role: "Emprendedor",
    image: "/young-entrepreneur-man.png",
    testimonial:
      "Los cursos de gestión de proyectos transformaron la manera en que organizo mi startup. La metodología es práctica y los instructores son expertos en su campo.",
    rating: 4,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros alumnos</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Descubre cómo nuestros cursos y evaluaciones han impactado positivamente en la vida profesional de nuestros
            estudiantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
