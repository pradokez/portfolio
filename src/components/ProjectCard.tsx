import { SiGithub } from 'react-icons/si'
import { HiExternalLink } from 'react-icons/hi'
import type { Project } from '../data/projects'

export default function ProjectCard({ name, description, status, techStack, githubUrl, liveUrl }: Project) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-on-surface/10 p-5 hover:scale-[1.02] hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-base text-on-surface">{name}</h3>
        <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
          {status}
        </span>
      </div>

      <p className="text-sm text-on-surface/60 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2 py-0.5 rounded-full bg-on-surface/8 text-on-surface/70"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-on-surface/60 hover:text-on-surface transition-colors"
        >
          <SiGithub size={14} />
          GitHub
        </a>
        {liveUrl && liveUrl !== '#' && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-on-surface/60 hover:text-on-surface transition-colors"
          >
            <HiExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
