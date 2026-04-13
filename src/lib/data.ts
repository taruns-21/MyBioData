export const siteConfig = {
  name: "Tarun S",
  title: "Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91-7019448032",
  email: "tarun21799@gmail.com",
  linkedin: "https://linkedin.com/in/tarun21",
  github: "https://github.com/TarunTechHub",
  whatsapp:
    "https://wa.me/917019448032?text=Hi%20Tarun%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%2Fopportunity.",
  resumeUrl: "/assets/resume/Tarun_Resume.pdf",
  tagline: "I engineer systems that scale and ship products that convert.",
  summary:
    "Full Stack Developer with 3+ years of experience building production systems and modern web applications. I work across backend architecture, APIs, frontend applications, dashboards, search systems, async processing, and AI-powered features — focused on building reliable, scalable solutions that create real business impact.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Business Websites",
    description:
      "High-converting, mobile-first websites built for real businesses — salons, e-commerce, agencies, and more.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Admin Dashboards",
    description:
      "Data-rich dashboards with real-time metrics, filters, and reporting — built for teams that need visibility.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications with authentication, APIs, databases, and polished frontends — production-ready.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "API & Backend Systems",
    description:
      "Scalable REST APIs, microservices, async processing pipelines, and search systems — engineered for performance.",
    gradient: "from-orange-500 to-amber-500",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "+", label: "Featured Projects" },
  { value: 10, suffix: "+", label: "Production Systems Built" },
  { value: 99.9, suffix: "%", label: "System Uptime Delivered" },
];

export const experience = [
  {
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    description:
      "Leading development of backend services and AI-powered features across healthcare provider platforms serving millions of users.",
    highlights: [
      "Architecting scalable backend services with .NET and Solr handling millions of provider records",
      "Built AI-powered review summary features using LLM APIs, reducing manual content processing",
      "Optimized Solr and database queries achieving major latency improvements across critical paths",
      "Improved deployment pipelines using Docker, Kubernetes, and CI/CD for faster releases",
    ],
    technologies: [".NET", "C#", "Solr", "Kubernetes", "Docker", "LLM APIs"],
  },
  {
    role: "Associate Software Engineer",
    period: "Oct 2023 — Jun 2025",
    description:
      "Built core backend systems, APIs, and Vue.js dashboards powering provider leads, reviews, and reporting workflows.",
    highlights: [
      "Built review validation APIs for spam detection, PII filtering, and content quality scoring",
      "Automated provider award distribution workflows, eliminating manual processing bottlenecks",
      "Created Vue.js dashboards for leads tracking and performance metrics visualization",
      "Worked with RabbitMQ for asynchronous task processing across distributed services",
    ],
    technologies: ["Vue.js", "RabbitMQ", ".NET", "REST APIs", "Solr", "CI/CD"],
  },
  {
    role: "Trainee Software Engineer",
    period: "Mar 2023 — Sep 2023",
    description:
      "Onboarded into production systems and contributed to backend services, call tracking systems, and reporting flows.",
    highlights: [
      "Built call tracking systems and reporting flows for provider engagement metrics",
      "Contributed to backend services using .NET and SQL for healthcare data pipelines",
      "Deployed systems on Kubernetes and learned production deployment practices",
      "Collaborated on search optimization using Apache Solr for provider directory search",
    ],
    technologies: [".NET", "SQL", "Kubernetes", "Solr", "Git"],
  },
];

export const skills = {
  Frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
  ],
  Backend: [
    "C#",
    "Python",
    ".NET",
    "ASP.NET Core",
    "REST APIs",
    "Microservices",
  ],
  "Database / Search": [
    "Firebase Firestore",
    "Supabase PostgreSQL",
    "MySQL",
    "Vertica",
    "Apache Solr",
  ],
  "Messaging / Queue": ["RabbitMQ"],
  "DevOps / Cloud": [
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
  ],
  "AI / Monitoring": [
    "LLM API Integration",
    "Grafana",
    "Kibana",
    "Sentry",
  ],
};

export const skillCategoryMeta: Record<
  string,
  { gradient: string; accent: string }
> = {
  Frontend: {
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
  },
  Backend: {
    gradient: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
  },
  "Database / Search": {
    gradient: "from-purple-500/20 to-violet-500/20",
    accent: "text-purple-400",
  },
  "Messaging / Queue": {
    gradient: "from-amber-500/20 to-yellow-500/20",
    accent: "text-amber-400",
  },
  "DevOps / Cloud": {
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
  },
  "AI / Monitoring": {
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
  },
};

export const projects = [
  {
    title: "HiFi Collection",
    description:
      "A modern e-commerce platform built for selling products online with a premium shopping experience. Features product browsing, cart management, and secure checkout — designed to drive sales and reduce bounce rates.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase Firestore",
      "Cloudinary",
      "Razorpay",
    ],
    live: "https://hificollections.in/",
    github: null,
    businessValue:
      "Helped the business move from offline-only to a full online storefront, expanding customer reach and enabling 24/7 purchasing.",
    gradient: "from-violet-600 via-purple-500 to-indigo-600",
  },
  {
    title: "Velvet Family Salon",
    description:
      "A salon booking platform with online appointment scheduling, service catalog, and a polished customer experience. Built with a focus on mobile-first design and conversion optimization.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    live: "https://velvet-family-salon.vercel.app/",
    github: null,
    businessValue:
      "Replaced phone-only bookings with an online scheduling system, reducing no-shows and giving the salon a professional digital presence.",
    gradient: "from-rose-600 via-pink-500 to-fuchsia-600",
  },
];

export const resumeHighlights = [
  "3+ years of full-stack development experience at WebMD",
  "Built backend services handling millions of healthcare provider records",
  "Experience with .NET, C#, Python, JavaScript, TypeScript, React, Vue.js",
  "Deployed and managed systems on Kubernetes with 99.9% uptime",
  "Built AI-powered features using LLM API integrations",
  "Created e-commerce and salon booking platforms as side projects",
  "B.E. in Computer Science & Engineering — PESITM, Shivamogga (2018–2022)",
];

export const education = {
  institution: "PES Institute of Technology and Management, Shivamogga",
  degree: "B.E. in Computer Science & Engineering",
  period: "2018 — 2022",
};
