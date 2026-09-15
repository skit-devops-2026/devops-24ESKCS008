import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Card, CardBody, CardHeader } from '../components/ui/Card'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader><h2 className="text-2xl font-bold">Send us a Message</h2></CardHeader>
              <CardBody>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Subject" />
                  <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows="5" />
                  <Button variant="primary" className="w-full">Send Message</Button>
                </form>
              </CardBody>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardBody>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:hello@procurement.com">hello@procurement.com</a>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p>123 Business Street, New Delhi 110001, India</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
