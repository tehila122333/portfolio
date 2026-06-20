// Portfolio Data - Update this file to modify your portfolio content

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: 'frontend' | 'fullstack' | 'cloud';
  githubLinks?: { label: string; url: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  linkLabel?: string;
  linkType?: 'project' | 'company';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    github?: string;
    linkedin?: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  education: Education[];
}

// Main portfolio data
export const portfolioData: PortfolioData = {
  personal: {
    name: "Tehila Friedland",
    title: "Frontend & Full-Stack Developer",
    bio: "Frontend & Full-Stack Developer skilled in building scalable, user-focused web applications with React, Angular, Node.js, and cloud technologies. A Claude Code expert who leverages the best AI development tools to ship high-quality, high-performance features faster — pairing strong problem-solving with a track record of impactful, efficiency-boosting work.",
    location: "Israel",
    email: "ftehila123@gmail.com",
    github: "https://github.com/tehila122333",
    linkedin: "", // Add your LinkedIn if you have one
  },

  projects: [
    {
      id: "construction-monitoring",
      title: "Construction Monitoring Platform",
      description: "Feature development for a large-scale construction monitoring platform used by enterprise clients.",
      technologies: ["React", "TypeScript", "GraphQL", "AWS Lambda", "AWS S3"],
      highlights: [
        "Delivered new features for platform used by large-scale clients",
        "Worked with modern tech stack including React, TypeScript, and GraphQL",
        "Integrated with AWS services (Lambda, S3) for scalable cloud architecture",
        "Collaborated in Agile sprints, improving team velocity",
        "Enhanced code quality through peer reviews and best practices",
      ],
      category: "frontend",
    },
    {
      id: "chinese-auction",
      title: "Chinese Auction Management System",
      description: "A full-stack web application for managing Chinese auction sales operations, featuring user authentication, product catalog, shopping cart, and an automated raffle system.",
      technologies: ["Angular", "TypeScript", "C#", ".NET Core", "SQL Server", "PrimeNG", "Entity Framework", "JWT"],
      highlights: [
        "Built complete full-stack solution with Angular frontend and C# .NET Core API",
        "Implemented user authentication system with JWT tokens",
        "Designed admin dashboard for inventory and donor management",
        "Created automated raffle system with winner selection algorithm",
        "Integrated PrimeNG component library for professional UI design",
      ],
      category: "fullstack",
      githubLinks: [
        { label: "Frontend", url: "https://github.com/tehila122333/Angular-Project" },
        { label: "Backend API", url: "https://github.com/tehila122333/API-Project" },
      ],
    },
  ],

  experience: [
    {
      id: "leadtrap",
      role: "Full-Stack Developer",
      company: "LeadTrap",
      period: "03/2026 - Present",
      description: "Full-stack developer on LeadTrap, an AI-powered intake and lead-generation platform serving 100+ ABA healthcare providers. Shipping new product features daily across the frontend and backend, while leveraging AI development tools like Claude Code to deliver high-quality work faster.",
      achievements: [
        "Shipping new full-stack features daily across the frontend (React) and backend (Node.js / TypeScript)",
        "Building features for an AI-powered platform that automates lead qualification, follow-ups, and insurance capture",
        "Leveraging AI development tools like Claude Code to accelerate delivery without compromising code quality",
        "Contributing across the product — from UI and APIs to CRM integrations with HubSpot, GoHighLevel, Zoho, and ClickUp",
      ],
      technologies: ["TypeScript", "Node.js", "React", "Full-Stack Development", "Claude Code", "AI-Assisted Development", "REST APIs", "CRM Integrations"],
      link: "https://leadtrap.com/",
      linkLabel: "More about the company",
      linkType: "company",
    },
    {
      id: "beyond-service",
      role: "Full-Stack Developer",
      company: "Beyond Service",
      period: "2025 - 03/2026",
      description: "Built end-to-end system management platforms, owning both the frontend UI and backend logic with a focus on workflow optimization and efficiency.",
      achievements: [
        "Built an end-to-end system management platform from the ground up, owning both frontend and backend",
        "Designed an optimization feature that automatically routes new delivery addresses to their optimal stop",
        "Cut manual work from hours to seconds through intelligent automation",
        "Improved overall workflow efficiency and usability across the platform",
      ],
      technologies: ["React", "Node.js", "TypeScript", "REST APIs", "System Architecture"],
      link: "https://beyond-service-webapp.vercel.app/",
    },
    {
      id: "castory",
      role: "Frontend Developer",
      company: "Castory",
      period: "2024 - 2025",
      description: "Delivered new features for a construction monitoring platform used by large-scale clients, working with modern frontend technologies and cloud services.",
      achievements: [
        "Delivered production-ready features for an enterprise construction monitoring platform",
        "Integrated AWS services (Lambda, S3) for scalable, cloud-based functionality",
        "Collaborated in Agile sprints, contributing to improved team velocity",
        "Strengthened code quality through peer reviews and best practices",
      ],
      technologies: ["React", "TypeScript", "GraphQL", "AWS Lambda", "AWS S3", "Agile"],
      link: "https://castory-ai.com/",
    },
  ],

  skills: [
    {
      category: "AI & Development Tools",
      items: ["Claude Code", "AI-Assisted Development", "Prompt Engineering", "LLM Integration", "OpenAI API"],
    },
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C"],
    },
    {
      category: "Frontend Technologies",
      items: ["React", "Angular", "HTML", "CSS", "Bootstrap", "PrimeNG", "PrimeReact"],
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "C#.NET", "Python", "Java"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "SQL Server", "SQLite"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS Lambda", "AWS S3", "GraphQL", "REST APIs"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Postman", "OOP", "Design Patterns", "Agile"],
    },
  ],

  education: [
    {
      degree: "Advanced AI-Assisted Development",
      institution: "Vibe Coding",
      period: "2025",
      details: "Specialized training in AI-assisted software development and modern development workflows",
    },
    {
      degree: "Software Engineering Program",
      institution: "MAHAT",
      period: "2022 - 2024",
      details: "Comprehensive software engineering program with GPA: 95",
    },
    {
      degree: "CS Teaching Certification",
      institution: "Ministry of Education",
      period: "2024",
      details: "Certified to teach Computer Science",
    },
  ],
};

// Helper function to get all projects
export const getProjects = (): Project[] => portfolioData.projects;

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return portfolioData.projects.find(project => project.id === id);
};

// Helper function to get all experience
export const getExperience = (): Experience[] => portfolioData.experience;

// Helper function to get all skills
export const getSkills = (): Skill[] => portfolioData.skills;

// Helper function to get education
export const getEducation = (): Education[] => portfolioData.education;

// Helper function to get personal info
export const getPersonalInfo = () => portfolioData.personal;

// For AI chat: Convert portfolio data to a formatted string for context
export const getPortfolioContext = (): string => {
  const { personal, projects, experience, skills, education } = portfolioData;

  return `
Portfolio Owner: ${personal.name}
Title: ${personal.title}
Bio: ${personal.bio}

PROJECTS:
${projects.map(p => `
- ${p.title}: ${p.description}
  Technologies: ${p.technologies.join(', ')}
  Highlights: ${p.highlights.join('; ')}
`).join('\n')}

EXPERIENCE:
${experience.map(e => `
- ${e.role} at ${e.company} (${e.period})
  ${e.description}
  Key Achievements: ${e.achievements.join('; ')}
  Technologies: ${e.technologies.join(', ')}
`).join('\n')}

SKILLS:
${skills.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

EDUCATION:
${education.map(e => `- ${e.degree} from ${e.institution} (${e.period})`).join('\n')}
  `.trim();
};
