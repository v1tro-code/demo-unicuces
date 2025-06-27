import Image from "next/image"
import Link from "next/link"
import type { Course } from "@/types/course"

// Función para formatear el precio como pesos colombianos sin decimales
const formatCurrency = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

interface OrderSummaryProps {
  course: Course
}

const OrderSummary = ({ course }: OrderSummaryProps) => {
  // Calcular IVA (19% en Colombia)
  const iva = course.price * 0.19
  const total = course.price + iva

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-secondary">Resumen del pedido</h2>

        <div className="flex items-start gap-4 mb-6">
          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>

          <div>
            <h3 className="font-medium">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.instructor.name}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Precio del curso</span>
            <span>{formatCurrency(course.price)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">IVA (19%)</span>
            <span>{formatCurrency(iva)}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-2">
            Al completar la compra, aceptas nuestros{" "}
            <Link href="/terminos" className="text-primary hover:underline">
              Términos y Condiciones
            </Link>{" "}
            y{" "}
            <Link href="/privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            .
          </p>
          <p>
            Si tienes alguna pregunta, contacta con nuestro{" "}
            <Link href="/contacto" className="text-primary hover:underline">
              equipo de soporte
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
