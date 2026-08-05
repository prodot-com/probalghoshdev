import { Plus } from "lucide-react";

type BorderJunctionProps = {
  edge: "top" | "bottom";
};

export default function BorderJunction({ edge }: BorderJunctionProps) {
  const isTop = edge === "top";
  const verticalOffset = isTop ? "-50%" : "50%";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 z-40 hidden lg:block"
    >
      <span
        className="absolute block h-4 w-4 text-neutral-400 dark:text-neutral-600"
        style={{
          left: "50%",
          [isTop ? "top" : "bottom"]: 0,
          transform: `translate(calc(-50% - var(--content-width) / 2), ${verticalOffset})`,
        }}
      >
        <Plus className="h-full w-full" strokeWidth={1.5} />
      </span>

      <span
        className="absolute block h-4 w-4 text-neutral-400 dark:text-neutral-600"
        style={{
          left: "50%",
          [isTop ? "top" : "bottom"]: 0,
          transform: `translate(calc(-50% + var(--content-width) / 2), ${verticalOffset})`,
        }}
      >
        <Plus className="h-full w-full" strokeWidth={1.5} />
      </span>
    </div>
  );
}
