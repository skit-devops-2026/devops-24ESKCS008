import { Users, Target, Lightbulb } from 'lucide-react'
import { Card, CardBody } from '../components/ui/Card'
import Button from '../components/ui/Button'

const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">About Procurement Ecosystem</h1>
          <p className="text-lg opacity-90">Transforming global commerce</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-8">
              We believe that procurement should be simple, transparent, and accessible to everyone. Our mission is to transform how organizations discover suppliers, manage procurement workflows, and learn best practices.
            </p>

            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-8">
              Founded in 2020, Procurement Ecosystem started with a simple idea: to connect buyers and suppliers seamlessly. Today, we serve hundreds of organizations globally, facilitating thousands of successful transactions.
            </p>

            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              {[
                { icon: Target, title: 'Transparency', desc: 'We believe in honest, open communication' },
                { icon: Lightbulb, title: 'Innovation', desc: 'We continuously improve our platform' },
                { icon: Users, title: 'Community', desc: "We support our users' success" },
              ].map((value, i) => {
                const Icon = value.icon
                return (
                  <Card key={i}>
                    <CardBody className="text-center">
                      <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </CardBody>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-6">Be part of the procurement revolution</p>
          <Button variant="primary">Get Started</Button>
        </div>
      </section>
    </div>
  )
}

export default About
