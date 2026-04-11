interface LevelProgressProps {
  level: number
  xp: number
  xpToNext: number
}

export default function LevelProgress({ level, xp, xpToNext }: LevelProgressProps) {
  const percent = Math.round((xp / xpToNext) * 100)

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <div className="flex items-center justify-between text-sm font-semibold">
        <span className="text-on-surface/60 uppercase tracking-widest text-xs">Developer Level</span>
        <span className="text-primary font-bold text-lg">{level}</span>
      </div>
      <div className="h-2 rounded-full bg-on-surface/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-none"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-on-surface/40">
        <span>{xp} XP</span>
        <span>{xpToNext} XP</span>
      </div>
    </div>
  )
}
