"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Button from "@/components/atoms/Button/Button"
import { supabase } from "@/lib/supabaseClient"
import type { User } from "@/types/user"
import { toast } from "@/hooks/use-toast"

interface ProfileInfoProps {
  userData: User
}

const ProfileInfo = ({ userData }: ProfileInfoProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    email: userData.email || "",
    phone: "",
    bio: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const { error } = await supabase
        .from("users")
        .update({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          bio: formData.bio,
        })
        .eq("id", userData.id)

      if (error) throw error

      toast({
        title: "Perfil actualizado",
        description: "Tu información ha sido actualizada correctamente",
      })

      setIsEditing(false)
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error",
        description: "No se pudo actualizar tu perfil. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-secondary">Información personal</h2>
        {!isEditing && (
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            Editar perfil
          </Button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Apellidos
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                disabled
              />
              <p className="mt-1 text-xs text-gray-500">El email no se puede cambiar</p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="123456789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Biografía
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Cuéntanos sobre ti..."
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Guardando..." : "Guardar cambios"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              {userData.avatar ? (
                <Image
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.firstName}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-400">
                  {userData.firstName?.charAt(0)}
                  {userData.lastName?.charAt(0)}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-bold">
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                {userData.role === "student" ? "Estudiante" : userData.role === "instructor" ? "Instructor" : "Admin"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Teléfono</h4>
              <p>{formData.phone || "No especificado"}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-1">Miembro desde</h4>
              <p>Enero 2023</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Biografía</h4>
            <p className="text-gray-700">{formData.bio || "No hay biografía disponible"}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileInfo
