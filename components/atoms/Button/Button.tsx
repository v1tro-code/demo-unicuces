"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  translucent?: boolean
  iconOnly?: boolean
  icon?: ReactNode
  paymentGateway?: boolean
  editProfile?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      translucent = false,
      iconOnly = false,
      icon,
      children,
      paymentGateway,
      editProfile,
      ...props
    },
    ref,
  ) => {
    // Determinar si debemos mostrar una flecha simple basada en el texto
    const showArrow =
      typeof children === "string" &&
      (children.includes("información") ||
        children.includes("Explorar") ||
        children === "Ver Curso" ||
        children === "Continuar curso")

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary variant (azul brillante)
            "bg-primary text-white hover:bg-primary/90": variant === "primary" && !iconOnly,

            // Secondary variant (azul oscuro)
            "bg-secondary text-white hover:bg-secondary/90": variant === "secondary" && !iconOnly,

            // Accent variant (blanco/gris claro)
            "bg-accent text-primary hover:bg-accent/90": variant === "accent" && !iconOnly,

            // Outline variant (borde blanco, fondo translúcido)
            "border border-white text-white bg-white/10 hover:bg-white/20": variant === "outline" && !iconOnly,

            // Ghost variant
            "bg-white/20 text-white hover:bg-white/30": variant === "ghost" && !iconOnly,

            // Sizes
            "h-9 px-3 text-sm": size === "sm" && !iconOnly,
            "h-10 px-4 py-2": size === "md" && !iconOnly,
            "h-11 px-6 text-base": size === "lg" && !iconOnly,
          },
          className,
        )}
        onClick={(e) => {
          if (paymentGateway) {
            e.preventDefault()
            window.location.href = "/pago"
          }
          if (editProfile) {
            e.preventDefault()
            window.location.href = "/perfil?edit=true"
          }
          props.onClick?.(e)
        }}
        {...props}
      >
        {children}
        {showArrow && <span className="ml-2">→</span>}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    )
  },
)

Button.displayName = "Button"

export default Button
