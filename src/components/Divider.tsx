interface DividerProps {
  className?: string;
  dashed?: boolean;
}

export default function Divider({
  className = "",
  dashed = false,
}: DividerProps) {
  return (
    <div className={`relative h-px ${className}`}>
      <div
        className={`absolute left-1/2 w-screen -translate-x-1/2 ${
          dashed ? "border-dashed" : ""
        } border-t border-neutral-400 dark:border-neutral-800`}
      />
    </div>
  );
}