"use client"
import { useState } from "react"
import Link from "next/link"
import { Check, Star } from "lucide-react"
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

export default function CoursePurchaseCard({ course }: { course: Course }) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = () => {
    setIsLoading(true)
    // Simulamos una carga
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = `/pago?courseId=${course.id}`
    }, 1000)
  }

  // Imagen de respaldo
  const fallbackImage = "/images/logo-utede.png"

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
      <div className="relative h-48">
        {/* Usamos CourseImage para manejar errores del lado del cliente */}
        <CourseImage
          src={course.image || fallbackImage}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
          fallbackSrc={fallbackImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
            <span className="font-bold">{course.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-3xl font-bold mb-4">{formatCurrency(course.price)}</div>

        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className="w-full bg-primary text-white py-3 rounded-md font-medium mb-4 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Procesando..." : "Comprar ahora"}
        </button>

        <Link
          href={`/pago?courseId=${course.id}`}
          className="block w-full text-center border border-primary text-primary py-3 rounded-md font-medium mb-6 hover:bg-primary/10 transition-colors"
        >
          Añadir al carrito
        </Link>

        <div className="space-y-3">
          <h3 className="font-bold text-lg mb-2">Este curso incluye:</h3>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>{course.duration} de contenido</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Acceso de por vida</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Certificado de finalización</span>
          </div>
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Recursos descargables</span>
          </div>
        </div>
      </div>
    </div>
  )
}
