import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Pages
import Home from './pages/Home'
import TendersPortal from './pages/Tenders/TendersPortal'
import TenderDetail from './pages/Tenders/TenderDetail'
import SupplierDirectory from './pages/SupplierDirectory'
import SupplierDetail from './pages/Suppliers/SupplierDetail'
import ProcurementSaaS from './pages/ProcurementSaaS'
import ProcurementAcademy from './pages/ProcurementAcademy'
import ArticleList from './pages/Academy/ArticleList'
import ArticleDetail from './pages/Academy/ArticleDetail'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

// Auth Pages
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'
import OTPVerification from './pages/Auth/OTPVerification'

// Dashboard Pages
import BuyerDashboard from './pages/Dashboard/BuyerDashboard'
import MyTenders from './pages/Dashboard/MyTenders'
import RFQs from './pages/Dashboard/RFQs'
import PurchaseOrders from './pages/Dashboard/PurchaseOrders'
import VendorManagement from './pages/Dashboard/VendorManagement'
import SupplierDashboard from './pages/Dashboard/SupplierDashboard'
import Leads from './pages/Dashboard/Leads'
import Quotations from './pages/Dashboard/Quotations'
import ProductListings from './pages/Dashboard/ProductListings'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import AdminUsers from './pages/Dashboard/AdminUsers'
import AdminTenders from './pages/Dashboard/AdminTenders'
import AdminAnalytics from './pages/Dashboard/AdminAnalytics'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import DashboardLayout from './layouts/DashboardLayout'
import AuthLayout from './layouts/AuthLayout'

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tenders" element={<TendersPortal />} />
          <Route path="/tenders/:id" element={<TenderDetail />} />
          <Route path="/suppliers" element={<SupplierDirectory />} />
          <Route path="/suppliers/:id" element={<SupplierDetail />} />
          <Route path="/procurement-saas" element={<ProcurementSaaS />} />
          <Route path="/academy" element={<ProcurementAcademy />} />
          <Route path="/academy/articles" element={<ArticleList />} />
          <Route path="/academy/articles/:id" element={<ArticleDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
          <Route path="/dashboard/buyer/my-tenders" element={<MyTenders />} />
          <Route path="/dashboard/buyer/rfqs" element={<RFQs />} />
          <Route path="/dashboard/buyer/purchase-orders" element={<PurchaseOrders />} />
          <Route path="/dashboard/buyer/vendors" element={<VendorManagement />} />

          <Route path="/dashboard/supplier" element={<SupplierDashboard />} />
          <Route path="/dashboard/supplier/leads" element={<Leads />} />
          <Route path="/dashboard/supplier/quotations" element={<Quotations />} />
          <Route path="/dashboard/supplier/products" element={<ProductListings />} />

          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/users" element={<AdminUsers />} />
          <Route path="/dashboard/admin/tenders" element={<AdminTenders />} />
          <Route path="/dashboard/admin/analytics" element={<AdminAnalytics />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
