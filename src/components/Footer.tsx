import { Copyright } from "lucide-react"

export function Footer () {
    return (
        <div className=" mt-7 pt-5 pl-4 md:px-9 border-t-1 dark:border-neutral-700 flex flex-col gap-3 w-full max-w-5xl min-h-[170px]">
            <p className="pl-2 flex items-center gap-1">
                <Copyright className="w-5 sm:w-5"/> 
                <span className="instrument-serif text-[19px] sm:text-[19px]">2025 Designed & Developed by <span className="text-[21px] instrument-serif-bold underline ">Probal.</span></span>
            </p>
        </div>
    )
}

export default Footer
