import { getEducation } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Portfolio',
  description: 'My educational background and qualifications.',
};

export default function EducationPage() {
  const education = getEducation();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-3xl">
        My educational background and academic achievements.
      </p>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              {edu.degree}
            </h2>
            <p className="text-lg text-zinc-400 mb-1">{edu.institution}</p>
            <p className="text-sm text-zinc-500 mb-4">{edu.period}</p>
            {edu.details && (
              <p className="text-zinc-300 leading-relaxed">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
