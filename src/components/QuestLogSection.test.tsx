import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import QuestLogSection from './QuestLogSection'
import { projects } from '../data/projects'

describe('QuestLogSection', () => {
  it('renders all project names', () => {
    render(<QuestLogSection />)
    for (const project of projects) {
      expect(screen.getByText(project.name)).toBeInTheDocument()
    }
  })

  it('renders all project descriptions', () => {
    render(<QuestLogSection />)
    for (const project of projects) {
      expect(screen.getByText(project.description)).toBeInTheDocument()
    }
  })

  it('renders GitHub links with correct href, target, and rel', () => {
    render(<QuestLogSection />)
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks).toHaveLength(projects.length)
    projects.forEach((project, i) => {
      expect(githubLinks[i]).toHaveAttribute('href', project.githubUrl)
      expect(githubLinks[i]).toHaveAttribute('target', '_blank')
      expect(githubLinks[i]).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
