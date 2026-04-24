import ProfileSection from './components/ProfileSection'
import TechStackSection from './components/TechStackSection'
import QuestLogSection from './components/QuestLogSection'
import CareerSection from './components/CareerSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header>
        <ProfileSection />
      </header>
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
