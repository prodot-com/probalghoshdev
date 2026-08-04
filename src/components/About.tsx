"use client"

import { useEffect, useState } from "react";
import Divider from "./Divider";
import { Tooltip } from "./ui/tooltip-card";

export default function About() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) setGreeting("Good Morning.");
      else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon.");
      else if (hour >= 17 && hour < 21) setGreeting("Good Evening.");
      else setGreeting("Good Night.");
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60 * 1000); // update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full p-3">
      <div className="flex">
        <p className="text-[24px] md:text-[28px] caveat-font text-black dark:text-white">
          {greeting}
        </p>
      </div>

      <Divider dashed />

      <div className="px-3 py-2">
        <ul className="list-disc space-y-2 pl-5 text-[17px] md:text-[20px] leading-[1.6] instrument-serif text-black dark:text-neutral-300 marker:text-neutral-500">
          <li>
            I'm a{" "}
            <span className="instrument-serif-bold underline decoration-1 underline-offset-2">
              Full Stack Developer
            </span>{" "}
            focused on creating digital products that balance elegant design,
            seamless user experiences, and scalable engineering.
          </li>

          <li>
            From designing intuitive interfaces with{" "}
            <span className="instrument-serif-bold underline decoration-1 underline-offset-2">
              React, Next.js, Tailwind CSS & Framer Motion
            </span>{" "}
            to building robust backend systems with{" "}
            <span className="instrument-serif-bold underline decoration-1 underline-offset-2">
              Node.js, Prisma & PostgreSQL
            </span>
            , I enjoy bringing ideas to life from concept to deployment.
          </li>

          <li>
            Currently a{" "}
            <span className="instrument-serif-bold underline decoration-1 underline-offset-2">
              final-year B.Tech student
            </span>
            , I enjoy transforming ideas into polished products, exploring new
            technologies, refining details, and creating intuitive and memorable
            experiences.{" "}
            <Tooltip
              containerClassName="inline instrument-serif-italic-bold"
              content="Leave a message below"
            >
              <span className="cursor-pointer instrument-serif-bold underline decoration-1 underline-offset-2">
                Let's connect.
              </span>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}
