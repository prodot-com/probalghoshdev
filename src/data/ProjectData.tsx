type Project = {
  name: string;
  description: string;
  tools: string[];
  image?: string;
  link?: {
    gitlink?: string;
    livelink?: string;
  };
  status: boolean;
};

export const projects: Project[] = [
  {
    name:"GithubWrapX",
    description: "visualize coding activity throughout the year with animations, persona, and final shareable card. Get AI quote.",
    tools: ["Next.js", "Tailwind", "GraphQL APi", "Groq API"],
    image: "/githubwrapx.png",
    link: {
      gitlink: "https://github.com/prodot-com/GithubWrap",
      livelink: "https://githubwrapx.vercel.app",
    },
    status: true

  },
  {
    name: "Cric-Scoreboard",
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
    description:
      "Built for streamlined team collaboration. Features secure user authentication, role-based access, comprehensive team and task management, realtime notifications.",
    tools: ["React", "Node.js", "MongoDB", "Git", "Tailwind", "Socket.IO"],
    image: "/syncspace.png",
    link: {
      gitlink: "https://github.com/prodot-com/SyncSpace",
      livelink: "https://sync-space-dun.vercel.app/",
    },
    status: true,
  },
];