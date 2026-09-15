import { forwardRef } from 'react'
import { motion } from 'framer-motion'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'btn-base relative overflow-hidden font-semibold inline-flex items-center justify-center whitespace-nowrap'

  const variants = {
    primary: 'premium-gradient text-white hover:shadow-xl hover:shadow-primary-500/25 focus:ring-primary-500',
    secondary: 'bg-white/80 text-slate-900 ring-1 ring-slate-200 hover:bg-white hover:shadow-xl focus:ring-gray-500',
    outline: 'border border-primary-200 bg-white/70 text-primary-600 hover:bg-primary-50 hover:border-primary-300 focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500 shadow-none',
    danger: 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:shadow-xl focus:ring-red-500',
    success: 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-xl focus:ring-green-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-lg',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`

  return (
    <motion.button
      ref={ref}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  )
})

Button.displayName = 'Button'

export default Button
