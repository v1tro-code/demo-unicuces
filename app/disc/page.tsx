import Image from "next/image"
import Link from "next/link"
import Button from "@/components/atoms/Button/Button"
import DiscBenefits from "@/components/organisms/DiscBenefits/DiscBenefits"
import DiscCertificate from "@/components/organisms/DiscCertificate/DiscCertificate"
import ContactForm from "@/components/organisms/ContactForm/ContactForm"

export const metadata = {
  title: "Sanmartin Academia",
  description: "Descubre tu perfil  y mejora tus habilidades personales y profesionales",
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Descubre tu perfil  y potencia tu desarrollo
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                La evaluación  es una herramienta poderosa para comprender tu estilo de comportamiento y mejorar tus
                relaciones personales y profesionales.
              </p>
              <div className="pt-4">
                <Link href="#evaluacion">
                  <Button variant="accent" size="lg">
                    Realizar evaluación
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image src="/placeholder.svg?key=4jyn5" alt="Evaluación " fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* What is  Section */}
      <section className="py-16 bg-white" id="que-es">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué es la evaluación?</h2>
            <p className="text-lg text-gray-700">
               es un modelo de comportamiento basado en el trabajo del psicólogo William Moulton Marston. Identifica
              cuatro tipos de personalidad principales: Dominancia (D), Influencia (I), Estabilidad (S) y Cumplimiento
              (C).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-bold text-primary text-xl mb-3">Dominancia (D)</h3>
              <p className="text-gray-700">
                Personas enfocadas en resultados, directas y decisivas. Asumen retos y toman decisiones rápidas. Valoran
                la competencia y la eficiencia.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 text-xl mb-3">Influencia (I)</h3>
              <p className="text-gray-700">
                Personas entusiastas, optimistas y orientadas a las relaciones. Disfrutan interactuando y persuadiendo a
                otros. Valoran la expresión y la colaboración.
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="font-bold text-green-600 text-xl mb-3">Estabilidad (S)</h3>
              <p className="text-gray-700">
                Personas pacientes, leales y excelentes escuchas. Valoran la armonía y prefieren entornos estables.
                Destacan por su confiabilidad y cooperación.
              </p>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-bold text-purple-600 text-xl mb-3">Cumplimiento (C)</h3>
              <p className="text-gray-700">
                Personas precisas, analíticas y orientadas a la calidad. Valoran la exactitud y los procesos
                estructurados. Destacan por su atención al detalle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <DiscBenefits />

      {/* Certificate Section */}
      <DiscCertificate />

      {/* Contact Form Section */}
      <section className="py-16 bg-muted" id="contacto">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Interesado en la evaluación ?</h2>
              <p className="text-gray-600">
                Completa el formulario y un asesor se pondrá en contacto contigo para resolver todas tus dudas.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
