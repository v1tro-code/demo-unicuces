import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Transforma tu futuro profesional
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Potencia tu <span className="text-white">desarrollo</span> con nuestra Universidad
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-xl">
                Cursos especializados y evaluación  para impulsar tu crecimiento personal y profesional.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/cursos">
                <Button variant="accent" size="lg" className="group bg-white text-primary hover:bg-gray-100">
                  Explorar Cursos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                  Evaluación 
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/professional-woman-diverse.png"
              alt="Estudiantes aprendiendo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent"></div>

            {/* Floating card - Now clickable */}
            <Link
              href="/contacto"
              className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 
                transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-lg group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Asesoría Personalizada</h4>
                  <p className="text-xs text-white/70">Incluida en todos los cursos</p>
                </div>
                <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
