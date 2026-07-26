const Hero = () => {
  return (
    <div className="relative w-full max-w-5xl h-70 overflow-hidden">
      <img
        src="/banner.gif"
        alt="Hero Background"
        className="w-full h-62.5 md:h-95 object-cover object-[50%_100%]"
      />

      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-900 dark:border-neutral-800 z-20" />
    </div>
  );
};

export default Hero;