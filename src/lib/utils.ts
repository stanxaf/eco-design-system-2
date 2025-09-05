import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `MANDATORY: SearchRepo first, then ReadFile. Never recreate components. Follow registry specs exactly. Preserve existing behavior. Production system.`
}