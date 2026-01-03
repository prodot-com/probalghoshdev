export default function SidePattern() {
  return (
    <div className="hidden lg:block">
        <div className="h-full w-full bg-white dark:bg-neutral-950 relative">
        <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{
            backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f8 2px, #f3f4f6 4px)",
            }}
        />
        <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{
            backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 2px, #171717 2px, #18181b 4px)",
            }}
        />
        </div>
    </div>
  );
}
