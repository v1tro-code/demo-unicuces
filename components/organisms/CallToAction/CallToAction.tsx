import Button from "@/components/atoms/Button/Button"
import Link from "next/link"

const CallToAction = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            ¿Listo para impulsar tu desarrollo profesional?
          </h2>
          <p className="text-secondary/80 mx-auto mb-10 text-lg">
            Únete a nuestra comunidad de profesionales y accede a cursos especializados, recursos
            exclusivos para potenciar tu carrera.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/registro">
              <Button variant="secondary" size="lg">
                Comenzar ahora
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10">
                Contactar con un asesor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
