"use client"

import { useRouter, usePathname } from "next/navigation"
import { Users, Briefcase, Globe, Lightbulb, BarChart2, Monitor, Clock, BookOpen } from "lucide-react"

const CategoryList = () => {
  const router = useRouter()
  const pathname = usePathname()

  const categories = [
    { id: "habilidades-blandas", name: "Habilidades Blandas", icon: <Users className="w-6 h-6 mb-2" /> },
    { id: "habilidades-directivas", name: "Habilidades Directivas", icon: <Briefcase className="w-6 h-6 mb-2" /> },
    { id: "marketing-digital", name: "Marketing Digital", icon: <Globe className="w-6 h-6 mb-2" /> },
    { id: "desarrollo-personal", name: "Desarrollo Personal", icon: <Lightbulb className="w-6 h-6 mb-2" /> },
    { id: "emprendimiento", name: "Emprendimiento", icon: <BarChart2 className="w-6 h-6 mb-2" /> },
    { id: "tecnologia", name: "Tecnología", icon: <Monitor className="w-6 h-6 mb-2" /> },
    { id: "productividad", name: "Productividad", icon: <Clock className="w-6 h-6 mb-2" /> },
    { id: "gestion-empresarial", name: "Gestión Empresarial", icon: <BookOpen className="w-6 h-6 mb-2" /> },
  ]

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set("category", categoryId)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.icon}
            <span className="font-medium text-gray-800">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
