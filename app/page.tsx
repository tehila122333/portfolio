import { getPersonalInfo, getProjects, getExperience, getSkills, getEducation } from '@/data/portfolio';
import AskSection from '@/components/AskSection';

const categoryAccents: Record<string, string> = {
  'Programming Languages': 'accent-primary',
  'Frontend Technologies': 'accent-secondary',
  'Backend Technologies': 'accent-tertiary',
  'Databases': 'accent-primary',
  'Cloud & DevOps': 'accent-secondary',
  'Tools & Practices': 'accent-tertiary',
};

const getCategoryColor = (category: string): string => {
  return categoryAccents[category] || 'accent-primary';
};

const getColorVars = (category: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    'accent-primary': { bg: 'var(--accent-primary-light)', text: 'var(--accent-primary)', border: 'var(--accent-primary)' },
    'accent-secondary': { bg: 'var(--accent-secondary-light)', text: 'var(--accent-secondary)', border: 'var(--accent-secondary)' },
    'accent-tertiary': { bg: 'var(--accent-tertiary-light)', text: 'var(--accent-tertiary)', border: 'var(--accent-tertiary)' },
  };
  return colorMap[getCategoryColor(category)];
};

export default function Home() {
  const personal = getPersonalInfo();
  const projects = getProjects();
  const experience = getExperience();
  const skills = getSkills();
  const education = getEducation();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="hero" className="py-20 space-y-6 animate-fadeIn">
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
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-primary-hover)] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[var(--accent-primary)]/50 transform hover:scale-105 transition-all duration-300"
          >
            View Projects
            <span className="ml-2">→</span>
          </a>
          <a
            href="#ask"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent-secondary)] text-[var(--accent-secondary)] font-semibold rounded-lg hover:bg-[var(--accent-secondary-light)] transition-all duration-300"
          >
            Ask My Portfolio
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Experience</h2>
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] to-transparent pointer-events-none"></div>
              <div className="absolute left-8 -top-0.5 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-[var(--accent-secondary)] font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-zinc-400 font-medium">{exp.period}</p>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Key Achievements
                  </h4>
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
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Technologies Used
                  </h4>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Projects</h2>
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] to-transparent pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Technologies
                  </h4>
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
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Key Highlights
                  </h4>
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Skills</h2>
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                      accentClass === 'accent-primary' ? 'from-[var(--accent-primary)] to-blue-400' :
                      accentClass === 'accent-secondary' ? 'from-[var(--accent-secondary)] to-pink-400' :
                      'from-[var(--accent-tertiary)] to-emerald-300'
                    }`}></div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
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
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Education</h2>
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-secondary-light)] to-transparent pointer-events-none"></div>
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary-hover)] flex items-center justify-center text-white font-bold text-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                ✓
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-lg text-[var(--accent-secondary)] font-semibold mb-1">{edu.institution}</p>
                <p className="text-sm text-zinc-400 font-medium mb-4">{edu.period}</p>
                {edu.details && (
                  <p className="text-zinc-300 leading-relaxed">{edu.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ask Section */}
      <section id="ask" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Ask My Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
        </div>
        <AskSection />
      </section>
    </div>
  );
}
