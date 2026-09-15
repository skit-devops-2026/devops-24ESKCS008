import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const AdminUsers = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">User Management</h1>
        <p className="text-gray-600">Manage buyers, suppliers, admins, and account status.</p>
      </div>
      <Button variant="primary">Invite User</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Recent Users</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Name', 'Company', 'Role', 'Plan', 'Status']}
          rows={[
            ['Ananya Mehta', 'Metro Authority', 'Buyer', 'Enterprise', 'Active'],
            ['Rohit Iyer', 'TechCorp Industries', 'Supplier', 'Professional', 'Verified'],
            ['Nisha Shah', 'Platform Ops', 'Admin', 'Internal', 'Active'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default AdminUsers
