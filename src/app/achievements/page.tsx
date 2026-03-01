import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
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
                <h1 className="text-3xl sm:text-4xl font-bold instrument-serif-bold tracking-tight mb-6">
                    {paper.title}
                </h1>

                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-900 dark:bg-white 
                            text-white mb-6 dark:text-neutral-900
                            p-2 rounded-full hover:opacity-80 transition"
                >
                <ArrowUpLeft size={22} />
                </a>
            </div>
            <div>
                <p>{paper.subname}</p>
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

            {paper.image && (
                <div
                className="rounded-[9px] overflow-hidden 
                            border border-neutral-200 dark:border-neutral-800 
                            shadow-sm mb-8"
                >
                <Image
                    src={paper.image}
                    alt={paper.title}
                    width={1000}
                    height={600}
                    className="w-full h-auto object-contain bg-white p-10"
                    priority
                />
                </div>
            )}

            {/* Content */}
            <div
                className="text-neutral-600 dark:text-neutral-400 
                            leading-relaxed text-lg instrument-serif space-y-6"
                >
                <p>
                    <strong>Paper Title:</strong> {paper.title}
                </p>

                <p>
                    <strong>Conference:</strong> {paper.conference}
                </p>

                <p>
                    <strong>Authors:</strong> {paper.authors.join(", ")}
                </p>

                <p>{paper.abstract}</p>

                <div className="space-y-2">
                    <p><strong>Accuracy:</strong> {paper.metrics.accuracy}</p>
                    <p><strong>F1 Score:</strong> {paper.metrics.f1Score}</p>
                    <p><strong>Improvement:</strong> {paper.metrics.improvement}</p>
                </div>

                <p>
                    <strong>DOI:</strong> {paper.doi}
                </p>
            </div>

            </div>
        ))}

        </div>
        </div>
    );
}