import { TrendingUp, Clock, ArrowUpRight, Bot, GitBranch, WalletCards, ShieldCheck, Sparkles, FileText } from 'lucide-react'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { motion } from 'framer-motion'

const BuyerDashboard = () => {
  const metrics = [
    { icon: WalletCards, label: 'Total Spend', value: '₹1.2 Cr', change: '+12% this month', tone: 'from-primary-500 to-cyan-500' },
    { icon: Clock, label: 'Pending Approvals', value: '8', change: '2 urgent today', tone: 'from-violet-500 to-indigo-500' },
    { icon: ShieldCheck, label: 'Active Vendors', value: '24', change: '96% compliant', tone: 'from-emerald-500 to-cyan-500' },
    { icon: TrendingUp, label: 'Savings Captured', value: '₹15L', change: '18% YoY gain', tone: 'from-indigo-500 to-primary-500' },
  ]

  const timeline = [
    { label: 'Requisition received', meta: 'Marketing cloud renewal', status: 'Done' },
    { label: 'Budget validation', meta: 'Finance approved ₹18.5L', status: 'Done' },
    { label: 'Manager approval', meta: 'Waiting on Procurement Lead', status: 'Active' },
    { label: 'RFQ comparison', meta: 'AI quote summary ready', status: 'Next' },
  ]

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-slate-950 px-6 py-7 sm:px-8 sm:py-9 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.42),transparent_22rem),radial-gradient(circle_at_85%_20%,rgba(6,182,212,0.34),transparent_20rem)]" />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 mb-5">
              <Sparkles className="w-4 h-4" />
              Procurement cockpit
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              Good evening, Aditya.
            </h1>
            <p className="text-slate-300 max-w-2xl">
              Your purchasing engine is healthy. Three RFQs need action, two approvals are aging,
              and AI found ₹4.2L in potential vendor savings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">
              <Bot className="w-4 h-4 mr-2" />
              Ask AI
            </Button>
            <Button variant="primary">
              Create RFQ <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <CardBody className="relative">
                  <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${metric.tone} opacity-10 blur-2xl`} />
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.tone} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                      Live
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">{metric.label}</p>
                  <p className="text-3xl font-bold text-slate-950 mb-2">{metric.value}</p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${72 + i * 5}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className={`h-1.5 rounded-full bg-gradient-to-r ${metric.tone}`}
                      />
                    </div>
                    <p className="text-xs text-slate-500 whitespace-nowrap">{metric.change}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="grid xl:grid-cols-3 gap-6">
        <Card className="xl:col-span-2 overflow-hidden">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2 className="font-bold text-xl text-slate-950">Spend Intelligence</h2>
              <p className="text-sm text-slate-500">Category movement and savings signals</p>
            </div>
            <Button variant="ghost" size="sm">View report</Button>
          </CardHeader>
          <CardBody>
            <div className="h-72 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-primary-50 p-5 flex items-end gap-3">
              {[52, 68, 46, 82, 74, 92, 64, 88, 78, 96, 86, 104].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height }}
                  transition={{ duration: 0.7, delay: index * 0.035 }}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-primary-600 to-cyan-400 shadow-lg shadow-primary-500/15"
                />
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="overflow-hidden bg-slate-950 text-white">
          <CardHeader className="border-white/10">
            <h2 className="font-bold text-xl">AI Insights</h2>
            <p className="text-sm text-slate-400">Procurement assistant summary</p>
          </CardHeader>
          <CardBody className="space-y-4">
            {[
              'Consolidate laptop purchases with TechCorp to unlock 7% volume discount.',
              'BuildRight delivery score dropped below 92 for two consecutive POs.',
              'Three tenders match your infrastructure buying pattern this week.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
            <Button variant="primary" className="w-full">
              Open Assistant
            </Button>
          </CardBody>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader><h2 className="font-bold text-slate-950">Quick Actions</h2></CardHeader>
          <CardBody className="space-y-3">
            <Button variant="primary" className="w-full justify-between">New Tender Search <FileText className="w-4 h-4" /></Button>
            <Button variant="outline" className="w-full justify-between">Create RFQ <GitBranch className="w-4 h-4" /></Button>
            <Button variant="outline" className="w-full justify-between">New Purchase Order <WalletCards className="w-4 h-4" /></Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader><h2 className="font-bold text-slate-950">Approval Timeline</h2></CardHeader>
          <CardBody>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={item.label} className="flex gap-3">
                  <div className={`mt-1 h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    item.status === 'Done' ? 'bg-emerald-100 text-emerald-700' :
                    item.status === 'Active' ? 'bg-primary-100 text-primary-700' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader><h2 className="font-bold text-slate-950">Performance</h2></CardHeader>
          <CardBody>
            <div className="space-y-5">
              {[
                ['On-time Delivery', '92%', 'from-emerald-500 to-cyan-500'],
                ['Cost Savings', '78%', 'from-primary-500 to-indigo-500'],
                ['Contract Coverage', '86%', 'from-violet-500 to-indigo-500'],
              ].map(([label, value, gradient]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <p className="text-slate-600">{label}</p>
                    <p className="font-bold text-slate-900">{value}</p>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className={`bg-gradient-to-r ${gradient} h-2.5 rounded-full`} style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default BuyerDashboard
