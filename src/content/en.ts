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
}

export default content
