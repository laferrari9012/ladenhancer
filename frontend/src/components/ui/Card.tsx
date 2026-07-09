import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  padded?: boolean
}

export default function Card({ children, className = '', padded = true, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-ink-600/70 bg-ink-800/60 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] transition-colors duration-300 hover:border-ink-500/80 ${padded ? 'p-5 sm:p-6' : ''} ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
