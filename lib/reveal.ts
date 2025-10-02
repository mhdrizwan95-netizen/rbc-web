'use client';
import { useRef } from "react";

// No-op for now; swap with real reveal/animation later
export function useReveal<T extends HTMLElement>() {
  return useRef<T>(null);
}
