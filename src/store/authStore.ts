import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  user: {
    email: string
    name: string
  } | null
  token: string | null
  login: (email: string, name: string, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: (email, name, token) => {
        set({
          isAuthenticated: true,
          user: { email, name },
          token,
        })
      },
      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
          token: null,
        })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

