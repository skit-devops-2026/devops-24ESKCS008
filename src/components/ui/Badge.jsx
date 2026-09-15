export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    verified: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    active: 'bg-blue-100 text-blue-700',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export const Tag = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 ${className}`}>
    {children}
  </span>
)

export const Rating = ({ value = 0, max = 5, className = '' }) => (
  <div className={`flex gap-1 ${className}`}>
    {[...Array(max)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < value ? 'fill-yellow-400' : 'fill-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
)

export const Avatar = ({ initials = 'U', size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  }

  return (
    <div className={`
      rounded-full flex items-center justify-center font-semibold
      bg-gradient-to-br from-primary-400 to-primary-600 text-white
      ${sizes[size]} ${className}
    `}>
      {initials}
    </div>
  )
}