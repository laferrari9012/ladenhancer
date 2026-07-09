import AppShell from '../components/layout/AppShell'
import { useShell } from '../context/ShellContext'
import AdminDashboard from './admin/AdminDashboard'
import Organizations from './admin/Organizations'
import LeadDiscovery from './user/LeadDiscovery'
import IntegrationHub from './user/IntegrationHub'

const viewMeta = {
  admin: {
    dashboard: { title: 'Platform Overview', subtitle: 'Cross-tenant health across every organization on Leadenhancer.' },
    organizations: { title: 'Organizations', subtitle: 'Manage tenants and role-based access across the platform.' },
  },
  user: {
    leads: { title: 'Lead Discovery', subtitle: 'Track leads as they move from search to closed outcome.' },
    integrations: { title: 'Integration Hub', subtitle: 'Monitor and test the providers powering enrichment and outreach.' },
  },
} as const

export default function Home() {
  const { mode, adminTab, userTab } = useShell()
  const { title, subtitle } = mode === 'admin' ? viewMeta.admin[adminTab] : viewMeta.user[userTab]

  return (
    <AppShell title={title} subtitle={subtitle}>
      {mode === 'admin' ? (
        adminTab === 'dashboard' ? (
          <AdminDashboard />
        ) : (
          <Organizations />
        )
      ) : userTab === 'leads' ? (
        <LeadDiscovery />
      ) : (
        <IntegrationHub />
      )}
    </AppShell>
  )
}
