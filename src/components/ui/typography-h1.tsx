import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H1 component for main page titles.
 * 
 * **Styling:**
 * - Font size: text-2xl (24px)
 * - Font weight: font-bold (700)
 * - Line height: leading-6 (1.5)
 * 
 * **Usage:**
 * ```tsx
 * <TypographyH1>Main Page Title</TypographyH1>
 * <TypographyH1 className="text-blue-500">Custom Styled Title</TypographyH1>
 * ```
 */
export function TypographyH1({ className, children, ...props }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "font-bold text-2xl leading-6",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
