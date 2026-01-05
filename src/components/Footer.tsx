import { Copyright } from "lucide-react"

export function Footer () {

    const date = new Date();

    return (
        <div className="mt-7 pt-5 pl-4 md:pl-8 border-t dark:border-neutral-700 flex flex-col gap-3 w-full max-w-5xl min-h-42.5">
            <p className="pl-2 flex items-center gap-1">
                <Copyright className="w-5 sm:w-5"/> 
                <span className="instrument-serif text-[19px] sm:text-[19px]">{date.getFullYear()} Designed & Developed by <span className="text-[21px] instrument-serif-bold underline ">Probal.</span></span>
            </p>
        </div>
    )
}

export default Footer
