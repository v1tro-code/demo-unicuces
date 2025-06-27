"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  label: string
  className?: string
  activeClassName?: string
  onClick?: () => void
}

const NavLink = ({
  href,
  label,
  className = "",
  activeClassName = "font-medium text-secondary",
  onClick,
}: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-secondary/80 relative py-1",
        className,
        isActive ? activeClassName : "",
      )}
      onClick={onClick}
    >
      {label}
      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current rounded-full"></span>}
    </Link>
  )
}

export default NavLink
