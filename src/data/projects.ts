export type ProjectStatus = 'Complete' | 'In Progress'

export interface Project {
  name: string
  description: string
  status: ProjectStatus
  techStack: string[]
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    name: 'Cafés em Recife',
    description: 'A guide to the best cafés in Recife, with filters by neighborhood, vibe, and amenities.',
    status: 'In Progress',
    techStack: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/pradokez/cafes-em-recife',
    liveUrl: '#',
  },
  {
    name: 'CalculaHora',
    description: 'A tool for freelancers to calculate hourly rates and estimate project costs.',
    status: 'In Progress',
    techStack: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/pradokez/calculahora',
    liveUrl: '#',
  },
]
