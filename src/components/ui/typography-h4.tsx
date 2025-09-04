import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH4Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H4 component for component headers.
 *
 * **IMPORTANT FOR v0: This is a standalone typography component.**
 * Use this component for component headers and quaternary headings.
 *
 * **Styling:**
 * - Font size: text-lg (18px)
 * - Font weight: font-bold (700)
 * - Line height: leading-5 (1.25)
 *
 * **v0 Usage:**
 * ```tsx
 * import { TypographyH4 } from "@/components/ui/typography-h4";
 * 
 * <TypographyH4>Component Header</TypographyH4>
 * <TypographyH4 className="text-blue-500">Custom Styled Header</TypographyH4>
 * ```
 *
 * **Alternative Utility Classes:**
 * ```tsx
 * <h4 className="font-bold text-lg leading-5">Component Header</h4>
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
