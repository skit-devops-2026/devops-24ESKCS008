import { forwardRef } from 'react'

const Input = forwardRef(({
  error = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      className={`
        w-full px-4 py-2 border rounded-md transition-smooth
        ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500'}
        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-white'}
        focus:outline-none focus:ring-2 focus:ring-offset-0
        placeholder:text-gray-400
        ${className}
      `}
      disabled={disabled}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input