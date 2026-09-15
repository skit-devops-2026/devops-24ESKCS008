import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  FileCheck2,
  GitBranch,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from 'lucide-react'
import Button from '../components/ui/Button'
import { Card, CardBody, CardHeader } from '../components/ui/Card'
import { Table } from '../components/ui/Table'

const metrics = [
  { label: 'Total Spend', value: '₹8.4 Cr', trend: '12.8% optimized', icon: WalletCards },
  { label: 'Pending Approvals', value: '27', trend: '8 due today', icon: FileCheck2 },
  { label: 'Active Vendors', value: '184', trend: '96% compliant', icon: Users },
  { label: 'Open RFQs', value: '42', trend: '14 closing soon', icon: GitBranch },
]

const workflow = [
  'Purchase requisition',
  'Budget validation',
  'Approval routing',
  'RFQ comparison',
  'PO generation',
  'Invoice matching',
]

const ProcurementSaaS = () => {
  const vendorRows = [
    ['TechCorp Industries', 'IT Equipment', '₹42L', '98%', 'Preferred'],
    ['BuildRight Construction', 'Materials', '₹76L', '94%', 'Approved'],
    ['Green Energy Solutions', 'Electrical', '₹31L', '99%', 'Preferred'],
  ]

  return (
    <div>
      <section className="section-spacing bg-gradient-to-br from-navy via-slate-900 to-primary-900 text-white">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm mb-6">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              AI-ready procurement operating system
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Control every procurement workflow from one command center.
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Requisitions, approvals, RFQs, purchase orders, invoices, vendor performance,
              inventory signals, and executive analytics in one scalable SaaS workspace.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg">
                Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View Dashboard
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur"
          >
            <div className="rounded-lg bg-white text-slate-900 shadow-xl overflow-hidden">
              <div className="border-b border-gray-200 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Procurement Control Tower</p>
                  <h2 className="font-bold text-xl">May Performance</h2>
                </div>
                <Bell className="w-5 h-5 text-primary-600" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 p-5">
                {metrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <div key={metric.label} className="rounded-lg border border-gray-200 p-4">
                      <Icon className="w-5 h-5 text-primary-600 mb-3" />
                      <p className="text-sm text-gray-500">{metric.label}</p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <p className="text-xs text-emerald-600">{metric.trend}</p>
                    </div>
                  )
                })}
              </div>
              <div className="px-5 pb-5">
                <div className="h-36 rounded-lg border border-dashed border-primary-200 bg-gradient-to-r from-primary-50 to-cyan-50 flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-primary-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileCheck2, title: 'Requisition Management', text: 'Capture business needs with budget checks, department coding, attachments, and audit trails.' },
              { icon: GitBranch, title: 'Approval Workflows', text: 'Route requests by amount, category, location, project, or role with clear SLA visibility.' },
              { icon: ReceiptText, title: 'Invoice Tracking', text: 'Track invoices, match against POs, and surface payment exceptions before they slow finance.' },
              { icon: PackageCheck, title: 'Inventory Signals', text: 'Monitor stock risk, reorder triggers, fulfillment status, and item-level procurement demand.' },
              { icon: ShieldCheck, title: 'Vendor Governance', text: 'Centralize supplier onboarding, compliance, performance scorecards, and renewal alerts.' },
              { icon: Sparkles, title: 'AI Placeholders', text: 'Prepared for tender summarization, quote comparison, vendor recommendations, and ERP sync.' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardBody>
                      <Icon className="w-7 h-7 text-primary-600 mb-4" />
                      <h3 className="font-bold text-lg text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h2 className="font-bold text-xl">Approval Workflow</h2>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  {workflow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                      <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-navy">{step}</span>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-bold text-xl">Vendor Comparison</h2>
              </CardHeader>
              <CardBody>
                <Table
                  headers={['Vendor', 'Category', 'Spend', 'Score', 'Status']}
                  rows={vendorRows}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProcurementSaaS
