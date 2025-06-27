"use client"

import { useState, useEffect } from "react"
import Logo from "@/components/atoms/Logo/Logo"
import NavMenu from "@/components/molecules/NavMenu/NavMenu"
import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"


const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-5", // Cambiado a fondo blanco para mejor contraste con el logo
      )}
    >
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo variant="header" />

          <div className="flex items-center gap-6">
            <NavMenu />

            <div className="hidden sm:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href="/registro">
                <Button variant="primary" className="bg-primary text-white hover:bg-primary/90 shadow-sm">
                  Registrarse
                </Button>
              </Link>
            </div>

            <div className="sm:hidden">
              <Button
                iconOnly
                icon={<Menu size={24} />}
                aria-label="Menú"
                className="transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
