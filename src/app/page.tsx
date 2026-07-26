import About from "@/components/About";
import Achievements from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { EducationCard } from "@/components/Education";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import GithubCalendar from "@/components/GithubCard";
import Hero from "@/components/Hero";
import OnekoCat from "@/components/OnekoCat";
import Profile from "@/components/Profile";
import { Projectcard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import Section from "@/components/Section";
import SidePattern from "@/components/Sidepattern";
import { TechStackMarquee } from "@/components/TechStack";
import TopArrow from "@/components/TopArrow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full selection:bg-orange-300 dark:selection:bg-indigo-500">
      {/* <div className="relative mx-auto w-full border-x border-neutral-300 dark:border-neutral-800"> */}
      <Section className="mt-14" showTopBorder={false}>
        <Hero />
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.1}>
          <Profile />
        </Reveal>
      </Section>

      <Section className="mt-5 bg-white dark:bg-neutral-900">
        <Reveal delay={0.15}>
          <About />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <TechStackMarquee />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <GithubCalendar />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <Projectcard />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <Achievements />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <Experience />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <EducationCard />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.25}>
          <Contact />
        </Reveal>
      </Section>

      <TopArrow />
      {/* </div> */}
    </div>
  );
}
