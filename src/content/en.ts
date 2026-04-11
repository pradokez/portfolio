export interface SiteContent {
  profile: {
    name: string
    bio: string
  }
  nav: {
    links: string[]
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
}

export default content
