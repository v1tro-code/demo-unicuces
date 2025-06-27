"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import Button from "@/components/atoms/Button/Button"
import { toast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabaseClient"

export default function RecoverPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Por favor, ingresa tu dirección de email")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa una dirección de email válida")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      setIsSuccess(true)
      toast({
        title: "Email enviado",
        description: "Revisa tu bandeja de entrada para restablecer tu contraseña",
      })
    } catch (error: any) {
      console.error("Error al enviar email de recuperación:", error)
      setError("Ha ocurrido un error al enviar el email de recuperación. Por favor, inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
            <div className="mb-6">
              <Link href="/login" className="inline-flex items-center text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a inicio de sesión
              </Link>
            </div>

            {isSuccess ? (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Email enviado</h2>
                <p className="text-gray-600 mb-6">
                  Hemos enviado un enlace de recuperación a <strong>{email}</strong>. Por favor, revisa tu bandeja de
                  entrada y sigue las instrucciones para restablecer tu contraseña.
                </p>
                <p className="text-gray-500 text-sm">
                  ¿No recibiste el email?{" "}
                  <button onClick={handleSubmit} className="text-primary hover:text-primary/80 font-medium">
                    Enviar de nuevo
                  </button>
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-secondary mb-2">Recuperar contraseña</h2>
                  <p className="text-gray-600">
                    Ingresa tu email y te enviaremos instrucciones para restablecer tu contraseña
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setError("")
                        }}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          error ? "border-red-500" : "border-gray-300"
                        } rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Enviando..." : "Enviar instrucciones"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
