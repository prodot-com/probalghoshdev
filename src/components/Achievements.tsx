import { achievements } from "@/data/ProjectData";
import { ChevronRight } from "lucide-react";


    export default function AchievementCard() {
    return (
        <div className="px-2 pl-3 md:pl-10 mt-10 font-bold w-full max-w-5xl">
        <section className="px-2 md:px-8 md:pl-0 md:pt-3 md:pb-4">
            <p className="text-[27px] md:text-[27px] instrument-serif-bold mb-6 text-neutral-900 dark:text-white">
            Achievements.
            </p>

            <div className="space-y-7">
            {achievements.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-row gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-3 group">

                    <div className="flex items-center gap-4">
                    <img
                        src={item.icon}
                        alt={item.title}
                        className="w-11 h-11 md:w-12 md:h-12 p-1 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
                        // className="h-10 md:h-12 w-auto object-contain"
                    />

                    <div>
                        <div className="inline-flex items-center gap-1 group">
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instrument-serif-bold text-[19px] md:text-[19px] text-neutral-800 dark:text-neutral-200"
                        >
                            {item.title}
                        </a>

                        <ChevronRight className="w-4 text-neutral-800 dark:text-neutral-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>

                        <p className="instrument-serif-italic-bold text-[17px] md:text-[15px] text-neutral-500 dark:text-neutral-400">
                        {item.subname}
                        </p>
                    </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-end text-right text-neutral-600 dark:text-neutral-400 text-sm">
                    <p className="instrument-serif-bold text-[15px]">
                        {item.year}
                    </p>
                    </div>

                </div>
                </div>
            ))}
            </div>
        </section>
        </div>
    );
    }