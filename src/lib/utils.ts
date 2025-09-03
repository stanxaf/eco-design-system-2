import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPrompt(): string {
  return `Design System Rules: Search repo first, persist with ReadFile until you get actual content (not redacted), ALWAYS use registry JSON files from public/r/ directory (ImportReadOnlyFile), NEVER recreate components from scratch, use only existing CSS vars, follow registry specs exactly, preserve APIs/types, work within constraints. For icons, ALWAYS use FontAwesome via the Icons component from @/components/icons if available. Check src/components/icons.tsx for available icons. NO design system changes without explicit user request.`;
}
