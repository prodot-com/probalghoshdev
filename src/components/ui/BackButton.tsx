"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="cursor-pointer group flex items-center justify-center rounded-[4px] border border-neutral-300 dark:border-neutral-700 bg-gradient-to-b from-neutral-100 to-neutral-200 
      dark:from-neutral-700 dark:to-neutral-900 p-1 text-neutral-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 ease-out hover:border-white/ hover:text-neutral-900 dark:hover:text-neutral-300
      active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <ArrowLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
    </button>
  );
}