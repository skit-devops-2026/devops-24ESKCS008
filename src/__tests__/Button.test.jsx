import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '../components/ui/Button'

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Submit</Button>)
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows loading state when loading is true', () => {
    render(<Button loading>Submit</Button>)
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('disables button when disabled prop is set', () => {
    render(<Button disabled>Disabled Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
