import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH6Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H6 component for smallest headers.
 *
 * **Styling:**
 * - Font size: text-sm (14px)
 * - Font weight: font-bold (700)
 * - Line height: leading-4 (1)
 *
 * **Usage:**
 * ```tsx
 * <TypographyH6>Smallest Header</TypographyH6>
 * <TypographyH6 className="text-blue-500">Custom Styled Header</TypographyH6>
 * ```
 */
export function TypographyH6({ className, children, ...props }: TypographyH6Props) {
  return (
    <h6
      className={cn(
        "font-bold text-sm leading-4",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  );
}
