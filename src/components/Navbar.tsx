"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const router = useRouter()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 4) {
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);


    return (
            <div className={`grid grid-cols-1 xl:grid-cols-4 fixed top-0 left-0 w-full h-17.5  z-10 transition-all delay-75 justify-center`}>

                <div></div>
                <div className={`col-span-1 xl:col-span-2 h-17.5 ${scrolled ? "bg-white/15 dark:bg-black/15 backdrop-blur-xs" : " bg-white dark:bg-neutral-950"} `}>
                    <div className="w-full h-full px-2 flex justify-between items-center">
                        <div className="h-full flex justify-between items-center">
                        <h1
                        onClick={()=>{router.refresh()
                            window.scrollTo({top: 0, behavior: "smooth"})
                        }}
                        className="cursor-pointer kablammo-font hover:underline decoration-indigo-700 text-[35px] text-indigo-700 tracking-tight transition delay-25">
                            probal
                        </h1>
                        </div>
                    </div>
                </div>
                <div></div>

        </div>
    )
}

export default Navbar
