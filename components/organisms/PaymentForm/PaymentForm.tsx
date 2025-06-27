"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/atoms/Button/Button"
import { useAuth } from "@/hooks/use-auth"
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

interface PaymentFormProps {
  course: Course
}

const PaymentForm = ({ course }: PaymentFormProps) => {
  const router = useRouter()
  const { user, loading } = useAuth()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Colombia",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"

    if (!formData.cardNumber.trim()) newErrors.cardNumber = "El número de tarjeta es obligatorio"
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
      newErrors.cardNumber = "Número de tarjeta inválido"

    if (!formData.expiryDate.trim()) newErrors.expiryDate = "La fecha de expiración es obligatoria"
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = "Formato inválido (MM/YY)"

    if (!formData.cvv.trim()) newErrors.cvv = "El CVV es obligatorio"
    else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = "CVV inválido"

    if (!formData.address.trim()) newErrors.address = "La dirección es obligatoria"
    if (!formData.city.trim()) newErrors.city = "La ciudad es obligatoria"
    if (!formData.postalCode.trim()) newErrors.postalCode = "El código postal es obligatorio"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Aquí iría la integración con la pasarela de pago real
      // Por ahora, simulamos un proceso de pago exitoso
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirigir a página de éxito
      router.push(`/pago/exito?courseId=${course.id}`)
    } catch (error) {
      console.error("Error en el proceso de pago:", error)
      setErrors({ submit: "Ha ocurrido un error al procesar el pago. Inténtalo de nuevo." })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-fill form with user data if available
  React.useEffect(() => {
    if (user && !loading) {
      setFormData((prev) => ({
        ...prev,
        name: user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : prev.name,
        email: user.email || prev.email,
      }))
    }
  }, [user, loading])

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6 text-secondary">Información de pago</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información personal */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Información personal</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
                placeholder="Nombre y apellidos"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>
        </div>

        {/* Información de tarjeta */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Información de tarjeta</h3>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Número de tarjeta
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Fecha de expiración
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
            </div>

            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.cvv ? "border-red-500" : "border-gray-300"}`}
                placeholder="123"
                maxLength={4}
              />
              {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
            </div>
          </div>
        </div>

        {/* Dirección de facturación */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Dirección de facturación</h3>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.address ? "border-red-500" : "border-gray-300"}`}
              placeholder="Calle, número, piso"
            />
            {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${errors.city ? "border-red-500" : "border-gray-300"}`}
                placeholder="Ciudad"
              />
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                Código postal
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="12345"
              />
              {errors.postalCode && <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                País
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
          </div>
        </div>

        {errors.submit && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{errors.submit}</div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full py-3">
          {isSubmitting ? "Procesando pago..." : `Pagar ${formatCurrency(course.price)}`}
        </Button>

        <p className="text-sm text-gray-500 text-center">Tus datos de pago están seguros y encriptados</p>
      </form>
    </div>
  )
}

export default PaymentForm
