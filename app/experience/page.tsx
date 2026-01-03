import { getExperience } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional work experience and achievements.',
};

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Experience</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
          My professional journey showcasing key achievements, leadership, and technical expertise in software engineering and product development.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] to-transparent pointer-events-none"></div>

            {/* Timeline indicator */}
            <div className="absolute left-8 -top-0.5 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  {exp.role}
                </h2>
                <p className="text-lg text-[var(--accent-secondary)] font-semibold mb-2">{exp.company}</p>
                <p className="text-sm text-zinc-400 font-medium">{exp.period}</p>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="text-zinc-300 flex items-start group/item">
                      <span className="text-[var(--accent-secondary)] mr-3 font-bold mt-0.5">✓</span>
                      <span className="group-hover/item:text-white transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[var(--accent-tertiary-light)] text-[var(--accent-tertiary)] text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--accent-tertiary)]/30 hover:border-[var(--accent-tertiary)] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
