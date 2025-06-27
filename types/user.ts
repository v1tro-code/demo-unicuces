export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: "student" | "instructor" | "admin"
  enrolledCourses?: string[]
  Profile?: {
    dominance: number
    influence: number
    steadiness: number
    compliance: number
    primaryType: "D" | "I" | "S" | "C"
    secondaryType?: "D" | "I" | "S" | "C"
  }
}
