"use client"

import { Home, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

const Pagenotfound = () => {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-neutral-900 flex flex-col gap-6 md:gap-2 justify-center items-center p-4 transition-colors duration-300">

      <div className="bg-white dark:bg-black text-slate-600 dark:text-white/75 border border-slate-300 dark:border-neutral-500 border-dashed 
                      w-full max-w-150 min-h-100 md:min-h-125 
                      flex flex-col justify-center items-center p-6 text-center shadow-sm dark:shadow-none">
        
        <div className="border border-slate-200 dark:border-neutral-700 p-2 rounded-full bg-slate-100 dark:bg-neutral-800">
          <TriangleAlert className="w-4 h-4 text-slate-500 dark:text-white/75" />
        </div>

        <p className="text-7xl md:text-9xl mt-6 instrument-serif-italic text-slate-900 dark:text-white">
          4<span className="text-6xl md:text-8xl">0</span>4
        </p>

        <p className="mt-4 instrument-serif text-2xl md:text-3xl tracking-tight text-slate-800 dark:text-white/90">
          ROUTE NOT FOUND
        </p>

        <p className="mt-6 instrument-serif text-lg md:text-xl max-w-xs md:max-w-none opacity-70 dark:opacity-80">
          The page you are looking for doesn't exist in this stack.
        </p>

        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 mt-8 mb-6 instrument-serif py-2 px-4 rounded-[5px] 
                     bg-slate-900 dark:bg-neutral-800 text-white
                     hover:bg-slate-800 dark:hover:bg-neutral-700 
                     transition-colors cursor-pointer"
        >
          <Home className="w-4" />
          <span>Go Back Home</span>
        </button>

      </div>

    </div>
  );
};

export default Pagenotfound;