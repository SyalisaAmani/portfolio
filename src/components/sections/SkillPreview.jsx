import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'
import { Code2, Database, Palette, Wrench } from 'lucide-react'

const skillCategories = [
  {
    number: '01',
    title: 'frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'backend',
    icon: Database,
    skills: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    number: '03',
    title: 'design',
    icon: Palette,
    skills: ['Figma', 'Canva'],
  },
  {
    number: '04',
    title: 'tools',
    icon: Wrench,
    skills: ['GitHub', 'Vite', 'Trello'],
  },
]

function SkillsPreview() {
  const { language } = useLanguage()
  const t = translations[language].skills

  return (
    <section id="skills" className="section-container">

      {/* Section Heading */}
      <div className="mb-14 flex flex-col items-center text-center">
        <h2 className="bg-linear-to-r from-[#4ade80] via-[#d1fae5] to-[#f87171] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
          {t.title}
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
          {t.desription}
        </p>

        <div className="mt-6 h-0.75 w-16 rounded-full bg-linear-to-r from-[#4ade80] to-[#ef4444]" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">

        {skillCategories.map((category) => {
          const Icon = category.icon

          return (
            <article
              key={category.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#202328]/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_12px_35px_rgba(74,222,128,0.10)]"
            >

              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

              <div className="relative z-10">

                {/* Card Header */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-primary/60">
                    TECH / {category.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all duration-500 group-hover:rotate-6 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.12)]">
                    <Icon
                      size={21}
                      className="text-primary transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="mb-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#86efac]">
                  {t.categories[category.title]}
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-[#86efac]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#4ade80] via-[#86efac] to-[#ef4444] transition-all duration-500 group-hover:w-full" />

            </article>
          )
        })}

      </div>
    </section>
  )
}

export default SkillsPreview
