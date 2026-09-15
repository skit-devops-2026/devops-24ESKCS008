import { Table } from '../../components/ui/Table'
import { Badge } from '../../components/ui/Badge'

const MyTenders = () => {
  const tenders = [
    ['T-001', 'Construction Tender', 'Open', '2026-06-30', <Badge variant="success">Active</Badge>],
    ['T-002', 'IT Services RFP', 'Closing Soon', '2026-06-15', <Badge variant="warning">Closing</Badge>],
    ['T-003', 'Equipment Supply', 'Closed', '2026-05-20', <Badge variant="default">Closed</Badge>],
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy mb-8">My Tenders</h1>
      <Table
        headers={['ID', 'Tender Name', 'Status', 'Deadline', 'Progress']}
        rows={tenders}
      />
    </div>
  )
}

export default MyTenders
