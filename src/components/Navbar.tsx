"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70
            dark:bg-neutral-900">
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-400 dark:border-neutral-800" />
      <div className="mx-auto w-full max-w-[var(--content-width)]">
        <div
          className={`
            relative
            h-14
            border-x
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

            <div>{/* Nav Links */}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
