import type { ReactNode } from 'react'

type Tone = 'success' | 'warning' | 'pending' | 'neutral' | 'gold'

const tones: Record<Tone, string> = {
  success: 'bg-teal-500/12 text-teal-300 ring-1 ring-inset ring-teal-500/30',
  warning: 'bg-danger/10 text-[#f0928a] ring-1 ring-inset ring-danger/30',
  pending: 'bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/30',
  neutral: 'bg-ink-600/40 text-paper-muted ring-1 ring-inset ring-ink-500/40',
  gold: 'bg-gold-400/15 text-gold-300 ring-1 ring-inset ring-gold-400/40',
}

export default function Badge({ tone = 'neutral', children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
