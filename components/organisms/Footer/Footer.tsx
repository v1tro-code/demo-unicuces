import Logo from "@/components/atoms/Logo/Logo"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-secondary/90 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and description */}
          <div className="space-y-6">
            <Logo variant="white" />
            <p className="text-gray-300">
              Plataforma educativa especializada en cursos profesionales para el desarrollo personal y
              profesional.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full">
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/cursos" className="text-gray-300 hover:text-primary transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terminos" className="text-gray-300 hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-300 hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary mt-1" />
                <span className="text-gray-300">Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <a href="tel:+34123456789" className="text-gray-300 hover:text-primary transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href="mailto:info@academia.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@academia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Utedé. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
