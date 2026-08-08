"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import ReactMarkdown from "react-markdown";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/ProjectData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import Divider from "@/components/Divider";
import Router from "next/router";
import { Projectcard } from "@/components/ProjectCard";
import BackButton from "@/components/ui/BackButton";

export default function ProjectsPage() {
  const router = useRouter();
  return (
    <>
      <Section className="mt-14" showTopBorder={false}>
        <div className="px-3 py-1.5 flex gap-3 items-center">
          {/* <BackButton /> */}

          <div className="flex flex-col">
            <h1 className="instrument-serif-bold text-[30px] md:text-[24px] leading-none text-neutral-900 dark:text-white">
              All Projects
            </h1>

            <span className="instrument-serif text-[15px] leading-5 text-neutral-500 dark:text-neutral-400">
              Full Project Archive
            </span>
          </div>
        </div>

        <Divider dashed />

        <Projectcard showHeading={false} showViewAll={false} />
      </Section>
    </>
  );
}
