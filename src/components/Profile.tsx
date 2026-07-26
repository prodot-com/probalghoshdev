import { Eye } from "lucide-react";

export default function Profile() {
  return (
    <section className="flex items-start justify-between p-2">
      {/* Left */}
      <div className="flex items-start gap-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="h-32 w-32 rounded-2xl border-4 border-neutral-500 object-cover"
        />

        <div className="space-y-1">
          <div className="flex gap-1">
            <div className="relative h-4 w-4 rounded-full border border-neutral-500">
              <div className="absolute inset-y-0 left-0 w-1/2 rounded-l-full bg-neutral-900" />
            </div>
            <div className="relative h-4 w-4 rounded-full border border-neutral-500">
              <div className="absolute inset-y-0 right-0 w-1/2 rounded-r-full bg-neutral-900" />
            </div>
          </div>

          <h1 className="instrument-serif-bold text-4xl leading-none text-black dark:text-white">
            Probal Ghosh
          </h1>

          <p className="text-2xl font-semibold text-neutral-500">
            Full Stack Developer
          </p>

          <p className="text-sm text-neutral-500">21, West Bengal, IND</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 text-neutral-500">
        <Eye className="h-5 w-5" />
        <span className="text-lg">6576</span>
      </div>
    </section>
  );
}
