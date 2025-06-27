"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Clock, Users } from "lucide-react"
import Button from "@/components/atoms/Button/Button"

interface Course {
  id: string
  title: string
  description: string
  image: string
  duration: string
  students: number
  rating: number
  price: number
  category: string
}

interface CourseCarouselProps {
  courses: Course[]
  title?: string
  subtitle?: string
}

const CourseCarousel = ({
  courses,
  title = "Cursos Destacados",
  subtitle = "Descubre nuestros cursos más populares",
}: CourseCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      handleNext()
    }
    if (isRightSwipe) {
      handlePrev()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isAnimating])

  const activeCourse = courses[activeIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-secondary to-secondary/90 text-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-white/80 max-w-2xl">{subtitle}</p>
        </div>

        <div
          className="relative"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Featured Course */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-5xl font-bold opacity-50">{String(activeIndex + 1).padStart(2, "0")}</div>
                <div className="h-[1px] flex-grow bg-white/20"></div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">{activeCourse.title}</h3>

              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.floor(activeCourse.rating) ? "text-accent fill-accent" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/70">
                  Categoría: <span className="text-accent">{activeCourse.category}</span>
                </span>
              </div>

              <p className="text-white/80">{activeCourse.description}</p>

              <div className="flex items-center space-x-6 text-sm text-white/70">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-accent" />
                  <span>{activeCourse.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2 text-accent" />
                  <span>{activeCourse.students} estudiantes</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href='https://campus.edux.com.co/login/index.php?loginredirect=1 '>
                  <Button variant="accent" size="lg">
                    Ver Curso
                  </Button>
                </Link>
                <Link href="/cursos">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    Más Cursos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={activeCourse.image || "/placeholder.svg"}
                alt={activeCourse.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-accent text-secondary text-sm font-bold px-3 py-1 rounded-md">
                {activeCourse.price === 0 ? "Gratis" : `${activeCourse.price.toFixed(2)}€`}
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "bg-accent w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Course Thumbnails */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                  index === activeIndex ? "ring-2 ring-accent" : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => handleDotClick(index)}
              >
                <div className="relative h-[120px]">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-sm font-semibold line-clamp-1">{course.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseCarousel
