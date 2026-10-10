"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ProjectVideoProps = {
  image: string;
  name: string;
  videoUrl: string;
};

export default function ProjectVideo({
  image,
  name,
  videoUrl,
}: ProjectVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  console.log(image, name, videoLoaded, videoUrl)

  const handleCanPlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();
      setVideoLoaded(true);
    } catch {
      // Keep showing the project image when playback is unavailable.
      setVideoLoaded(false);
    }
  };

  const handleVideoError = () => {
    videoRef.current?.pause();
    setVideoLoaded(false);
  };

  return (
    <div className="relative mx-auto mb-9 w-full max-w-6xl overflow-hidden rounded-[5px] border border-neutral-200 bg-black dark:border-neutral-800">
      <div className="relative aspect-video w-full">
        {/* Poster image displayed while video loads */}
        <Image
          src={image}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className={`object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          onCanPlay={handleCanPlay}
          onError={handleVideoError}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
