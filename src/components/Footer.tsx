import { Copyright } from "lucide-react";
import Deco from "./icons/Decoration";
import Image from "next/image";

export function Footer() {
  const date = new Date();

  return (
    <div className="min-h-42.5">
      <div className="p-3 flex flex-col items-center justify-between gap-2 w-full max-w-5xl mb-5">
        <div className="flex items-start">
          <p className="flex items-center gap-1">
            <Copyright className="w-5 sm:w-5" />
            <span className="instrument-serif text-[18px] sm:text-[19px]">
              {date.getFullYear()} Designed & Developed by{" "}
              <span className="text-[18px] md:text-[19px] instrument-serif-bold underline ">
                Probal.
              </span>
            </span>
          </p>
        </div>
        <p className="instrument-serif text-[16px] sm:text-[19px] flex items-start">
          Asia/Kolkata
        </p>
      </div>

      {/* <div className="dark:text-neutral-700 w-full flex justify-center transition-colors delay-100">
                <Deco/>
            </div> */}

      <div className="relative h-25 w-full">
        <div className="absolute top-0 z-10 h-9 w-full bg-linear-to-b from-white to-transparent"/>

        <Image
          src="/footer/footer1.jpg"
          alt="Footer decoration"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Footer;
