import { getCourseById } from "@/lib/actions/course-actions"
import { Clock, Users, Star, BookOpen, Award } from "lucide-react"
import CourseModules from "@/components/organisms/CourseModules/CourseModules"
import CourseInstructor from "@/components/molecules/CourseInstructor/CourseInstructor"
import CoursePurchaseCard from "@/components/molecules/CoursePurchaseCard/CoursePurchaseCard"
import CourseImage from "@/components/atoms/CourseImage/CourseImage"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  if (!course) {
    return {
      title: "Curso no encontrado - Sanmartin Academia",
      description: "El curso que buscas no existe o ha sido eliminado",
    }
  }

  return {
    title: `${course.title} - Sanmartin Academia`,
    description: course.description,
  }
}

export default async function CoursePage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  if (!course) {
    notFound()
  }

  // Imagen de respaldo
  const fallbackImage = "/images/logo-utede.png"

  return (
    <div className="bg-muted min-h-screen py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="relative h-64 md:h-80">
                {/* Usamos CourseImage para manejar errores del lado del cliente */}
                <CourseImage
                  src={course.image || fallbackImage}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  fallbackSrc={fallbackImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-block bg-accent text-secondary text-sm font-bold px-3 py-1 rounded-md mb-3">
                    {course.category}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold">{course.title}</h1>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1 text-primary" />
                    <span>{course.students} estudiantes</span>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} className="mr-1 fill-current" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-4 text-secondary">Descripción del curso</h2>
                <div className="prose max-w-none text-gray-700 mb-8">
                  <p>{course.longDescription || course.description}</p>
                </div>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-full mr-3">
                      <BookOpen size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Módulos</p>
                      <p className="font-bold">{course.modules?.length || 0}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-full mr-3">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duración</p>
                      <p className="font-bold">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-full mr-3">
                      <Award size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Certificado</p>
                      <p className="font-bold">Incluido</p>
                    </div>
                  </div>
                </div>

                {course.modules && course.modules.length > 0 && <CourseModules modules={course.modules} />}

                <CourseInstructor instructor={course.instructor} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CoursePurchaseCard course={course} />
          </div>
        </div>
      </div>
    </div>
  )
}
