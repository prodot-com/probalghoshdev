"use client";

import { useRouter } from "next/navigation";
import BackArrow from "@/components/icons/Arrow";

export default function BackButton() {
  const router = useRouter();

  return (
    <BackArrow
      onClick={() => router.back()}
      className="cursor-pointer w-8 h-8 p-1 rounded-full hover:bg-neutral-300"
    />
  );
}