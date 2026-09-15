import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { BarChart3, FileText, ShieldCheck, Users } from 'lucide-react'

const AdminDashboard = () => {
  const metrics = [
    { label: 'Users', value: '18,420', icon: Users },
    { label: 'Tenders', value: '5,284', icon: FileText },
    { label: 'Supplier Approvals', value: '73', icon: ShieldCheck },
    { label: 'MRR', value: '₹82L', icon: BarChart3 },
  ]

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy">Admin Dashboard</h1>
          <p className="text-gray-600">Platform health, moderation, revenue, and growth signals.</p>
        </div>
        <Button variant="primary">Publish Tender</Button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label}>
              <CardBody>
                <Icon className="w-6 h-6 text-primary-600 mb-4" />
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-3xl font-bold text-navy">{metric.value}</p>
              </CardBody>
            </Card>
          )
        })}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><h2 className="font-bold">Revenue Overview</h2></CardHeader>
          <CardBody>
            <div className="h-56 rounded-lg border border-dashed border-primary-200 bg-gradient-to-r from-primary-50 to-cyan-50 flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-primary-600" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><h2 className="font-bold">Moderation Queue</h2></CardHeader>
          <CardBody className="space-y-3">
            {['12 supplier profiles awaiting verification', '9 tender documents pending review', '4 academy articles in draft review'].map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 p-3 text-sm text-gray-700">{item}</div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
