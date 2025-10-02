'use client';
import { useRef } from "react";

// Temporary stub: does nothing, just returns a ref
export function useReveal<T extends HTMLElement>() {
  return useRef<T>(null);
}
