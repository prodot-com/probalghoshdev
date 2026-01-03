import { RainbowButton } from "./ui/rainbow-button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function RainbowButtonCustom() {
  const email = "xprobal52@gmail.com";

  const handleClick = () => {
    // toast.error("Opening mail client...");
    setTimeout(() => {
      // try {
      //   window.location.href = `mailto:${email}`
      // } catch {
      //   window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank")
      // }
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
    }, 100);
  };

  return (
    <RainbowButton
      onClick={handleClick}
      className="flex items-center gap-2"
      size="lg"
    >
      <Mail className="w-4 h-4 " />
      <span className="instrument-serif tracking-widest text-[17px]">
        Mail Me
      </span>
    </RainbowButton>
  );
}
