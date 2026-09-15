import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent/10">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-navy mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go Home
        </Button>
      </div>
    </div>
  )
}

export default NotFound
