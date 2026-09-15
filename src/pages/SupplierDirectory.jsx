import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Briefcase } from 'lucide-react'
import { Card, CardBody } from '../components/ui/Card'
import { SearchBar, Filter } from '../components/ui/SearchBar'
import { Pagination } from '../components/ui/Tabs'
import Button from '../components/ui/Button'
import { dummySuppliers } from '../utils/dummyData'
import { SUPPLIER_CATEGORIES } from '../utils/constants'

const SupplierDirectory = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredSuppliers = useMemo(() => {
    return dummySuppliers.filter(supplier => {
      const matchSearch = supplier.name.toLowerCase().includes(search.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' || supplier.category === category
      return matchSearch && matchCategory
    })
  }, [search, category])

  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage)
  const currentSuppliers = filteredSuppliers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Supplier Directory</h1>
          <p className="text-lg opacity-90">Connect with verified suppliers</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="card-base p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search Suppliers</label>
                <SearchBar placeholder="Company name or keyword" onSearch={setSearch} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Filter options={['All', ...SUPPLIER_CATEGORIES]} onChange={setCategory} />
              </div>
              <div className="flex items-end">
                <Button variant="primary" className="w-full">Search</Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentSuppliers.map((supplier, i) => (
              <motion.div
                key={supplier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover className="cursor-pointer" onClick={() => navigate(`/suppliers/${supplier.id}`)}>
                  <CardBody>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-lg mb-3">
                      {supplier.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-lg text-navy mb-1">{supplier.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {supplier.category}
                    </p>
                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {supplier.location}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(supplier.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({supplier.reviews})</span>
                    </div>
                    {supplier.verified && (
                      <div className="flex items-center gap-2 mb-4 p-2 bg-green-50 rounded">
                        <span className="text-green-700 text-sm font-semibold">✓ Verified</span>
                      </div>
                    )}
                    <Button variant="primary" size="sm" className="w-full">View Profile</Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default SupplierDirectory
