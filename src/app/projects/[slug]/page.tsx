import { projects } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-neutral-900 text-white px-8 py-16">
      <h1 className="text-5xl font-bold">{project.name}</h1>

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={600}
          className="mt-8 rounded-xl"
        />
      )}

      <p className="mt-8 text-neutral-400 max-w-3xl">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-10 flex gap-6">
        {project.link?.gitlink && (
          <a
            href={project.link.gitlink}
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        )}
        {project.link?.livelink && (
          <a
            href={project.link.livelink}
            target="_blank"
            className="underline"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}