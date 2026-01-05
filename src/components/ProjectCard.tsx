import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { BorderBeam } from "./ui/border-beam";
import ReactMarkdown from "react-markdown";
import { Github, Globe } from "lucide-react";
import { ShinyButton } from "./ui/shiny-button";
import Image from "next/image";

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

const projects: Project[] = [
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

export function Projectcard() {
  return (
    <div className="px-0 md:px-2 mt-9 font-bold w-full max-w-5xl">
      <div>
        <p className="ml-4 md:ml-8 text-[27px] md:text-[29px] font-bold instrument-serif-bold text-neutral-900 dark:text-white">
          Featured Projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:px-8 place-items-center">
          {projects.map((project, index) => (
            <Card
              key={`${project.name}-${index}`}
              className="relative w-full md:min-h-101 max-w-sm overflow-hidden bg-white/10 dark:bg-black dark:border-neutral-800 backdrop-blur-md border border-indigo-800/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={192}
                  className="object-cover rounded-t-[7px] border-b dark:border-white/10 border-white/20"
                />
              )}

              <CardHeader className="px-3 md:pt-1">
                <CardTitle className="instrument-serif-bold text-[24px] md:text-[20px]">
                  {project.name}
                </CardTitle>

                <div className="instrument-serif text-[14px] prose prose-sm dark:prose-invert md:text-[14px] max-w-none">
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
              </CardHeader>

              <CardContent className="px-3 pt-1 md:pt-2 mr-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[12px] md:text-[11px] font-normal bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white px-1.25 py-1 rounded-[5px] border
                  instrument-serif
                  "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-3 pt-3 md:pt-4">
                {project.link && (
                  <div className="flex items-center gap-3">
                    {project.link.livelink && (
                      <a
                        href={project.link.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transition
                    instrument-serif-bold tracking-widest
                    "
                      >
                        <Globe className="w-4 h-4" /> Live
                      </a>
                    )}

                    {project.link.gitlink && (
                      <a
                        href={project.link.gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transition
                    instrument-serif-bold tracking-widest
                    "
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}

                    <div
                      className="flex items-center gap-1 text-[13px] 
                  bg-green-600 text-white dark:text-black px-2 py-1 
                  rounded-[5px] border
                    instrument-serif-bold tracking-widest"
                    >
                      <span>
                        <div className="w-2 h-2 animate-pulse bg-white dark:bg-black rounded-full"></div>
                      </span>
                      {project.status ? "Working" : "In Developement"}
                    </div>
                  </div>
                )}
              </CardFooter>

              <BorderBeam
                duration={6}
                size={200}
                className="from-transparent via-red-500 to-transparent"
                borderWidth={2}
              />
              <BorderBeam
                duration={6}
                delay={14}
                size={200}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          ))}
        </div>
        <div className="flex justify-start">
          {/* <p className="ml-4 md:ml-8 border p-2 instrument-serif 
      bg-black text-white rounded-[4px] md:text-[17px]
      ">More coming soon</p> */}
          <ShinyButton
            className="ml-4 md:ml-8 rounded-[5px] bg-black text-white
      instrument-serif-bold text-[17px] px-4 cursor-default border dark:border-neutral-600
      "
          >
            More coming soon
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
