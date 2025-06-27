"use client"

import Link from "next/link"

import { useState } from "react"
import NavLink from "@/components/molecules/NavLink/NavLink"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import CustomButton from "@/components/atoms/Button/Button"

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/cursos", label: "Cursos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ]

  const isScrolled = typeof window !== "undefined" && window.scrollY > 10

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-secondary"
        onClick={toggleMenu}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? (
          <X size={24} className={isScrolled ? "text-secondary" : "text-white"} />
        ) : (
          <Menu size={24} className={isScrolled ? "text-secondary" : "text-white"} />
        )}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            className={isScrolled ? "text-gray-700" : "text-primary"}
            activeClassName={isScrolled ? "text-primary font-medium" : "text-secondary font-medium"}
          />
        ))}
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                onClick={closeMenu}
                className="text-gray-700 text-lg"
                activeClassName="text-primary font-medium"
              />
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col space-y-3">
              <Link href="/login" className="w-full">
                <CustomButton
                  variant="outline"
                  translucent={true}
                  className="w-full border-secondary text-secondary bg-muted hover:bg-muted/80"
                >
                  Iniciar Sesión
                </CustomButton>
              </Link>
              <Link href="/registro" className="w-full">
                <CustomButton variant="secondary" className="w-full">
                  Registrarse
                </CustomButton>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default NavMenu
