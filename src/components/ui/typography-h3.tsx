import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H3 component for subsection headers.
 *
 * **Styling:**
 * - Font size: text-xl (20px)
 * - Font weight: font-bold (700)
 * - Line height: leading-5 (1.25)
 *
 * **Usage:**
 * ```tsx
 * <TypographyH3>Subsection Header</TypographyH3>
 * <TypographyH3 className="text-blue-500">Custom Styled Header</TypographyH3>
 * ```
 */
export function TypographyH3({ className, children, ...props }: TypographyH3Props) {
  return (
    <h3
      className={cn(
        "font-bold text-xl leading-5",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
