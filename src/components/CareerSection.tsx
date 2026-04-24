import content from '../content/en'

export default function CareerSection() {
  const { heading, subheading, experienceLabel, educationLabel, jobs, degrees } = content.career

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface">{heading}</h2>
        <p className="text-sm md:text-base text-on-surface/50">{subheading}</p>
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-xl font-semibold text-on-surface mb-4">{experienceLabel}</h3>
          <ul className="flex flex-col gap-4">
            {jobs.map((job) => (
              <li key={job.company}>
                <p className="font-bold text-on-surface">{job.company}</p>
                <p className="text-on-surface/70">{job.role}</p>
                <p className="text-sm text-on-surface/50">{job.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-on-surface mb-4">{educationLabel}</h3>
          <ul className="flex flex-col gap-4">
            {degrees.map((deg) => (
              <li key={deg.institution}>
                <p className="font-bold text-on-surface">{deg.institution}</p>
                <p className="text-on-surface/70">{deg.degree}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
