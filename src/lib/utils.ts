import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `Design System Rules: Search repo first, read actual files, use only existing CSS vars, follow registry specs exactly, preserve APIs/types, work within constraints. NO design system changes without explicit user request.`;
}
