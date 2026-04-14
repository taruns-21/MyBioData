export const siteConfig = {
  name: "Tarun S",
  title: "Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91-7019448032",
  email: "tarun21799@gmail.com",
  linkedin: "https://linkedin.com/in/tarun21",
  github: "https://github.com/taruns-21",
  whatsapp:
    "https://wa.me/917019448032?text=Hi%20Tarun%2C%20I%20came%20across%20your%20portfolio...",
  resumeUrl: "https://drive.google.com/file/d/1tqCZnDqDGUf6MJ9Cu4dbQB8JcBf-BWsS/view?usp=sharing",
  tagline: "I build well-engineered backend systems and web applications.",
  summary:
    "I'm a Full Stack Developer with 3+ years of experience. I currently work at WebMD building backend services, and I also develop custom web applications for businesses.",
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

export const workExperience = [
  {
    company: "WebMD",
    location: "Mumbai, India",
    roles: [
      {
        title: "Software Engineer",
        period: "Jul 2025 — Present",
        summary: "Working on backend architecture and API development.",
        points: [
          "Building backend services with .NET and Solr for large data logic.",
          "Integrated LLM APIs for automated content tools.",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Oct 2023 — Jun 2025",
        summary: "Developed backend services and frontend dashboards for internal workflows.",
        points: [
          "Built validation APIs for content moderation and filtering.",
          "Automated provider workflow tasks to remove manual bottlenecks.",
        ],
      },
      {
        title: "Trainee Software Engineer",
        period: "Mar 2023 — Sep 2023",
        summary: "Supported core engineering teams on data pipelines and search features.",
        points: [
          "Contributed to reporting tools and call tracking systems.",
          "Maintained Solr configurations for directory search.",
        ],
      },
    ],
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
  ],
  "Database / Search": [
    "Firebase",
    "Supabase",
    "MySQL",
    "Vertica",
    "Apache Solr",
  ],
  "Infrastructure": [
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "Git",
    "CI/CD",
  ],
};

export const skillCategoryMeta: Record<
  string,
  { gradient: string; accent: string }
> = {
  Frontend: {
    gradient: "from-zinc-500/10 to-zinc-500/10",
    accent: "text-zinc-600 dark:text-zinc-400",
  },
  Backend: {
    gradient: "from-zinc-500/10 to-zinc-500/10",
    accent: "text-zinc-600 dark:text-zinc-400",
  },
  "Database / Search": {
    gradient: "from-zinc-500/10 to-zinc-500/10",
    accent: "text-zinc-600 dark:text-zinc-400",
  },
  "Infrastructure": {
    gradient: "from-zinc-500/10 to-zinc-500/10",
    accent: "text-zinc-600 dark:text-zinc-400",
  },
};

export const projects = [
  {
    title: "HiFi Collection",
    description:
      "An e-commerce storefront with cart management, live checkout, and an admin panel.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Razorpay",
    ],
    live: "https://hificollections.in/",
    github: null,
    image: "/MyBioData/assets/projects/hifi.png",
    businessValue:
      "Allowed the local business to bypass manual WhatsApp ordering entirely.",
    gradient: "from-zinc-600 via-zinc-500 to-zinc-600",
  },
  {
    title: "Velvet Family Salon",
    description:
      "A booking application allowing users to schedule salon appointments directly.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    live: "https://velvet-family-salon.vercel.app/",
    github: null,
    image: "/MyBioData/assets/projects/velvet.png",
    businessValue:
      "Reduced phone calls and manual scheduling errors for the salon staff.",
    gradient: "from-zinc-600 via-zinc-500 to-zinc-600",
  },
];

export const resumeHighlights = [
  "3+ years of engineering experience across the stack",
  "Working at WebMD on high-traffic healthcare infrastructure",
  "Experience with .NET, C#, Python, TypeScript, and React",
  "Proven record of deploying side projects for real businesses",
  "B.E. in Computer Science & Engineering (2018–2022)",
];

export const education = {
  institution: "PES Institute of Technology and Management, Shivamogga",
  degree: "B.E. in Computer Science & Engineering",
  period: "2018 — 2022",
};
