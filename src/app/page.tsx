import About from "@/components/About";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import SidePattern from "@/components/Sidepattern";
import { TechStackMarquee } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen ">
      <SidePattern/>
        <div className="col-span-1 lg:col-span-2 selection:bg-orange-300 dark:selection:bg-indigo-500">
          <div className="flex flex-col items-center min-h-screen relative overflow-hidden">


            <Hero/>
            <Profile/>
            <About/>
            <TechStackMarquee/>
           


          </div>
        </div>
      <SidePattern/>
    </div>
  );
}
