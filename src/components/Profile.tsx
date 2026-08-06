"use client";

import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "@/components/ui/text-animate";

const roles = ["Engineer?", "Full Stack Developer"];

export default function Profile() {
  const [showRealProfile, setShowRealProfile] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickSound.current = new Audio("/click.wav");
    clickSound.current.volume = 0.4;

    return () => {
      clickSound.current = null;
    };
  }, []);

  const [views, setViews] = useState<number | null>(null);

  // useEffect(() => {
  //   async function loadViews() {
  //     const res = await fetch("/api/v1/views");
  //     const data = await res.json();

  //     setViews(data.views);
  //   }

  //   loadViews();
  // }, []);

  return (
    <section className="flex items-start justify-between px-3 py-5">
      <div className="flex items-start gap-4 md:gap-8">
        <div className="relative h-29 w-29 md:h-35 md:w-35">
          <img
            src="/profile2.jpg"
            className={`absolute inset-0 h-full w-full rounded-[4px] border- border-neutral-500 object-cover transition-opacity duration-300 ${
              showRealProfile ? "opacity-100" : "opacity-0"
            }`}
          />

          <img
            src="/profile.jpg"
            className={`absolute inset-0 h-full w-full rounded-[4px] border- border-neutral-500 object-cover transition-opacity duration-300 ${
              showRealProfile ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="space-y-1">
          <div
            className="relative h-4 w-4 rounded-full border border-neutral-500 cursor-pointer"
            onClick={() => {
              if (clickSound.current) {
                clickSound.current.currentTime = 0;
                clickSound.current.play().catch(() => {});
              }

              setShowRealProfile((prev) => !prev);
            }}
          >
            <div
              className={`absolute inset-y-0 w-1/2 bg-neutral-900 dark:bg-white transition-all duration-75 ease-in-out ${
                showRealProfile
                  ? "left-0 rounded-l-full"
                  : "left-1/2 rounded-r-full"
              }`}
            />
          </div>

          <h1 className="instrument-serif-bold text-[30px] md:text-4xl leading-none text-black dark:text-white">
            Probal Ghosh
          </h1>

          <TextAnimate
            key={roles[index]}
            duration={0.7}
            delay={0.3}
            animation="blurInDown"
            by="character"
            className="text-[16px] md:text-2xl font-semibold text-neutral-500"
          >
            {roles[index]}
          </TextAnimate>

          <p className="text-[13px] md:text-sm text-neutral-500 ">21, West Bengal, IND</p>
        </div>
      </div>

      <div className="flex items-center gap-1 text-neutral-500">
        <Eye className="h-4 w-4" />
        <span className="text-[12px]">{views?.toLocaleString() ?? "0000"}</span>
      </div>
    </section>
  );
}
