import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import { leads, pipelineStages, type LeadStage } from '../../data/mock'

const stageTone: Record<LeadStage, 'neutral' | 'pending' | 'success' | 'gold'> = {
  'Lead Search': 'neutral',
  Saved: 'neutral',
  Table: 'pending',
  Enrichment: 'pending',
  Qualified: 'gold',
  Campaign: 'success',
  'Outcome Tracking': 'success',
}

export default function LeadDiscovery() {
  const [activeStage, setActiveStage] = useState<LeadStage | null>(null)

  const counts = pipelineStages.reduce(
    (acc, stage) => {
      acc[stage] = leads.filter((lead) => lead.stage === stage).length
      return acc
    },
    {} as Record<LeadStage, number>,
  )

  const visibleLeads = activeStage ? leads.filter((lead) => lead.stage === activeStage) : leads

  return (
    <div className="stagger space-y-6">
      <Card>
        <h3 className="text-base font-semibold text-paper-100">Lead lifecycle pipeline</h3>
        <p className="mt-1 text-sm text-paper-muted">Click a stage to filter the workspace below</p>
        <div className="mt-5 flex items-center gap-1.5 overflow-x-auto scrollbar-thin pb-1">
          {pipelineStages.map((stage, i) => (
            <div key={stage} className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                aria-pressed={activeStage === stage}
                onClick={() => setActiveStage((current) => (current === stage ? null : stage))}
                className={`flex flex-col items-center rounded-xl border px-3.5 py-2.5 text-center transition-colors ${
                  activeStage === stage
                    ? 'border-teal-400/60 bg-teal-500/12 text-teal-200'
                    : 'border-ink-600 bg-ink-800/50 text-paper-muted hover:border-ink-500 hover:text-paper-100'
                }`}
              >
                <span className="whitespace-nowrap text-sm font-medium">{stage}</span>
                <span className="mt-1 font-display text-lg font-semibold text-paper-100">{counts[stage]}</span>
              </button>
              {i < pipelineStages.length - 1 && (
                <ChevronRight size={16} className="shrink-0 text-paper-faint" />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card padded={false} className="overflow-hidden">
        <div className="flex items-center justify-between border-b border-ink-700/70 px-6 py-5">
          <div>
            <h3 className="text-base font-semibold text-paper-100">Lead workspace</h3>
            <p className="mt-1 text-sm text-paper-muted">
              {visibleLeads.length} leads{activeStage ? ` in ${activeStage}` : ''}
            </p>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-paper-faint">
                <th className="px-6 py-3 font-medium">Lead</th>
                <th className="px-6 py-3 font-medium">Company</th>
                <th className="px-6 py-3 font-medium">Source</th>
                <th className="px-6 py-3 font-medium">Score</th>
                <th className="px-6 py-3 font-medium">Stage</th>
                <th className="px-6 py-3 font-medium">Owner</th>
                <th className="px-6 py-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700/60">
              {visibleLeads.map((lead) => (
                <tr key={lead.id} className="transition-colors hover:bg-ink-800/40">
                  <td className="px-6 py-4">
                    <p className="font-medium text-paper-100">{lead.name}</p>
                    <p className="text-xs text-paper-faint">{lead.title}</p>
                  </td>
                  <td className="px-6 py-4 text-paper-muted">{lead.company}</td>
                  <td className="px-6 py-4 text-paper-muted">{lead.source}</td>
                  <td className="px-6 py-4 font-medium text-teal-300">{lead.score}</td>
                  <td className="px-6 py-4">
                    <Badge tone={stageTone[lead.stage]}>{lead.stage}</Badge>
                  </td>
                  <td className="px-6 py-4 text-paper-muted">{lead.owner}</td>
                  <td className="px-6 py-4 text-paper-faint">{lead.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
