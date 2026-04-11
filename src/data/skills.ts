import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDatadog,
} from 'react-icons/si'
import { MdAccessibility } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export type Category = 'Frontend' | 'Backend' | 'Tools'

export interface Skill {
  name: string
  category: Category
  proficiency: 1 | 2 | 3 | 4 | 5
  icon: IconType
}

export const skills: Skill[] = [
  { name: 'React.js', category: 'Frontend', proficiency: 5, icon: SiReact },
  { name: 'Next.js', category: 'Frontend', proficiency: 4, icon: SiNextdotjs },
  { name: 'TypeScript', category: 'Frontend', proficiency: 4, icon: SiTypescript },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 5, icon: SiTailwindcss },
  { name: 'Styled Components', category: 'Frontend', proficiency: 3, icon: SiStyledcomponents },
  { name: 'Accessibility', category: 'Frontend', proficiency: 3, icon: MdAccessibility },
  { name: 'Node.js', category: 'Backend', proficiency: 4, icon: SiNodedotjs },
  { name: 'REST', category: 'Backend', proficiency: 4, icon: TbApi },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 3, icon: SiPostgresql },
  { name: 'Git', category: 'Tools', proficiency: 5, icon: SiGit },
  { name: 'GitHub', category: 'Tools', proficiency: 5, icon: SiGithub },
  { name: 'Datadog', category: 'Tools', proficiency: 3, icon: SiDatadog },
]
