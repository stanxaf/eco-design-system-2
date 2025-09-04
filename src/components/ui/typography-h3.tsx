import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyH3Props extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography H3 component for subsection headers.
 *
 * **IMPORTANT FOR v0: This is a standalone typography component.**
 * Use this component for subsection headers and tertiary headings.
 *
 * **Styling:**
 * - Font size: text-xl (20px)
 * - Font weight: font-bold (700)
 * - Line height: leading-5 (1.25)
 *
 * **v0 Usage:**
 * ```tsx
 * import { TypographyH3 } from "@/components/ui/typography-h3";
 * 
 * <TypographyH3>Subsection Header</TypographyH3>
 * <TypographyH3 className="text-blue-500">Custom Styled Header</TypographyH3>
 * ```
 *
 * **Alternative Utility Classes:**
 * ```tsx
 * <h3 className="font-bold text-xl leading-5">Subsection Header</h3>
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
