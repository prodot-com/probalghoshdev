"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import ReactMarkdown from "react-markdown";
import { Github, Globe} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/ProjectData";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useRouter } from "next/navigation";
import BackArrow from "@/components/icons/Arrow";

export default function Home() {

  const router = useRouter();

  return (
    <div className="px-0 mt-17.5 md:px-2 font-bold w-full max-w-5xl">
      <div className="border border-amber-500">
        <div className="flex-col p-4 md:px-8">
          <BackArrow className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-neutral-300"
          onClick={()=>router.back()}
          />
          <p className="pt-4 text-[27px] md:text-[29px] font-bold instrument-serif-italic-bold text-neutral-900 dark:text-white">
            Proof of work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:px-8 place-items-center">
          {projects.map((project, index) => (
            <Card
              key={`${project.name}-${index}`}
              className= "relative  w-full  max-w-sm  h-110  flex  flex-col  overflow-hidden  bg-white/10  dark:bg-black  dark:border-neutral-800  backdrop-blur-md  border  border-indigo-800/20  shadow-lg  hover:shadow-xl  transition-all  duration-300"
            >
              {project.image && (
                <div className="relative w-full h-45">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-t-[7px] border-b dark:border-white/10 border-white/20"
                  />
                </div>
              )}

              <CardHeader className="px-3 pt-3 flex flex-col gap-2">
                <CardTitle className="instrument-serif-bold text-[22px] md:text-[20px]">
                  {project.name}
                </CardTitle>

                <div
                  className="instrument-serif text-[14px] prose prose-sm dark:prose-invert max-w-none line-clamp-4"
                >
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
              </CardHeader>

              <CardContent className="px-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[12px] font-normal bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white px-2 py-1 rounded-[5px] border instrument-serif"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="px-3 mt-auto">
                {project.link && (
                  <div className="flex items-center gap-3">
                    {project.link.livelink && (
                      <a
                        href={project.link.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instrument-serif-bold tracking-widest flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transitioninstrument-serif-bold"
                      >
                        <Globe className="w-4 h-4" /> Live
                      </a>
                    )}

                    {project.link.gitlink && (
                      <a
                        href={project.link.gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instrument-serif-bold tracking-widest flex items-center gap-1 text-[13px] bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-[5px] border hover:bg-neutral-700 dark:hover:bg-neutral-400 transitioninstrument-serif-bold"
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                  </div>
                )}
              </CardFooter>

              <BorderBeam
                duration={6}
                size={200}
                className="from-transparent via-red-500 to-transparent"
                borderWidth={2}
              />
              <BorderBeam
                duration={6}
                delay={14}
                size={200}
                borderWidth={2}
                className="from-transparent via-blue-500 to-transparent"
              />
            </Card>
          ))}
        </div>

        <div className="flex justify-start">
          <ShinyButton
            className="
              ml-4 
              md:ml-8 
              rounded-[5px] 
              bg-black 
              text-white
              instrument-serif-bold 
              text-[17px] 
              px-4 
              cursor-default 
              border 
              dark:border-neutral-600
            "
          >
            More coming soon
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}