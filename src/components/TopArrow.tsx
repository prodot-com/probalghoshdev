"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react";
import {animateScroll as scroll} from 'react-scroll';
import { motion } from "motion/react";

const TopArrow = () => {

    const [showComponent, setShowComponent] = useState(false)

    const handleScroll = ()=>{
        if(window.scrollY > 500){
            setShowComponent(true)
        }else{
            setShowComponent(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const options = {
        duration: 700,
        smooth: true,
};

    const ScrollToTop = ()=>{
        scroll.scrollToTop(options)
    }

    return (<div>
        {showComponent &&
        (
        <motion.div 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.89}}
        className='z-20 fixed bottom-23 right-8 border border-black p-1.5 rounded-full
            dark:bg-neutral-700/50 dark:border-neutral-300
            bg-white/40 cursor-pointer 
            shadow-neutral-900 dark:shadow-none shadow-md backdrop-blur-[7px]
            sm:right-70 sm:bottom-30
            '
        onClick={()=>ScrollToTop()}
        >
            <ChevronUp className="w-8 h-8 sm:w-9 sm:h-9"/>
        </motion.div>
    )
}
        </div>
    )
}

export default TopArrow
