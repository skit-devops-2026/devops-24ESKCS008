import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Table } from '../../components/ui/Table'

const ProductListings = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-navy">Product Listings</h1>
        <p className="text-gray-600">Keep supplier catalog data ready for buyer discovery.</p>
      </div>
      <Button variant="primary">Add Product</Button>
    </div>
    <Card>
      <CardHeader><h2 className="font-bold">Catalog</h2></CardHeader>
      <CardBody>
        <Table
          headers={['Item', 'Category', 'MOQ', 'Lead Time', 'Status']}
          rows={[
            ['Enterprise Laptop Fleet', 'IT Equipment', '25 units', '10 days', 'Published'],
            ['Rack Servers', 'IT Equipment', '4 units', '21 days', 'Published'],
            ['Managed Network Kit', 'IT Services', '1 project', '14 days', 'Draft'],
          ]}
        />
      </CardBody>
    </Card>
  </div>
)

export default ProductListings
