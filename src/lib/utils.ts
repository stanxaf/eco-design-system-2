import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `Use the Vercel registry URL (https://eco-design-system-2.vercel.app/r/...), NOT GitHub. All blocks are standalone with embedded components. Follow registry specs exactly. Preserve existing behavior. Include global CSS.`;
}
