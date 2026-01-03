import { getSkills } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: 'My technical skills and areas of expertise.',
};

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-3xl">
        Technical skills and expertise developed through hands-on experience building real-world systems.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="border border-zinc-800 rounded-lg p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {skillGroup.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-md hover:bg-zinc-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
