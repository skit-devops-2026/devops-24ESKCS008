import { motion } from 'framer-motion'

export const Card = ({ children, className = '', hover = true, ...props }) => (
  <motion.div
    className={`card-base ${hover ? 'hover-lift' : ''} ${className}`}
    whileHover={hover ? { y: -6, scale: 1.006 } : {}}
    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    {...props}
  >
    {children}
  </motion.div>
)

export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-5 border-b border-slate-200/70 ${className}`}>
    {children}
  </div>
)

export const CardBody = ({ children, className = '' }) => (
  <div className={`px-6 py-5 ${className}`}>
    {children}
  </div>
)

export const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-5 border-t border-slate-200/70 flex gap-3 ${className}`}>
    {children}
  </div>
)

export default Card
