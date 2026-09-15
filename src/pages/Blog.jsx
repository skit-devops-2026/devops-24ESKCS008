import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardBody } from '../components/ui/Card'
import { dummyArticles } from '../utils/dummyData'

const Blog = () => {
  const navigate = useNavigate()

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Blog & Articles</h1>
          <p className="text-lg opacity-90">Stay updated with procurement insights</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover className="cursor-pointer h-full" onClick={() => navigate(`/academy/articles/${article.id}`)}>
                  <CardBody className="flex flex-col h-full">
                    <div className="text-4xl mb-3">{article.image}</div>
                    <h3 className="font-semibold text-lg mb-2 flex-1">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
                    <div className="text-xs text-gray-500">
                      {new Date(article.date).toLocaleDateString('en-IN')}
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

export default Blog
