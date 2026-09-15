import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const VendorManagement = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Vendor Management</h1>
        <p className="text-gray-600">Govern onboarding, compliance, performance, and renewals.</p>
      </div>
      <Button variant="primary">Invite Vendor</Button>
    </div>
    <div className="grid lg:grid-cols-3 gap-6 mb-6">
      {['96% compliance', '18 renewals due', '4 risk alerts'].map((item) => (
        <Card key={item}><CardBody><p className="text-2xl font-bold text-navy">{item}</p></CardBody></Card>
      ))}
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Supplier Scorecards</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Supplier', 'Category', 'Compliance', 'Delivery Score', 'Risk']}
          rows={[
            ['TechCorp Industries', 'IT Equipment', 'Complete', '98', 'Low'],
            ['BuildRight Construction', 'Materials', 'Renewal needed', '91', 'Medium'],
            ['Industrial Machinery Ltd', 'Machinery', 'Complete', '95', 'Low'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default VendorManagement
