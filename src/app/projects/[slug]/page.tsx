import { projects } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import Image from "next/image";

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
    </div>
  );
}