import content from '../content/en'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function QuestLogSection() {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
          {content.questLog.heading}
        </h2>
        <p className="text-sm md:text-base text-on-surface/50">
          {content.questLog.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
