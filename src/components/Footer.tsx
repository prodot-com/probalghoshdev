import { Copyright } from "lucide-react"
import Deco from "./icons/Decoration";

export function Footer () {

    const date = new Date();

    return (
        <div className="min-h-42.5 mb-15 md:mb-10">
            <div className="mt-7 mb-7 pt-5 pl-4 md:pl-8 border-t dark:border-neutral-700 flex justify-between gap-1 w-full max-w-5xl ">
                <div className="pl-2 flex items-start">
                    <p className="flex items-center gap-1">
                        <Copyright className="w-5 sm:w-5"/> 
                        <span className="instrument-serif text-[19px] sm:text-[19px]">{date.getFullYear()} Designed & Developed by <span className="text-[21px] instrument-serif-bold underline ">Probal.</span></span>
                    </p>
                </div>
                <p className="instrument-serif text-[19px] sm:text-[19px] flex items-start pr-10">
                    Asia/Kolkata
                </p>
            </div>

            <div className="text-neutral-300 dark:text-neutral-700 w-full flex justify-center">
                <Deco/>
            </div>
        </div>
    )
}

export default Footer
