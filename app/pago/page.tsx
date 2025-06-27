"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { getCourseById } from "@/lib/actions/course-actions"
import PaymentForm from "@/components/organisms/PaymentForm/PaymentForm"
import OrderSummary from "@/components/organisms/OrderSummary/OrderSummary"
import type { Course } from "@/types/course"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("courseId")

  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) {
        setError("No se ha especificado un curso para la compra")
        setLoading(false)
        return
      }

      try {
        const courseData = await getCourseById(courseId)
        if (!courseData) {
          setError("No se ha encontrado el curso especificado")
        } else {
          setCourse(courseData)
        }
      } catch (err) {
        setError("Error al cargar los datos del curso")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [courseId])

  if (loading) {
    return (
      <div className="min-h-screen bg-muted py-12">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600">Cargando información del curso...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-muted py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{error || "Ha ocurrido un error inesperado"}</p>
            <a
              href="/cursos"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Volver a cursos
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Completar compra</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PaymentForm course={course} />
            </div>

            <div className="lg:col-span-1">
              <OrderSummary course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
