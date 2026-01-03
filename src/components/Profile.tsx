
export default function Profile(){
  return (
          <div className="w-full max-w-5xl -mt-14 md:-mt-18 px-4 sm:pl-10 z-20">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-41 h-41 md:w-42 md:h-42 rounded-full ring-4 ring-black/55 dark:ring-white/30 hover:ring-black/40 dark:hover:ring-white/20 transition-all delay-50 
              shadow-2xl shadow-black/75 dark:shadow-white/15 mb-4 object-cover md:ml-2"
            />
            <div className="">
              <div className="w-full md:max-h-13 md:w-auto flex justify-between mr-12">
                  <h2 className="instrument-serif-bold text-black dark:text-white text-[45px] md:text-[45px] ">
                Probal Ghosh
              </h2>
            </div>
              
              <p className="instrument-serif-italic dark:text-neutral-500 text-neutral-800 text-[22px] md:text-[22px]">
                21 • engineer • fullstack developer
              </p>
            </div>
          </div>
  )
}

