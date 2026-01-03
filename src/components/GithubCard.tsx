"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Card, CardContent, CardHeader } from "./ui/card";
import { BorderBeam } from "./ui/border-beam";
import { Tooltip } from "./ui/tooltip-card";

export function GithubCard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark");
    setIsDarkMode(currentTheme);
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="selection:bg-neutral-700 mt-10 px-3 md:px-4 md:pl-9 flex flex-col gap-3 w-full max-w-5xl">
      <Card
        className="relative w-full overflow-hidden bg-white/10 dark:bg-black dark:border-neutral-800 backdrop-blur-md border 
            border-white/20 rounded-[5px] shadow-lg hover:shadow-xl transition-all duration-300 min-h-52.5"
      >
        <CardHeader className="px-1 md:px-2 md:pt-1">
          <div className="md:px-0">
            <div className="font-bold text-black  dark:text-white text-[26px] instrument-serif-bold md:text-[27px] selection:bg-neutral-600">
              GitHub Contributions •{" "}
              <Tooltip
                containerClassName="instrument-serif-italic-bold"
                content="let's follow in Github"
              >
                <span
                  className="underline md:decoration-white md:dark:decoration-neutral-950 md:hover:decoration-green-500 decoration-green-500 cursor-pointer
                text-black dark:text-white
                "
                >
                  <a
                    href="https://github.com/prodot-com/"
                    target="blank"
                    className="instrument-serif-italic-bold text-[26px] md:text-[27px]"
                  >
                    @prodot-com
                  </a>
                </span>
              </Tooltip>
            </div>
          </div>
        </CardHeader>

        {/* Content */}
        <CardContent className="px-3 md:px-2 pt-1">
          <div className="">
            <GitHubCalendar
              username="prodot-com"
              blockSize={8.2}
              fontSize={12}
              errorMessage="Error while fetching data"
              showWeekdayLabels
              colorScheme={isDarkMode ? "dark" : "light"}
              style={{
                color: isDarkMode ? "white" : "black",
                fontFamily: "instrument-serif",
              }}
            />
          </div>
        </CardContent>

        <BorderBeam
          duration={6}
          size={200}
          className="from-transparent via-green-500 to-transparent"
          borderWidth={2}
        />
      </Card>
    </div>
  );
}

export default GithubCard;
