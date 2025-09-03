import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `Design System Rules: Search repo first, use registry JSON files from public/r/, never recreate components, use existing CSS vars, follow registry specs. For icons, use FontAwesome via Icons component from @/components/icons if available. NO design system changes without explicit user request.
}
