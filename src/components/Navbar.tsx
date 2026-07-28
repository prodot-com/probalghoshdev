"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ResumeLink } from "@/lib/Links";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-white/70
            dark:bg-neutral-900"
    >
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-400 dark:border-neutral-800" />
      <div className="mx-auto w-full max-w-[var(--content-width)]">
        <div
          className={`
            relative
            h-14
            border-b
            border-neutral-300
            dark:border-neutral-800
            
            backdrop-blur-md
            transition-all
            ${scrolled ? "shadow-sm" : ""}
          `}
        >
          <div className="flex h-full items-center justify-between px-4">
            <h1
              onClick={() => {
                router.refresh();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="fraunces-italic-bold cursor-pointer text-[35px] tracking-tight text-indigo-700 hover:underline decoration-indigo-700"
            >
              Probal
            </h1>

            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="instrument-serif text-[17px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/projects"
                className="instrument-serif text-[17px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                Projects
              </Link>

              <Link
                href={ResumeLink}
                target="_blank"
                className="instrument-serif text-[17px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              >
                Resume
              </Link>

              <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />

              <div className="flex justify-center">
                <AnimatedThemeToggler variant="circle" duration={600} 
                className="cursor-pointer text-black dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
