import Link from 'next/link';
import { getPersonalInfo, getProjects } from '@/data/portfolio';

export default function Home() {
  const personal = getPersonalInfo();
  const projects = getProjects();
  const featuredProjects = projects.slice(0, 2); // Show first 2 projects as featured

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-24 space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            {personal.name}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"></div>
        </div>
        <p className="text-2xl lg:text-3xl text-[var(--accent-primary)] font-semibold">
          {personal.title}
        </p>
        <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
          {personal.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-hover)] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--accent-primary)]/50 transform hover:scale-105 transition-all duration-300"
          >
            View Projects
            <span className="ml-2">→</span>
          </Link>
          <Link
            href="/ask"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent-secondary)] text-[var(--accent-secondary)] font-semibold rounded-lg hover:bg-[var(--accent-secondary-light)] transition-all duration-300"
          >
            Ask My Portfolio
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-24">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)]"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
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
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--accent-tertiary-light)] text-[var(--accent-tertiary)] text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--accent-tertiary)]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] font-semibold text-sm transition-colors duration-300"
                >
                  View All Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">Explore</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-tertiary)]"></div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/experience"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-secondary)] transition-all duration-300 bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] overflow-hidden"
          >
            {/* Accent glow on hover */}
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-secondary-light)] via-transparent to-transparent blur pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
                Experience
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                View my professional work history and achievements
              </p>
              <span className="inline-block mt-4 text-[var(--accent-secondary)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-300">
                Learn more →
              </span>
            </div>
          </Link>
          <Link
            href="/skills"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-tertiary)] transition-all duration-300 bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] overflow-hidden"
          >
            {/* Accent glow on hover */}
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-tertiary-light)] via-transparent to-transparent blur pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-tertiary)] transition-colors duration-300">
                Skills
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Explore my technical skills and expertise
              </p>
              <span className="inline-block mt-4 text-[var(--accent-tertiary)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-300">
                Learn more →
              </span>
            </div>
          </Link>
          <Link
            href="/education"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] overflow-hidden"
          >
            {/* Accent glow on hover */}
            <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] via-transparent to-transparent blur pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                Education
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Learn about my educational background
              </p>
              <span className="inline-block mt-4 text-[var(--accent-primary)] font-semibold text-xs group-hover:translate-x-1 transition-transform duration-300">
                Learn more →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
