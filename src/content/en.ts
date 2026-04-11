export interface SiteContent {
  hero: {
    title: string
    subtitle: string
  }
  nav: {
    links: string[]
  }
}

const content: SiteContent = {
  hero: {
    title: '',
    subtitle: '',
  },
  nav: {
    links: [],
  },
}

export default content
