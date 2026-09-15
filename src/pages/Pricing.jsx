import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { Card, CardBody } from '../components/ui/Card'
import { Check } from 'lucide-react'
import { PRICING_PLANS } from '../utils/constants'

const Pricing = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-2">Simple, Transparent Pricing</h1>
          <p className="text-lg opacity-90">Choose the perfect plan for your business</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={plan.popular ? 'md:-translate-y-4' : ''}
              >
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary-600' : ''}`}>
                  {plan.popular && (
                    <div className="bg-primary-600 text-white px-4 py-2 text-center text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardBody>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary-600">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      className="w-full mb-6"
                    >
                      Get Started
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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

export default Pricing
