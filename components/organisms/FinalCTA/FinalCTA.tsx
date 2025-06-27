import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza tu camino hacia el éxito profesional</h2>
          <p className="text-xl opacity-90 mx-auto mb-10">
            Únete a nuestra comunidad universitaria y transforma tu futuro con una educación de calidad.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/registro">
              <Button variant="accent" size="lg" className="group">
                Solicita información
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/cursos">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explorar programas académicos
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl mb-1">¿Necesitas ayuda?</p>
              <p className="opacity-80">Nuestro equipo está listo para asistirte</p>
            </div>
            <div className="flex gap-4">
              <Link href="/contacto">
                <Button variant="outline" size="md" className="border-white/50 text-white hover:bg-white/10">
                  Contáctanos
                </Button>
              </Link>
              <a href="tel:+123456789">
                <Button variant="outline" size="md" className="border-white/50 text-white hover:bg-white/10">
                  Llámanos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
