import { Briefcase, TrendingUp, MessageSquare, Package } from 'lucide-react'
import { Card, CardBody } from '../../components/ui/Card'
import { motion } from 'framer-motion'

const SupplierDashboard = () => {
  const metrics = [
    { icon: Briefcase, label: 'Active Leads', value: '12', change: '3 new today' },
    { icon: MessageSquare, label: 'Quotations', value: '8', change: '2 pending' },
    { icon: Package, label: 'Products Listed', value: '45', change: 'All active' },
    { icon: TrendingUp, label: 'Profile Views', value: '234', change: '+15% this week' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy mb-8">Supplier Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon
          return (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
              <Card>
                <CardBody>
                  <Icon className="w-6 h-6 text-primary-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SupplierDashboard
