"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { House } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
// import { useNavigate } from "react-router-dom";
import { GithUbLink, LinkedInLink, XLink, ResumeLink } from "../lib/Links";
const email = "xprobal52@gmail.com";

const BottomDock = ({ className = "" } : {className?: string}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

    const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light": "dark")
  };


 

  return (
    <div
      className={`fixed flex justify-center md:w-auto max-w-[320px] md:max-w-[500px] md:min-w-[310px] left-1/2 -translate-x-1/2 bg-white/10 dark:bg-neutral-900/25 shadow-xl 
  border border-gray-400 bottom-0 mb-7 md:mb-8 items-center gap-1 md:gap-2 p-2 px-4 cursor-pointer transition-all duration-300 ease-in-out rounded-[7px] 
  backdrop-blur-[7px] z-20 hover:scale-105 animate-[float_4s_ease-in-out_infinite] ${className}`}
    >
      <div className="relative group">
        <House
          size={35}
          className="px-1 py-1.5 hover:mr-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
        />
        <span className="absolute bottom-12 left-2/5 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
          Home
        </span>
      </div>

      <div className="flex items-center gap-1 md:gap-2 px-2 border-x-2 border-gray-400">
        <div className="relative group">
          <FontAwesomeIcon
            icon={faEnvelope}
            aria-label="Mail"
            className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300  transition-all duration-300 ease-in-out"
            size="xl"
            onClick={() =>
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                "_blank"
              )
            }
          />
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
            Mail
          </span>
        </div>

        <div className="relative group">
          <a href={XLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
              size="xl"
            />
          </a>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
            X
          </span>
        </div>

        <div className="relative group">
          <a href={ResumeLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPaperclip}
              className="px-1 py-1.5 hover:mx-2 rounded-full  text-indigo-500 hover:bg-indigo-500/20 transition-all duration-300 ease-in-out"
              size="xl"
            />
          </a>
          <span
            className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 
      bg-indigo-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]"
          >
            Resume/CV
          </span>
        </div>

        <div className="relative group">
          <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
              size="xl"
            />
          </a>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
            LinkedIn
          </span>
        </div>

        <div className="relative group">
          <a href={GithUbLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
              size="xl"
            />
          </a>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
            GitHub
          </span>
        </div>
      </div>

      <div className="relative group">
        <AnimatedThemeToggler
          isDark={isDarkMode}
          onClick={toggleDarkMode}
          className="px-1.5 py-1.5 hover:ml-2 rounded-full dark:hover:bg-neutral-700/25 dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer"
        />
        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap instrument-serif text-[13px]">
          {isDarkMode ? "Light" : "Dark"}
        </span>
      </div>
    </div>
  );
};

export default BottomDock;
