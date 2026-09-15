import { useParams } from 'react-router-dom'
import { Clock, Eye, User, Calendar } from 'lucide-react'
import { dummyArticles } from '../../utils/dummyData'
import { Card, CardBody } from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const ArticleDetail = () => {
  const { id } = useParams()
  const article = dummyArticles.find(a => a.id === parseInt(id)) || dummyArticles[0]

  return (
    <div>
      <article className="section-spacing">
        <div className="container-custom max-w-3xl">
          <div className="mb-8">
            <div className="text-6xl mb-6">{article.image}</div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{article.views} views</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded">
              {article.category}
            </span>
          </div>

          <Card className="mb-8">
            <CardBody>
              <p className="text-lg text-gray-700 leading-relaxed">{article.content}</p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold mb-3">Ready to learn more?</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for weekly procurement insights</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 border rounded" />
                <Button variant="primary">Subscribe</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </article>
    </div>
  )
}

export default ArticleDetail
