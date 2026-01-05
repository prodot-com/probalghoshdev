import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import { TechStack } from "@/data/TechData";

const firstRow = TechStack.slice(0, TechStack.length / 2);
const secondRow = TechStack.slice(TechStack.length / 2);

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-35 md:w-40 cursor-pointer overflow-hidden rounded-[7px] py-3 md:p-4",
        "border-gray-950/10 bg-gray-200 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <img className="" width="35" height="35" alt="" src={icon} />
        <div className="flex flex-col">
          <figcaption className="text-[17px] md:text-[15px] instrument-serif dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function TechStackMarquee() {
  return (
    <div className="selection:bg-neutral-700 relative mt-10 px-4 md:px-10 flex flex-col gap-3 w-full max-w-5xl overflow-hidden">
      <div>
        <p className="instrument-serif-bold text-[27px]">Technologies I use.</p>
      </div>
      <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem] ">
        {firstRow.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem] ">
        {secondRow.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="absolute left-3 top-8 md:left-10 md:top-8 w-20 h-full bg-linear-to-r from-white dark:from-neutral-900 to-transparent pointer-events-none z-10" />
      <div className="absolute right-3 md:right-10 md:top-8 top-8 w-20 h-full bg-linear-to-l from-white dark:from-neutral-900 to-transparent pointer-events-none z-10" />
    </div>
  );
}
