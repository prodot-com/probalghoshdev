"use client";

import ReactMarkdown from "react-markdown";
import {
  Github,
  Globe,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Brain,
  FileText,
  Lock,
  Rocket,
  Bot,
  BarChart3,
} from "lucide-react";
import { ShinyButton } from "./ui/shiny-button";
import Image from "next/image";
import { projects } from "@/data/ProjectData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Divider from "./Divider";

// Array of premium gradients to cycle through for different project backgrounds
const gradients = [
  ["from-white", "via-orange-300", "to-rose-500"],
  ["from-white", "via-cyan-300", "to-blue-600"],
  ["from-white", "via-emerald-300", "to-teal-500"],
  ["from-white", "via-violet-400", "to-fuchsia-500"],
  ["from-white", "via-amber-300", "to-orange-500"],
  ["from-white", "via-pink-300", "to-purple-500"],
  ["from-white", "via-lime-300", "to-green-500"],
  ["from-white", "via-sky-300", "to-indigo-500"],
  ["from-white", "via-red-300", "to-orange-500"],
  ["from-white", "via-yellow-300", "to-amber-500"],
  ["from-white", "via-teal-300", "to-cyan-500"],
  ["from-white", "via-indigo-300", "to-violet-500"],
];

const badgeIcons = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  trophy: Trophy,
  users: Users,
  brain: Brain,
  file: FileText,
  lock: Lock,
  rocket: Rocket,
  bot: Bot,
  chart: BarChart3,
} as const;

export function Projectcard() {
  const router = useRouter();

  const getGradient = (key: string) => {
    const hash = [...key].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[hash % gradients.length].join(" ");
  };

  return (
    <div className="font-bold w-full">
      <div>
        <p className="text-[24px] p-3 md:text-[29px] font-bold instrument-serif-bold text-neutral-900 dark:text-white">
          Featured Projects.
        </p>

        <Divider dashed />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-">
          {projects.map((project, index) => {
            const bgGradient = getGradient(project.slug ?? project.name);

            const BadgeIcon =
              project.badge &&
              badgeIcons[project.badge.icon as keyof typeof badgeIcons];
            return (
              <div
                key={`${project.name}-${index}`}
                className={`relative w-full flex flex-col overflow-hidden bg-white/10 dark:bg-black backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 h-full border-dashed border-neutral-400 dark:border-neutral-800
                        ${
                          index % 2 === 0
                            ? "border-r border-b"
                            : "border-l border-b"
                        }
                      `}
              >
                {project.image && (
                  <div
                    className={`group relative w-full h-56 overflow-hidden bg-gradient-to-br ${bgGradient}`}
                  >
                    {project.badge && (
                      <div className="absolute top-0 left-0 z-20 overflow-hidden w-28 h-28 pointer-events-none">
                        <span
                          className={`absolute top-5 -left-8 w-40 -rotate-39 bg-gradient-to-r ${project.badge.color} text-white text-[11px] font-bold tracking-wide py-1 shadow-lg border-y border-dashed border-black/20 flex items-center justify-center gap-1`}
                        >
                          {BadgeIcon && (
                            <BadgeIcon
                              className={`w-3.5 h-3.5 ${project.badge.iconColor}`}
                            />
                          )}

                          {project.badge.text}
                        </span>
                      </div>
                    )}

                    <div className="absolute -bottom-6 -right-6 w-[90%] h-[90%] z-10 transition-transform duration-200 ease-out translate-x-1 translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <div className="relative w-full h-full rounded-tl-[4px] overflow-hidden shadow-2xl border-t border-l border-white/30 dark:border-white/10">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <Link href={`/projects/${project.slug}`} className="flex-grow">
                  <div className="px-4 pt-4 flex flex-col gap-2">
                    <h3 className="instrument-serif-bold text-[22px] md:text-[20px]">
                      {project.name}
                    </h3>

                    <div className="instrument-serif text-[14px] prose prose-sm dark:prose-invert max-w-none line-clamp-4">
                      <ReactMarkdown>{project.description}</ReactMarkdown>
                    </div>
                  </div>
                </Link>

                <div className="px-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[12px] font-normal bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white px-2 py-1 rounded-[5px] border instrument-serif"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-2 pb-4">
                  {project.link && (
                    <div className="flex items-center gap-3">
                      {project.working && project.link.livelink && (
                        <a
                          href={project.link.livelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="instrument-serif-bold tracking-widest flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transition"
                        >
                          <Globe className="w-4 h-4" /> Live
                        </a>
                      )}

                      {project.link.gitlink && (
                        <a
                          href={project.link.gitlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="instrument-serif-bold tracking-widest flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transition"
                        >
                          <Github className="w-4 h-4" /> Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <ShinyButton
            className="cursor-pointer bg-black text-white instrument-serif-bold text-[17px] px-4 border-t border-r border-dashed border-neutral-400 dark:border-neutral-800"
            onClick={() => router.push("/projects")}
          >
            View All
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
