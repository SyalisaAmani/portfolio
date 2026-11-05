import projects from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import { useLanguage } from '../../context/useLanguage'
import translations from '../../data/translations'

function FeaturedProjects() {
  const { language } = useLanguage()
  const t = translations [language].projects

  return (
    <section id="projects" className="section-container">

      {/* Section Heading */}
      <Reveal>
        <div className="mb-14 flex flex-col items-center justify-center text-center">
          <h2 className="bg-linear-to-r from-[#4ade80] via-[#d1fae5] to-[#f87171] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            {t.title}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
            {t.description}
          </p>
        </div>
      </Reveal>

      {/* Project Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.15}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

    </section>
  )
}

export default FeaturedProjects