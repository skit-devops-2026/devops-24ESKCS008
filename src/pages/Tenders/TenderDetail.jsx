import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { dummyTenders } from '../../utils/dummyData'
import Button from '../../components/ui/Button'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'

const TenderDetail = () => {
  const { id } = useParams()
  const tender = dummyTenders.find(t => t.id === parseInt(id)) || dummyTenders[0]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">{tender.title}</h1>
          <p className="text-lg opacity-90">{tender.organization}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader><h2 className="text-2xl font-bold">Tender Details</h2></CardHeader>
                <CardBody>
                  <p className="text-gray-700 mb-4">{tender.description}</p>
                  <h3 className="font-semibold mb-3">Requirements:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {tender.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              <Card>
                <CardHeader><h2 className="font-bold">Documents</h2></CardHeader>
                <CardBody>
                  <div className="space-y-2">
                    {tender.documents.map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                        <span>{doc}</span>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="sticky top-24">
                <CardBody>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="text-2xl font-bold text-primary-600">₹{(tender.budget / 1000000).toFixed(1)}M</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Deadline</p>
                      <p className="font-semibold">{new Date(tender.deadline).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className={`font-semibold ${tender.status === 'Open' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {tender.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Applicants</p>
                      <p className="font-semibold">{tender.applicants} companies</p>
                    </div>
                    <Button variant="primary" className="w-full">Apply Now</Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TenderDetail
