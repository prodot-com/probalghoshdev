import About from "@/components/About";
import Achievements from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { EducationCard } from "@/components/Education";
import { Experience } from "@/components/Experience";
import GithubCalendar from "@/components/GithubCard";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import { Projectcard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import Section from "@/components/Section";
import Socials from "@/components/Socials";
import { TechStackMarquee } from "@/components/TechStack";
import TopArrow from "@/components/TopArrow";
import PortfolioIndex from "@/components/PortfolioIndex";

export default function Home() {
  return (
    <div className="relative w-full">
      <PortfolioIndex />
      <Section className="mt-14" showTopBorder={false}>
        <Hero />
      </Section>

      <Section id="about" className="mt-5">
        <Reveal delay={0.1}>
          <Profile />
        </Reveal>
      </Section>

      <Section className="mt-5 bg-white dark:bg-neutral-900">
        <Reveal delay={0.15}>
          <About />
        </Reveal>
      </Section>

      <Section id="skills" className="mt-5">
        <Reveal delay={0.15}>
          <TechStackMarquee />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <Socials />
        </Reveal>
      </Section>

      <Section className="mt-5">
        <Reveal delay={0.15}>
          <GithubCalendar />
        </Reveal>
      </Section>

      <Section id="projects" className="mt-5">
        <Reveal delay={0.15}>
          <Projectcard />
        </Reveal>
      </Section>

      <Section id="experience" className="mt-5">
        <Reveal delay={0.15}>
          <Experience />
        </Reveal>
      </Section>

      <Section id="achievements" className="mt-5">
        <Reveal delay={0.15}>
          <Achievements />
        </Reveal>
      </Section>

      <Section id="education" className="mt-5">
        <Reveal delay={0.15}>
          <EducationCard />
        </Reveal>
      </Section>

      <Section id="contact" className="mt-5">
        <Reveal delay={0.25}>
          <Contact />
        </Reveal>
      </Section>

      <TopArrow />
    </div>
  );
}
