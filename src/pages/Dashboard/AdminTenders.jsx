import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const AdminTenders = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Tender Management</h1>
        <p className="text-gray-600">Review, publish, moderate, and feature tender listings.</p>
      </div>
      <Button variant="primary">Add Tender</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Moderated Tenders</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Tender', 'Organization', 'Type', 'Budget', 'Status']}
          rows={[
            ['Office Building Phase 2', 'Government Department', 'Government', '₹50L', 'Published'],
            ['ERP Infrastructure', 'Fortune 500 Company', 'Private', '₹25L', 'Review'],
            ['Healthcare Equipment', 'Public Hospital Network', 'Government', '₹15L', 'Featured'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default AdminTenders
