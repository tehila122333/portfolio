import { getProjects } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my featured projects and technical work.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Projects</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
          A selection of projects that showcase my technical skills and problem-solving approach. Each project represents real-world challenges and innovative solutions.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-zinc-300 text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--accent-tertiary-light)] text-[var(--accent-tertiary)] text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--accent-tertiary)]/30 hover:border-[var(--accent-tertiary)] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-zinc-300 flex items-start group/item">
                      <span className="text-[var(--accent-secondary)] mr-3 font-bold mt-0.5">✓</span>
                      <span className="group-hover/item:text-white transition-colors duration-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
