import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  variant?: "default" | "white" | "colored" | "header"
  size?: "sm" | "md" | "lg"
}

const Logo = ({ variant = "default", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  // Dimensiones ajustadas para mantener la proporción correcta del logo
  const dimensions = {
    sm: { width: 120, height: 40 },
    md: { width: 180, height: 60 },
    lg: { width: 240, height: 80 },
  }

  return (
    <Link href="/" className={`flex items-center ${sizeClasses[size]}`}>
      <div className="relative">
        <Image
          src={variant === "header" ? "/images/logo.png" : "/images/logo-utede.png"}
          alt="Logo"
          width={dimensions[size].width}
          height={dimensions[size].height}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}

export default Logo
