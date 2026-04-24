import content from '../content/en'
import { buttonClass } from '../shared/constants'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

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
  const subtextWithIconsClass = 'flex items-center gap-1'

  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 gap-8 bg-alt">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          {name}
        </h1>
        <p className="text-base md:text-xl text-on-surface/60 max-w-2xl">
          {bio}
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-on-surface/60">
          <span className={subtextWithIconsClass}><HiOutlineLocationMarker />{location}</span>
          <span className={subtextWithIconsClass}><IoCodeSlashOutline/> {field}</span>
          <span className={subtextWithIconsClass}><LiaBirthdayCakeSolid/> {age} years old</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={content.contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          View GitHub
        </a>
        <a
          href="#contact"
          className={buttonClass}
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
