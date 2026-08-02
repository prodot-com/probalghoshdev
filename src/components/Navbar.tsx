"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Menu, X } from "lucide-react";
import { useAudio } from "@/components/AudioProvider";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isPlaying, toggle } = useAudio();

  // Handle scroll state for navbar shadow/border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside the menu and Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Framer motion variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.97, y: -8 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.97, y: -8 },
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70 dark:bg-neutral-900/70">
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
            {/* Logo */}
            <h1
              onClick={() => {
                router.refresh();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-tanker cursor-pointer text-[35px] tracking-tight text-indigo-700 hover:underline decoration-indigo-700"
            >
              Probal
            </h1>

            <div className="flex items-center gap-1 md:gap-6">
              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-6">
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
                  href="/resume"
                  className="instrument-serif text-[17px] text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  Resume
                </Link>

                <div className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />
              </div>

              {/* Theme & Audio Controls */}
              <div className="flex justify-center gap-2">
                <AnimatedThemeToggler
                  variant="circle"
                  duration={600}
                  className="cursor-pointer text-black dark:text-white"
                />
                <button
                  onClick={toggle}
                  className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Wrapper */}
              <div className="relative md:hidden" ref={menuRef}>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  aria-label="Toggle mobile menu"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className="h-5 w-5 text-neutral-900 dark:text-white" />
                    ) : (
                      <Menu className="h-5 w-5 text-neutral-900 dark:text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Floating Glassmorphism Dropdown */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute -right-1 top-full mt-3 w-36 origin-top-right rounded-[4px] border border-neutral-300 bg-white p-2 shadow-xl dark:border-neutral-700/50 dark:bg-neutral-900"
                      role="menu"
                    >
                      <nav className="flex flex-col gap-1">
                        <Link
                          href="/"
                          onClick={() => setIsOpen(false)}
                          className="instrument-serif px-4 py-1 text-lg text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-indigo-600 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-indigo-400"
                          role="menuitem"
                        >
                          Home
                        </Link>
                        <Link
                          href="/projects"
                          onClick={() => setIsOpen(false)}
                          className="instrument-serif px-4 py-1 text-lg text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-indigo-600 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-indigo-400"
                          role="menuitem"
                        >
                          Projects
                        </Link>
                        <Link
                          href="/resume"
                          onClick={() => setIsOpen(false)}
                          className="instrument-serif px-4 py-1 text-lg text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-indigo-600 dark:text-neutral-300 dark:hover:bg-neutral-800/60 dark:hover:text-indigo-400"
                          role="menuitem"
                        >
                          Resume
                        </Link>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;