export interface Project {
  name: string
  description: string
  level: 1 | 2
  achievements: string[]
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Cafés em Recife',
    description: 'A guide to the best cafés in Recife, with filters by neighborhood, vibe, and amenities.',
    level: 1,
    achievements: [
      'Built interactive neighborhood filter with real-time results',
      'Designed mobile-first layout for on-the-go use',
    ],
    techStack: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/pradokez/cafes-em-recife',
    liveUrl: '#',
  },
  {
    name: 'CalculaHora',
    description: 'A tool for freelancers to calculate hourly rates and estimate project costs.',
    level: 1,
    achievements: [
      'Implemented dynamic rate calculator with tax and overhead support',
      'Added project cost estimator with exportable summary',
    ],
    techStack: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/pradokez/calculahora',
    liveUrl: '#',
  },
]
