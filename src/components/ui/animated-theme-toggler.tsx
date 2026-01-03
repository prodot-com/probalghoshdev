"use client";

import { useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  isDark: boolean;
}

export const AnimatedThemeToggler = ({
  className,
  isDark,
  onClick,
  ...props
}: AnimatedThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!buttonRef.current) return;

    // 🔥 Start animation FIRST
    const transition = document.startViewTransition?.(() => {
      onClick?.(e); // theme change happens here (via next-themes)
    });

    if (!transition) {
      onClick?.(e);
      return;
    }

    await transition.ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 400,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
