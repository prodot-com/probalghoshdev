"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AudioContextType = {
  isPlaying: boolean;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/BGM.mp3");

    audio.loop = true;
    audio.volume = 0.25;

    audioRef.current = audio;

    const start = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {}
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("scroll", start);
    };

    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    window.addEventListener("scroll", start, { once: true });

    return cleanup;
  }, []);

  const toggle = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);

  if (!ctx) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return ctx;
}