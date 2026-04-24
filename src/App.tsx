import ProfileSection from './components/ProfileSection'
import LevelProgress from './components/LevelProgress'
import TechStackSection from './components/TechStackSection'
import QuestLogSection from './components/QuestLogSection'
import CareerSection from './components/CareerSection'
import ContactSection from './components/ContactSection'
import { projects } from './data/projects'

export default function App() {
  const totalProjects = projects.length
  const projectsCompleted = projects.filter((p) => p.level >= 2).length

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header>
        <ProfileSection />
      </header>
      <section className="px-4 pb-12 max-w-3xl mx-auto">
        <LevelProgress
          level={7}
          xp={2100}
          xpToNext={2500}
          projectsCompleted={projectsCompleted}
          totalProjects={totalProjects}
        />
      </section>
      <main>
        <TechStackSection />
        <QuestLogSection />
        <CareerSection />
      </main>
      <footer id="contact">
        <ContactSection />
      </footer>
    </div>
  )
}
