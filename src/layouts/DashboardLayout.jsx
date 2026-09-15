import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, LogOut, Settings, Home, Package, BarChart3, Users, FileText, ShoppingCart, MessageSquare, Briefcase, Bell, Command, Search, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()

  const getUserType = () => {
    if (location.pathname.includes('/buyer')) return 'buyer'
    if (location.pathname.includes('/supplier')) return 'supplier'
    if (location.pathname.includes('/admin')) return 'admin'
    return 'buyer'
  }

  const userType = getUserType()

  const navItems = {
    buyer: [
      { label: 'Overview', href: '/dashboard/buyer', icon: Home },
      { label: 'My Tenders', href: '/dashboard/buyer/my-tenders', icon: FileText },
      { label: 'RFQs', href: '/dashboard/buyer/rfqs', icon: MessageSquare },
      { label: 'Purchase Orders', href: '/dashboard/buyer/purchase-orders', icon: ShoppingCart },
      { label: 'Vendors', href: '/dashboard/buyer/vendors', icon: Package },
    ],
    supplier: [
      { label: 'Overview', href: '/dashboard/supplier', icon: Home },
      { label: 'Leads', href: '/dashboard/supplier/leads', icon: Briefcase },
      { label: 'Quotations', href: '/dashboard/supplier/quotations', icon: FileText },
      { label: 'Products', href: '/dashboard/supplier/products', icon: Package },
    ],
    admin: [
      { label: 'Dashboard', href: '/dashboard/admin', icon: Home },
      { label: 'Users', href: '/dashboard/admin/users', icon: Users },
      { label: 'Tenders', href: '/dashboard/admin/tenders', icon: FileText },
      { label: 'Analytics', href: '/dashboard/admin/analytics', icon: BarChart3 },
    ],
  }

  const items = navItems[userType] || navItems.buyer

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <motion.div
        animate={{ x: isSidebarOpen ? 0 : -256 }}
        className="fixed md:relative md:m-4 w-72 md:w-64 h-screen md:h-[calc(100vh-2rem)] rounded-none md:rounded-2xl border-r md:border border-white/10 bg-slate-950/92 text-white overflow-y-auto z-30 md:z-0 backdrop-blur-2xl shadow-2xl"
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 premium-gradient rounded-2xl flex items-center justify-center glow-pulse">
              <span className="text-white font-bold">P</span>
            </div>
            <div>
              <span className="font-bold block leading-tight">Procurement</span>
              <span className="text-xs text-cyan-200/80 capitalize">{userType} workspace</span>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-1 hover:bg-gray-700 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mx-6 mb-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>AI procurement assistant ready</span>
          </div>
        </div>

        <nav className="space-y-2 px-4 pb-6">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-smooth ${
                  isActive
                    ? 'bg-white text-slate-950 shadow-xl'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isActive && <motion.span layoutId="dashboard-active" className="absolute inset-y-2 left-1 w-1 rounded-full premium-gradient" />}
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-600' : 'group-hover:text-cyan-200'}`} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-4 right-4 border-t border-white/10 pt-5">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-slate-300 hover:bg-white/10 transition-smooth">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-slate-300 hover:bg-red-500 transition-smooth mt-2">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_28rem),linear-gradient(180deg,#f8fafc,#eef2ff)]">
        {/* Top Bar */}
        <div className="m-4 mb-0 rounded-2xl border border-white/70 bg-white/75 backdrop-blur-2xl shadow-lg p-3 sm:p-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-xl"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex items-center gap-3 min-w-0 max-w-xl flex-1">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-slate-500 w-full max-w-md">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search tenders, vendors, RFQs...</span>
              <div className="ml-auto hidden lg:flex items-center gap-1 rounded-lg bg-white px-2 py-1 text-xs text-slate-400 border border-slate-200">
                <Command className="w-3 h-3" /> K
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative w-10 h-10 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-primary-600 transition-smooth">
              <Bell className="w-5 h-5" />
              <span className="absolute right-2 top-2 w-2 h-2 rounded-full bg-emerald-500" />
            </button>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-slate-900">Aditya Mangal</p>
              <p className="text-xs text-slate-500">Enterprise Admin</p>
            </div>
            <div className="w-11 h-11 premium-gradient rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg">
              AM
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-20"
        />
      )}
    </div>
  )
}

export default DashboardLayout
