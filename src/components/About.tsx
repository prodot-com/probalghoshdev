import { Tooltip } from "./ui/tooltip-card";

export default function About(){
  return (
    <div className="w-full md:pr-17 max-w-5xl px-4 lg:ml-12 mt-9 z-0">
      <div className="flex">
        <p className=" text-[27px] md:text-[28px] text-black dark:text-white instrument-serif-bold">
          About.
        </p>
      </div>

      <div className="instrument-serif  text-black text-[17px] md:text-[20px] dark:text-neutral-400">
        Hello! I'm a developer from Kolkata, India. I enjoy programming and
        exploring technology. Currently working on my own projects. Open to
        work, freelance, or collaborate.{" "}
        <Tooltip
          containerClassName="instrument-serif-italic-bold"
          content="Leave a message below"
        >
          <span className="font-bold dark:text-neutral-200 instrument-serif-bold cursor-pointer hover:underline">
            Let's connect.
          </span>
        </Tooltip>
      </div>
    </div>
  );
};
