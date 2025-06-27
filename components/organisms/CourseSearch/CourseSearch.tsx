"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Search } from "lucide-react"

interface CourseSearchProps {
  initialQuery?: string
}

const CourseSearch = ({ initialQuery = "" }: CourseSearchProps) => {
  const [query, setQuery] = useState(initialQuery)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    startTransition(() => {
      // Construct the query string
      const params = new URLSearchParams(window.location.search)

      if (query) {
        params.set("query", query)
      } else {
        params.delete("query")
      }

      router.push(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar cursos..."
          className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
      >
        {isPending ? "Buscando..." : "Buscar"}
      </button>
    </form>
  )
}

export default CourseSearch
