import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH5Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H5 component for small headers.
 * 
 * **Styling:**
 * - Font size: text-base (16px)
 * - Font weight: font-bold (700)
 * - Line height: leading-5 (1.25)
 * 
 * **Usage:**
 * ```tsx
 * <TypographyH5>Small Header</TypographyH5>
 * <TypographyH5 className="text-blue-500">Custom Styled Header</TypographyH5>
 * ```
 */
export function TypographyH5({ className, children, ...props }: TypographyH5Props) {
  return (
    <h5
      className={cn(
        "font-bold text-base leading-5",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
}
