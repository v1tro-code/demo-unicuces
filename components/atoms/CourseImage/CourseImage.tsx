"use client"

interface CourseImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export default function CourseImage({ src, alt, className, fallbackSrc = "/placeholder.svg" }: CourseImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        // Si hay un error al cargar la imagen, usar la imagen de respaldo
        e.currentTarget.src = fallbackSrc
      }}
    />
  )
}
