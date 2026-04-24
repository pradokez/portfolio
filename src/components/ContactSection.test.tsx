import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  beforeEach(() => {
    vi.stubGlobal('open', vi.fn())
  })

  it('renders GitHub button and opens correct URL on click', () => {
    render(<ContactSection />)
    const button = screen.getByRole('button', { name: /github/i })
    fireEvent.click(button)
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/pradokez',
      '_blank',
      'noopener,noreferrer',
    )
  })

  it('renders LinkedIn button and opens correct URL on click', () => {
    render(<ContactSection />)
    const button = screen.getByRole('button', { name: /linkedin/i })
    fireEvent.click(button)
    expect(window.open).toHaveBeenCalledWith(
      'https://www.linkedin.com/in/keziahprado/',
      '_blank',
      'noopener,noreferrer',
    )
  })
})
