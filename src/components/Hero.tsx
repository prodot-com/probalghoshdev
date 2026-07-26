const Hero = () => {
  return (
    <div className="relative w-full max-w-5xl p-1.5">
      <img
        src="/banner.gif"
        alt="Hero Background"
        className="w-full object-cover rounded-[2px] h-[170px] md:h-[280px]"
      />

      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-900 dark:border-neutral-800" />
    </div>
  );
};

export default Hero;
