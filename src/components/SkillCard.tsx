import { HiStar } from 'react-icons/hi'
import type { Skill, Category } from '../data/skills'

const categoryStyles: Record<Category, { border: string; badge: string; icon: string }> = {
  Frontend: {
    border: 'border-category-frontend/40 hover:border-primary',
    badge: 'text-category-frontend bg-category-frontend/10',
    icon: 'text-category-frontend',
  },
  Backend: {
    border: 'border-category-backend/40 hover:border-primary',
    badge: 'text-category-backend bg-category-backend/10',
    icon: 'text-category-backend',
  },
  Tools: {
    border: 'border-category-tools/40 hover:border-primary',
    badge: 'text-category-tools bg-category-tools/10',
    icon: 'text-category-tools',
  },
}

export default function SkillCard({ name, category, proficiency, icon: Icon }: Skill) {
  const styles = categoryStyles[category]
  const isMaxLevel = proficiency === 5

  return (
    <div
      className={`relative flex flex-col gap-3 rounded-lg border p-4 transition-colors duration-200 ${styles.border}`}
    >
      {isMaxLevel && (
        <HiStar className="absolute top-3 right-3 text-primary" size={14} />
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={18} className={styles.icon} />
          <span className="font-semibold text-sm text-on-surface">{name}</span>
        </div>
        <span className="text-xs font-medium text-on-surface/50">Level {proficiency}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-sm ${i < proficiency ? 'bg-primary' : 'bg-on-surface/15'}`}
            />
          ))}
        </div>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles.badge}`}>
          {category}
        </span>
      </div>
    </div>
  )
}
