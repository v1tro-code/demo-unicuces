import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import StudentDashboard from "@/components/organisms/StudentDashboard/StudentDashboard"
import { config } from "@/lib/config"

export const metadata = {
  title: "Dashboard Estudiantil - Sanmartin Academia",
  description: "Accede a toda tu información académica y cursos en un solo lugar",
}

export default async function DashboardPage() {
  // Si estamos en modo demo, simplemente renderizamos el dashboard con datos de ejemplo
  if (config.demoMode) {
    return <StudentDashboard />
  }

  // Si no estamos en modo demo, verificamos la autenticación
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

  return <StudentDashboard userData={userData} />
}
