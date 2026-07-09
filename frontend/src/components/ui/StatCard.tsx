import type { LucideIcon } from 'lucide-react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import Card from './Card'

type StatCardProps = {
  label: string
  value: string
  delta: number
  icon: LucideIcon
  accent?: 'teal' | 'gold'
}

export default function StatCard({ label, value, delta, icon: Icon, accent = 'teal' }: StatCardProps) {
  const positive = delta >= 0
  const iconWrap =
    accent === 'gold'
      ? 'bg-gold-400/12 text-gold-300 ring-1 ring-inset ring-gold-400/25'
      : 'bg-teal-500/12 text-teal-300 ring-1 ring-inset ring-teal-500/25'

  return (
    <Card className="group relative overflow-hidden">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconWrap}`}>
          <Icon size={18} strokeWidth={1.75} />
        </div>
        <div
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            positive ? 'text-teal-300 bg-teal-500/10' : 'text-[#f0928a] bg-danger/10'
          }`}
        >
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(delta)}%
        </div>
      </div>
      <p className="mt-4 font-display text-3xl font-semibold text-paper-100">{value}</p>
      <p className="mt-1 text-sm text-paper-muted">{label}</p>
    </Card>
  )
}
