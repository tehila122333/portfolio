import { getExperience } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional work experience and achievements.',
};

export default function ExperiencePage() {
  const experience = getExperience();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-3xl">
        My professional journey and key achievements in software engineering.
      </p>

      <div className="space-y-8">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-zinc-800 rounded-lg p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-1">
                {exp.role}
              </h2>
              <p className="text-lg text-zinc-400 mb-2">{exp.company}</p>
              <p className="text-sm text-zinc-500">{exp.period}</p>
            </div>

            <p className="text-zinc-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-zinc-300 flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
