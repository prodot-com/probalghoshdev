"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { BorderBeam } from "./ui/border-beam";
import { Tooltip } from "./ui/tooltip-card";
import { GitHubCalendar } from 'react-github-calendar';
import GithubCalendar2 from "./GithubCalender";

export function GithubCard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
      const checkMobile = () => {
        setIsMobile(
          "ontouchstart" in window || navigator.maxTouchPoints > 0
        );
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
        className="relative w-full overflow-hidden bg-white/10 dark:bg-black 
            rounded-[5px] transition-all duration-300 min-h-52.5 border-none"
      >
        <CardHeader className="px-1 md:px-2 md:pt-1">
          <div className="md:px-0">
            <div className="font-bold text-black pt-1 md:pt-0 pl-2 md:pl-0 dark:text-white text-[26px] instrument-serif-bold md:text-[27px] selection:bg-neutral-600">
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

        {/* <CardContent className="px-3 md:px-2 pt-1">
          <div className="">
            <GitHubCalendar
              username="prodot-com"
              blockSize={isMobile? 12 : 9}
              fontSize={12}
              errorMessage="Error while fetching data"
              // showWeekdayLabels
              colorScheme={isDarkMode ? "dark" : "light"}
              style={{
                color: isDarkMode ? "white" : "black",
                fontFamily: "instrument-serif",
                // border: "2px solid black"
              }}
            />
          </div>
        </CardContent> */}
        <CardContent className="px-3 md:px-2 pt-1">
          <GithubCalendar2/>
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
