"use client"

import { Copy, ArrowUpLeft } from "lucide-react";
import { RainbowButtonCustom } from "./RainbowButton";
import { toast } from "sonner";
import { Tooltip } from "./ui/tooltip-card";

export function Contact() {
  const email = "xprobal52@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied");
  };

  return (
    <div className="heading-font sm:pr-17 px-4 sm:pl-10 mt-2 sm:mt-1 z-0 w-full max-w-5xl border-neutral-500 dark:border-neutral-600 pt-4">
      <section className="w-full pt-0 md:pl-0 md:pt-0 rounded-lg flex flex-col gap-4">
        <h2 className="font-bold text-[27px] md:text-[27px] instrument-serif-bold text-neutral-900 dark:text-neutral-100">
          Contact.
        </h2>
        <div className="instrument-serif-italic text-[19px] md:text-[19px] text-neutral-600 dark:text-neutral-400">
          Always open to discussing new projects, creative ideas, or
          opportunities.{" "}
          <Tooltip
            containerClassName="instrument-serif-italic-bold"
            content={<ContactTooltipCard />}
          >
            <span className="instrument-serif-italic-bold cursor-pointer">
              Feel free to reach out!
            </span>
          </Tooltip>
        </div>
        <div className="flex flex-col sm:flex-row gap-7 mt-2">
          <RainbowButtonCustom />

          <button
            onClick={handleCopy}
            className="group cursor-pointer flex items-center justify-center gap-2 px-4 py-2 text-[15px] md:text-sm font-semibold rounded-[5px] border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            <Copy className="w-5 h-5" />
            <span className="instrument-serif-bold tracking-wider text-[16px]">
              {email}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

const ContactTooltipCard = () => {
  return (
    <span className="flex gap-1">
      <ArrowUpLeft className="rotate-290" />
      <p>Leave a mail</p>
    </span>
  );
};
