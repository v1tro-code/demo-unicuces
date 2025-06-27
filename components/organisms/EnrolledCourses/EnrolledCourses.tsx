"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import Image from "next/image"
import Link from "next/link"
import { Clock, BookOpen } from "lucide-react"
import Button from "@/components/atoms/Button/Button"
import type { Course } from "@/types/course"

interface EnrolledCoursesProps {
  userId: string
}

const EnrolledCourses = ({ userId }: EnrolledCoursesProps) => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const { data: enrollments, error: enrollmentsError } = await supabase
          .from("enrollments")
          .select("course_id")
          .eq("user_id", userId)

        if (enrollmentsError) throw enrollmentsError

        if (enrollments.length === 0) {
          setCourses([])
          setLoading(false)
          return
        }

        const courseIds = enrollments.map((enrollment) => enrollment.course_id)

        const { data: coursesData, error: coursesError } = await supabase
          .from("courses")
          .select("*")
          .in("id", courseIds)

        if (coursesError) throw coursesError

        // Transform data to match our Course type
        const formattedCourses: Course[] = coursesData.map((course) => ({
          id: course.id,
          title: course.title,
          description: course.description,
          image: course.image_url,
          duration: course.duration,
          students: course.students_count,
          rating: course.rating,
          price: course.price,
          category: course.category,
          instructor: {
            name: course.instructor_name,
            bio: course.instructor_bio,
            image: course.instructor_image,
          },
        }))

        setCourses(formattedCourses)
      } catch (error) {
        console.error("Error fetching enrolled courses:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEnrolledCourses()
  }, [userId])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-600">Cargando tus cursos...</p>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-2">No estás inscrito en ningún curso</h3>
        <p className="text-gray-600 mb-6">Explora nuestro catálogo y encuentra cursos que te interesen</p>
        <Link href="/cursos">
          <Button>Ver cursos disponibles</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-secondary mb-6">Mis cursos</h2>

      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-48 h-32">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>

              <div className="p-4 flex-grow">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock size={16} className="mr-1" />
                  <span className="mr-4">{course.duration}</span>
                  <span>Instructor: {course.instructor.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span className="text-green-600 font-medium">Progreso: 25%</span>
                  </div>

                  <Link href={`/cursos/${course.id}`}>
                    <Button variant="secondary" size="sm">
                      Continuar curso
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EnrolledCourses
