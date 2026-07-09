import { useState } from 'react'
import { CheckCircle2, Loader2, XCircle, Zap } from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import { integrations as initialIntegrations, type IntegrationProvider } from '../../data/mock'

export default function IntegrationHub() {
  const [integrations, setIntegrations] = useState<IntegrationProvider[]>(initialIntegrations)
  const [testing, setTesting] = useState(false)

  function testConnections() {
    setTesting(true)
    setTimeout(() => {
      setIntegrations((prev) =>
        prev.map((provider) => ({
          ...provider,
          status: provider.status === 'error' ? 'error' : 'connected',
          lastSynced: 'Just now',
        })),
      )
      setTesting(false)
    }, 1200)
  }

  return (
    <div className="stagger space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-paper-100">Provider connections</h3>
          <p className="mt-1 text-sm text-paper-muted">API integrations powering enrichment and outreach</p>
        </div>
        <Button size="sm" variant="outline" onClick={testConnections} disabled={testing}>
          {testing ? <Loader2 size={15} className="animate-spin" /> : <Zap size={15} />}
          {testing ? 'Testing...' : 'Test Connections'}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {integrations.map((provider) => (
          <Card key={provider.id}>
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/12 font-display text-sm font-semibold text-teal-300 ring-1 ring-inset ring-teal-500/25">
                {provider.name.slice(0, 2).toUpperCase()}
              </div>
              <Badge tone={provider.status === 'connected' ? 'success' : provider.status === 'error' ? 'warning' : 'neutral'}>
                {provider.status === 'connected' && <CheckCircle2 size={12} />}
                {provider.status === 'error' && <XCircle size={12} />}
                {provider.status}
              </Badge>
            </div>
            <h4 className="mt-4 text-base font-semibold text-paper-100">{provider.name}</h4>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-paper-faint">{provider.category}</p>
            <p className="mt-2 text-sm text-paper-muted">{provider.description}</p>
            <p className="mt-4 text-xs text-paper-faint">Last synced {provider.lastSynced}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
