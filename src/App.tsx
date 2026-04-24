import ProfileSection from './components/ProfileSection'
import TechStackSection from './components/TechStackSection'
import QuestLogSection from './components/QuestLogSection'
import CareerSection from './components/CareerSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <ProfileSection />
      <TechStackSection />
      <QuestLogSection />
      <CareerSection />
      <ContactSection />
    </main>
  )
}
