import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import { Card, CardBody } from '../components/ui/Card'
import { BookOpen, Users, Award, Zap } from 'lucide-react'

const ProcurementAcademy = () => {
  const navigate = useNavigate()

  const courses = [
    { title: 'Procurement 101', students: 5400, rating: 4.8 },
    { title: 'Strategic Sourcing', students: 3200, rating: 4.7 },
    { title: 'Vendor Management', students: 2800, rating: 4.9 },
    { title: 'Tender Process', students: 4100, rating: 4.6 },
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-accent text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Procurement Learning Academy</h1>
          <p className="text-lg opacity-90">Master procurement skills with expert-led courses</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: BookOpen, label: '50+ Courses', value: 'Comprehensive' },
              { icon: Users, label: '10K+ Students', value: 'Growing' },
              { icon: Award, label: 'Certifications', value: 'Recognized' },
              { icon: Zap, label: 'Expert Content', value: 'Industry' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i}>
                  <CardBody className="text-center">
                    <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </CardBody>
                </Card>
              )
            })}
          </div>

          <h2 className="text-3xl font-bold text-navy mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <Card key={i} hover>
                <CardBody>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg mb-3 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{course.students} students</p>
                  <div className="flex items-center gap-1 mb-4">
                    {'⭐'.repeat(Math.floor(course.rating))}
                    <span className="text-sm ml-2">{course.rating}</span>
                  </div>
                  <Button variant="primary" size="sm" className="w-full">Explore</Button>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" onClick={() => navigate('/academy/articles')}>
              View All Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProcurementAcademy
