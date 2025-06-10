import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
  role: 'cliente' | 'contratista';
}

interface AuthState {
  user: User | null;
  login: (email: string, role: 'cliente' | 'contratista') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, role) => set({ user: { email, role } }),
      logout: () => set({ user: null }),
    }),
    { name: 'auth-storage' }
  )
);