import Image from "next/image"
import Link from "next/link"
import Button from "@/components/atoms/Button/Button"
import { CheckCircle, Award, BookOpen, Users, MapPin } from "lucide-react"

export const metadata = {
  title: "Sobre Nosotros - Universidad",
  description:
    "Conoce nuestra historia, misión, visión y valores que nos definen como institución educativa de excelencia",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Formando líderes para un futuro mejor</h1>
              <p className="text-lg md:text-xl opacity-90">
                Desde 1985, nuestra universidad ha sido pionera en educación de calidad, investigación innovadora y
                compromiso con la sociedad.
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image src="/diverse-group.png" alt="Campus universitario" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un recorrido por más de tres décadas de excelencia académica e innovación educativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-secondary">1985 - Fundación</h3>
                    <p className="text-gray-600">
                      Nuestra universidad fue fundada con la visión de ofrecer educación de calidad accesible para
                      todos. Comenzamos con tres facultades y 250 estudiantes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-secondary">1995 - Expansión</h3>
                    <p className="text-gray-600">
                      Inauguramos nuestro segundo campus y ampliamos nuestra oferta académica a 15 programas de pregrado
                      y 5 de posgrado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-secondary">2005 - Acreditación Internacional</h3>
                    <p className="text-gray-600">
                      Obtuvimos reconocimiento internacional por la calidad de nuestros programas y la excelencia en
                      investigación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-secondary">2015 - Innovación Digital</h3>
                    <p className="text-gray-600">
                      Lanzamos nuestra plataforma de educación virtual y comenzamos a ofrecer programas en modalidad
                      híbrida y a distancia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                    <CheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-secondary">Hoy</h3>
                    <p className="text-gray-600">
                      Somos una comunidad vibrante con más de 10,000 estudiantes, 1,200 docentes y 50+ programas
                      académicos, comprometidos con la excelencia y la innovación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
              <Image
                src="university-campus.png"
                alt="Historia de la universidad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Misión, Visión y Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Los pilares que guían nuestro compromiso con la educación y la sociedad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Misión</h3>
              <p className="text-gray-600">
                Formar profesionales íntegros, competentes y comprometidos con el desarrollo sostenible de la sociedad,
                a través de una educación de calidad, investigación innovadora y vinculación con el entorno.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Visión</h3>
              <p className="text-gray-600">
                Ser una universidad reconocida internacionalmente por su excelencia académica, contribución al
                conocimiento y formación de líderes que transformen positivamente su entorno.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                    <CheckCircle size={12} />
                  </span>
                  Excelencia académica
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                    <CheckCircle size={12} />
                  </span>
                  Integridad y ética
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                    <CheckCircle size={12} />
                  </span>
                  Responsabilidad social
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                    <CheckCircle size={12} />
                  </span>
                  Innovación y creatividad
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                    <CheckCircle size={12} />
                  </span>
                  Inclusión y diversidad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Profesionales comprometidos con la excelencia académica y el desarrollo institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Carlos Rodríguez",
                position: "Rector",
                image: "/professional-man-suit.png",
                bio: "Doctor en Educación con más de 25 años de experiencia en gestión universitaria.",
              },
              {
                name: "Dra. Laura Martínez",
                position: "Vicerrectora Académica",
                image: "/professional-woman-smiling.png",
                bio: "Especialista en innovación educativa y aseguramiento de la calidad académica.",
              },
              {
                name: "Dr. Miguel Sánchez",
                position: "Director de Investigación",
                image: "/young-entrepreneur-man.png",
                bio: "Investigador reconocido internacionalmente en el campo de la tecnología educativa.",
              },
              {
                name: "Dra. Ana González",
                position: "Decana de Estudiantes",
                image: "/professional-woman-diverse.png",
                bio: "Comprometida con el bienestar estudiantil y el desarrollo integral de los alumnos.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus e Instalaciones */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Campus</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Espacios diseñados para potenciar el aprendizaje, la investigación y la vida universitaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="university-campus.png"
                  alt="Campus Central"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-bold text-lg">Campus Central</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ubicado en el corazón de la ciudad, nuestro campus principal cuenta con modernas instalaciones
                  académicas, biblioteca, laboratorios, áreas deportivas y espacios de convivencia.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    Biblioteca con más de 50,000 volúmenes
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    15 laboratorios especializados
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    Auditorio con capacidad para 500 personas
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-64">
                <Image
                  src="young-entrepreneur-man.png"
                  alt="Campus Tecnológico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-bold text-lg">Campus Tecnológico</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Inaugurado en 2010, este campus está dedicado a las carreras de ingeniería, tecnología y ciencias
                  exactas, con infraestructura de vanguardia para la investigación aplicada.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    Centro de innovación y emprendimiento
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    Laboratorios de robótica y fabricación digital
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary p-1 rounded-full mr-2">
                      <CheckCircle size={12} />
                    </span>
                    Espacios de coworking para proyectos estudiantiles
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para ser parte de nuestra comunidad?</h2>
            <p className="text-xl opacity-90 mb-8">
              Descubre todo lo que nuestra universidad tiene para ofrecerte y da el primer paso hacia tu futuro
              profesional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <Button variant="accent" size="lg">
                  Contáctanos
                </Button>
              </Link>
              <Link href="/cursos">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Explorar programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
