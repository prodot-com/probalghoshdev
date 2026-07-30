"use client";

import { Copy, ArrowUpLeft } from "lucide-react";
import { RainbowButtonCustom } from "./RainbowButton";
import { toast } from "sonner";
import { Tooltip } from "./ui/tooltip-card";
import Divider from "./Divider";

export function Contact() {
  const email = "xprobal52@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied");
  };

  return (
    <div className="w-full">
      <p className="text-[24px] md:text-[29px] instrument-serif-bold text-neutral-900 dark:text-white px-3 py-1.5">
        Contact.
      </p>

      <Divider dashed />

      <div className="p-3 space-y-6">
        <div className="instrument-serif text-[17px] md:text-[19px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          Always open to discussing new projects, creative ideas, or
          opportunities.{" "}
          <Tooltip
            containerClassName="instrument-serif-italic-bold"
            content={<ContactTooltipCard />}
          >
            <span className="instrument-serif-italic-bold cursor-pointer underline underline-offset-4">
              Feel free to reach out.
            </span>
          </Tooltip>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <RainbowButtonCustom />

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 rounded-[5px] border border-neutral-300 dark:border-neutral-700 px-4 py-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <Copy className="h-4 w-4" />
            <span className="instrument-serif-bold tracking-wide text-[16px]">
              {email}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const ContactTooltipCard = () => (
  <span className="flex items-center gap-1">
    <ArrowUpLeft className="h-4 w-4" />
    <span>Leave a mail</span>
  </span>
);