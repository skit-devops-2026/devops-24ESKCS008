import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { Card, CardBody, CardHeader } from '../../components/ui/Card'

const OTPVerification = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard/buyer')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-2xl font-bold mb-2 text-center">Verify OTP</h1>
        <p className="text-gray-600 text-center text-sm">We've sent a 6-digit code to your email</p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button variant="primary" className="w-full">Verify OTP</Button>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          Didn't receive code?{' '}
          <button className="text-primary-600 font-semibold hover:text-primary-700">
            Resend
          </button>
        </div>
      </CardBody>
    </Card>
  )
}

export default OTPVerification
