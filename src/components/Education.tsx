import { ChevronRight } from "lucide-react";

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
    <div className="px-2 pl-3 md:pl-11 mt-1 font-bold w-full max-w-5xl">
    <section className="px-2 md:px-8 md:pl-0 md:pt-3 md:pb-4">
      <p className="text-[27px] md:text-[27px] instrument-serif-bold mb-6 text-neutral-900 dark:text-white">
        Education.
      </p>

      <div className="space-y-7">
        {educations.map((edu, index) => (
          <div key={index} className="flex flex-col gap-2">
            
            <div
              className="flex flex-row gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-3 group"
            >
              
              <div className="flex items-center gap-4">
                <img
                  src={edu.icon}
                  alt={edu.name}
                  className="w-11 h-11 md:w-12 md:h-12 p-1 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
                />
                <div>
                  <div className="inline-flex items-center gap-1 group">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instrument-serif-bold text-[19px] md:text-[19px] text-neutral-800 dark:text-neutral-200"
                      >
                      {edu.name}
                    </a>
                    <ChevronRight className="w-4 text-neutral-800 dark:text-neutral-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>

                  <p className="instrument-serif-italic-bold text-[17px] md:text-[15px] text-neutral-500 dark:text-neutral-400">
                    {edu.subname}
                  </p>
                </div>
              </div>

              
              <div className="flex flex-col sm:flex-row items-end text-right text-neutral-600 dark:text-neutral-400 text-sm">
                <p className="instrument-serif-bold text-[15px]">{edu.startDate}</p>
                <p className="px-1 mb-[3px] md:inline hidden">-</p>
                <p className="instrument-serif-bold text-[15px]">{edu.endDate ? edu.endDate: "Present"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
