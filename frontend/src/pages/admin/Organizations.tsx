import { useState } from 'react'
import { Building2, Check, Plus } from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import Toggle from '../../components/ui/Toggle'
import {
  organizations as initialOrganizations,
  roles,
  permissions,
  defaultRbacMatrix,
  type Organization,
  type Role,
  type Permission,
} from '../../data/mock'
import { formatCompact } from '../../lib/format'

let nextOrgSeq = initialOrganizations.length + 1

export default function Organizations() {
  const [orgs, setOrgs] = useState<Organization[]>(initialOrganizations)
  const [rbac, setRbac] = useState(defaultRbacMatrix)

  function toggleOrgStatus(id: string) {
    setOrgs((prev) =>
      prev.map((org) => (org.id === id ? { ...org, status: org.status === 'active' ? 'inactive' : 'active' } : org)),
    )
  }

  function addOrg() {
    const seq = nextOrgSeq++
    const newOrg: Organization = {
      id: `org-${seq}`,
      name: `New Organization ${seq}`,
      plan: 'Starter',
      seats: 1,
      campaigns: 0,
      creditsUsed: 0,
      status: 'active',
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setOrgs((prev) => [...prev, newOrg])
  }

  function togglePermission(role: Role, permission: Permission) {
    setRbac((prev) => ({
      ...prev,
      [role]: { ...prev[role], [permission]: !prev[role][permission] },
    }))
  }

  return (
    <div className="stagger grid grid-cols-1 gap-5 2xl:grid-cols-[1.4fr_1fr]">
      <Card padded={false} className="overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-700/70 px-6 py-5">
          <div>
            <h3 className="text-base font-semibold text-paper-100">Organization Management</h3>
            <p className="mt-1 text-sm text-paper-muted">{orgs.length} tenants across the platform</p>
          </div>
          <Button size="sm" onClick={addOrg}>
            <Plus size={15} />
            Add Org
          </Button>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-paper-faint">
                <th className="px-6 py-3 font-medium">Organization</th>
                <th className="px-6 py-3 font-medium">Plan</th>
                <th className="px-6 py-3 font-medium">Seats</th>
                <th className="px-6 py-3 font-medium">Campaigns</th>
                <th className="px-6 py-3 font-medium">Credits used</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700/60">
              {orgs.map((org) => (
                <tr key={org.id} className="transition-colors hover:bg-ink-800/40">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5 font-medium text-paper-100">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/12 text-teal-300 ring-1 ring-inset ring-teal-500/25">
                        <Building2 size={15} />
                      </span>
                      {org.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-paper-muted">{org.plan}</td>
                  <td className="px-6 py-4 text-paper-muted">{org.seats}</td>
                  <td className="px-6 py-4 text-paper-muted">{org.campaigns}</td>
                  <td className="px-6 py-4 text-paper-muted">{formatCompact(org.creditsUsed)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Toggle checked={org.status === 'active'} onChange={() => toggleOrgStatus(org.id)} />
                      <Badge tone={org.status === 'active' ? 'success' : 'neutral'}>{org.status}</Badge>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card padded={false} className="overflow-hidden">
        <div className="border-b border-ink-700/70 px-6 py-5">
          <h3 className="text-base font-semibold text-paper-100">RBAC Permissions Matrix</h3>
          <p className="mt-1 text-sm text-paper-muted">Role-based access across the platform</p>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-paper-faint">
                <th className="px-6 py-3 font-medium">Permission</th>
                {roles.map((role) => (
                  <th key={role} className="px-2 py-3 text-center font-medium">
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-700/60">
              {permissions.map((permission) => (
                <tr key={permission}>
                  <td className="px-6 py-3.5 text-paper-muted">{permission}</td>
                  {roles.map((role) => (
                    <td key={role} className="px-2 py-3.5 text-center">
                      <button
                        type="button"
                        aria-pressed={rbac[role][permission]}
                        aria-label={`${role} — ${permission}`}
                        onClick={() => togglePermission(role, permission)}
                        className={`mx-auto flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
                          rbac[role][permission]
                            ? 'border-teal-400/60 bg-teal-500/20 text-teal-300'
                            : 'border-ink-600 bg-ink-800/60 text-transparent'
                        }`}
                      >
                        <Check size={13} />
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
