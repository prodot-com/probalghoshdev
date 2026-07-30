"use client";

import { ChevronRight } from "lucide-react";
import Divider from "./Divider";

type EducationItem = {
  icon: string;
  name: string;
  subname?: string;
  startDate: string;
  endDate?: string;
  link?: string;
};

const educations: EducationItem[] = [
  {
    icon: "/gcetts.jpeg",
    name: "Government College of Engineering & Textile Technology, Serampore",
    subname: "B.Tech in Information Technology",
    startDate: "2023",
    link: "https://www.gcetts.ac.in/",
  },
  {
    icon: "/rkm.png",
    name: "Sargachi Ramakrishna Mission High School",
    subname: "Higher Secondary",
    startDate: "2020",
    endDate: "2022",
    link: "https://www.rkmsargachi.org/rkm-hs-school/",
  },
];

export function EducationCard() {
  return (
    <div className="w-full">
      <p className="text-[24px] md:text-[29px] instrument-serif-bold text-neutral-900 dark:text-white px-3 py-1.5">
        Education.
      </p>

      <Divider dashed />

      <div>
        {educations.map((edu, index) => (
          <a
            key={index}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-6 p-3 border-b border-dashed border-neutral-300 dark:border-neutral-800 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40"
          >
            {/* Left */}
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <img
                src={edu.icon}
                alt={edu.name}
                className="w-12 h-12 rounded-full object-cover border border-neutral-300 dark:border-neutral-700 flex-shrink-0"
              />

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="instrument-serif-bold text-[19px] text-neutral-900 dark:text-white">
                    {edu.name}
                  </h3>

                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>

                <p className="instrument-serif-italic text-[15px] text-neutral-500 dark:text-neutral-400 mt-1">
                  {edu.subname}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-end text-right text-neutral-600 dark:text-neutral-400 text-sm">
                <p className="instrument-serif-bold text-[14px] md:text-[15px]">{edu.startDate}</p>
                <p className="px-1 mb-0.75 md:inline hidden">-</p>
                <p className="instrument-serif-bold text-[14px] md:text-[15px]">{edu.endDate ? edu.endDate: "Present"}</p>
              </div>
          </a>
        ))}
      </div>
    </div>
  );
}