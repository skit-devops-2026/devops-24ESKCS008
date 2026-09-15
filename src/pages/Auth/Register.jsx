import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'

const Register = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState('buyer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/otp-verification')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold mb-2 text-center">Create Account</h1>
      </CardHeader>
      <CardBody>
        <div className="mb-6 grid grid-cols-2 gap-3">
          {['buyer', 'supplier'].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`py-2 px-4 rounded-lg font-medium transition-smooth ${
                userType === type
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input
            placeholder="Company Name"
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <Button variant="primary" className="w-full">Create Account</Button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 font-semibold">
            Sign in
          </Link>
        </p>
      </CardBody>
    </Card>
  )
}

export default Register
