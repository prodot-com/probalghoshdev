"use client";

import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  FileText,
  Github,
  Grid2X2,
  Home,
  Lightbulb,
  Music2,
  Search,
  SunMoon,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useAudio } from "@/components/AudioProvider";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Command = {
  id: string;
  label: string;
  description: string;
  shortcut: string;
  group: "Navigate" | "Actions";
  icon: typeof Home;
  run: () => void;
};

export default function KeyboardShortcuts() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { toggle } = useAudio();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const goToSection = useCallback(
    (id: string) => {
      if (window.location.pathname === "/") {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      router.push(`/#${id}`);
    },
    [router],
  );

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "home",
        label: "Home",
        description: "Return to the top of the portfolio",
        shortcut: "H",
        group: "Navigate",
        icon: Home,
        run: () => router.push("/"),
      },
      {
        id: "projects",
        label: "Projects",
        description: "Browse featured projects",
        shortcut: "P",
        group: "Navigate",
        icon: Github,
        run: () => router.push("/projects"),
      },
      {
        id: "experience",
        label: "Experience",
        description: "Jump to work experience",
        shortcut: "E",
        group: "Navigate",
        icon: BriefcaseBusiness,
        run: () => goToSection("experience"),
      },
      {
        id: "achievements",
        label: "Achievements",
        description: "View research and highlights",
        shortcut: "A",
        group: "Navigate",
        icon: Award,
        run: () => router.push("/achievements"),
      },
      {
        id: "resume",
        label: "Resume",
        description: "Open the resume page",
        shortcut: "R",
        group: "Navigate",
        icon: FileText,
        run: () => router.push("/resume"),
      },
      {
        id: "skills",
        label: "Skills",
        description: "Jump to the technology section",
        shortcut: "S",
        group: "Navigate",
        icon: Lightbulb,
        run: () => goToSection("skills"),
      },
      {
        id: "theme",
        label: "Toggle theme",
        description: "Switch between light and dark mode",
        shortcut: "T",
        group: "Actions",
        icon: SunMoon,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      {
        id: "music",
        label: "Toggle music",
        description: "Play or pause ambient music",
        shortcut: "M",
        group: "Actions",
        icon: Music2,
        run: toggle,
      },
      {
        id: "top",
        label: "Back to top",
        description: "Scroll smoothly to the beginning",
        shortcut: "G",
        group: "Actions",
        icon: BookOpen,
        run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
    ],
    [goToSection, resolvedTheme, router, setTheme, toggle],
  );

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.description} ${command.shortcut}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [commands, query]);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  const execute = (command: Command) => {
    if (command.id != "theme") {
      close();
    }
    command.run();
  };

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const openPalette = () => setIsOpen(true);
    window.addEventListener("portfolio-shortcuts", openPalette);
    return () => window.removeEventListener("portfolio-shortcuts", openPalette);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable;
      const key = event.key.toLowerCase();
      const commandKey = event.metaKey || event.ctrlKey;

      if (commandKey && key === "k") {
        event.preventDefault();
        setIsOpen(true);
        return;
      }

      if (isOpen) {
        if (key === "escape") {
          event.preventDefault();
          close();
        } else if (key === "arrowdown") {
          event.preventDefault();
          setActiveIndex((index) =>
            Math.min(index + 1, filteredCommands.length - 1),
          );
        } else if (key === "arrowup") {
          event.preventDefault();
          setActiveIndex((index) => Math.max(index - 1, 0));
        } else if (key === "enter" && filteredCommands[activeIndex]) {
          event.preventDefault();
          const command = filteredCommands[activeIndex];
          setIsOpen(false);
          setQuery("");
          setActiveIndex(0);
          command.run();
        }
        return;
      }

      if (key === "j") {
        event.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        return;
      }

      if (isTyping || event.altKey || event.ctrlKey || event.metaKey) return;
      if (key === "?" || (event.shiftKey && key === "/")) {
        event.preventDefault();
        setIsOpen(true);
        return;
      }

      const directCommand = commands.find(
        (command) => command.shortcut.toLowerCase() === key,
      );
      if (directCommand) {
        event.preventDefault();
        directCommand.run();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    activeIndex,
    commands,
    filteredCommands,
    isOpen,
    resolvedTheme,
    setTheme,
  ]);

  if (!isOpen) return null;

  let currentGroup = "";
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 dark:bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && close()}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-[4px] border border-dashed border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcut-dialog-title"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
              <Grid2X2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="shortcut-dialog-title"
                className="instrument-serif-bold text-lg"
              >
                Navigation Menu
              </h2>
              <p className="instrument-serif text-sm text-neutral-500 dark:text-neutral-400">
                Quickly jump to sections or actions
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-md p-1.5 text-neutral-500 transition hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
            aria-label="Close shortcuts menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 px-5 py-3">
          <Search
            className="h-5 w-5 text-neutral-500 dark:text-neutral-400"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder="Search for actions..."
            className="instrument-serif w-full bg-transparent text-base text-neutral-900 dark:text-white outline-none placeholder:text-neutral-500"
            aria-label="Search shortcuts"
          />
        </div>

        <div
          data-lenis-prevent
          onWheel={(event) => event.stopPropagation()}
          className="max-h-[min(52vh,430px)] overflow-y-auto scrollbar-hide scroll-smooth overscroll-contain p-2"
        >
          {filteredCommands.length ? (
            filteredCommands.map((command, index) => {
              const showGroup = command.group !== currentGroup;
              currentGroup = command.group;
              const Icon = command.icon;
              return (
                <div key={command.id}>
                  {showGroup && (
                    <p className="px-3 pb-2 pt-3 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                      {command.group}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => execute(command)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors delay-0 ${index === activeIndex ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-50 dark:hover:bg-neutral-900"}`}
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-neutral-500 dark:text-neutral-400"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="instrument-serif-bold block text-base">
                        {command.label}
                      </span>
                      <span className="instrument-serif block truncate text-sm text-neutral-500 dark:text-neutral-400">
                        {command.description}
                      </span>
                    </span>
                    <kbd className="rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-2 py-1 font-mono text-xs text-neutral-600 dark:text-neutral-400 shadow-sm dark:shadow-none">
                      {command.shortcut}
                    </kbd>
                  </button>
                </div>
              );
            })
          ) : (
            <p className="px-3 py-10 text-center text-sm text-neutral-500">
              No matching actions
            </p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-5 py-3 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            <ChevronUp className="h-3.5 w-3.5" />
            <ChevronDown className="h-3.5 w-3.5" /> to navigate · Enter to
            select
          </span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
