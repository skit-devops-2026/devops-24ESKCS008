import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const StatsSection = ({ stats = [] }) => {
  const Counter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const increment = end / (duration * 1000 / 50)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 50)
      return () => clearInterval(timer)
    }, [end, duration])

    return <span className="text-4xl md:text-5xl font-bold text-primary-600">{count}+</span>
  }

  return (
    <section className="section-spacing bg-navy text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Counter end={stat.value} />
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const CTASection = ({ title, subtitle, buttonLabel, buttonHref = '#' }) => (
  <section className="section-spacing bg-gradient-to-r from-primary-600 to-accent text-white">
    <div className="container-custom text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-8 opacity-90">{subtitle}</p>
      <button
        onClick={() => window.location.href = buttonHref}
        className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-smooth"
      >
        {buttonLabel}
      </button>
    </div>
  </section>
)

export const TestimonialSlider = ({ testimonials = [] }) => {
  const [current, setCurrent] = useState(0)

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">
          What Our Users Say
        </h2>

        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="card-base p-8 max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[current]?.text}"</p>
          <p className="font-semibold text-navy">{testimonials[current]?.author}</p>
          <p className="text-gray-600 text-sm">{testimonials[current]?.role}</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  i === current ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}