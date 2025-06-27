import { getCourses } from "@/lib/actions/course-actions"
import CourseCard from "@/components/molecules/CourseCard/CourseCard"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

interface CourseListProps {
  query?: string
  category?: string
  skillType?: string
  priceRange?: string
  sortBy?: string
  page?: number
}

const CourseList = async ({
  query = "",
  category = "",
  skillType = "",
  priceRange = "",
  sortBy = "recent",
  page = 1,
}: CourseListProps) => {
  const { courses, totalPages } = await getCourses({
    query,
    category,
    skillType,
    priceRange,
    sortBy,
    page,
    pageSize: 9,
  })

  if (courses.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <h3 className="text-xl font-bold mb-2">No se encontraron cursos</h3>
        <p className="text-gray-600 mb-4">
          No hay cursos que coincidan con los criterios de búsqueda. Intenta con otros filtros.
        </p>
        <Link href="/cursos" className="text-primary hover:underline">
          Ver todos los cursos
        </Link>
      </div>
    )
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <Link
              href={`/cursos?page=${Math.max(1, page - 1)}${query ? `&query=${query}` : ""}${
                category ? `&category=${category}` : ""
              }${skillType ? `&skillType=${skillType}` : ""}${priceRange ? `&priceRange=${priceRange}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}`}
              className={`p-2 rounded-md border ${
                page <= 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              aria-disabled={page <= 1}
              tabIndex={page <= 1 ? -1 : undefined}
            >
              <ArrowLeft size={20} />
            </Link>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/cursos?page=${pageNum}${query ? `&query=${query}` : ""}${
                  category ? `&category=${category}` : ""
                }${skillType ? `&skillType=${skillType}` : ""}${priceRange ? `&priceRange=${priceRange}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}`}
                className={`px-4 py-2 rounded-md ${
                  pageNum === page ? "bg-primary text-white" : "text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {pageNum}
              </Link>
            ))}

            <Link
              href={`/cursos?page=${Math.min(totalPages, page + 1)}${query ? `&query=${query}` : ""}${
                category ? `&category=${category}` : ""
              }${skillType ? `&skillType=${skillType}` : ""}${priceRange ? `&priceRange=${priceRange}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}`}
              className={`p-2 rounded-md border ${
                page >= totalPages
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              aria-disabled={page >= totalPages}
              tabIndex={page >= totalPages ? -1 : undefined}
            >
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseList
