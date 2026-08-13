import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CircleCheck,
  Github,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react";

import Divider from "@/components/Divider";
import Section from "@/components/Section";
import BackButton from "@/components/ui/BackButton";
import { projects } from "@/data/ProjectData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    return {
      title: "Project not found | Probal Ghosh",
      description: "Full-stack developer crafting clean and modern web experiences.",
    };
  }

  return {
    title: `${project.name} | Probal Ghosh`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Probal Ghosh`,
      description: project.description,
      images: project.image ? [{ url: project.image, alt: `${project.name} project preview` }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (!project) notFound();

  const projectNumber = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0");

  return (
    <Section className="mt-14" showTopBorder={false}>
      <main className="px-3 pb-10 pt-2 md:pb-14">
        <header className="flex items-start justify-between gap-4 pb-3">
          <div className="flex items-start gap-3">
            <BackButton />
            <div>
              <p className="instrument-serif-bold text-[30px] leading-none tracking-tight text-neutral-900 dark:text-white md:text-[34px]">
                {project.name}
              </p>
              {/* <p className="instrument-serif text-[15px] text-neutral-500 dark:text-neutral-400">
                Project archive · {projectNumber}
              </p> */}
            </div>
          </div>
          <p className="instrument-serif hidden pt-1 text-xs tracking-[0.2em] text-neutral-500 uppercase sm:block dark:text-neutral-400">
            {project.working ? "Live project" : "Case study"}
          </p>
        </header>

        <Divider dashed />

        <article className="pt-7 md:pt-10">
          <div className="mb-8 grid items-end gap-5 md:mb-10 md:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              {/* <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-indigo-600 uppercase dark:text-indigo-400">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {project.badge?.text ?? "Selected work"}
              </div> */}
              <h1 className="instrument-serif-bold max-w-3xl text-4xl leading-[0.94] tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
                {project.name}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.working && project.link?.livelink && (
                <a
                  href={project.link.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] border-2 border-neutral-800 bg-linear-to-b from-neutral-700 to-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)] transition-all hover:from-neutral-700 hover:to-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.link?.gitlink && (
                <a
                  href={project.link.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Source code
                </a>
              )}
            </div>
          </div>

          {project.image && (
            <figure className="group mb-9 overflow-hidden rounded-[5px] border border-neutral-200 bg-neutral-100 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.45)] dark:border-neutral-800 dark:bg-neutral-950 md:mb-11">
              <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[5/3]">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  priority
                  sizes="(min-width: 820px) 820px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                <figcaption className="instrument-serif absolute bottom-4 left-5 text-sm text-white/90 sm:left-6 sm:text-base">
                  {project.name} · Project preview
                </figcaption>
              </div>
            </figure>
          )}

          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(15rem,0.75fr)] md:gap-10">
            <section aria-labelledby="project-overview">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">
                Overview
              </p>
              <h2 id="project-overview" className="instrument-serif-bold mb-4 text-2xl text-neutral-900 dark:text-white">
                Built for a better workflow.
              </h2>
              <p className="instrument-serif max-w-2xl text-[17px] leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-300">
                {project.description}
              </p>

              <div className="mt-8 border-t border-dashed border-neutral-300 pt-6 dark:border-neutral-800">
                <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">
                  Project status
                </p>
                <p className="instrument-serif flex items-center gap-2 text-base text-neutral-700 dark:text-neutral-300">
                  <CircleCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                  {project.working ? "Available" : "Project archive"}
                </p>
              </div>
            </section>

            <aside className="rounded-[5px] border border-dashed border-neutral-300 bg-white/70 p-5 dark:border-neutral-800 dark:bg-white/[0.03] md:p-6">
              <div className="mb-5 flex items-center gap-2 border-b border-dashed border-neutral-300 pb-4 dark:border-neutral-800">
                <Layers3 className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                <h2 className="instrument-serif-bold text-xl">Inside the build</h2>
              </div>
              <ul className="space-y-2.5">
                {project.tools.map((tool) => (
                  <li key={tool} className="instrument-serif flex items-center gap-2 text-[15px] text-neutral-700 dark:text-neutral-300">
                    <span className="text-orange-500" aria-hidden="true">•</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>
      </main>
    </Section>
  );
}
