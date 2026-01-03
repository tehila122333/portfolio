import Link from 'next/link';
import { getPersonalInfo, getProjects } from '@/data/portfolio';

export default function Home() {
  const personal = getPersonalInfo();
  const projects = getProjects();
  const featuredProjects = projects.slice(0, 2); // Show first 2 projects as featured

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          {personal.name}
        </h1>
        <p className="text-2xl text-zinc-400 mb-6">
          {personal.title}
        </p>
        <p className="text-lg text-zinc-300 max-w-3xl mb-8 leading-relaxed">
          {personal.bio}
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-white text-zinc-950 px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/ask"
            className="border border-zinc-700 text-white px-6 py-3 rounded-md font-medium hover:bg-zinc-800 transition-colors"
          >
            Ask My Portfolio
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/projects"
                className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
              >
                View All Projects →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Explore</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/experience"
            className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-200">
              Experience
            </h3>
            <p className="text-zinc-400 text-sm">
              View my professional work history and achievements
            </p>
          </Link>
          <Link
            href="/skills"
            className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-200">
              Skills
            </h3>
            <p className="text-zinc-400 text-sm">
              Explore my technical skills and expertise
            </p>
          </Link>
          <Link
            href="/education"
            className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors group"
          >
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-200">
              Education
            </h3>
            <p className="text-zinc-400 text-sm">
              Learn about my educational background
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
