"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Users, Briefcase, Globe, Lightbulb, BarChart2, Monitor, Clock, BookOpen } from "lucide-react"

interface CourseFiltersProps {
  selectedCategory?: string
  selectedSkillType?: string
  selectedPriceRange?: string
}

const CourseFilters = ({
  selectedCategory = "",
  selectedSkillType = "",
  selectedPriceRange = "",
}: CourseFiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const [category, setCategory] = useState(selectedCategory)
  const [skillType, setSkillType] = useState(selectedSkillType)
  const [priceRange, setPriceRange] = useState(selectedPriceRange)

  const categories = [
    { id: "habilidades-blandas", name: "Habilidades Blandas", icon: <Users className="w-4 h-4 mr-2" /> },
    { id: "habilidades-directivas", name: "Habilidades Directivas", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { id: "marketing-digital", name: "Marketing Digital", icon: <Globe className="w-4 h-4 mr-2" /> },
    { id: "desarrollo-personal", name: "Desarrollo Personal", icon: <Lightbulb className="w-4 h-4 mr-2" /> },
    { id: "emprendimiento", name: "Emprendimiento", icon: <BarChart2 className="w-4 h-4 mr-2" /> },
    { id: "tecnologia", name: "Tecnología", icon: <Monitor className="w-4 h-4 mr-2" /> },
    { id: "productividad", name: "Productividad", icon: <Clock className="w-4 h-4 mr-2" /> },
    { id: "gestion-empresarial", name: "Gestión Empresarial", icon: <BookOpen className="w-4 h-4 mr-2" /> },
  ]

  const priceRanges = [
    { id: "all", name: "Todos los precios" },
    { id: "free", name: "Gratis" },
    { id: "0-100000", name: "Menos de $100.000" },
    { id: "100000-150000", name: "$100.000 - $150.000" },
    { id: "150000-200000", name: "$150.000 - $200.000" },
    { id: "200000-plus", name: "Más de $200.000" },
  ]

  const applyFilters = () => {
    const params = new URLSearchParams(window.location.search)

    if (category) {
      params.set("category", category)
    } else {
      params.delete("category")
    }

    if (skillType) {
      params.set("skillType", skillType)
    } else {
      params.delete("skillType")
    }

    if (priceRange) {
      params.set("priceRange", priceRange)
    } else {
      params.delete("priceRange")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const clearFilters = () => {
    setCategory("")
    setSkillType("")
    setPriceRange("")

    const params = new URLSearchParams(window.location.search)
    params.delete("category")
    params.delete("skillType")
    params.delete("priceRange")

    if (params.has("query")) {
      router.push(`${pathname}?${params.toString()}`)
    } else {
      router.push(pathname)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-secondary">Filtros</h2>

      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-700">Categorías</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center">
              <input
                type="radio"
                id={`category-${cat.id}`}
                name="category"
                checked={category === cat.id}
                onChange={() => setCategory(cat.id)}
                className="mr-2 h-4 w-4 text-primary focus:ring-primary"
              />
              <label htmlFor={`category-${cat.id}`} className="text-gray-600 flex items-center">
                {cat.icon}
                {cat.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-3 text-gray-700">Precio</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center">
              <input
                type="radio"
                id={`price-${range.id}`}
                name="priceRange"
                checked={priceRange === range.id}
                onChange={() => setPriceRange(range.id)}
                className="mr-2 h-4 w-4 text-primary focus:ring-primary"
              />
              <label htmlFor={`price-${range.id}`} className="text-gray-600">
                {range.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={applyFilters}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
        >
          Aplicar Filtros
        </button>
        <button
          onClick={clearFilters}
          className="text-gray-600 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  )
}

export default CourseFilters
