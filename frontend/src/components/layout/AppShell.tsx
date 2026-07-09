import { useState, type ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import ModeSwitch from './ModeSwitch'

type AppShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function AppShell({ title, subtitle, children }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar title={title} subtitle={subtitle} onMenu={() => setSidebarOpen(true)} />
        <div className="px-4 pt-6 sm:px-8 sm:pt-8">
          <ModeSwitch />
        </div>
        <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">{children}</main>
      </div>
    </div>
  )
}
