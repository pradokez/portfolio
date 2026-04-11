import content from '../content/en'
import LevelProgress from './LevelProgress'

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-primary to-amber-300 bg-clip-text text-transparent">
          {content.hero.name}
        </h1>
        <p className="text-base md:text-xl text-on-surface/60 max-w-2xl">
          {content.hero.bio}
        </p>
      </div>
      <LevelProgress level={7} xp={2100} xpToNext={2500} />
    </section>
  )
}
