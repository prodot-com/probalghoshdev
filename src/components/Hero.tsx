
const Hero = () => {
  return (
          <div className="relative w-full max-w-5xl mt-[70px] overflow-hidden">
            <img
              src="/hero.jpg"
              alt="Hero Background"
              className="w-full h-[250px] md:h-[380px] object-cover"
            />

            <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white dark:from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 left-0 w-[70px] bg-gradient-to-r from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 right-0 w-[70px] bg-gradient-to-l from-white dark:from-neutral-900 to-transparent"></div>

            <div className="absolute underline decoration-indigo-500 dark:decoration-indigo-700 inset-0 flex items-center font-bold justify-center text-white dark:text-black  italic 
            text-[27px] md:text-[35px] instrument-serif-bold tracking-wide">
              Build anything<span className="text-indigo-500 dark:text-indigo-700">.</span>
            </div>
          </div>
  )
}

export default Hero
