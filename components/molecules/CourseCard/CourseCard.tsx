"use client"
import Link from "next/link"
import { StarIcon, Users } from "lucide-react"
import CourseImage from "@/components/atoms/CourseImage/CourseImage"
import type { Course } from "@/types/course"

// Función para formatear el precio como moneda colombiana
const formatCurrency = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export default function CourseCard({
  id,
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  category,
}: Course) {
  // Imagen de respaldo en caso de que la imagen del curso no esté disponible
  const fallbackImage = "/images/logo-utede.png"

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg mb-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <CourseImage
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
            fallbackSrc={fallbackImage}
          />
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-500">{category.replaceAll("-", " ").toUpperCase()}</span>
          </div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {duration}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Users size={12} className="mr-1" />
              {students} estudiantes
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <StarIcon size={16} className="text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>

            <div className="text-lg font-bold">{price === 0 ? "Gratis" : formatCurrency(price)}</div>
          </div>

          <Link
            href={`/cursos/${id}`}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Ver curso
          </Link>
        </div>
      </div>
    </div>
  )
}
