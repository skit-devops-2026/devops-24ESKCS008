import { motion } from 'framer-motion'
import Button from '../ui/Button'

export const HeroSection = ({
  title,
  subtitle,
  cta1 = { label: 'Get Started', href: '#' },
  cta2 = { label: 'Learn More', href: '#' },
  cta3 = null,
  image = null
}) => (
  <section className="relative min-h-[calc(100vh-76px)] overflow-hidden mesh-bg">
    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.86),rgba(255,255,255,0.42))]" />
    <div className="container-custom relative py-16 md:py-24 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-500/10 backdrop-blur-xl mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Enterprise procurement, redesigned
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[0.98] tracking-tight">
            {title.split(' Smart ')[0]} <span className="premium-text">Smart {title.split(' Smart ')[1]}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-8 max-w-xl">
            {subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary" size="lg" className="glow-pulse" onClick={() => window.location.href = cta1.href}>
              {cta1.label}
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = cta2.href}>
              {cta2.label}
            </Button>
            {cta3 && (
              <Button variant="secondary" size="lg" onClick={() => window.location.href = cta3.href}>
                {cta3.label}
              </Button>
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            {['Trusted by enterprises', 'SOC2-ready structure', 'AI workflows'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="float-soft min-h-[31rem] rounded-[2rem] border border-white/70 bg-white/62 p-3 backdrop-blur-2xl shadow-2xl shadow-primary-900/10 flex items-center justify-center"
          >
            {image}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-xs font-semibold text-slate-400"
      >
        <span>Scroll</span>
        <span className="h-9 w-5 rounded-full border border-slate-300 p-1">
          <span className="block h-2 w-2 rounded-full bg-primary-500 animate-bounce" />
        </span>
      </motion.div>
    </div>
  </section>
)

export const FeaturesGrid = ({ features = [] }) => (
  <section className="section-spacing">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage procurement efficiently
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card-base p-6 hover-lift"
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
