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
    name: "Your Name", // TODO: Update with your name
    title: "Frontend Engineer",
    bio: "Frontend-focused engineer with strong product and UX thinking. Experienced in building large-scale, real-world systems with a focus on clarity, performance, and usability.",
    location: "Location", // TODO: Update location
    email: "your.email@example.com", // TODO: Update email
    github: "https://github.com/yourusername", // TODO: Update GitHub
    linkedin: "https://linkedin.com/in/yourprofile", // TODO: Update LinkedIn
  },

  projects: [
    {
      id: "activity-progress",
      title: "ActivityProgress",
      description: "Large React component for managing and viewing construction project progress in real-time.",
      technologies: ["React", "TypeScript", "AWS Lambda", "DynamoDB"],
      highlights: [
        "Supports admin and non-admin modes with role-based functionality",
        "Includes editing, date-based filtering, and multiple view modes",
        "Designed for real operational workflows with focus on usability",
        "Integrated navigation to detailed views for project management",
        "Built with performance optimization and scalability in mind",
      ],
      category: "frontend",
    },
    {
      id: "plan-viewer",
      title: "PlanViewer",
      description: "Advanced viewer component for construction plans with support for images and videos.",
      technologies: ["React", "TypeScript", "OpenSeaDragon", "AWS Amplify"],
      highlights: [
        "Split-screen and comparison modes for plan analysis",
        "Integrated with OpenSeaDragon for high-resolution image viewing",
        "Advanced navigation controls and media state handling",
        "Built with extensibility and UX consistency in mind",
        "Supports both images and videos with seamless transitions",
      ],
      category: "frontend",
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Frontend Engineer", // TODO: Update with actual role
      company: "Company Name", // TODO: Update with company name
      period: "YYYY - Present", // TODO: Update with actual dates
      description: "Frontend-focused engineer working on large, real-world cloud-based systems with strong emphasis on product and UX thinking.",
      achievements: [
        "Built features that reduced manual workflows from hours to seconds",
        "Owned complex UI flows end-to-end, from design to deployment",
        "Designed frontend architecture optimized for serverless backends",
        "Focused on reducing manual work and improving user efficiency",
        "Maintained clean, maintainable code with pragmatic solutions",
      ],
      technologies: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "AWS Amplify"],
    },
  ],

  skills: [
    {
      category: "Frontend Development",
      items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Architecture & Design",
      items: ["Component Design", "State Management", "Large-scale UI Structure", "UX Design"],
    },
    {
      category: "Cloud & Backend",
      items: ["AWS Lambda", "DynamoDB", "AWS Amplify", "Serverless Architecture"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "GitHub", "REST APIs", "Performance Optimization"],
    },
  ],

  education: [
    {
      degree: "Degree Name", // TODO: Update with your degree
      institution: "University Name", // TODO: Update with your university
      period: "YYYY - YYYY", // TODO: Update with dates
      details: "Add any relevant details here", // Optional
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
