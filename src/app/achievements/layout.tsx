import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Achievements | Probal Ghosh",
  description:
    "IEEE published research on multimodal sensor fusion for heart disease prediction using AI.",
};

export default function AchievementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-neutral-900 selection:bg-orange-300 dark:bg-neutral-950 dark:text-white dark:selection:bg-indigo-500">
      {/* Background glow */}
      {/* <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-orange-200/30 blur-3xl dark:bg-indigo-500/10" /> */}

      {/* Vertical guide borders */}
      <div className="pointer-events-none fixed inset-y-0 left-1/2 -z-10 hidden w-full max-w-6xl -translate-x-1/2 lg:block">
        <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-white/10" />
        <div className="absolute right-0 top-0 h-full w-px bg-neutral-200 dark:bg-white/10" />
      </div>

      {/* Page Content */}
      <div className="">
        {children}
      </div>
    </main>
  );
}