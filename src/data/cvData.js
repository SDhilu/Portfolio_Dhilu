export const cvData = {
  personal: {
    name: "Dhilushan Sivakumar",
    title: "Associate Software Engineer",
    subtitle: "Specializing in Software Engineering, Frontend/Full-Stack Development & Applied Machine Learning",
    bio: "Final-year BSc (Hons) Computer Science student at IIT (affiliated with the University of Westminster) specializing in software engineering, frontend/full-stack development, and applied machine learning.",
    location: "Colombo, Sri Lanka",
    email: "sdhilushan20@gmail.com",
    phone: "+94-772184107",
    website: "https://dhilushansivakumar.dev",
    github: "https://github.com/SDhilu",
    linkedin: "https://www.linkedin.com/in/dhilushan-sivakumar-61a702240/",
    openToWork: true,
    statusText: "Open for Associate & Software Engineer Roles",
    pdfCvUrl: "/Dhilushan_CV.pdf",
  },

  stats: [
    { label: "Degree", value: "BSc (Hons) CS" },
    { label: "Institution", value: "IIT / UoW, UK" },
    { label: "Core Focus", value: "Full Stack & ML" },
    { label: "Status", value: "Graduate" }
  ],

  workExperiences: [
    {
      id: "exp-1",
      role: "Software Engineer Trainee",
      company: "Cookers Oil",
      companyUrl: "",
      location: "Sri Lanka",
      period: "Apr 2025 – Nov 2025",
      type: "Full-time",
      summary: "Engineered responsive web interfaces and supported internal engineering workflows.",
      responsibilities: [
        "Developed responsive UI modules and internal web tools using React and TypeScript.",
        "Handled cross-functional workflows and balanced technical execution with operational tasks.",
        "Collaborated with engineering team members to optimize frontend performance and maintain clean code standards."
      ],
      achievements: [
        "Delivered critical internal web tools on schedule using React & TypeScript."
      ],
      techStack: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Web Tools"]
    },
    {
      id: "exp-2",
      role: "UI / UX Designer Intern",
      company: "IN10NT Digital",
      companyUrl: "",
      location: "Sri Lanka",
      period: "Aug 2024 – Mar 2025",
      type: "Internship",
      summary: "Designed high-fidelity user experiences and bridged UI/UX prototypes into production-ready code.",
      responsibilities: [
        "Designed wireframes and high-fidelity UI prototypes in Figma for web/mobile applications.",
        "Bridged design and engineering by translating assets into frontend-ready code and participating in UI/UX reviews.",
        "Created user journey maps and interactive prototypes to validate client product requirements."
      ],
      achievements: [
        "Successfully translated complex design wireframes into frontend-ready code artifacts."
      ],
      techStack: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Frontend Code", "User Research"]
    }
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "ReactJS", level: "Expert" },
        { name: "Flask", level: "Intermediate" },
        { name: "TailwindCSS", level: "Advanced" },
        { name: "Java Swing", level: "Intermediate" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Google Antigravity SDK", level: "Advanced" },
        { name: "Scikit-learn", level: "Advanced" },
        { name: "NumPy", level: "Advanced" },
        { name: "NLP (Natural Language Processing)", level: "Advanced" },
        { name: "Agentic Workflows", level: "Advanced" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Firebase", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Git / GitHub", level: "Expert" },
        { name: "Postman", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "VS Code", level: "Expert" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Smart Travel Planner (Final Year Project)",
      subtitle: "End-to-End Personalized Travel Platform with ML Engine",
      category: "Full Stack",
      period: "2025 — 2026",
      description: "End-to-end travel platform featuring ML-driven itinerary personalization, dynamic route mapping, and real-time data sync.",
      detailedOverview: "Built as a final year undergraduate research project. Integrates a Python Flask machine learning backend using Scikit-learn & NumPy for TF-IDF content filtering with a responsive ReactJS frontend and Firebase real-time database.",
      architectureHighlights: [
        "ML-driven itinerary personalization with TF-IDF content filtering.",
        "Real-time data synchronization powered by Firebase.",
        "REST API integration with Flask backend and ReactJS frontend."
      ],
      techStack: ["ReactJS", "Python", "Flask", "Scikit-learn", "NumPy", "Firebase", "REST APIs"],
      githubUrl: "https://github.com/dhilushansivakumar/smart-travel-planner",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-3",
      title: "EXPLORA Travel Web Application",
      subtitle: "Interactive Travel Planning Platform",
      category: "Full Stack",
      period: "2024",
      description: "Travel planning web application built with ReactJS, TailwindCSS, Figma, and REST APIs (tested via Postman).",
      detailedOverview: "Designed in Figma and implemented in ReactJS with TailwindCSS for styling. Features intuitive itinerary exploration, API data integration, and responsive layout.",
      architectureHighlights: [
        "Figma UI prototypes translated into component code.",
        "TailwindCSS utility styling for modern responsive layouts.",
        "REST API data consumption & Postman test collection."
      ],
      techStack: ["ReactJS", "TailwindCSS", "Figma", "REST APIs", "Postman"],
      githubUrl: "https://github.com/dhilushansivakumar",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-4",
      title: "Email Spam Filter",
      subtitle: "NLP Machine Learning Classification Model",
      category: "AI / ML",
      period: "2024",
      description: "NLP-based machine learning classification model built using Python and Scikit-learn to benchmark spam detection.",
      detailedOverview: "Utilizes natural language processing text vectorization and Scikit-learn classifiers to detect and classify spam emails with high accuracy.",
      architectureHighlights: [
        "TF-IDF text feature extraction.",
        "Model training and evaluation benchmarks.",
        "Python Scikit-learn classification pipeline."
      ],
      techStack: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
      githubUrl: "https://github.com/dhilushansivakumar",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-5",
      title: "Edusity",
      subtitle: "Responsive Educational Platform",
      category: "Frontend",
      period: "2024",
      description: "Responsive education web application built with ReactJS component-based architecture.",
      detailedOverview: "Modern landing page and interactive platform for educational courses with clean UI components and smooth scrolling.",
      architectureHighlights: [
        "Modular React component structure.",
        "Mobile-first responsive styling.",
        "Interactive course catalog."
      ],
      techStack: ["ReactJS", "JavaScript", "CSS3"],
      githubUrl: "https://github.com/dhilushansivakumar",
      liveUrl: "",
      featured: true
    },
    {
      id: "proj-6",
      title: "Shopping Cart & Weather Mobile UI",
      subtitle: "Java Desktop System & Figma UI Prototypes",
      category: "Frontend",
      period: "2023",
      description: "Secondary projects showcasing Java/Swing desktop application development and Figma mobile weather app UI design.",
      detailedOverview: "Demonstrates object-oriented programming principles using Java Swing GUI components for e-commerce cart management alongside high-fidelity Figma mobile UI designs.",
      architectureHighlights: [
        "Java Swing GUI event handling.",
        "Object-oriented software design patterns.",
        "Figma mobile weather UI design system."
      ],
      techStack: ["Java", "Java Swing", "Figma", "UI/UX Design"],
      githubUrl: "https://github.com/dhilushansivakumar",
      liveUrl: "",
      featured: false
    }
  ],

  education: [
    {
      degree: "BSc (Hons) Computer Science",
      institution: "Informatics Institute of Technology (IIT)",
      period: "2023 — 2026",
      location: "Affiliated with University of Westminster, UK",
      details: "Specializing in Software Engineering, Full-Stack Web Development, and Applied Machine Learning.",
      honors: ["Final-Year Student", "Smart Travel Planner ML Capstone Project"]
    },
    {
      degree: "Foundation in Information Technology",
      institution: "Informatics Institute of Technology (IIT)",
      period: "2022",
      location: "Colombo, Sri Lanka",
      details: "Comprehensive foundation covering programming fundamentals, web technologies, and mathematics for computing.",
      honors: []
    }
  ],

  // certifications: [
  //   {
  //     title: "UI/UX Design & Frontend Development",
  //     issuer: "IIT / IN10NT Digital",
  //     date: "2024 — 2025",
  //     credentialUrl: "#"
  //   },
  //   {
  //     title: "Applied Machine Learning & NLP",
  //     issuer: "Westminster CS Curriculum",
  //     date: "2024",
  //     credentialUrl: "#"
  //   }
  // ]
};
