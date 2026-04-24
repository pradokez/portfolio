import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { HiMail } from 'react-icons/hi'
import content from '../content/en'

function openLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function ContactSection() {
  const { heading, subheading, github, linkedin, email } = content.contact

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">{heading}</h2>
        <p className="text-sm md:text-base text-on-surface/50">{subheading}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => openLink(github.url)}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full border border-on-surface/30 text-on-surface hover:bg-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <SiGithub size={20} />
          <span>{github.label}</span>
        </button>
        <button
          onClick={() => openLink(linkedin.url)}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full border border-on-surface/30 text-on-surface hover:bg-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <FaLinkedin size={20} />
          <span>{linkedin.label}</span>
        </button>
        <button
          onClick={() => openLink(email.url)}
          className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full bg-primary text-on-surface hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <HiMail size={20} />
          <span>{email.label}</span>
        </button>
      </div>
    </section>
  )
}
