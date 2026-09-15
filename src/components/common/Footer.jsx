import { Link } from 'react-router-dom'
import { Code2, Mail, Network, Phone, Share2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Tenders', href: '/tenders' },
      { label: 'Suppliers', href: '/suppliers' },
      { label: 'Procurement SaaS', href: '/procurement-saas' },
      { label: 'Academy', href: '/academy' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  }

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-spacing">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg">Procurement</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Transform procurement with smart digital solutions</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Social updates" className="hover:text-primary-500 transition-smooth"><Share2 className="w-5 h-5" /></a>
              <a href="#" aria-label="Professional network" className="hover:text-primary-500 transition-smooth"><Network className="w-5 h-5" /></a>
              <a href="#" aria-label="Developer resources" className="hover:text-primary-500 transition-smooth"><Code2 className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-primary-500 transition-smooth text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-primary-500 transition-smooth text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-500 transition-smooth text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:hello@procurement.com" className="text-white hover:text-primary-500">
                  hello@procurement.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-500" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+1234567890" className="text-white hover:text-primary-500">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} Procurement Ecosystem. All rights reserved.</p>
          <p>Built for global commerce</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
