import ProfileSection from './components/ProfileSection'
import TechStackSection from './components/TechStackSection'
import QuestLogSection from './components/QuestLogSection'

export default function App() {
  return (
    <main className="min-h-screen bg-surface text-on-surface">
      <ProfileSection />
      <TechStackSection />
      <QuestLogSection />
    </main>
  )
}
