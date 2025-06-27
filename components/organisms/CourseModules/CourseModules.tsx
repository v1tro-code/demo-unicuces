"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, PlayCircle, Lock } from "lucide-react"

interface Module {
  title: string
  lessons: {
    title: string
    duration: string
  }[]
}

interface CourseModulesProps {
  modules: Module[]
}

const CourseModules = ({ modules }: CourseModulesProps) => {
  const [openModule, setOpenModule] = useState<number | null>(0)

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index)
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-secondary">Contenido del curso</h2>

      <div className="border rounded-lg overflow-hidden">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="border-b last:border-b-0">
            <button
              onClick={() => toggleModule(moduleIndex)}
              className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <span className="font-medium">{module.title}</span>
                <span className="ml-2 text-sm text-gray-500">
                  ({module.lessons.length} {module.lessons.length === 1 ? "lección" : "lecciones"})
                </span>
              </div>
              {openModule === moduleIndex ? (
                <ChevronUp size={20} className="text-gray-500" />
              ) : (
                <ChevronDown size={20} className="text-gray-500" />
              )}
            </button>

            {openModule === moduleIndex && (
              <div className="bg-white">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center justify-between p-4 border-t">
                    <div className="flex items-center">
                      {moduleIndex === 0 && lessonIndex === 0 ? (
                        <PlayCircle size={18} className="text-primary mr-3" />
                      ) : (
                        <Lock size={18} className="text-gray-400 mr-3" />
                      )}
                      <span className={moduleIndex === 0 && lessonIndex === 0 ? "" : "text-gray-500"}>
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseModules
