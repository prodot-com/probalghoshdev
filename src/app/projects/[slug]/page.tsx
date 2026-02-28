import { projects } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Globe, Github, ArrowUpLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import { CardContent } from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    return {
      title: 'Probal Ghosh',
      description: 'Full-stack developer crafting clean and modern web experiences.',
    };
  }

  return {
    title: `${project.name} | Probal Ghosh`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) return notFound();

return (
  <div className="min-h-screen bg-white dark:bg-neutral-900 
                  text-neutral-900 dark:text-white 
                  flex justify-center py-20 px-6 sm:px-8 transition-colors selection:bg-orange-300 dark:selection:bg-indigo-500">

    <div className="max-w-3xl w-full">

      <div className="mb-8">
        <BackButton />
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-4xl sm:text-5xl font-bold instrument-serif-bold tracking-tight mb-6">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          {project.link?.livelink && (
            <a
              href={project.link.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 dark:bg-white 
                        text-white dark:text-neutral-900
                        p-2 rounded-full flex items-center gap-2 
                        text-sm font-medium hover:opacity-80 transition"
            >
              <ArrowUpLeft size={22} />
            </a>
          )}
          {project.link?.gitlink && (
            <a
              href={project.link.gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 dark:bg-white 
                        text-white dark:text-neutral-900
                        p-2 rounded-full flex items-center gap-2 
                        text-sm font-medium hover:opacity-80 transition"
            >
              <Github size={22} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs bg-neutral-200 dark:bg-neutral-800 
                      text-neutral-800 dark:text-neutral-200 
                      px-3 py-1 rounded-[5px] border 
                      border-neutral-300 dark:border-neutral-700 
                      transition instrument-serif"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.image && (
        <div className="rounded-[9px] overflow-hidden 
                        border border-neutral-200 dark:border-neutral-800 
                        shadow-sm mb-8">
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      )}

      <div className="text-neutral-600 dark:text-neutral-400 
                      leading-relaxed text-lg space-y-2 instrument-serif">
        <p>{project.description}</p>
      </div>

    </div>
  </div>
);
}