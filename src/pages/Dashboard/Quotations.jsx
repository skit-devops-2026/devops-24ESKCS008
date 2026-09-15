import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const Quotations = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Quotations</h1>
        <p className="text-gray-600">Draft, submit, and track buyer quotation responses.</p>
      </div>
      <Button variant="primary">Create Quotation</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Quote Pipeline</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Quote', 'Buyer', 'Amount', 'Submitted', 'Status']}
          rows={[
            ['QT-2210', 'National Bank', '₹31.8L', '18 May 2026', 'Negotiation'],
            ['QT-2208', 'Metro Authority', '₹56.5L', '16 May 2026', 'Submitted'],
            ['QT-2197', 'Private Hospital', '₹10.6L', '12 May 2026', 'Won'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default Quotations
