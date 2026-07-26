const Hero = () => {
  return (
    <div className="relative w-full max-w-5xl mt-14 h-52 overflow-hidden">
      <img
        src="/banner.gif"
        alt="Hero Background"
        className="w-full h-62.5 md:h-95 object-cover object-[50%_100%]"
      />

      {/* Fade overlays */}
      {/* <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-white dark:from-neutral-950 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white dark:from-neutral-900 to-transparent" />
      <div className="absolute top-0 bottom-0 left-0 w-17.5 bg-linear-to-r from-white dark:from-neutral-900 to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-17.5 bg-linear-to-l from-white dark:from-neutral-900 to-transparent" /> */}

      {/* Title */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center
                   text-[27px] md:text-[35px]
                   font-bold italic
                   instrument-serif-bold tracking-wide
                   text-white dark:text-black
                   underline decoration-indigo-500 dark:decoration-indigo-700"
      >
        Build anything
        <span className="text-indigo-500 dark:text-indigo-700">.</span>
      </div> */}

      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-900 dark:border-neutral-800 z-20" />
    </div>
  );
};

export default Hero;