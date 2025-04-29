export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  githubUrl: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
}

export const personalInfo = {
  name: "Vivek Patel",
  title: "UI Developer / Software Engineer",
  summary: "Proficient UI Developer with 3+ years of experience in building dynamic, user-friendly web applications. Skilled in React.js, Redux, and data visualization libraries such as ECharts and Reactflow.",
  email: "patelvivek7879@gmail.com",
  linkedin: "patelvivek7879",
  location: "Indore, Madhya Pradesh, India",
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer (UI)",
    company: "The Modern Data Company",
    location: "Indore",
    period: "November 2021 - Present",
    description: [
      "Implemented dynamic in-memory caching with expiration policies, reducing API response time by 30% and enhancing overall performance.",
      "Orchestrated the development and maintenance of critical web applications, achieving a 20% improvement in efficiency and aligning with organizational goals.",
      "Engineered Backend for Frontend server API using Node.js and ExpressJs to seamlessly integrate with various external systems, optimizing data processing workflows.",
      "Developed user interface elements and component libraries using React.js and Ant Design, enhancing usability, aesthetics, and page load times by 25%, leading to a 15% increase in user engagement."
    ]
  },
  {
    role: "Software Engineer - Intern (UI)",
    company: "The Modern Data Company",
    location: "Indore",
    period: "September 2021 - October 2021",
    description: [
      "Collaborated with the development team to enhance multiple product components, and identify, and resolve many bugs, resulting in a 20% increase in functionality and improved user experience.",
      "Implemented UI changes using HTML, CSS, and JavaScript to enhance the look and feel of the application, resulting in a 25% increase in user satisfaction and a 15% reduction in user onboarding time.",
      "Participated in code reviews and provided constructive feedback to peers, fostering a collaborative and productive team environment."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Practice Postgres",
    description: [
      "An educational platform that improves learning PostgreSQL by 20%, enhancing its ease of understanding for beginners.",
      "Designed hands-on exercises and real-world scenarios to reinforce learning.",
      "Implemented instant feedback and progress tracking for user engagement.",
      "Enabled users to build practical skills in database management and SQL querying with 20% better and faster results."
    ],
    technologies: ["JavaScript", "PostgreSQL", "React", "Node.js"],
    githubUrl: "https://github.com/patelvivek7879/postgres-by-practice"
  },
  {
    title: "AI Summarizer",
    description: [
      "Developed a tool that enables users to quickly obtain summaries of lengthy articles or web content, reducing reading time by 30% and improving user efficiency by 25%.",
      "Users can input the URL of any webpage or article they wish to summarize in just a few seconds, reducing content retrieval time by 40%.",
      "The application leverages the Rapid AI API for content summarization, utilizing advanced natural language processing techniques."
    ],
    technologies: ["React", "JavaScript", "Rapid AI API", "CSS"],
    githubUrl: "https://github.com/patelvivek7879/ai_summarizer"
  }
];

export const education: Education[] = [
  {
    degree: "Master of Computer Application",
    institution: "IPS Academy",
    location: "Indore, Madhya Pradesh",
    year: "2021",
    score: "8.20"
  },
  {
    degree: "Bachelor of Science",
    institution: "Vikram University, Ujjain",
    location: "Ujjain, Madhya Pradesh",
    year: "2018",
    score: "55"
  }
];

export const skills = {
  core: ["React.js", "Redux", "TypeScript", "JavaScript", "HTML/CSS", "API Integration"],
  libraries: ["Ant Design", "ECharts", "G6", "React Flow", "react-awesome-query-builder", "NodeJs", "ExpressJS"],
  tools: ["Git", "VS Code", "Docker"]
};