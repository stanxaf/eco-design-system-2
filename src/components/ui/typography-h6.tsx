import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH6Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H6 component for smallest headers.
 *
 * **IMPORTANT FOR v0: This is a standalone typography component.**
 * Use this component for smallest headers and senary headings.
 *
 * **Styling:**
 * - Font size: text-sm (14px)
 * - Font weight: font-bold (700)
 * - Line height: leading-4 (1)
 *
 * **v0 Usage:**
 * ```tsx
 * import { TypographyH6 } from "@/components/ui/typography-h6";
 * 
 * <TypographyH6>Smallest Header</TypographyH6>
 * <TypographyH6 className="text-blue-500">Custom Styled Header</TypographyH6>
 * ```
 *
 * **Alternative Utility Classes:**
 * ```tsx
 * <h6 className="font-bold text-sm leading-4">Smallest Header</h6>
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
