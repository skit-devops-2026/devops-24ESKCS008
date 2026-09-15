import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, TrendingUp, Users, Briefcase, BookOpen, Award, ArrowRight, MapPin, DollarSign, Calendar, CheckCircle2, HelpCircle, BarChart3, GitBranch } from 'lucide-react'
import Button from '../components/ui/Button'
import { Card, CardBody } from '../components/ui/Card'
import { HeroSection, FeaturesGrid } from '../components/sections/HeroSection'
import { StatsSection, CTASection, TestimonialSlider } from '../components/sections/StatsSection'
import { dummyTenders, dummySuppliers, dummyTestimonials } from '../utils/dummyData'
import { FAQ_ITEMS, PRICING_PLANS } from '../utils/constants'

const Home = () => {
  const navigate = useNavigate()
  const [searchTender, setSearchTender] = useState('')
  const [searchSupplier, setSearchSupplier] = useState('')

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: 'Smart Tender Search',
      description: 'Find relevant tenders instantly with AI-powered search and smart filters'
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: 'Verified Suppliers',
      description: 'Connect with pre-verified suppliers and manage relationships seamlessly'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-600" />,
      title: 'Procurement SaaS',
      description: 'Automate procurement workflows and manage approvals efficiently'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      title: 'Learning Academy',
      description: 'Master procurement skills with expert-led courses and resources'
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600" />,
      title: 'Enterprise Grade',
      description: 'Bank-level security and compliance for your peace of mind'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: 'Analytics & Insights',
      description: 'Get real-time insights into your procurement spending and trends'
    },
  ]

  const stats = [
    { value: 5000, label: 'Active Tenders' },
    { value: 2500, label: 'Verified Suppliers' },
    { value: 50000, label: 'Successful Transactions' },
    { value: 150, label: 'Enterprise Clients' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Transform Procurement Into a Smart Digital Ecosystem"
        subtitle="Manage tenders, suppliers, procurement workflows, analytics, and procurement intelligence in one modern enterprise platform."
        cta1={{ label: 'Start Free Trial', href: '/register' }}
        cta2={{ label: 'Explore Tenders', href: '/tenders' }}
        cta3={{ label: 'Watch Demo', href: '/procurement-saas' }}
        image={
          <div className="w-full h-full p-5">
            <div className="h-full rounded-xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Procurement cockpit</p>
                  <p className="font-bold text-navy">Live Operations</p>
                </div>
                <BarChart3 className="w-5 h-5 text-primary-600" />
              </div>
              <div className="grid grid-cols-2 gap-3 p-5">
                {['₹8.4Cr Spend', '27 Approvals', '184 Vendors', '42 RFQs'].map((item) => (
                  <div key={item} className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <p className="text-sm font-semibold text-navy">{item}</p>
                    <div className="mt-3 h-2 rounded-full bg-primary-100">
                      <div className="h-2 w-2/3 rounded-full bg-primary-500" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-lg border border-dashed border-primary-200 bg-primary-50 p-4 flex items-center gap-3">
                  <GitBranch className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-navy">Approval workflow routed to Finance</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="-mt-10 relative z-10">
        <div className="container-custom">
          <div className="surface-panel px-6 py-5">
            <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
              Trusted procurement workflows for modern teams
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {['Aster', 'Northline', 'Bluegrid', 'Tenderly', 'Procura', 'CivicOps'].map((logo) => (
                <div key={logo} className="rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 text-center font-bold text-slate-500">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Tenders & Suppliers */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tender Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold">Find Tenders</h3>
                </div>
                <input
                  type="text"
                  placeholder="Search by category, location, or keywords"
                  value={searchTender}
                  onChange={(e) => setSearchTender(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate('/tenders')}
                >
                  Search Tenders <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>

            {/* Supplier Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold">Find Suppliers</h3>
                </div>
                <input
                  type="text"
                  placeholder="Search by industry or company name"
                  value={searchSupplier}
                  onChange={(e) => setSearchSupplier(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate('/suppliers')}
                >
                  Browse Suppliers <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid features={features} />

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Latest Tenders */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-navy">Latest Tenders</h2>
            <Button variant="ghost" onClick={() => navigate('/tenders')}>
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyTenders.slice(0, 3).map((tender, i) => (
              <motion.div
                key={tender.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col" hover>
                  <CardBody className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                        {tender.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tender.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {tender.status}
                      </span>
                    </div>
                    <h3 className="font-semibold text-navy mb-2 line-clamp-2 flex-1">
                      {tender.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {tender.organization}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{tender.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        <span>₹{(tender.budget / 100000).toFixed(1)}L</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(tender.deadline).toLocaleDateString('en-IN')}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate(`/tenders/${tender.id}`)}
                    >
                      View Details
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-navy">Featured Suppliers</h2>
            <Button variant="ghost" onClick={() => navigate('/suppliers')}>
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummySuppliers.slice(0, 3).map((supplier, i) => (
              <motion.div
                key={supplier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card hover>
                  <CardBody>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                        {supplier.category.charAt(0)}
                      </div>
                      {supplier.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-navy mb-1">{supplier.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{supplier.category}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`${i < Math.floor(supplier.rating) ? '⭐' : '☆'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {supplier.rating} ({supplier.reviews} reviews)
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate(`/suppliers/${supplier.id}`)}
                    >
                      View Profile
                    </Button>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider testimonials={dummyTestimonials} />

      {/* Pricing Preview */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Plans for Every Procurement Team</h2>
            <p className="text-gray-600">Start lean, then scale into advanced workflows, analytics, and integrations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <Card key={plan.id} className={plan.popular ? 'ring-2 ring-primary-500' : ''}>
                <CardBody>
                  {plan.popular && (
                    <span className="inline-block rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-xs font-bold mb-4">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-5">{plan.description}</p>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-primary-600">${plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {plan.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full" onClick={() => navigate('/pricing')}>
                    View Plan
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Clear answers for buyers, suppliers, admins, and learning teams.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {FAQ_ITEMS.slice(0, 6).map((item) => (
              <Card key={item.question} hover={false}>
                <CardBody>
                  <div className="flex gap-3">
                    <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-navy mb-2">{item.question}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-navy">Learn Procurement</h2>
            <Button variant="ghost" onClick={() => navigate('/academy')}>
              Explore Academy <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary-50 to-accent/10">
            <CardBody>
              <h3 className="text-2xl font-bold text-navy mb-4">Procurement Learning Academy</h3>
              <p className="text-gray-700 mb-6">
                Master modern procurement practices with expert-led courses, articles, and resources. From tender processes to vendor management, we cover it all.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {['50+ Courses', 'Expert Instructors', 'Certifications', '10K+ Students'].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="font-semibold text-primary-600">{item}</p>
                  </div>
                ))}
              </div>
              <Button variant="primary" onClick={() => navigate('/academy')}>
                Start Learning
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Procurement?"
        subtitle="Join hundreds of enterprises already saving time and money with our platform"
        buttonLabel="Start Your Free Trial"
        buttonHref="/register"
      />
    </div>
  )
}

export default Home
