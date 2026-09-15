import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'
import { Mail, Lock } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard/buyer')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="your@email.com"
                className="pl-10"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                placeholder="••••••••"
                className="pl-10"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <Button variant="primary" className="w-full">Sign In</Button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <Link to="/forgot-password" className="text-primary-600 hover:text-primary-700 text-sm block">
            Forgot password?
          </Link>
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default Login
