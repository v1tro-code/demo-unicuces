import { Suspense } from "react"
import type { Metadata } from "next"
import CoursesClientPage from "./CoursesClientPage"
import CourseListSkeleton from "@/components/organisms/CourseList/CourseListSkeleton"
import { getCourses } from "@/lib/actions/course-actions"

export const metadata: Metadata = {
  title: "Cursos | Unicuces",
  description: "Explora nuestra amplia selección de cursos en diversas áreas de conocimiento.",
}

interface PageProps {
  searchParams: {
    query?: string
    category?: string
    skillType?: string
    priceRange?: string
    page?: string
  }
}

export default async function CoursesPage({ searchParams }: PageProps) {
  const params = await searchParams
  const query = params.query || ""
  const category = params.category || ""
  const skillType = params.skillType || ""
  const priceRange = params.priceRange || ""
  const page = params.page ? Number.parseInt(params.page) : 1

  // Fetch courses data on the server
  const { courses, totalPages } = await getCourses({
    query,
    category,
    skillType,
    priceRange,
    page,
    pageSize: 9,
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Cursos</h1>

      <Suspense fallback={<CourseListSkeleton />}>
        <CoursesClientPage
          query={query}
          category={category}
          skillType={skillType}
          priceRange={priceRange}
          page={page}
          courses={courses}
          totalPages={totalPages}
        />
      </Suspense>
    </main>
  )
}
