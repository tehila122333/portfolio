// Portfolio Data - Update this file to modify your portfolio content

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: 'frontend' | 'fullstack' | 'cloud';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
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
    bio: "Frontend & Full-Stack Developer skilled in building scalable, user-focused web applications. Experienced with React, Angular, Node.js, and cloud technologies. Fast learner with strong problem-solving abilities and a track record of creating impactful, efficiency-boosting features.",
    location: "Israel",
    email: "ftehila123@gmail.com",
    github: "https://github.com/tehila122333",
    linkedin: "", // Add your LinkedIn if you have one
  },

  projects: [
    {
      id: "newspaper-delivery",
      title: "Newspaper Delivery System",
      description: "Full operational platform supporting 3,000+ customers with comprehensive delivery management capabilities.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js"],
      highlights: [
        "Built a complete platform serving over 3,000 active customers",
        "Implemented admin dashboard with comprehensive management tools",
        "Developed offline mobile views for field workers",
        "Created advanced route-based logic for efficient delivery planning",
        "Designed scalable architecture to handle high user volume",
      ],
      category: "fullstack",
    },
    {
      id: "delivery-optimization",
      title: "Delivery System Management Platform",
      description: "End-to-end system management platform with intelligent optimization features for delivery operations.",
      technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
      highlights: [
        "Built full-stack platform handling frontend UI and backend logic",
        "Designed optimization feature that automatically selects optimal insertion points for new delivery addresses",
        "Reduced manual workflow time from hours to seconds",
        "Improved overall system usability and workflow efficiency",
        "Implemented real-time data processing and updates",
      ],
      category: "fullstack",
    },
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
  ],

  experience: [
    {
      id: "beyond-service",
      role: "Full-Stack Developer",
      company: "Beyond Service",
      period: "2025 - Present",
      description: "Building end-to-end system management platforms, handling both frontend UI and backend logic with focus on workflow optimization and efficiency.",
      achievements: [
        "Built an end-to-end system management platform from the ground up",
        "Designed optimization feature that automatically selects optimal insertion points for new delivery addresses",
        "Reduced manual work from hours to seconds through intelligent automation",
        "Improved overall workflow efficiency and system usability across the platform",
        "Handled both frontend UI development and backend logic implementation",
      ],
      technologies: ["React", "Node.js", "TypeScript", "REST APIs", "System Architecture"],
    },
    {
      id: "castory",
      role: "Frontend Developer",
      company: "Castory",
      period: "2024 - 2025",
      description: "Delivered new features for a construction monitoring platform used by large-scale clients, working with modern frontend technologies and cloud services.",
      achievements: [
        "Delivered production-ready features for enterprise construction monitoring platform",
        "Worked with React, TypeScript, and GraphQL in a professional team environment",
        "Integrated AWS services (Lambda, S3) for scalable cloud-based features",
        "Collaborated in Agile sprints, contributing to improved team velocity",
        "Enhanced code quality through peer reviews and adherence to best practices",
      ],
      technologies: ["React", "TypeScript", "GraphQL", "AWS Lambda", "AWS S3", "Agile"],
    },
  ],

  skills: [
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
