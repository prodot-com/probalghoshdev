"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const router = useRouter()
    // const [bgmPlaying, setBgmPlaying] = useState(false);
    // const audioRef = useRef<HTMLAudioElement| null>(null);


//         useEffect(()=>{
//     const audio = new Audio("/BGM.mp3");
//     audio.loop = true;
//     audioRef.current = audio;

//     const startAudio =async ()=>{
//         const a = audioRef.current;

//         if(!a?.paused){
//             removeListner()
//             return;
//         }

//         try {
//             await a.play()
//             setBgmPlaying(true)
//         } catch (error) {
//             console.log(error)
//         }

//         removeListner()
//     }

//     const removeListner = ()=>{
//         window.removeEventListener("click", startAudio);
//         window.removeEventListener("pointerdown", startAudio);
//         window.removeEventListener("pointerup", startAudio);
//         window.removeEventListener("touchstart", startAudio);
//     }

//     // window.addEventListener("click", startAudio)
//     // window.addEventListener("pointerdown", startAudio);
//     // window.addEventListener("pointerup", startAudio);
//     // window.addEventListener("touchstart", startAudio);

//     return ()=>{
//         removeListner();
//         audio.pause();
//         audioRef.current = null;
//         setBgmPlaying(false);
//     }

// },[])

//     const handlePlay = async ()=>{
//         let audio =  audioRef.current

//         if(!audio){
//             audio =  new Audio("/BGM.mp3");
//             audio.loop = true;
//             audioRef.current = audio
//         }

//         try {
//             await audio.play()
//             setBgmPlaying(true)
//         } catch (error) {
//         console.log(error)
//         }
//     }

//     const handlePause = async()=>{
//         const audio = audioRef.current
//         if(!audio)return
//         audio.pause()
//         setBgmPlaying(false)
//     }

    return (
            <div className="fixed top-0 left-0 w-full h-17.5 bg-white dark:bg-black shadow z-30 flex items-center justify-center">
            <div className="w-full max-w-3xl h-full px-2 flex justify-between items-center">
                <div className="h-full flex justify-between items-center">
                <h1
                onClick={()=>{router.refresh()
                    window.scrollTo({top: 0, behavior: "smooth"})
                }}
                className="cursor-pointer kablammo-font hover:underline decoration-indigo-700 text-[35px] text-indigo-700 tracking-tight transition delay-25">
                    probal
                </h1>
                </div>
            {/* <div className="mr-5">
                {bgmPlaying ? (
            <button
                onClick={handlePause}
                className="w-10 h-10 flex items-center justify-center rounded-full 
                hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 
                transition-colors cursor-pointer"
                >
                <FontAwesomeIcon icon={faPause} size="lg" />
                </button>
            ) : (
                <button
                onClick={handlePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full  
                hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 
                transition-colors cursor-pointer"
            >
                <FontAwesomeIcon icon={faPlay} size="lg" />
                </button>
            )}
            </div> */}

            </div>
        </div>
    )
}

export default Navbar
