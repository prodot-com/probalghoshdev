import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen ">
      <div className="hidden lg:block ">
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

      <div className="col-span-1 lg:col-span-2 selection:bg-orange-300 dark:selection:bg-indigo-500">
        <div className="flex flex-col items-center min-h-screen relative overflow-hidden">


              kjnsnn


        </div>
      </div>
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
    </div>
  );
}
