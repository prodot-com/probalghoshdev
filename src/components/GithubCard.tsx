"use client";

import { useEffect, useState } from "react";
import { Tooltip } from "./ui/tooltip-card";
import GithubCalendar2 from "./GithubCalender";
import Divider from "./Divider";

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
    <div className="selection:bg-neutral-700 w-full p-3">
      <div className="relative w-full transition-all duration-300">
        {/* Header */}
        <div className="">
          <div className="text-[22px] md:text-[27px] instrument-serif-bold text-black dark:text-white">
            GitHub Contributions •{" "}
            <Tooltip
              containerClassName="instrument-serif-italic-bold"
              content="Let's follow on GitHub"
            >
              <span
                className="
                  cursor-pointer
                  underline
                  decoration-green-500
                  md:decoration-white
                  md:dark:decoration-neutral-950
                  md:hover:decoration-green-500
                "
              >
                <a
                  href="https://github.com/prodot-com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instrument-serif-italic-bold"
                >
                  @prodot-com
                </a>
              </span>
            </Tooltip>
          </div>
        </div>

        <Divider dashed />

        {/* Content */}
        <div className="borde pt-3">
          <GithubCalendar2 isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default GithubCard;