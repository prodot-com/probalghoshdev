type Project = {
  name: string;
  slug:string;
  description: string;
  tools: string[];
  image?: string;
  link?: {
    gitlink?: string;
    livelink?: string;
  };
  status: boolean;
};

export type AchievementItem = {
  icon: string;
  title: string;
  title2: string;
  subname: string;
  conference: string;
  location?: string;
  authors: string[];
  abstract: string;
  tags: string[];
  metrics: {
    accuracy?: string;
    f1Score?: string;
    improvement?: string;
  };
  year: string;
  doi?: string;
  link: string;
  image?: string;
};


export const projects: Project[] = [
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
      "Tailwind"
    ],
    image: "/paperless.png",
    link: {
      gitlink: "https://github.com/prodot-com/paperless",
      livelink: "https://paperless.probalghosh.dev",
    },
    status: true,
  },
  {
    name:"GithubWrapX",
    slug: "githubwrapx",
    description: "Visualize coding activity throughout the year with animations, persona, and final shareable card. Get AI quote.",
    tools: ["Next.js", "Tailwind", "GraphQL", "OpenAI"],
    image: "/githubwrapx.png",
    link: {
      gitlink: "https://github.com/prodot-com/GithubWrap",
      livelink: "https://githubwrapx.vercel.app",
    },
    status: true

  },
  {
    name: "Cric-Scoreboard",
    slug: 'cricscoreboard',
    description:
      "Provides live ball-by-ball scoring for cricket matches. It includes an admin panel for scoring and a shareable spectator link, with updates powered by Socket.IO.",
    tools: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
    image: "/cricscoreboard.png",
    link: {
      gitlink: "https://github.com/prodot-com/Cric-Scoreboard",
      livelink: "https://cric-scoreboard.vercel.app/",
    },
    status: true,
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
  },
];


export const achievements: AchievementItem[] = [
  {
    icon: "/ieee.png",
    subname:
      "Multimodal Sensor Fusion for Heart Disease Prediction",

    title: "IEEE Conference Publication - ICRCICN 2025",

    title2:
      "Towards Smarter Healthcare: A Multimodal Sensor Fusion Approach for Heart Disease Prediction with Artificial Intelligence",

    conference:
      "2025 International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN)",

    location: "India",

    authors: [
      "Probal Ghosh",
      "Ritu Kundu",
      "Sima Ghosh",
      "Sudakshina Dasgupta",
    ],

    abstract:
      "This research presents a multimodal deep learning framework integrating ECG image analysis using CNN and clinical tabular data using MLP through a late-fusion architecture. The system predicts cardiovascular disease risk across three categories — Normal, Mild Risk, and High Risk. The proposed approach improves diagnostic performance by combining heterogeneous physiological and behavioral data sources.",

    tags: [
      "IEEE 2025",
      "Artificial Intelligence",
      "Multimodal Fusion",
      "CNN + MLP",
      "Healthcare AI",
      "IoT Healthcare",
      "Deep Learning",
      "90.67% Accuracy",
    ],

    metrics: {
      accuracy: "90.67%",
      f1Score: "0.91",
      improvement: "14.7%",
    },

    year: "2025",

    doi: "10.1109/ICRCICN68210.2025.11364968",

    link: "https://ieeexplore.ieee.org/document/11364968",

    image: "/ieee.png",
  },
];


// export const achievements: AchievementItem[] = [
//   {
//     icon: "/ieee.png",
//     title: "IEEE Conference Publication - ICRCICN 2025",
//     tags: [
//                 "IEEE 2025",
//                 "Artificial Intelligence",
//                 "Multimodal Fusion",
//                 "CNN + MLP",
//                 "Healthcare AI",
//                 "90.67% Accuracy",
//             ],
//     subname:
//       "Multimodal Sensor Fusion for Heart Disease Prediction",
//     year: "2025",
//     link: "https://ieeexplore.ieee.org/document/11364968",
//   },
// ];