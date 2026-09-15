import { Link, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Bot, BookOpen, Building2, Home, Search, Store } from 'lucide-react'

const PublicLayout = () => {
  const location = useLocation()
  const mobileItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Tenders', href: '/tenders', icon: Search },
    { label: 'Suppliers', href: '/suppliers', icon: Store },
    { label: 'SaaS', href: '/procurement-saas', icon: Building2 },
    { label: 'Academy', href: '/academy', icon: BookOpen },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Link
        to="/procurement-saas"
        className="fixed bottom-24 right-5 z-40 hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl premium-gradient text-white shadow-2xl shadow-primary-500/30 transition-smooth hover:-translate-y-1"
        aria-label="Open AI procurement assistant"
      >
        <Bot className="w-6 h-6" />
      </Link>
      <nav className="fixed bottom-4 left-1/2 z-40 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 grid-cols-5 gap-1 rounded-3xl border border-white/70 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl sm:hidden">
        {mobileItems.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-2xl px-2 py-2 text-center text-[11px] font-semibold transition-smooth ${
                active ? 'bg-primary-600 text-white' : 'text-slate-500'
              }`}
            >
              <Icon className="mx-auto mb-1 h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <Footer />
    </div>
  )
}

export default PublicLayout
