export type OrgStatus = 'active' | 'inactive'

export type Organization = {
  id: string
  name: string
  plan: 'Starter' | 'Growth' | 'Enterprise'
  seats: number
  campaigns: number
  creditsUsed: number
  status: OrgStatus
  createdAt: string
}

export const organizations: Organization[] = [
  { id: 'org-1', name: 'Northwind Outreach', plan: 'Enterprise', seats: 48, campaigns: 12, creditsUsed: 84200, status: 'active', createdAt: '2025-02-11' },
  { id: 'org-2', name: 'Fenwick Growth Labs', plan: 'Growth', seats: 22, campaigns: 7, creditsUsed: 31500, status: 'active', createdAt: '2025-04-03' },
  { id: 'org-3', name: 'Coastal Revenue Co', plan: 'Growth', seats: 16, campaigns: 5, creditsUsed: 18900, status: 'active', createdAt: '2025-05-27' },
  { id: 'org-4', name: 'Ardent Sales Collective', plan: 'Starter', seats: 6, campaigns: 2, creditsUsed: 4200, status: 'inactive', createdAt: '2025-06-14' },
  { id: 'org-5', name: 'Brightline Partners', plan: 'Enterprise', seats: 63, campaigns: 15, creditsUsed: 112400, status: 'active', createdAt: '2024-11-30' },
  { id: 'org-6', name: 'Marrow & Vale', plan: 'Starter', seats: 4, campaigns: 1, creditsUsed: 1600, status: 'inactive', createdAt: '2025-06-29' },
]

export const roles = ['Owner', 'Admin', 'Manager', 'Member', 'Viewer'] as const
export type Role = (typeof roles)[number]

export const permissions = [
  'Manage Billing',
  'Manage Users',
  'Manage Campaigns',
  'View Analytics',
  'Manage Integrations',
  'Export Data',
] as const
export type Permission = (typeof permissions)[number]

export const defaultRbacMatrix: Record<Role, Record<Permission, boolean>> = {
  Owner: { 'Manage Billing': true, 'Manage Users': true, 'Manage Campaigns': true, 'View Analytics': true, 'Manage Integrations': true, 'Export Data': true },
  Admin: { 'Manage Billing': true, 'Manage Users': true, 'Manage Campaigns': true, 'View Analytics': true, 'Manage Integrations': true, 'Export Data': true },
  Manager: { 'Manage Billing': false, 'Manage Users': false, 'Manage Campaigns': true, 'View Analytics': true, 'Manage Integrations': true, 'Export Data': true },
  Member: { 'Manage Billing': false, 'Manage Users': false, 'Manage Campaigns': true, 'View Analytics': true, 'Manage Integrations': false, 'Export Data': false },
  Viewer: { 'Manage Billing': false, 'Manage Users': false, 'Manage Campaigns': false, 'View Analytics': true, 'Manage Integrations': false, 'Export Data': false },
}

export const adminMetrics = {
  leadsProcessed: 184200,
  leadsDelta: 14.2,
  creditsConsumed: 252800,
  creditsDelta: 8.6,
  orgsDelta: 5.3,
  campaignsDelta: 11.8,
}

export const pipelineStages = [
  'Lead Search',
  'Saved',
  'Table',
  'Enrichment',
  'Qualified',
  'Campaign',
  'Outcome Tracking',
] as const
export type LeadStage = (typeof pipelineStages)[number]

export type Lead = {
  id: string
  name: string
  title: string
  company: string
  source: string
  score: number
  stage: LeadStage
  owner: string
  updatedAt: string
}

export const leads: Lead[] = [
  { id: 'l1', name: 'Priya Menon', title: 'VP Revenue Ops', company: 'Northwind Outreach', source: 'Apollo', score: 92, stage: 'Campaign', owner: 'D. Fuentes', updatedAt: '2h ago' },
  { id: 'l2', name: 'Diego Fuentes', title: 'Head of Growth', company: 'Fenwick Growth Labs', source: 'Hunter', score: 78, stage: 'Qualified', owner: 'A. Obi', updatedAt: '4h ago' },
  { id: 'l3', name: 'Amara Obi', title: 'Director of Sales', company: 'Coastal Revenue Co', source: 'Apollo', score: 65, stage: 'Enrichment', owner: 'L. Wei', updatedAt: '6h ago' },
  { id: 'l4', name: 'Lin Wei', title: 'RevOps Manager', company: 'Brightline Partners', source: 'Hunter', score: 54, stage: 'Table', owner: 'S. Ricci', updatedAt: '9h ago' },
  { id: 'l5', name: 'Sofia Ricci', title: 'CMO', company: 'Ardent Sales Collective', source: 'Apollo', score: 41, stage: 'Saved', owner: 'N. Bergström', updatedAt: '1d ago' },
  { id: 'l6', name: 'Noah Bergström', title: 'Founder', company: 'Marrow & Vale', source: 'Hunter', score: 88, stage: 'Outcome Tracking', owner: 'D. Fuentes', updatedAt: '1d ago' },
  { id: 'l7', name: 'Elena Vosk', title: 'Sales Director', company: 'Northwind Outreach', source: 'Apollo', score: 33, stage: 'Lead Search', owner: 'A. Obi', updatedAt: '2d ago' },
  { id: 'l8', name: 'Marcus Ide', title: 'VP Marketing', company: 'Coastal Revenue Co', source: 'Hunter', score: 71, stage: 'Qualified', owner: 'L. Wei', updatedAt: '2d ago' },
  { id: 'l9', name: 'Talia Nkemelu', title: 'Growth Lead', company: 'Fenwick Growth Labs', source: 'Apollo', score: 59, stage: 'Enrichment', owner: 'S. Ricci', updatedAt: '3d ago' },
  { id: 'l10', name: 'Reid Callahan', title: 'CEO', company: 'Brightline Partners', source: 'Hunter', score: 96, stage: 'Campaign', owner: 'N. Bergström', updatedAt: '3d ago' },
]

export type IntegrationStatus = 'connected' | 'disconnected' | 'error'

export type IntegrationProvider = {
  id: string
  name: string
  category: string
  description: string
  status: IntegrationStatus
  lastSynced: string
}

export const integrations: IntegrationProvider[] = [
  { id: 'apollo', name: 'Apollo', category: 'Lead Data', description: 'Contact and company data for lead search and enrichment.', status: 'connected', lastSynced: '12m ago' },
  { id: 'hunter', name: 'Hunter', category: 'Lead Data', description: 'Email discovery and verification for outreach lists.', status: 'connected', lastSynced: '38m ago' },
  { id: 'openai', name: 'OpenAI', category: 'AI Enrichment', description: 'Generates personalized outreach copy and lead summaries.', status: 'connected', lastSynced: '2h ago' },
  { id: 'gemini', name: 'Gemini', category: 'AI Enrichment', description: 'Secondary model for enrichment fallback and classification.', status: 'disconnected', lastSynced: '3d ago' },
  { id: 'anthropic', name: 'Anthropic', category: 'AI Enrichment', description: 'Claude-powered qualification scoring and campaign drafting.', status: 'connected', lastSynced: '46m ago' },
]
