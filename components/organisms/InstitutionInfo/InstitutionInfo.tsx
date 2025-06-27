import Image from "next/image"
import { Award, BookOpen, Users, Clock } from "lucide-react"
import Button from "@/components/atoms/Button/Button"
import Link from "next/link"

const InstitutionInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Universidad</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Somos una institución educativa comprometida con la excelencia académica y el desarrollo integral de
            nuestros estudiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
            <Image src="/diverse-group.png" alt="Estudiantes en el campus" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary">Formando profesionales desde 1985</h3>
            <p className="text-gray-700">
              Nuestra universidad se ha destacado por más de 35 años en la formación de profesionales líderes en sus
              campos, con un enfoque en la innovación, la investigación y el compromiso social.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-primary mr-2" />
                  <h4 className="font-bold">Acreditación</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Reconocida por las principales instituciones educativas nacionales e internacionales.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  <h4 className="font-bold">Programas</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Más de 50 programas de pregrado y posgrado en diversas áreas del conocimiento.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <h4 className="font-bold">Comunidad</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Una comunidad vibrante de más de 10,000 estudiantes y 1,200 docentes.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-6 w-6 text-primary mr-2" />
                  <h4 className="font-bold">Flexibilidad</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Modalidades presenciales, híbridas y virtuales adaptadas a tus necesidades.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/nosotros">
                <Button variant="primary" size="lg">
                  Conoce más sobre nosotros
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstitutionInfo
