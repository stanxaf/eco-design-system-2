import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H4 component for component headers.
 *
 * **Styling:**
 * - Font size: text-lg (18px)
 * - Font weight: font-bold (700)
 * - Line height: leading-5 (1.25)
 *
 * **Usage:**
 * ```tsx
 * <TypographyH4>Component Header</TypographyH4>
 * <TypographyH4 className="text-blue-500">Custom Styled Header</TypographyH4>
 * ```
 */
export function TypographyH4({ className, children, ...props }: TypographyH4Props) {
  return (
    <h4
      className={cn(
        "font-bold text-lg leading-5",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}
