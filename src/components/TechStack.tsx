import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const TechStackColorfull = [
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript2.svg" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript2.svg" },
  { name: "Java", category: "language", icon: "/tech-icons/java2.svg" },
  { name: "Python", category: "language", icon: "/tech-icons/python2.svg" },
  { name: "React.js", category: "framework", icon: "/tech-icons/react2.svg" },
  { name: "Express.js", category: "framework", icon: "/tech-icons/express.svg" },
  { name: "Node.js", category: "framework", icon: "/tech-icons/node2.svg" },
  { name: "Tailwind CSS", category: "framework", icon: "/tech-icons/tailwind2.svg" },
  { name: "Motion", category: "framework", icon: "/tech-icons/motion2.svg" },
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb2.svg" },
  { name: "PostgreSQL", category: "database", icon: "/tech-icons/postgresql2.svg" },
  { name: "Git", category: "tool", icon: "/tech-icons/git2.svg" },
  { name: "Google Cloud", category: "tool", icon: "/tech-icons/google-cloud2.svg" },
  { name: "Postman", category: "tool", icon: "/tech-icons/postman2.svg" },
  { name: "Github", category: "tool", icon: "/tech-icons/github.svg" },
  { name: "Vercel", category: "tool", icon: "/tech-icons/vercel.svg" },
  { name: "Firebase", category: "tool", icon: "/tech-icons/firebase2.svg" },
];



const TechStack = [
  {
    name: "JavaScript",
    category: "language",
    icon: "/tech-icons/javascript.svg",
  },
  {
    name: "TypeScript",
    category: "language",
    icon: "/tech-icons/typescript.svg",
  },
  { name: "Java", category: "language", icon: "/tech-icons/java.svg" },
  { name: "Python", category: "language", icon: "/tech-icons/python.svg" },
  { name: "React.js", category: "framework", icon: "/tech-icons/react.svg" },
  { name: "Express.js", category: "framework", icon: "/tech-icons/express.svg" },
  { name: "Node.js", category: "framework", icon: "/tech-icons/node.svg" },
  {
    name: "Tailwind CSS",
    category: "framework",
    icon: "/tech-icons/tailwind.svg",
  },
  { name: "Motion", category: "framework", icon: "/tech-icons/motion.svg" },
  { name: "MongoDB", category: "database", icon: "/tech-icons/mongodb.svg" },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "/tech-icons/postgresql.svg",
  },
  { name: "Git", category: "tool", icon: "/tech-icons/git.svg" },
  {
    name: "Google Cloud",
    category: "tool",
    icon: "/tech-icons/google-cloud.svg",
  },
  { name: "Postman", category: "tool", icon: "/tech-icons/postman.svg" },
  { name: "Github", category: "tool", icon: "/tech-icons/github.svg" },
  { name: "Vercel", category: "tool", icon: "/tech-icons/vercel.svg" },
  { name: "Firebase", category: "tool", icon: "/tech-icons/firebase.svg" },
];

const firstRow = TechStack.slice(0, TechStack.length / 2);
const secondRow = TechStack.slice(TechStack.length / 2);

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-35 md:w-40 cursor-pointer overflow-hidden rounded-[7px] py-3 md:p-4",
        // light styles
        "border-gray-950/10 bg-gray-200 hover:bg-gray-950/5",
        // dark styles
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
