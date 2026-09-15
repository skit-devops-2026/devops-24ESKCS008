import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, DollarSign, Calendar, Clock } from 'lucide-react'
import { Card, CardBody } from '../../components/ui/Card'
import { SearchBar, Filter } from '../../components/ui/SearchBar'
import { Pagination } from '../../components/ui/Tabs'
import Button from '../../components/ui/Button'
import { dummyTenders } from '../../utils/dummyData'
import { TENDER_CATEGORIES } from '../../utils/constants'

const TendersPortal = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredTenders = useMemo(() => {
    return dummyTenders.filter(tender => {
      const matchSearch = tender.title.toLowerCase().includes(search.toLowerCase()) ||
                         tender.organization.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' || tender.category === category
      const matchStatus = status === 'All' || tender.status === status
      return matchSearch && matchCategory && matchStatus
    })
  }, [search, category, status])

  const totalPages = Math.ceil(filteredTenders.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentTenders = filteredTenders.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Government & Private Tenders</h1>
          <p className="text-lg opacity-90">Find and apply to the best procurement opportunities</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="card-base p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search Tenders</label>
                <SearchBar
                  placeholder="Search by title or organization"
                  onSearch={setSearch}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Filter
                  options={['All', ...TENDER_CATEGORIES]}
                  onChange={setCategory}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Status</label>
                <Filter
                  options={['All', 'Open', 'Closing Soon', 'Closed']}
                  onChange={setStatus}
                />
              </div>
              <div className="flex items-end">
                <Button variant="primary" className="w-full">
                  Advanced Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-gray-600 mb-6">
              Showing {currentTenders.length > 0 ? startIndex + 1 : 0} to {Math.min(startIndex + itemsPerPage, filteredTenders.length)} of {filteredTenders.length} tenders
            </p>

            {currentTenders.length > 0 ? (
              <div className="space-y-4">
                {currentTenders.map((tender, i) => (
                  <motion.div
                    key={tender.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card hover className="cursor-pointer" onClick={() => navigate(`/tenders/${tender.id}`)}>
                      <CardBody>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                tender.status === 'Open' ? 'bg-green-100 text-green-700' :
                                tender.status === 'Closing Soon' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {tender.status}
                              </span>
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                {tender.type}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-navy mb-2 line-clamp-2">
                              {tender.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{tender.organization}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{tender.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <DollarSign className="w-4 h-4" />
                                <span>₹{(tender.budget / 100000).toFixed(1)}L</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(tender.deadline).toLocaleDateString('en-IN')}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>{tender.applicants} applicants</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="primary" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No tenders found matching your criteria</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default TendersPortal
