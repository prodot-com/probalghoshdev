import { projects } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Globe, Github } from "lucide-react";
import BackButton from "@/components/BackButton";

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
    <div className="min-h-screen bg-white text-neutral-900 flex justify-center py-16 px-6 sm:px-8">
      <div className="max-w-3xl w-full">
        
        <BackButton/>

        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 tracking-tight">
          {project.name}
        </h1>

        {project.tools && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((tech) => (
              <span 
                key={tech} 
                className="bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-md text-xs font-medium border border-neutral-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mb-10">
          {project.link?.livelink && (
            <a 
              href={project.link.livelink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <Globe size={16} /> Live
            </a>
          )}
          {project.link?.gitlink && (
            <a 
              href={project.link.gitlink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              <Github size={16} /> Source
            </a>
          )}
        </div>

        {project.image && (
          <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm mb-12">
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

        <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed text-lg">
          <p>{project.description}</p>
        </div>
        
      </div>
    </div>
  );
}