import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import Image from "next/image"

const Section = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubre tu perfil </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            La evaluación  es una herramienta poderosa para comprender tu estilo de comportamiento y mejorar tus
            relaciones personales y profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/placeholder.svg?key=4xnsf" alt="Evaluación " fill className="object-cover" />
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-bold text-primary text-xl mb-3">Dominancia (D)</h3>
                <p>Enfocado en resultados, directo y decisivo. Asume retos y toma decisiones rápidas.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 text-xl mb-3">Influencia (I)</h3>
                <p>Entusiasta, optimista y orientado a las personas. Disfruta interactuando y persuadiendo.</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="font-bold text-green-600 text-xl mb-3">Estabilidad (S)</h3>
                <p>Paciente, leal y excelente escucha. Valora la armonía y prefiere entornos estables.</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="font-bold text-purple-600 text-xl mb-3">Cumplimiento (C)</h3>
                <p>Preciso, analítico y orientado a la calidad. Valora la exactitud y los procesos estructurados.</p>
              </div>
            </div>

            <div className="text-center md:text-left">
              <Link href="/">
                <Button variant="secondary" size="lg">
                  Realizar evaluación 
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
