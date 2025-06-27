import { createClient } from "@supabase/supabase-js"
import { config } from "./config"

// Cliente mock que no hace nada pero implementa la misma interfaz
const mockClient = {
  auth: {
    signInWithPassword: async () => ({ data: {}, error: null }),
    signUp: async () => ({ data: {}, error: null }),
    signOut: async () => {},
    getSession: async () => ({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        in: () => ({
          order: () => ({
            range: async () => ({ data: [], error: null, count: 0 }),
          }),
        }),
      }),
      range: () => ({
        order: async () => ({ data: [], error: null, count: 0 }),
      }),
      insert: async () => ({ error: null }),
    }),
  }),
}

// Crear cliente real solo si useSupabase está habilitado
export const supabase = config.useSupabase
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "")
  : mockClient
