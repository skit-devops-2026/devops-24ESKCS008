import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge, Tag, Avatar } from '../components/ui/Badge'

describe('Badge Component', () => {
  it('renders badge children correctly', () => {
    render(<Badge variant="success">Active</Badge>)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('renders tag correctly', () => {
    render(<Tag>DevOps</Tag>)
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('renders avatar with initials', () => {
    render(<Avatar initials="AK" />)
    expect(screen.getByText('AK')).toBeInTheDocument()
  })
})
