import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const PurchaseOrders = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Purchase Orders</h1>
        <p className="text-gray-600">Track issued orders, delivery status, and invoice matching.</p>
      </div>
      <Button variant="primary">New Purchase Order</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Recent Purchase Orders</h2></CardHeader>
      <CardBody>
        <Table
          headers={['PO', 'Supplier', 'Amount', 'Delivery', 'Invoice', 'Status']}
          rows={[
            ['PO-7812', 'TechCorp Industries', '₹24.5L', 'On schedule', 'Matched', 'Approved'],
            ['PO-7798', 'BuildRight Construction', '₹61.3L', 'At risk', 'Pending', 'In transit'],
            ['PO-7784', 'Green Energy Solutions', '₹18.9L', 'Delivered', 'Matched', 'Closed'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default PurchaseOrders
