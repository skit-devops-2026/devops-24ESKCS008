import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/otp-verification')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold mb-2 text-center">Reset Password</h1>
        <p className="text-gray-600 text-center text-sm">Enter your email to receive reset instructions</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="primary" className="w-full">Send Reset Link</Button>
        </form>

        <Link to="/login" className="text-primary-600 hover:text-primary-700 text-sm block mt-4 text-center">
          ← Back to Login
        </Link>
      </CardBody>
    </Card>
  )
}

export default ForgotPassword
