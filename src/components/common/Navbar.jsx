import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Tenders', href: '/tenders' },
    { label: 'Suppliers', href: '/suppliers' },
    { label: 'Procurement SaaS', href: '/procurement-saas' },
    { label: 'Academy', href: '/academy' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-white/70 shadow-lg shadow-slate-900/5' : 'bg-white/40 backdrop-blur-xl'
    }`}>
      <div className="container-custom py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-11 h-11 premium-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg text-navy leading-none block">Procurement</span>
            <span className="text-xs text-slate-500">Digital ecosystem</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-white/70 bg-white/58 p-1.5 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-smooth ${
                isActive(link.href)
                  ? 'text-primary-700'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {isActive(link.href) && (
                <motion.span layoutId="public-nav-active" className="absolute inset-0 rounded-xl bg-primary-50" />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="md">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="primary" size="md" className="glow-pulse">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-2xl"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden border-t border-white/70 bg-white/90 backdrop-blur-2xl"
        >
          <div className="container-custom py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl font-medium transition-smooth ${
                  isActive(link.href)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="md" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button variant="primary" size="md" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
