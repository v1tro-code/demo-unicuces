import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import ProfileTabs from "@/components/organisms/ProfileTabs/ProfileTabs"
import { config } from "@/lib/config"

export const metadata = {
  title: "Mi Perfil - Unicuces",
  description: "Gestiona tu perfil y accede a tus cursos",
}

export default async function ProfilePage() {
  // If Supabase is disabled, show a demo version
  if (!config.useSupabase) {
    // Mock user data for demo
    const mockUserData = {
      id: "demo-user-123",
      email: "usuario@demo.com",
      firstName: "Usuario",
      lastName: "Demo",
      role: "student" as const,
      enrolledCourses: ["1", "2", "3"],
      Profile: {
        dominance: 7,
        influence: 8,
        steadiness: 6,
        compliance: 5,
        primaryType: "I" as const,
        secondaryType: "D" as const,
      },
    }

    return (
      <div className="bg-muted min-h-screen py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Modo Demo:</strong> Esta es una versión de demostración. En un entorno real, aquí verías tu información de perfil real.
              </p>
            </div>
            <ProfileTabs userData={mockUserData} />
          </div>
        </div>
      </div>
    )
  }

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  const { data: userData } = await supabase.from("users").select("*").eq("id", session.user.id).single()

  if (!userData) {
    redirect("/login")
  }

  return (
    <div className="bg-muted min-h-screen py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Mi Perfil</h1>

          <ProfileTabs userData={userData} />
        </div>
      </div>
    </div>
  )
}
