import { Copyright } from "lucide-react"
import Deco from "./icons/Decoration";

export function Footer () {

    const date = new Date();

    return (
        <div className="min-h-42.5 p-3">
            <div className="flex flex-col items-center justify-between gap-2 w-full max-w-5xl mb-5">
                <div className="flex items-start">
                    <p className="flex items-center gap-1">
                        <Copyright className="w-5 sm:w-5"/> 
                        <span className="instrument-serif text-[18px] sm:text-[19px]">{date.getFullYear()} Designed & Developed by <span className="text-[18px] md:text-[19px] instrument-serif-bold underline ">Probal.</span></span>
                    </p>
                </div>
                <p className="instrument-serif text-[16px] sm:text-[19px] flex items-start">
                    Asia/Kolkata
                </p>
            </div>

            <div className="dark:text-neutral-700 w-full flex justify-center transition-colors delay-100">
                <Deco/>
            </div>
        </div>
    )
}

export default Footer
