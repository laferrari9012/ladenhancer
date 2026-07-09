import { createContext, useContext, useState, type ReactNode } from 'react'

export type ViewMode = 'admin' | 'user'
export type AdminTab = 'dashboard' | 'organizations'
export type UserTab = 'leads' | 'integrations'

type ShellContextValue = {
  mode: ViewMode
  setMode: (mode: ViewMode) => void
  adminTab: AdminTab
  setAdminTab: (tab: AdminTab) => void
  userTab: UserTab
  setUserTab: (tab: UserTab) => void
}

const ShellContext = createContext<ShellContextValue | null>(null)

export function ShellProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>('user')
  const [adminTab, setAdminTab] = useState<AdminTab>('dashboard')
  const [userTab, setUserTab] = useState<UserTab>('leads')

  return (
    <ShellContext.Provider value={{ mode, setMode, adminTab, setAdminTab, userTab, setUserTab }}>
      {children}
    </ShellContext.Provider>
  )
}

export function useShell() {
  const ctx = useContext(ShellContext)
  if (!ctx) throw new Error('useShell must be used within a ShellProvider')
  return ctx
}
