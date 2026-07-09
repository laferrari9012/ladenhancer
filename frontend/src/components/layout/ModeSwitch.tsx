import { useShell } from '../../context/ShellContext'

export default function ModeSwitch() {
  const { mode, setMode } = useShell()

  return (
    <div className="flex w-full items-center gap-2 rounded-2xl border border-ink-500 bg-ink-950/80 p-1.5 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
      <button
        type="button"
        aria-pressed={mode === 'admin'}
        onClick={() => setMode('admin')}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-display font-semibold tracking-tight transition-all duration-300 ${
          mode === 'admin'
            ? 'bg-gradient-to-b from-gold-400 to-gold-500 text-ink-950 shadow-glow-gold'
            : 'text-paper-muted hover:text-paper-100'
        }`}
      >
        <span aria-hidden>🛠️</span>
        Switch to Platform Admin
      </button>
      <div className="h-6 w-px shrink-0 bg-ink-600" />
      <button
        type="button"
        aria-pressed={mode === 'user'}
        onClick={() => setMode('user')}
        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-display font-semibold tracking-tight transition-all duration-300 ${
          mode === 'user'
            ? 'bg-gradient-to-b from-teal-400 to-teal-600 text-ink-950 shadow-glow-teal'
            : 'text-paper-muted hover:text-paper-100'
        }`}
      >
        <span aria-hidden>💼</span>
        Switch to User Workspace
      </button>
    </div>
  )
}
