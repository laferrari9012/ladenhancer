import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-display font-medium tracking-tight transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-b from-gold-400 to-gold-500 text-ink-950 shadow-glow-gold hover:from-gold-300 hover:to-gold-400 hover:-translate-y-0.5',
  outline:
    'border border-ink-500 text-paper-100 hover:border-teal-400/60 hover:text-teal-300 hover:bg-teal-900/20',
  ghost: 'text-paper-muted hover:text-paper-100 hover:bg-ink-700/60',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  )
}
