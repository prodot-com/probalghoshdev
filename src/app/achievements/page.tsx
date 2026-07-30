"use client";

import Image from "next/image";
import { ArrowUpRight, Award, BookOpen, FileText } from "lucide-react";
import { achievements } from "@/data/ProjectData";
import BackButton from "@/components/ui/BackButton";
import Section from "@/components/Section";
import BackArrow from "@/components/icons/Arrow";
import { useRouter } from "next/navigation";

export default function Achievements() {
  const router = useRouter();

  return (
    <Section showTopBorder={false}>
      <main className="px-3 pt-17 min-h-screen overflow-hidden bg-white text-neutral-900 selection:bg-orange-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-indigo-500">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-orange-200/30 blur-3xl dark:bg-indigo-500/10" />

        <BackArrow
          onClick={() => router.back()}
          className="h-8 w-8 mb-2 cursor-pointer rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
        />

        <div className="relative z-10 mx-auto w-full max-w-[var(--content-width)]">
          {achievements.map((paper, index) => (
            <article key={paper.doiLink} className="pb-16 md:pb-24">
              <header className="mb-5 max-w-4xl md:mb-5">
                <div className="mb-5 flex items-center gap-3 text-sm text-orange-700 dark:text-orange-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 bg-orange-100/80 dark:border-orange-400/20 dark:bg-orange-400/10">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="instrument-serif-bold tracking-[0.16em] uppercase">
                    IEEE Conference Publication · {paper.year}
                  </span>
                </div>

                <h1 className="instrument-serif-bold max-w-4xl text-4xl leading-[0.98] tracking-tight sm:text-5xl">
                  {paper.title2}
                </h1>
                <p className="instrument-serif mt-6 max-w-3xl text-xl leading-relaxed text-neutral-600 md:text-2xl dark:text-neutral-300">
                  {paper.conference}
                </p>
              </header>

              <div className="space-y-7">
                {paper.image && (
                  <figure className="group overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-neutral-950">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={paper.image}
                        alt={`ICRCICN 2025 certificate presentation for ${paper.subname}`}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 820px) 820px, 100vw"
                        className="object-cover transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                      <p className="instrument-serif absolute bottom-4 left-5 text-sm text-white/90 sm:bottom-5 sm:left-6 sm:text-base">
                        ICRCICN 2025 · Certificate presentation
                      </p>
                    </div>
                  </figure>
                )}

                <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)]">
                  <section aria-labelledby={`abstract-${index}`}>
                    <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">
                      Abstract
                    </p>
                    <h2 id={`abstract-${index}`} className="sr-only">
                      Research abstract
                    </h2>
                    <p className="instrument-serif text-justify max-w-3xl text-xl leading-relaxed text-neutral-700 md:text-2xl dark:text-neutral-300">
                      {paper.abstract}
                    </p>
                  </section>

                  <aside className="h-fit rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] md:p-7">
                    <div className="mb-3 border-b border-neutral-200 pb-1 dark:border-white/10">
                      <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase dark:text-neutral-400">
                        Publication
                      </p>
                      <p className="instrument-serif-bold text-xl leading-snug">
                        {paper.title}
                      </p>
                    </div>

                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="mb-1 text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase dark:text-neutral-400">
                          Topic
                        </dt>
                        <dd className="instrument-serif text-lg leading-snug">
                          {paper.subname}
                        </dd>
                      </div>
                      <div>
                        <dt className="mb-1 text-xs font-semibold tracking-[0.16em] text-neutral-500 uppercase dark:text-neutral-400">
                          DOI
                        </dt>
                        <dd>
                          <a
                            href={paper.doiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instrument-serif break-all text-base text-orange-700 underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-900 dark:text-orange-300 dark:decoration-orange-400/50 dark:hover:text-orange-100"
                          >
                            {paper.doi}
                          </a>
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-4 space-y-2">
                      <a
                        href={paper.doiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-offset-neutral-950"
                      >
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        Read publication
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      {paper.docLink && (
                        <a
                          href={paper.docLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold transition-colors hover:border-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:border-white/20 dark:hover:border-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-neutral-950"
                        >
                          <FileText className="h-4 w-4" aria-hidden="true" />
                          View certificate
                        </a>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5 border-t border-neutral-200 pt-3 dark:border-white/10">
                      {paper.tags.map((tag) => (
                        <span
                          key={tag}
                          className="instrument-serif rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Section>
  );
}
