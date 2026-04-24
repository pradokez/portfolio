import content from '../content/en'
import LevelProgress from './LevelProgress'
import { projects } from '../data/projects'

function calcAge(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
  return age
}

export default function ProfileSection() {
  const { name, bio, location, field, birthDate } = content.profile
  const age = calcAge(birthDate)
  const totalProjects = projects.length
  const projectsCompleted = projects.filter((p) => p.level >= 2).length

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bold text-on-surface">
          {name}
        </h1>
        <p className="text-base md:text-xl text-on-surface/60 max-w-2xl">
          {bio}
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-on-surface/60">
          <span>📍 {location}</span>
          <span>🎮 {field}</span>
          <span>🎂 Age {age}</span>
        </div>
      </div>
      <LevelProgress
        level={7}
        xp={2100}
        xpToNext={2500}
        projectsCompleted={projectsCompleted}
        totalProjects={totalProjects}
      />
      <a
        href="#contact"
        className="px-6 py-3 rounded-full border border-on-surface/30 text-on-surface hover:bg-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Contact Me
      </a>
    </section>
  )
}
