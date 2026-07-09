import { NavLink } from 'react-router-dom'
import { Building2, Gem, LayoutDashboard, LogOut, Plug, UserSearch, X } from 'lucide-react'
import { useShell, type AdminTab, type UserTab } from '../../context/ShellContext'

const adminNavItems: { id: AdminTab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'organizations', label: 'Organizations', icon: Building2 },
]

const userNavItems: { id: UserTab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'leads', label: 'Lead Discovery', icon: UserSearch },
  { id: 'integrations', label: 'Integration Hub', icon: Plug },
]

type SidebarProps = {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { mode, adminTab, setAdminTab, userTab, setUserTab } = useShell()
  const navItems = mode === 'admin' ? adminNavItems : userNavItems
  const activeId: string = mode === 'admin' ? adminTab : userTab

  function selectTab(id: string) {
    if (mode === 'admin') setAdminTab(id as AdminTab)
    else setUserTab(id as UserTab)
    onClose()
  }

  return (
    <>
      {open && (
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink-950/70 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-ink-700/70 bg-ink-850/95 px-5 py-6 transition-transform duration-300 ease-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:bg-ink-850/60 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-700 text-ink-950 shadow-glow-teal">
              <Gem size={18} strokeWidth={2} />
            </div>
            <div className="font-display text-lg font-semibold tracking-tight text-paper-100">
              Leadenhancer
            </div>
          </div>
          <button onClick={onClose} className="text-paper-muted hover:text-paper-100 lg:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-1">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-paper-faint">
            {mode === 'admin' ? 'Platform Admin' : 'User Workspace'}
          </p>
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeId === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => selectTab(id)}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-500/12 text-teal-200'
                    : 'text-paper-muted hover:bg-ink-700/50 hover:text-paper-100'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-gold-400" />
                )}
                <Icon size={18} strokeWidth={1.75} />
                {label}
              </button>
            )
          })}
        </nav>

        <div className="mt-auto border-t border-ink-700/70 pt-5">
          <NavLink
            to="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-paper-muted transition-colors hover:bg-ink-700/50 hover:text-[#f0928a]"
          >
            <LogOut size={18} strokeWidth={1.75} />
            Sign out
          </NavLink>
        </div>
      </aside>
    </>
  )
}
