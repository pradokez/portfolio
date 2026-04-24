import { SiGithub, SiLinkedin } from 'react-icons/si'
import content from '../content/en'

export default function ContactSection() {
  const { heading, subheading, github, linkedin } = content.contact

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">{heading}</h2>
        <p className="text-sm md:text-base text-on-surface/50">{subheading}</p>
      </div>

      <div className="flex justify-center gap-8">
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-on-surface hover:text-on-surface/70 transition-colors"
        >
          <SiGithub size={24} />
          <span>{github.label}</span>
        </a>
        <a
          href={linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-on-surface hover:text-on-surface/70 transition-colors"
        >
          <SiLinkedin size={24} />
          <span>{linkedin.label}</span>
        </a>
      </div>
    </section>
  )
}
