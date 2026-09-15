import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, Clock } from 'lucide-react'
import { Card, CardBody } from '../../components/ui/Card'
import { SearchBar, Filter } from '../../components/ui/SearchBar'
import { dummyArticles } from '../../utils/dummyData'

const ArticleList = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return dummyArticles.filter(a => {
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' || a.category === category
      return matchSearch && matchCategory
    })
  }, [search, category])

  const categories = ['All', ...new Set(dummyArticles.map(a => a.category))]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Learning Resources</h1>
          <p className="text-lg opacity-90">Learn procurement best practices and strategies</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="card-base p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Search Articles</label>
                <SearchBar placeholder="Search by title" onSearch={setSearch} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Filter options={categories} onChange={setCategory} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover className="cursor-pointer" onClick={() => navigate(`/academy/articles/${article.id}`)}>
                  <CardBody>
                    <div className="text-3xl mb-3">{article.image}</div>
                    <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-3 inline-block">
                      {article.category}
                    </span>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticleList
