import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const Leads = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Leads</h1>
        <p className="text-gray-600">Monitor tender matches and direct buyer inquiries.</p>
      </div>
      <Button variant="primary">Export Leads</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">New Opportunities</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Lead', 'Buyer', 'Category', 'Value', 'Fit', 'Next Step']}
          rows={[
            ['Enterprise laptops', 'National Bank', 'IT Equipment', '₹32L', 'High', 'Send quote'],
            ['Server refresh', 'Metro Authority', 'IT Services', '₹58L', 'High', 'Schedule call'],
            ['Networking AMC', 'Private Hospital', 'IT Equipment', '₹11L', 'Medium', 'Review terms'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default Leads
