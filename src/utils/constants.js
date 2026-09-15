export const TENDER_CATEGORIES = [
  'Construction',
  'IT Services',
  'Healthcare',
  'Manufacturing',
  'Electrical',
  'Agriculture',
  'Education',
  'Logistics',
  'Infrastructure',
  'Security Services',
]

export const SUPPLIER_CATEGORIES = [
  'Industrial Equipment',
  'Machinery',
  'Office Supplies',
  'Construction Materials',
  'IT Equipment',
  'Furniture',
  'Logistics',
  'Cleaning Services',
  'Security Services',
  'Manufacturing',
]

export const TENDER_STATUS = [
  'Open',
  'Closing Soon',
  'Closed',
  'Awarded',
  'Cancelled',
]

export const USER_ROLES = [
  'Buyer',
  'Supplier',
  'Admin',
]

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 users',
      'Basic tender search',
      'Email support',
      'Mobile app access',
    ],
  },
  {
    id: 2,
    name: 'Professional',
    price: 299,
    period: 'month',
    description: 'Best for growing businesses',
    popular: true,
    features: [
      'Up to 50 users',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom workflows',
      'Integrations',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 999,
    period: 'month',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Custom solutions',
      'Dedicated support',
      'White-label options',
      'Advanced security',
      'SLA guarantee',
    ],
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How do I post a tender?',
    answer: 'Log in to your account, go to the Tenders section, and click "Post New Tender". Fill in the required details and publish.',
  },
  {
    question: 'How can I find suppliers?',
    answer: 'Use our Supplier Directory to search by category, location, or business type. Filter and compare suppliers based on ratings and reviews.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Yes, we use enterprise-grade encryption and comply with international security standards. Your data is protected at all times.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, bank transfers, and digital payment methods. All transactions are secure and encrypted.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime from your account settings. No long-term contracts required.',
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes, we provide training via our Academy section, video tutorials, and live webinars for all users.',
  },
]