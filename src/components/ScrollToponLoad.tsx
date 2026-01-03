// src/components/ScrollToTopOnLoad.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
