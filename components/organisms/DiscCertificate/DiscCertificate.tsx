import Image from "next/image"
import Button from "@/components/atoms/Button/Button"
import Link from "next/link"

const Certificate = () => {
  return (
    <section className="py-16 bg-white" id="certificado">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?key=4ldm5" alt="Certificado " fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificado oficial </h2>
            <p className="text-gray-700">
              Al completar la evaluación , recibirás un certificado oficial que valida tu perfil y te proporciona un
              análisis detallado de tus características de comportamiento.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary p-1 rounded-full mr-3">✓</span>
                <span>Informe personalizado de 20+ páginas con tu perfil detallado</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary p-1 rounded-full mr-3">✓</span>
                <span>Análisis de tus fortalezas y áreas de mejora</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary p-1 rounded-full mr-3">✓</span>
                <span>Recomendaciones específicas para tu desarrollo personal y profesional</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary p-1 rounded-full mr-3">✓</span>
                <span>Certificado digital descargable y compartible</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link href="#evaluacion">
                <Button variant="secondary" size="lg">
                  Obtener mi certificado
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
