"use client";

import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const indexItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
];

export default function PortfolioIndex() {
  const [activeId, setActiveId] = useState<string | null>(indexItems[0].id);

  useEffect(() => {
    const ratios = new Map<string, number>();
    const sections = indexItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        const visible = [...ratios.entries()].filter(([, ratio]) => ratio > 0);

        if (visible.length > 0) {
          visible.sort((a, b) => b[1] - a[1]);
          setActiveId(visible[0][0]);
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const achievements = document.getElementById("achievements");

      if (!achievements) return;

      const rect = achievements.getBoundingClientRect();

      // Once the entire section has scrolled past the viewport
      if (rect.bottom < 0) {
        setActiveId(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIndexClick = (id: string) => {
    setActiveId(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="pointer-events-none absolute inset-x-0 top-0 z-30 hidden h-full xl:block"
      aria-label="Portfolio index"
    >
      <nav
        className="pointer-events-auto sticky top-20 w-40 pt-2"
        style={{ marginLeft: "calc(50% + var(--content-width) / 2 + 1.5rem)" }}
      >
        <p className="instrument-serif-bold mb-4 text-xs tracking-[0.2em] text-neutral-400 uppercase dark:text-neutral-500">
          Index
        </p>
        <LayoutGroup>
          <ol className="space-y-3 border-l border-neutral-200 pl-4 dark:border-neutral-800">
            {indexItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleIndexClick(item.id)}
                    aria-current={isActive ? "location" : undefined}
                    className={`instrument-serif relative block text-left text-[16px] transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 dark:hover:text-neutral-400 ${
                      isActive
                        ? "text-neutral-800 dark:text-neutral-200"
                        : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="index-indicator"
                        className="absolute -left-[23px] top-1/2 h-px w-4 -translate-y-1/2 bg-neutral-500 dark:bg-neutral-500"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          mass: 0.5,
                        }}
                      />
                    )}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ol>
        </LayoutGroup>
      </nav>
    </aside>
  );
}
