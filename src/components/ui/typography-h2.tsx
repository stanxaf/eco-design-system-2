import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H2 component for section headers.
 * 
 * **Styling:**
 * - Font size: text-2xl (24px)
 * - Font weight: font-bold (700)
 * - Line height: leading-6 (1.5)
 * 
 * **Usage:**
 * ```tsx
 * <TypographyH2>Section Header</TypographyH2>
 * <TypographyH2 className="text-blue-500">Custom Styled Header</TypographyH2>
 * ```
 */
export function TypographyH2({ className, children, ...props }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "font-bold text-2xl leading-6",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
