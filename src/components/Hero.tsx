const Hero = () => {
  return (
    <div className="relative w-full max-w-5xl p-1.5">
      <img
        src="/banner8.gif"
        alt="Hero Background"
        className="w-full object-cover object-bottom rounded-[2px] h-[170px] md:h-[280px]"
      />

      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2" />
    </div>
  );
};

export default Hero;
