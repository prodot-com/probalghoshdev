"use client";

import { achievements } from "@/data/ProjectData";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Divider from "./Divider";

export default function AchievementCard() {
  const router = useRouter();

  return (
    <div className="w-full">
      <p className="text-[24px] md:text-[29px] instrument-serif-bold text-neutral-900 dark:text-white px-3 py-1.5">
        Achievements.
      </p>

      <Divider dashed />

      <div>
        {achievements.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push("/achievements")}
            className="group cursor-pointer p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40"
          >
            <div className="flex items-start gap-4">
              
              <img
                src={item.favicon}
                alt={item.title}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 dark:border-neutral-700 object-cover flex-shrink-0 mt-1 sm:mt-0"
              />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start flex-1 min-w-0 gap-1.5 sm:gap-6">
                
                <div className="min-w-0">
                  <div className="flex items-start sm:items-center gap-2">
                    <h3 className="instrument-serif-bold text-[16px] md:text-[19px] text-neutral-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 mt-0.5 sm:mt-0" />
                  </div>

                  <p className="instrument-serif-italic text-[13px] md:text-[15px] text-neutral-500 dark:text-neutral-400 mt-1">
                    {item.subname}
                  </p>
                </div>

                <div className="flex items-center sm:justify-end flex-shrink-0 mt-1 sm:mt-0">
                  <span className="instrument-serif-bold text-[13px] md:text-[15px] text-neutral-500 dark:text-neutral-400">
                    {item.year}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}