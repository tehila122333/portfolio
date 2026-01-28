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
            className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent-secondary)] text-[var(--accent-secondary)] font-semibold rounded-lg overflow-hidden animate-pulseGlow hover:scale-105 transition-all duration-300"
          >
            {/* Shimmer effect background */}
            <div className="absolute inset-0 rounded-lg animate-shimmer"></div>

            {/* Content wrapper */}
            <div className="relative z-10 flex items-center gap-2">
              {/* Animated sparkle icon */}
              <span className="inline-flex items-center justify-center w-5 h-5 animate-sparkle">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>

              {/* Main text */}
              <span>Ask My Portfolio</span>

              {/* Arrow */}
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>

            {/* AI-Powered badge */}
            <div className="absolute -top-2 -right-2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-pink-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative px-2 py-1 bg-gradient-to-r from-[var(--accent-secondary)] to-pink-500 rounded-full">
                  <span className="text-xs font-bold text-white whitespace-nowrap">AI Powered</span>
                </div>
              </div>
            </div>

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-r from-[var(--accent-secondary)] to-pink-500 transition-opacity duration-300 pointer-events-none"></div>
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

                {exp.link && (
                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    >
                      <span>View Live Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
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

                {project.githubLinks && project.githubLinks.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                      Source Code
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.githubLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface-light)] text-white font-medium rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mb-6"></div>
          <p className="text-lg text-zinc-300 max-w-4xl leading-relaxed">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email Card */}
          <a
            href="mailto:ftehila123@gmail.com"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-primary-light)] to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary-hover)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[var(--accent-primary)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">Email</h3>
              <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">ftehila123@gmail.com</p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+972583257150"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-secondary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-secondary-light)] to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[var(--accent-secondary)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">Phone</h3>
              <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">058-325-7150</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/tehila122333"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[var(--border-subtle)] rounded-xl p-8 hover:border-[var(--accent-tertiary)] transition-all duration-300 overflow-hidden bg-gradient-to-br from-[var(--surface-mid)] to-[var(--surface-dark)] cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--accent-tertiary-light)] to-transparent pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-tertiary)] to-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[var(--accent-tertiary)]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-tertiary)] transition-colors duration-300">GitHub</h3>
              <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">tehila122333</p>
            </div>
          </a>
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
