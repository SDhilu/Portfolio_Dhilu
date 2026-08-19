export const cvData = {
  personal: {
    name: "Dhilushan Sivakumar",
    title: "Full-Stack Software Engineer",
    subtitle: "Specializing in React, Node.js, Cloud Architectures & Intelligent Web Applications",
    bio: "Results-driven Software Engineer with expertise in building scalable web applications, modern UI/UX design systems, and cloud backend services. Passionate about clean code, high performance, and delivering seamless user experiences.",
    location: "Colombo, Sri Lanka",
    email: "dhilushansiva@gmail.com",
    phone: "+94 77 123 4567",
    website: "https://dhilushansivakumar.dev",
    github: "https://github.com/dhilushansivakumar",
    linkedin: "https://linkedin.com/in/dhilushansivakumar",
    openToWork: true,
    statusText: "Open to Full-Time & Contract Opportunities",
    pdfCvUrl: "#",
  },
  
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "12+" },
    { label: "Core Tech Stack", value: "React / Node / Python" },
    { label: "Code Quality", value: "Clean & Tested" }
  ],

  workExperiences: [
    {
      id: "exp-1",
      role: "Senior Full-Stack Developer",
      company: "Apex Tech Solutions",
      companyUrl: "https://example.com",
      location: "Colombo, Sri Lanka",
      period: "2024 — Present",
      type: "Full-time",
      summary: "Leading the development of enterprise web applications and modernizing client microservice architectures.",
      responsibilities: [
        "Architected and deployed modern React and Node.js web applications, reducing average page load times by 40%.",
        "Engineered RESTful and GraphQL APIs integrating third-party payment gateways, authentication providers, and cloud storage.",
        "Mentored junior developers, conducted rigorous code reviews, and enforced CI/CD automated testing standards.",
        "Collaborated closely with product designers and stakeholders to deliver accessible, responsive user interfaces."
      ],
      achievements: [
        "Boosted system throughput by 35% by implementing Redis caching layer.",
        "Spearheaded migration to Docker containerized microservices."
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "TailwindCSS"]
    },
    {
      id: "exp-2",
      role: "Software Engineering Intern / Associate",
      company: "Smart Travel Systems",
      companyUrl: "https://example.com",
      location: "Remote / Sri Lanka",
      period: "2023 — 2024",
      type: "Full-time",
      summary: "Developed intelligent travel recommendation engines and interactive mapping interfaces.",
      responsibilities: [
        "Designed and implemented TF-IDF based content filtering algorithms in Python for personalized travel recommendations.",
        "Integrated Google Maps API, Google Places, and OpenWeather APIs for dynamic route planning.",
        "Developed responsive dashboard interfaces in React using state management and modular CSS design tokens.",
        "Configured Firebase Authentication and Firestore real-time database models."
      ],
      achievements: [
        "Achieved >90% recommendation accuracy benchmark during system evaluation.",
        "Selected as top intern project for final year showcase."
      ],
      techStack: ["React.js", "Python", "Flask", "Firebase", "Google Maps API", "CSS Modules"]
    },
    {
      id: "exp-3",
      role: "Frontend Web Developer",
      company: "Digital Edge Agency",
      companyUrl: "https://example.com",
      location: "Colombo, Sri Lanka",
      period: "2022 — 2023",
      type: "Contract / Part-Time",
      summary: "Crafted custom high-converting web applications, e-commerce storefronts, and interactive client landing pages.",
      responsibilities: [
        "Built 10+ custom web interfaces with strict attention to mobile-first responsive design, web performance, and SEO.",
        "Optimized web vital scores (LCP, CLS, FID) to achieve sub-second load times.",
        "Worked directly with clients to turn design wireframes into pixel-perfect interactive code."
      ],
      achievements: [
        "Maintained a 100% client satisfaction score across all delivered client deliverables."
      ],
      techStack: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Git", "REST APIs"]
    }
  ],

  skills: [
    {
      category: "Frontend Engineering",
      skills: [
        { name: "React.js / Next.js", level: "Expert" },
        { name: "JavaScript (ES6+) / TypeScript", level: "Expert" },
        { name: "HTML5 / CSS3 / Vanilla CSS", level: "Expert" },
        { name: "State Management (Redux / Context)", level: "Advanced" },
        { name: "Responsive UI & Animations", level: "Expert" }
      ]
    },
    {
      category: "Backend & Cloud Services",
      skills: [
        { name: "Node.js / Express.js", level: "Advanced" },
        { name: "Python / Flask / FastAPI", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Expert" },
        { name: "PostgreSQL / MySQL / MongoDB", level: "Advanced" },
        { name: "Firebase / Supabase", level: "Advanced" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git / GitHub / Version Control", level: "Expert" },
        { name: "Docker & Containerization", level: "Intermediate" },
        { name: "Vite / Webpack / Build Tools", level: "Advanced" },
        { name: "CI/CD Pipelines (GitHub Actions)", level: "Intermediate" },
        { name: "Vercel / Netlify / Render Deployment", level: "Advanced" }
      ]
    },
    {
      category: "Architecture & Machine Learning",
      skills: [
        { name: "Content-Based Filtering (TF-IDF)", level: "Intermediate" },
        { name: "System Design & REST Architectures", level: "Advanced" },
        { name: "Performance Optimization & SEO", level: "Advanced" },
        { name: "Agile / Scrum Methodologies", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Smart Travel Planner & Recommendation Engine",
      subtitle: "AI-powered personalized travel itinerary generator & route optimizer",
      category: "Full Stack",
      period: "2024",
      description: "An intelligent web application that generates custom multi-day travel plans using TF-IDF content filtering and interactive map route optimization.",
      detailedOverview: "Built with a modular Python Flask backend and React frontend. Leverages TF-IDF algorithms to match user interest tags with destination attributes, complete with real-time currency conversion and Google Maps API route navigation.",
      architectureHighlights: [
        "TF-IDF Machine Learning recommendation engine.",
        "Dynamic route calculation with Google Maps integration.",
        "Firebase real-time auth and cloud storage."
      ],
      techStack: ["React", "Python", "Flask", "TF-IDF", "Google Maps API", "Firebase"],
      githubUrl: "https://github.com/dhilushansivakumar/smart-travel-planner",
      liveUrl: "https://example.com/demo-planner",
      featured: true
    },
    {
      id: "proj-2",
      title: "Enterprise Inventory & Analytics Dashboard",
      subtitle: "Real-time administrative portal with data visualization and export capabilities",
      category: "Full Stack",
      period: "2024",
      description: "A high-performance management dashboard featuring interactive charts, inventory tracking, role-based access control, and PDF report generation.",
      detailedOverview: "Engineered for high data throughput using React, Recharts, Node.js, and PostgreSQL. Features real-time websockets for stock updates and clean dark/light mode UI.",
      architectureHighlights: [
        "Role-based authentication & permissions.",
        "Interactive Chart.js / Recharts visualization.",
        "Automated PDF export engine."
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
      githubUrl: "https://github.com/dhilushansivakumar/analytics-dashboard",
      liveUrl: "https://example.com/demo-dashboard",
      featured: true
    },
    {
      id: "proj-3",
      title: "Minimalist CV & Portfolio Builder",
      subtitle: "Modern single-page application with printable resume engine",
      category: "Frontend",
      period: "2026",
      description: "A sleek, responsive, and minimalist interactive portfolio & resume showcase designed for modern job seekers.",
      detailedOverview: "Designed with vanilla CSS design tokens, smooth scroll animations, dark/light theme switching, and built-in CSS print optimization for instant PDF export.",
      architectureHighlights: [
        "Zero-dependency custom CSS design tokens.",
        "Print-optimized stylesheet for 1-click A4 PDF export.",
        "Centralized JSON data model."
      ],
      techStack: ["React", "Vite", "Vanilla CSS", "Lucide React"],
      githubUrl: "https://github.com/dhilushansivakumar/Portfolio",
      liveUrl: "https://dhilushansivakumar.dev",
      featured: true
    }
  ],

  education: [
    {
      degree: "B.Sc. (Hons) in Software Engineering",
      institution: "State University of Technology",
      period: "2021 — 2025",
      location: "Sri Lanka",
      details: "First Class Honors candidate. Focus on Web Development, Algorithms, Software Architecture, and Data Science.",
      honors: ["Dean's Honor List (2022, 2023)", "Best Final Year Project Nominee"]
    }
  ],

  certifications: [
    {
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera / Meta",
      date: "2023",
      credentialUrl: "https://coursera.org"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialUrl: "https://aws.amazon.com"
    }
  ]
};
