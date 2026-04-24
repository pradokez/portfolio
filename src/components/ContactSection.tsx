import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import content from '../content/en'

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ContactSection() {
  const { heading, subheading, github, linkedin } = content.contact

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">{heading}</h2>
        <p className="text-sm md:text-base text-on-surface/50">{subheading}</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => openLink(github.url)}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-on-surface/30 text-on-surface hover:bg-on-surface/10 transition-colors"
        >
          <SiGithub size={20} />
          <span>{github.label}</span>
        </button>
        <button
          onClick={() => openLink(linkedin.url)}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-on-surface/30 text-on-surface hover:bg-on-surface/10 transition-colors"
        >
          <FaLinkedin size={20} />
          <span>{linkedin.label}</span>
        </button>
      </div>
    </section>
  )
}
