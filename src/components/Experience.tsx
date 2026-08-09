"use client";

import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Divider from "./Divider";
import { experiences } from "@/data/ProjectData";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <p className="text-[24px] md:text-[29px] instrument-serif-bold text-neutral-900 dark:text-white py-1.5 px-3">
        Experience.
      </p>

      <Divider dashed />

      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-3 text-left transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40 border-b border-dashed border-neutral-300 dark:border-neutral-800"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="w-8 h-8 object-contain text-black dark:text-white"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="instrument-serif-bold cursor-pointer text-[16px] md:text-[19px] text-neutral-900 dark:text-white">
                        {exp.company}
                      </h3>

                      <ChevronRight
                        className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${
                          openIndex === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    <p className="instrument-serif-italic text-[13px] md:text-[15px] text-neutral-500 dark:text-neutral-400">
                      {exp.sub}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-end text-right text-neutral-600 dark:text-neutral-400 text-sm">
                  <p className="text-[14px] md:text-[15px] instrument-serif-bold">
                    {exp.startDate}
                  </p>
                  <p className="px-1 md:pb-1 md:inline hidden">-</p>
                  <p className="text-[14px] md:text-[15px] instrument-serif-bold">
                    {exp.endDate || "Present"}
                  </p>
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <ul className="list-disc pl-8 md:pl-24 pr-2 md:pr-5 py-3">
                    {exp.description?.map((item, i) => (
                      <li
                        key={i}
                        className="instrument-serif text-[14px] md:text-[16px] leading-relaxed text-neutral-700 dark:text-neutral-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
