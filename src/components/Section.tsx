interface SectionProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
}

export default function Section({
  children,
  className = "",
  contentClassName = "",
  showTopBorder = true,
  showBottomBorder = true,
}: SectionProps) {
  return (
    <section className={`relative w-full bg-white dark:bg-neutral-900 ${className}`}>
      {/* Top Divider */}
      {showTopBorder && (
        <div className="absolute top-0 left-1/2 z-20 w-screen -translate-x-1/2 border-t border-dashed border-neutral-400 dark:border-neutral-800" />
      )}

      {/* Content */}
      <div
        className={`relative z-10 mx-auto w-full max-w-[var(--content-width)] ${contentClassName}`}
      >
        {children}
      </div>

      {/* Bottom Divider */}
      {showBottomBorder && (
        <div className="absolute bottom-0 left-1/2 z-20 w-screen -translate-x-1/2 border-b border-dashed border-neutral-400 dark:border-neutral-800" />
      )}
    </section>
  );
}