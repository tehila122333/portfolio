import { getSkills } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'My technical skills and areas of expertise.',
};

const categoryAccents = {
  'Frontend Development': 'accent-primary',
  'Backend Development': 'accent-secondary',
  'Full Stack': 'accent-tertiary',
  'DevOps & Tools': 'accent-primary',
  'Other': 'accent-secondary',
};

const getCategoryColor = (category: string): string => {
  return categoryAccents[category as keyof typeof categoryAccents] || 'accent-primary';
};

const getColorVars = (category: string) => {
  const colorMap = {
    'accent-primary': { bg: 'var(--accent-primary-light)', text: 'var(--accent-primary)', border: 'var(--accent-primary)' },
    'accent-secondary': { bg: 'var(--accent-secondary-light)', text: 'var(--accent-secondary)', border: 'var(--accent-secondary)' },
    'accent-tertiary': { bg: 'var(--accent-tertiary-light)', text: 'var(--accent-tertiary)', border: 'var(--accent-tertiary)' },
  };
  return colorMap[getCategoryColor(category) as keyof typeof colorMap];
};

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Skills</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
          Technical skills and expertise developed through hands-on experience building real-world systems. Proficient across frontend, backend, and full-stack technologies.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup) => {
          const colorVars = getColorVars(skillGroup.category);
          const accentClass = getCategoryColor(skillGroup.category);

          return (
            <div
              key={skillGroup.category}
              className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] h-full"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] via-transparent to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                    accentClass === 'accent-primary' ? 'from-[var(--accent-primary)] to-blue-400' :
                    accentClass === 'accent-secondary' ? 'from-[var(--accent-secondary)] to-pink-400' :
                    'from-[var(--accent-tertiary)] to-emerald-300'
                  }`}></div>
                  <h2 className="text-xl font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {skillGroup.category}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        backgroundColor: colorVars.bg,
                        color: colorVars.text,
                        borderColor: `${colorVars.border}4d`,
                      }}
                      className="px-4 py-2 rounded-lg font-medium text-sm border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
