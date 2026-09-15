import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { BarChart3, TrendingUp } from 'lucide-react'

const AdminAnalytics = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Analytics</h1>
        <p className="text-gray-600">Monitor funnel performance, marketplace liquidity, and SaaS revenue.</p>
      </div>
      <Button variant="primary">Export Report</Button>
    </div>
    <div className="grid lg:grid-cols-2 gap-6">
      {['Tender demand by category', 'Supplier onboarding funnel', 'Subscription revenue', 'Academy engagement'].map((title) => (
        <Card key={title}>
          <CardHeader><h2 className="font-bold">{title}</h2></CardHeader>
          <CardBody>
            <div className="h-56 rounded-lg border border-dashed border-primary-200 bg-gradient-to-r from-primary-50 to-cyan-50 flex items-center justify-center">
              {title.includes('revenue') ? <TrendingUp className="w-10 h-10 text-primary-600" /> : <BarChart3 className="w-10 h-10 text-primary-600" />}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </div>
)

export default AdminAnalytics
