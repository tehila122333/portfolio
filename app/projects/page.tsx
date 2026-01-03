import { getProjects } from '@/data/portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my featured projects and technical work.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
      <p className="text-lg text-zinc-400 mb-12 max-w-3xl">
        A selection of projects that showcase my technical skills and problem-solving approach.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-zinc-300 text-lg">{project.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-zinc-300 flex items-start">
                    <span className="text-zinc-500 mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
