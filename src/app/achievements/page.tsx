import Image from "next/image";
import { ArrowUpLeft, File } from "lucide-react";
import BackButton from "@/components/ui/BackButton";
import { Metadata } from "next";
import { achievements } from "@/data/ProjectData";

export const metadata: Metadata = {
  title: "Achievements | Probal Ghosh",
  description:
    "IEEE published research on multimodal sensor fusion for heart disease prediction using AI.",
};

export default function ResearchPage() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 
                text-neutral-900 dark:text-white 
                flex justify-center py-20 px-6 sm:px-8 transition-colors 
                selection:bg-orange-300 dark:selection:bg-indigo-500"
    >
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <BackButton />
        </div>

        {achievements.map((paper, index) => (
          <div key={index} className="mb-20">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold instrument-serif-bold tracking-tight mb-1">
                {paper.title}
              </h1>

              <div className="flex items-center gap-3 mb-1">
                {paper.docLink && (
                  <a
                    href={paper.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900 dark:bg-white 
                                    text-white dark:text-neutral-900
                                    p-2 rounded-full hover:opacity-80 transition"
                  >
                    <File size={22} />
                  </a>
                )}

                <a
                  href={paper.doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 dark:bg-white 
                                text-white dark:text-neutral-900
                                p-2 rounded-full hover:opacity-80 transition"
                >
                  <ArrowUpLeft size={22} />
                </a>
              </div>
            </div>
            <div className="mb-6 instrument-serif text-lg">
              <p>{paper.subname2}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-neutral-200 dark:bg-neutral-800 
                            text-neutral-800 dark:text-neutral-200 
                            px-3 py-1 rounded-[5px] border 
                            border-neutral-300 dark:border-neutral-700 
                            instrument-serif"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="text-neutral-600 dark:text-neutral-400 
                            leading-relaxed text-lg instrument-serif space-y-6"
            >
              <p className="text-justify">{paper.abstract}</p>

              <p className="instrument-serif-bold">
                DOI:{" "}
                <a
                  href={paper.doiLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="instrument-serif hover:underline">
                    {paper.doi}
                  </span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
