interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`relative my-3 ${className}`}>
      {/* Top Border */}
      <div className="absolute top-0 left-1/2 w-screen -translate-x-1/2 border-t border-dashed border-neutral-400 dark:border-neutral-800" />

      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-dashed border-neutral-400 dark:border-neutral-800" />
      <div className="py-1">{children}</div>
    </section>
  );
}
