import { getEducation } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Portfolio',
  description: 'My educational background and qualifications.',
};

export default function EducationPage() {
  const education = getEducation();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Education</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
          My educational background and academic achievements that have shaped my technical foundation and professional development.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-secondary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-secondary-light)] to-transparent pointer-events-none"></div>

            {/* Education badge */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary-hover)] flex items-center justify-center text-white font-bold text-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              ✓
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
                {edu.degree}
              </h2>
              <p className="text-lg text-[var(--accent-secondary)] font-semibold mb-1">{edu.institution}</p>
              <p className="text-sm text-zinc-400 font-medium mb-4">{edu.period}</p>
              {edu.details && (
                <p className="text-zinc-300 leading-relaxed">{edu.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
