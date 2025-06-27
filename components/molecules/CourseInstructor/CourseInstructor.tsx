import Image from "next/image"

interface InstructorProps {
  instructor: {
    name: string
    bio: string
    image: string
  }
}

const CourseInstructor = ({ instructor }: InstructorProps) => {
  return (
    <div className="mt-8 pt-8 border-t">
      <h2 className="text-xl font-bold mb-4 text-secondary">Instructor</h2>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={instructor.image || "/placeholder.svg?height=200&width=200&query=professional instructor"}
            alt={instructor.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold">{instructor.name}</h3>
          <p className="text-gray-600 mt-2">{instructor.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseInstructor
