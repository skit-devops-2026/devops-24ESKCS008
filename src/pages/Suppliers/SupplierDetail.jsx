import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Phone, Mail } from 'lucide-react'
import { dummySuppliers } from '../../utils/dummyData'
import Button from '../../components/ui/Button'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'

const SupplierDetail = () => {
  const { id } = useParams()
  const supplier = dummySuppliers.find(s => s.id === parseInt(id)) || dummySuppliers[0]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">{supplier.name}</h1>
          <p className="text-lg opacity-90">{supplier.description}</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="mb-6">
                  <CardHeader><h2 className="text-2xl font-bold">About</h2></CardHeader>
                  <CardBody>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 mb-4">{supplier.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary-600" />
                            <span>{supplier.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary-600" />
                            <a href={`tel:${supplier.phone}`}>{supplier.phone}</a>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary-600" />
                            <a href={`mailto:${supplier.email}`}>{supplier.email}</a>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold mb-3">Company Info</h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-600">Employees</p>
                            <p className="font-semibold">{supplier.employees}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Established</p>
                            <p className="font-semibold">{supplier.yearEstablished}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">GST Number</p>
                            <p className="font-semibold text-sm">{supplier.gstNumber}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="mb-6">
                  <CardHeader><h2 className="font-bold">Certifications</h2></CardHeader>
                  <CardBody>
                    <div className="flex flex-wrap gap-2">
                      {supplier.certifications.map((cert, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>

                <Card>
                  <CardHeader><h2 className="font-bold">Products & Services</h2></CardHeader>
                  <CardBody>
                    <div className="grid md:grid-cols-2 gap-3">
                      {supplier.products.map((product, i) => (
                        <div key={i} className="p-3 bg-gray-50 rounded">{product}</div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="sticky top-24">
                <CardBody>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                      {supplier.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{supplier.name}</h3>
                      <p className="text-sm text-gray-600">{supplier.category}</p>
                    </div>
                  </div>

                  {supplier.verified && (
                    <div className="mb-4 p-3 bg-green-50 rounded">
                      <span className="text-green-700 text-sm font-semibold">✓ Verified Supplier</span>
                    </div>
                  )}

                  <div className="mb-4 p-3 bg-yellow-50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{supplier.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">Based on {supplier.reviews} reviews</p>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    <a href={`mailto:${supplier.email}?subject=Inquiry`} className="w-full">
                      <Button variant="outline" className="w-full">Send Email</Button>
                    </a>
                    <a href={`https://wa.me/918001234567?text=Hi`} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="primary" className="w-full">WhatsApp</Button>
                    </a>
                  </div>

                  <Button variant="primary" className="w-full">Request Quote</Button>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupplierDetail
