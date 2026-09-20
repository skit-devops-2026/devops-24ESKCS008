import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../components/ui/Button'

describe('Application Suite', () => {
  it('verifies basic rendering and specs', () => {
    render(<Button variant="primary">Procurement Portal</Button>)
    expect(screen.getByText('Procurement Portal')).toBeInTheDocument()
  })
})
