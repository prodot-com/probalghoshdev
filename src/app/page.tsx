import About from "@/components/About";
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
import SidePattern from "@/components/Sidepattern";
import { TechStackMarquee } from "@/components/TechStack";
import TopArrow from "@/components/TopArrow";
import Image from "next/image";

export default function Home() {
  return (
      <div className="col-span-1 xl:col-span-2 selection:bg-orange-300 dark:selection:bg-indigo-500">
        <div className="flex flex-col min-h-screen relative overflow-hidden">

          <Hero />

          <Reveal delay={0.1}>
            <Profile />
          </Reveal>

          <Reveal delay={0.15}>
            <About />
          </Reveal>

          <Reveal delay={0.15}>
            <TechStackMarquee/>
          </Reveal>

          <Reveal delay={0.15}>
            <GithubCalendar />
          </Reveal>

          <Reveal delay={0.15}>
            <Projectcard />
          </Reveal>

          <Reveal delay={0.15}>
            <Experience />
          </Reveal>

          <Reveal delay={0.15}>
            <EducationCard />
          </Reveal>

          <Reveal delay={0.25}>
            <Contact />
          </Reveal>

          <Footer />

          <TopArrow />

        </div>
      </div>
  );
}

