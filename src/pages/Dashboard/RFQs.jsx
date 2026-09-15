import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const RFQs = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">RFQs</h1>
        <p className="text-gray-600">Compare supplier quotations and route decisions.</p>
      </div>
      <Button variant="primary">Create RFQ</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Active Requests</h2></CardHeader>
      <CardBody>
        <Table
          headers={['RFQ ID', 'Category', 'Suppliers', 'Best Quote', 'Deadline', 'Status']}
          rows={[
            ['RFQ-1048', 'IT Equipment', '8 invited', '₹18.2L', '24 May 2026', 'Evaluation'],
            ['RFQ-1047', 'Construction Materials', '12 invited', '₹42.6L', '29 May 2026', 'Open'],
            ['RFQ-1044', 'Logistics', '5 invited', '₹9.8L', '21 May 2026', 'Award review'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default RFQs
