export interface SiteContent {
  profile: {
    name: string
    bio: string
  }
  nav: {
    links: string[]
  }
  techStack: {
    heading: string
    subheading: string
  }
  questLog: {
    heading: string
    subheading: string
  }
  career: {
    heading: string
    subheading: string
    experienceLabel: string
    educationLabel: string
    jobs: { company: string; role: string; period: string }[]
    degrees: { institution: string; degree: string; period: string }[]
  }
  contact: {
    heading: string
    subheading: string
    github: { label: string; url: string }
    linkedin: { label: string; url: string }
  }
}

const content: SiteContent = {
  profile: {
    name: 'Keziah Prado',
    bio: 'Front-end specialist with backend skills, crafting digital experiences from Brazil 🇧🇷 with a passion for game development.',
  },
  nav: {
    links: [],
  },
  techStack: {
    heading: 'Tech Stack & Abilities',
    subheading: 'My current skill tree and proficiency levels',
  },
  questLog: {
    heading: 'Quest Log',
    subheading: 'Projects I\'ve worked on',
  },
  career: {
    heading: 'Career',
    subheading: 'My professional journey',
    experienceLabel: 'Experience',
    educationLabel: 'Education',
    jobs: [
      { company: 'Gupy', role: 'Full-stack Developer', period: '2021–2026' },
      { company: 'Arco Educação', role: 'Full-stack Developer', period: '2026–present' },
    ],
    degrees: [
      { institution: 'Estácio de Sá', degree: 'Associate Degree in Digital Game Development', period: '' },
    ],
  },
  contact: {
    heading: 'Contact',
    subheading: "Let's connect",
    github: { label: 'GitHub', url: 'https://github.com/pradokez' },
    linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/keziahprado/' },
  },
}

export default content
