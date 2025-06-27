import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // En un entorno real, aquí verificaríamos las credenciales
    // Para el modo demo, simplemente establecemos una cookie de sesión

    const cookieStore = cookies()

    // Establecer una cookie de sesión demo
    cookieStore.set("demo-session", "active", {
      path: "/",
      maxAge: 60 * 60 * 24, // 1 día
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en demo login:", error)
    return NextResponse.json({ error: "Error de autenticación" }, { status: 500 })
  }
}
