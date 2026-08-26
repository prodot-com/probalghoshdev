type Project = {
  name: string;
  slug: string;
  description: string;
  tools: string[];
  image?: string;
  link?: {
    gitlink?: string;
    livelink?: string;
  };
  status: boolean;
  working?: boolean;
  badge?: {
    text: string;
    color: string;
    icon: string;
    iconColor?: string;
  };
};

export type AchievementItem = {
  title: string;
  title2: string;
  subname2: string;
  subname: string;
  conference: string;
  doiLink: string;
  abstract: string;
  tags: string[];
  doi?: string;
  link: string;
  image?: string;
  year: string;
  docLink: string;
  favicon?: string;
};

export const projects: Project[] = [
  {
    name: "OneProfile",
    slug: "oneprofile",
    description:
      "A modern, open-source link-in-bio platform inspired by Linktree, built for creators, developers, and businesses. Features customizable profile pages, unlimited links, theme personalization, social integrations, analytics, and seamless self-hosting.",
    tools: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/oneprofile.png",
    link: {
      gitlink: "https://github.com/prodot-com/OneProfile",
      livelink: "https://one-profilex.vercel.app/",
    },
    status: true,
    working: true,
    badge: {
      text: "Building",
      color: "from-violet-500 to-indigo-600",
      icon: "hammer",
    },
  },
  {
    name: "Paperless",
    slug: "paperless",
    description:
      "A secure digital workspace for structured note-taking and cloud file management. Features Google authentication, real-time storage tracking, file sharing, and encrypted uploads.",
    tools: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Cloudflare",
      "Tailwind",
    ],
    image: "/paperless.png",
    link: {
      gitlink: "https://github.com/prodot-com/paperless",
      livelink: "https://paperless.probalghosh.dev",
    },
    status: true,
    working: true,
    badge: {
      text: "Encrypted",
      color: "from-emerald-400 to-green-600",
      icon: "shield",
    },
  },
  {
    name: "GithubWrapX",
    slug: "githubwrapx",
    description:
      "Visualize coding activity throughout the year with animations, persona, and final shareable card. Get AI quote.",
    tools: ["Next.js", "Tailwind", "GraphQL", "OpenAI"],
    image: "/githubwrapx.png",
    link: {
      gitlink: "https://github.com/prodot-com/GithubWrap",
      livelink: "https://githubwrapx.vercel.app",
    },
    status: true,
    working: true,
  },
  {
    name: "Cric-Scoreboard",
    slug: "cricscoreboard",
    description:
      "Provides live ball-by-ball scoring for cricket matches. It includes an admin panel for scoring and a shareable spectator link, with updates powered by Socket.IO.",
    tools: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
    image: "/cricscoreboard.png",
    link: {
      gitlink: "https://github.com/prodot-com/Cric-Scoreboard",
      livelink: "https://cric-scoreboard.vercel.app/",
    },
    status: true,
    working: true,
    badge: {
      text: "Cricket",
      color: "from-orange-400 to-red-500",
      icon: "trophy",
    },
  },
  {
    name: "SyncSpace",
    slug: "syncspace",
    description:
      "Built for streamlined team collaboration. Features secure user authentication, role-based access, comprehensive team and task management, realtime notifications.",
    tools: ["React", "Node.js", "MongoDB", "Zod", "Tailwind", "Socket.IO"],
    image: "/syncspace.png",
    link: {
      gitlink: "https://github.com/prodot-com/SyncSpace",
      livelink: "https://sync-space-dun.vercel.app/",
    },
    status: true,
    working: true,
  },
];

export const achievements: AchievementItem[] = [
  {
    subname: "Multimodal Sensor Fusion for Heart Disease Prediction",
    subname2:
      "Towards Smarter Healthcare: A Multimodal Sensor Fusion Approach for Heart Disease Prediction with Artificial Intelligence.",
    title: "IEEE Conference Publication - ICRCICN 2025",
    title2:
      "Towards Smarter Healthcare: A Multimodal Sensor Fusion Approach for Heart Disease Prediction with Artificial Intelligence",
    conference:
      "2025 International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN) - KALYANI",
    abstract:
      "This research presents a multimodal deep learning framework integrating ECG image analysis using CNN and structured clinical data processed through an MLP via a late-fusion architecture. The system predicts cardiovascular disease risk across three categories — Normal, Mild Risk, and High Risk. The proposed approach enhances diagnostic accuracy by combining heterogeneous physiological data sources and demonstrates strong performance with 90.67% accuracy and a 0.91 F1-score. The model was rigorously evaluated using standard classification metrics and deployed through an interactive application to support real-time clinical risk assessment.",

    tags: [
      "IEEE 2025",
      "Artificial Intelligence",
      "Multimodal Fusion",
      "CNN + MLP",
      "Healthcare AI",
      "IoT Healthcare",
      // "Deep Learning",
      "90.67% Accuracy",
    ],
    doi: "10.1109/ICRCICN68210.2025.11364968",
    doiLink: "https://doi.org/10.1109/ICRCICN68210.2025.11364968",
    link: "https://ieeexplore.ieee.org/document/11364968",
    image: "/achievement1.jpg",
    favicon: "/ieee.png",
    year: "2025",
    docLink:
      "https://drive.google.com/file/d/1AsBvg-XYgAzTrBrObN3aWeJyJxGQ-LoX/view?usp=sharing",
  },
];

type ExperienceItem = {
  icon: string;
  company: string;
  sub?: string;
  startDate: string;
  endDate?: string;
  link?: string;
  description?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    icon: "/erfolgwerke.svg",
    company: "Erfolgwerke",
    sub: "Freelance Full Stack Developer",
    startDate: "April 2026",
    endDate: "June 2026",
    description: [
      "Engineered a configurable audit form builder supporting reusable components, conditional logic, macros, and draft-based workflows for enterprise audit processes.",
      "Implemented audit lifecycle features including audit history, KYC verification, structured document repositories, and role-based document management.",
      "Integrated Appwrite backend services and REST APIs to build secure, scalable data management and file handling solutions.",
      "Developed responsive user interfaces with Next.js, TypeScript, Tailwind CSS, and Framer Motion while optimizing performance and maintainability.",
      "Worked in an agile development environment, collaborating through feature branches, code reviews, and iterative releases to deliver production-ready functionality.",
    ],
  },
  {
    icon: "/zaalima.svg",
    company: "Zaalima Development",
    sub: "Software Engineer",
    startDate: "August 2025",
    endDate: "October 2025",
    description: [
      "Built and optimized full-stack web applications using the MERN stack. Implemented secure authentication, real-time features, and responsive UIs with smooth frontend–backend integration for high-performance user experiences.",
    ],
  },
];
