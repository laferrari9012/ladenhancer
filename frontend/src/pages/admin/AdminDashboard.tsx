import { Building2, Megaphone, Sparkles, Users } from 'lucide-react'
import StatCard from '../../components/ui/StatCard'
import { adminMetrics, organizations } from '../../data/mock'
import { formatCompact } from '../../lib/format'

export default function AdminDashboard() {
  const totalOrgs = organizations.length
  const activeCampaigns = organizations.reduce((sum, org) => sum + org.campaigns, 0)

  return (
    <div className="stagger grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Total Orgs" value={String(totalOrgs)} delta={adminMetrics.orgsDelta} icon={Building2} accent="teal" />
      <StatCard label="Active Campaigns" value={String(activeCampaigns)} delta={adminMetrics.campaignsDelta} icon={Megaphone} accent="gold" />
      <StatCard
        label="Leads Processed"
        value={formatCompact(adminMetrics.leadsProcessed)}
        delta={adminMetrics.leadsDelta}
        icon={Users}
        accent="teal"
      />
      <StatCard
        label="Credits Consumed"
        value={formatCompact(adminMetrics.creditsConsumed)}
        delta={adminMetrics.creditsDelta}
        icon={Sparkles}
        accent="gold"
      />
    </div>
  )
}
