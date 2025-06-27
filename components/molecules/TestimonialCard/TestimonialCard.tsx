import Image from "next/image"
import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  testimonial: string
  rating: number
}

const TestimonialCard = ({ name, role, image, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-white/20">
      <div className="flex justify-end mb-4">
        <Quote className="h-8 w-8 text-accent opacity-50" />
      </div>

      <p className="text-white/90 italic mb-6">"{testimonial}"</p>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className={`${i < rating ? "text-accent fill-current" : "text-white/30"} mr-1`} />
        ))}
      </div>

      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
