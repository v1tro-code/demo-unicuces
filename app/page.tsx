import Hero from "@/components/organisms/Hero/Hero"
import StatsSection from "@/components/organisms/StatsSection/StatsSection"
import CourseCarousel from "@/components/molecules/CourseCarousel/CourseCarousel"
import InstitutionInfo from "@/components/organisms/InstitutionInfo/InstitutionInfo"
import FAQ from "@/components/organisms/FAQ/FAQ"
import FinalCTA from "@/components/organisms/FinalCTA/FinalCTA"

// Datos de ejemplo para el carrusel
const featuredCourses = [
  {
    id: "1",
    title: "Liderazgo Efectivo para Equipos Modernos",
    description:
      "Aprende a liderar equipos diversos y distribuidos con técnicas modernas de gestión y comunicación efectiva. Desarrolla habilidades esenciales para el liderazgo del siglo XXI.",
    image: "/professional-man-suit.png",
    duration: "8 semanas",
    students: 342,
    rating: 4.8,
    price: 199.99,
    category: "Liderazgo",
  },
  {
    id: "2",
    title: "Comunicación Estratégica en Entornos Empresariales",
    description:
      "Mejora tus habilidades de comunicación para impulsar tu carrera profesional y lograr resultados excepcionales en cualquier entorno de trabajo.",
    image: "/professional-woman-smiling.png",
    duration: "6 semanas",
    students: 215,
    rating: 4.6,
    price: 149.99,
    category: "Comunicación",
  },
  {
    id: "3",
    title: "Fundamentos de Gestión de Proyectos",
    description:
      "Domina las metodologías ágiles y tradicionales para gestionar proyectos exitosos. Aprende a planificar, ejecutar y controlar proyectos de cualquier tamaño.",
    image: "/project-management-teamwork.png",
    duration: "10 semanas",
    students: 528,
    rating: 4.9,
    price: 249.99,
    category: "Proyectos",
  },
  {
    id: "4",
    title: "Introducción ",
    description:
      "Comprende los fundamentos del modelo y cómo aplicarlo en tu desarrollo personal y profesional para mejorar tus relaciones y rendimiento.",
    image: "/young-entrepreneur-man.png",
    duration: "4 semanas",
    students: 763,
    rating: 4.7,
    price: 0,
    category: "",
  },
]

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <StatsSection />
      <CourseCarousel courses={featuredCourses} />
      <InstitutionInfo />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
