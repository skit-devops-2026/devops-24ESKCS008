import { useState } from 'react'
import { motion } from 'framer-motion'

export const Tabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-3 font-medium transition-smooth relative ${
              activeTab === i ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {activeTab === i && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600 rounded-t-full"
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-4"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  )
}

export const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => (
  <div className="flex items-center gap-2">
    <button
      onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
    >
      ← Prev
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i + 1}
        onClick={() => onPageChange?.(i + 1)}
        className={`px-3 py-1 rounded ${
          currentPage === i + 1
            ? 'bg-primary-500 text-white'
            : 'border hover:bg-gray-50'
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
    >
      Next →
    </button>
  </div>
)