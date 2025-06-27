import Image from "next/image"
import ContactForm from "@/components/organisms/ContactForm/ContactForm"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export const metadata = {
  title: "Contacto - Universidad",
  description:
    "Ponte en contacto con nosotros para obtener más información sobre nuestros programas académicos y servicios",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-lg md:text-xl opacity-90">
              Estamos aquí para responder tus preguntas y ayudarte en tu proceso de admisión. No dudes en ponerte en
              contacto con nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Envíanos un mensaje</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Información de contacto</h2>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Dirección</h3>
                      <p className="text-gray-600">Av. Universidad 1234, Ciudad Universitaria</p>
                      <p className="text-gray-600">CP 12345, Ciudad</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Teléfono</h3>
                      <p className="text-gray-600">
                        <a href="tel:+123456789" className="hover:text-primary">
                          +1 (234) 567-890
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+123456789" className="hover:text-primary">
                          +1 (234) 567-891
                        </a>{" "}
                        (Admisiones)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@universidad.edu" className="hover:text-primary">
                          info@universidad.edu
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="mailto:admisiones@universidad.edu" className="hover:text-primary">
                          admisiones@universidad.edu
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800">Horario de atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Nuestra ubicación</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visítanos en nuestro campus principal, ubicado en una zona accesible y bien conectada de la ciudad.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md h-[400px] relative">
            {/* Aquí normalmente iría un mapa interactivo. Por ahora, usamos una imagen de placeholder */}
            <Image
              src="modern-university-library.png"
              alt="Mapa de ubicación"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-md text-center">
                <h3 className="font-bold text-secondary mb-2">Campus Principal</h3>
                <p className="text-gray-600">Av. Universidad 1234, Ciudad Universitaria, CP 12345</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Preguntas frecuentes sobre contacto</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Respuestas a las consultas más comunes sobre cómo comunicarte con nosotros.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "¿Cuál es el tiempo de respuesta a mis consultas?",
                  answer:
                    "Nos comprometemos a responder todas las consultas en un plazo máximo de 48 horas hábiles. Para consultas urgentes, recomendamos contactarnos por teléfono.",
                },
                {
                  question: "¿Puedo agendar una visita al campus?",
                  answer:
                    "¡Por supuesto! Ofrecemos visitas guiadas al campus de lunes a viernes. Puedes agendar tu visita a través del formulario de contacto o llamando directamente a nuestro departamento de admisiones.",
                },
                {
                  question: "¿Cómo puedo obtener información sobre becas y ayudas financieras?",
                  answer:
                    "Para información detallada sobre nuestros programas de becas y ayudas financieras, te recomendamos contactar directamente al departamento de ayuda financiera a través del correo becas@universidad.edu o llamando al +1 (234) 567-892.",
                },
                {
                  question: "¿Tienen oficinas de representación en otras ciudades?",
                  answer:
                    "Actualmente contamos con oficinas de representación en 5 ciudades principales. Consulta la sección de 'Sedes' en nuestra web para encontrar la más cercana a tu ubicación.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-secondary mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Departamentos específicos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Contacta directamente con el departamento que necesitas para una atención más especializada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Admisiones",
                email: "admisiones@universidad.edu",
                phone: "+1 (234) 567-891",
                description: "Información sobre el proceso de admisión, requisitos y fechas importantes.",
              },
              {
                name: "Ayuda Financiera",
                email: "becas@universidad.edu",
                phone: "+1 (234) 567-892",
                description: "Consultas sobre becas, financiamiento y opciones de pago.",
              },
              {
                name: "Asuntos Estudiantiles",
                email: "estudiantes@universidad.edu",
                phone: "+1 (234) 567-893",
                description: "Apoyo para estudiantes actuales en temas académicos y extracurriculares.",
              },
              {
                name: "Relaciones Internacionales",
                email: "internacional@universidad.edu",
                phone: "+1 (234) 567-894",
                description: "Información sobre programas de intercambio, convenios y estudiantes internacionales.",
              },
              {
                name: "Educación Continua",
                email: "educontinua@universidad.edu",
                phone: "+1 (234) 567-895",
                description: "Cursos, diplomados y programas de actualización profesional.",
              },
              {
                name: "Soporte Técnico",
                email: "soporte@universidad.edu",
                phone: "+1 (234) 567-896",
                description: "Ayuda con plataformas digitales, accesos y recursos tecnológicos.",
              },
            ].map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-secondary mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-1">
                  <p className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 text-primary mr-2" />
                    <a href={`mailto:${dept.email}`} className="hover:text-primary">
                      {dept.email}
                    </a>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <a href={`tel:${dept.phone}`} className="hover:text-primary">
                      {dept.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
