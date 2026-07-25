interface SectionProps {
  children: React.ReactNode;
}

export default function Section({ children }: SectionProps) {
  return (
    <section className="relative py-20">
      <div className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 bg-neutral-300 dark:bg-neutral-800" />
      {children}
    </section>
  );
}