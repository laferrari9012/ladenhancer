import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Gem, Lock, Mail, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
      <div className="relative hidden overflow-hidden bg-ink-950 px-16 py-20 lg:flex lg:flex-col lg:justify-between">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 700px 500px at 20% 10%, rgba(43,163,141,0.25), transparent 60%), radial-gradient(ellipse 600px 500px at 90% 90%, rgba(217,165,60,0.14), transparent 55%)',
          }}
        />
        <div className="relative flex items-center gap-2.5 animate-fade-up">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-700 text-ink-950 shadow-glow-teal">
            <Gem size={20} strokeWidth={2} />
          </div>
          <span className="font-display text-xl font-semibold text-paper-100">Leadenhancer</span>
        </div>

        <div className="relative max-w-md animate-fade-up" style={{ animationDelay: '120ms' }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300">
            <Sparkles size={13} />
            Multi-tenant lead enhancement platform
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-paper-100 xl:text-5xl">
            Turn every lead into a closed outcome.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-paper-muted">
            Leadenhancer unifies discovery, enrichment and campaign orchestration across every
            organization your team manages — one calm, precise workspace.
          </p>
        </div>

        <div className="relative flex items-center gap-2 text-sm text-paper-faint animate-fade-up" style={{ animationDelay: '200ms' }}>
          <ShieldCheck size={16} className="text-teal-400" />
          SOC 2 Type II certified · Bank-grade encryption
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-sm animate-fade-up">
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-700 text-ink-950">
              <Gem size={18} strokeWidth={2} />
            </div>
            <span className="font-display text-lg font-semibold text-paper-100">Leadenhancer</span>
          </div>

          <h2 className="text-2xl font-semibold text-paper-100">Welcome back</h2>
          <p className="mt-2 text-sm text-paper-muted">
            Sign in to your workspace to pick up where you left off.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-paper-200" htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <Mail size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-paper-faint" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourorg.com"
                  className="w-full rounded-xl border border-ink-600 bg-ink-800/60 py-2.5 pl-10 pr-3.5 text-sm text-paper-100 placeholder:text-paper-faint outline-none transition-colors focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-sm font-medium text-paper-200" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-teal-300 hover:text-teal-200">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-paper-faint" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-ink-600 bg-ink-800/60 py-2.5 pl-10 pr-3.5 text-sm text-paper-100 placeholder:text-paper-faint outline-none transition-colors focus:border-teal-400/60 focus:ring-2 focus:ring-teal-400/20"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-paper-muted">
              <input type="checkbox" className="h-4 w-4 rounded border-ink-500 bg-ink-800 accent-teal-500" />
              Keep me signed in for 30 days
            </label>

            <Button type="submit" className="mt-2 w-full">
              Sign in
              <ArrowRight size={16} />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-ink-600" />
            <span className="text-xs text-paper-faint">or continue with</span>
            <div className="h-px flex-1 bg-ink-600" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-ink-600 bg-ink-800/50 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-ink-500 hover:bg-ink-700/60">
              Google
            </button>
            <button className="rounded-xl border border-ink-600 bg-ink-800/50 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-ink-500 hover:bg-ink-700/60">
              SSO
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-paper-muted">
            New to Leadenhancer?{' '}
            <a href="#" className="font-medium text-gold-300 hover:text-gold-200">
              Request access
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
