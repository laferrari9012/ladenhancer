import { Bell, Menu, Search } from 'lucide-react'

export default function Topbar({ title, subtitle, onMenu }: { title: string; subtitle?: string; onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-ink-700/60 bg-ink-900/80 px-4 py-4 backdrop-blur-md sm:px-8">
      <button onClick={onMenu} className="text-paper-muted hover:text-paper-100 lg:hidden">
        <Menu size={22} />
      </button>

      <div className="min-w-0 flex-1">
        <h1 className="truncate font-display text-xl font-semibold text-paper-100 sm:text-2xl">{title}</h1>
        {subtitle && <p className="mt-0.5 hidden text-sm text-paper-muted sm:block">{subtitle}</p>}
      </div>

      <div className="hidden items-center gap-2 rounded-xl border border-ink-600 bg-ink-800/60 px-3 py-2 text-sm text-paper-faint md:flex">
        <Search size={16} />
        <span>Quick search</span>
        <kbd className="ml-6 rounded-md border border-ink-500 bg-ink-700/60 px-1.5 py-0.5 text-[11px] text-paper-muted">
          ⌘K
        </kbd>
      </div>

      <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-ink-600 bg-ink-800/60 text-paper-muted transition-colors hover:text-gold-300">
        <Bell size={18} />
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-gold-400" />
      </button>
    </header>
  )
}
