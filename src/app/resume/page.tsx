import { Download, ExternalLink, FileText } from "lucide-react";
import { Metadata } from "next";

import BackButton from "@/components/ui/BackButton";
import { ResumeLink } from "@/lib/Links";
import Section from "@/components/Section";
import Divider from "@/components/Divider";

export const metadata: Metadata = {
  title: "Resume | Probal Ghosh",
  description: "View and download Probal Ghosh's resume.",
};

function getDrivePreviewUrl(url: string) {
  const fileId = url.match(/\/d\/([^/]+)/)?.[1];
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
}

export default function ResumePage() {
  const previewUrl = getDrivePreviewUrl(ResumeLink);

  return (
    <Section className="mt-14" showTopBorder={false}>
      <main className="px-3 py-1.5 pb-7">
        <div className="mx-auto w-full max-w-[var(--content-width)]">
          <header className="mt-2 flex items-start justify-between gap-4">
            <div className="flex items-center justify-between w-full gap-2">
              {/* <BackButton /> */}
              <div className="flex flex-col">
                <h1 className="instrument-serif-bold text-[19px] md:text-[21px] leading-none text-neutral-900 dark:text-white">
                  Probal Ghosh <span className="">·</span> Resume
                </h1>

                <span className="instrument-serif text-[13px] md:text-[15px] leading-5 text-neutral-500 dark:text-neutral-400">
                  PDF document · Updated resume
                </span>
              </div>
              <a
                  href={ResumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-[3px] border-2 border-neutral-800 bg-linear-to-b from-neutral-700 to-neutral-900 px-4 py-2 sm:px-5 sm:py-2.5 text-[14px] 
                  font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-150 hover:from-neutral-700 
                  hover:to-neutral-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                >
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                  Open
                </a>
            </div>
          </header>

          <Divider dashed className="mt-2" />

          <section className="" aria-labelledby="resume-document-heading">
            <div className="flex justify-between py-4 flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2">
                {/* <a
                  href={ResumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[3px] bg-neutral-100 dark:bg-neutral-700 border-2 border-neutral-300 p-3 text-sm 
                  font-semibold transition-colors hover:bg-white dark:border-neutral-600 dark:hover:bg-neutral-800"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a> */}
                {/* <a
                  href={ResumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-[3px] border-2 border-neutral-800 bg-linear-to-b from-neutral-700 to-neutral-900 px-5 py-2.5 text-sm 
                  font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-150 hover:from-neutral-700 
                  hover:to-neutral-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download
                </a> */}
                
              </div>
            </div>

            <div className="overflow-hidden p-2 border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950">
              <img src="./resume.png" className="" />
            </div>
          </section>
        </div>
      </main>
    </Section>
  );
}
