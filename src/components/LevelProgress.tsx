interface LevelProgressProps {
  level: number
  xp: number
  xpToNext: number
  projectsCompleted: number
  totalProjects: number
}

export default function LevelProgress({ level, xp, xpToNext, projectsCompleted, totalProjects }: LevelProgressProps) {
  const percent = Math.round((xp / xpToNext) * 100)
  const xpRemaining = xpToNext - xp

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm rounded-lg border border-on-surface/20 p-4">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-on-surface">🏆 Developer Level {level}</span>
        <span className="text-on-surface/60 text-xs">{xp} / {xpToNext} XP</span>
      </div>
      <div className="h-2 rounded-full bg-on-surface/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-none"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-on-surface/60">
        <span>⭐ Projects {projectsCompleted}/{totalProjects}</span>
        <span>🌟 Next Level {xpRemaining} XP</span>
      </div>
    </div>
  )
}
