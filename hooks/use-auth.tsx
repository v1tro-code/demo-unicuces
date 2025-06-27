"use client"

import React, { useState, useEffect, createContext, useContext } from "react"
import { supabase } from "@/lib/supabaseClient"
import type { User } from "@/types/user"
import { config } from "@/lib/config"

type AuthContextType = {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<{ error: any }>
  signOut: () => Promise<void>
}

// Usuario demo para modo sin Supabase
const demoUser: User = {
  id: "demo-user-id",
  email: "demo@example.com",
  firstName: "Usuario",
  lastName: "Demo",
  role: "student",
  avatar: "/professional-man.png",
  enrolledCourses: ["1", "2"],
  Profile: {
    dominance: 0.7,
    influence: 0.5,
    steadiness: 0.3,
    compliance: 0.8,
    primaryType: "D",
    secondaryType: "C",
  },
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      if (config.demoMode) {
        // En modo demo, establecer el usuario demo después de un pequeño retraso
        // para simular una carga
        setTimeout(() => {
          setUser(demoUser)
          setLoading(false)
        }, 500)
        return
      }

      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (session?.user) {
        // Fetch user profile from your users table
        const { data } = await supabase.from("users").select("*").eq("id", session.user.id).single()

        setUser(data as User)
      }

      setLoading(false)
    }

    getUser()

    if (!config.demoMode) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          const { data } = await supabase.from("users").select("*").eq("id", session.user.id).single()

          setUser(data as User)
        } else {
          setUser(null)
        }

        setLoading(false)
      })

      return () => {
        subscription.unsubscribe()
      }
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    if (config.demoMode) {
      // En modo demo, simular inicio de sesión exitoso
      await new Promise((resolve) => setTimeout(resolve, 800))
      setUser(demoUser)
      return { error: null }
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    if (config.demoMode) {
      // En modo demo, simular registro exitoso
      await new Promise((resolve) => setTimeout(resolve, 800))
      const customUser = {
        ...demoUser,
        email,
        firstName: userData.firstName || demoUser.firstName,
        lastName: userData.lastName || demoUser.lastName,
      }
      setUser(customUser)
      return { error: null }
    }

    const { error, data } = await supabase.auth.signUp({ email, password })

    if (!error && data.user) {
      // Create user profile in your users table
      await supabase.from("users").insert([
        {
          id: data.user.id,
          email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: "student",
        },
      ])
    }

    return { error }
  }

  const signOut = async () => {
    if (config.demoMode) {
      // En modo demo, simular cierre de sesión
      await new Promise((resolve) => setTimeout(resolve, 300))
      setUser(null)
      return
    }

    await supabase.auth.signOut()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
