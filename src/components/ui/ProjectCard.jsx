import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'

function ProjectCard({ project }) {
  const projectNumber = String(project.id).padStart(2, '0')
  const isCompleted = project.status === 'Completed'

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#202328]/80 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(74,222,128,0.12)]">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-[#ef4444]/5 blur-3xl transition-all duration-500 group-hover:bg-[#ef4444]/15" />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-sm tracking-widest text-primary/70">
            PROJECT / {projectNumber}
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary/50 group-hover:bg-primary/10">
            <ArrowUpRight
              size={18}
              className="text-gray-400 transition-colors duration-300 group-hover:text-primary"
            />
          </div>
        </div>

        {/* Category */}
        <span className="mb-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#86efac]">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#86efac]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-gray-300 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-white/10 pt-4">

          {/* Project status */}
          <div className="mb-5 flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                isCompleted
                  ? 'bg-primary shadow-[0_0_8px_rgba(74,222,128,0.8)]'
                  : 'animate-pulse bg-[#f87171] shadow-[0_0_8px_rgba(248,113,113,0.6)]'
              }`}
            />

            <span className="text-xs text-gray-400">
              {project.status}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Code2 size={15} />
                GitHub
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#4ade80] to-[#16a34a] px-3 py-2.5 text-xs font-semibold text-[#101712] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(74,222,128,0.3)]"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}

          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-[#4ade80] via-[#86efac] to-[#ef4444] transition-all duration-500 group-hover:w-full" />
    </article>
  )
}

export default ProjectCard
