export interface Course {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  duration: string
  students: number
  rating: number
  price: number
  category: string
  instructor: {
    name: string
    bio: string
    image: string
  }
  modules?: {
    title: string
    lessons: {
      title: string
      duration: string
    }[]
  }[]
}
