import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

export const Modal = ({ isOpen, onClose, children, title, size = 'md' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  }

  return (
    <>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-full ${sizes[size]} mx-4`}
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded transition-smooth"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            <div className="p-6">{children}</div>
          </motion.div>
        </>
      )}
    </>
  )
}

export const Dropdown = ({ trigger, items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)}>{trigger}</button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48"
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick?.()
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}