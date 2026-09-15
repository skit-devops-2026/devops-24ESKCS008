import { Search } from 'lucide-react'

export const SearchBar = ({ placeholder = 'Search...', onSearch, className = '' }) => (
  <div className={`relative ${className}`}>
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onSearch?.(e.target.value)}
      className="w-full rounded-2xl border border-white/70 bg-white/80 py-3 pl-12 pr-4 text-slate-800 shadow-sm backdrop-blur-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
    />
  </div>
)

export const Filter = ({ options = [], onChange, className = '' }) => (
  <select
    onChange={(e) => onChange?.(e.target.value)}
    className={`rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-slate-700 shadow-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
  >
    {options.map((opt, i) => (
      <option key={i} value={opt.value || opt}>
        {opt.label || opt}
      </option>
    ))}
  </select>
)
