import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Typography component with consistent heading styles using Tailwind CSS utilities.
 *
 * **Available Components:**
 * - `Typography.H1`: Main page titles (text-2xl, font-bold, leading-6)
 * - `Typography.H2`: Section headers (text-2xl, font-bold, leading-6)
 * - `Typography.H3`: Subsection headers (text-xl, font-bold, leading-5)
 * - `Typography.H4`: Component headers (text-lg, font-bold, leading-5)
 * - `Typography.H5`: Small headers (text-base, font-bold, leading-5)
 * - `Typography.H6`: Smallest headers (text-sm, font-bold, leading-4)
 *
 * **Features:**
 * - Consistent styling across all DTN projects
 * - Uses standard Tailwind CSS utilities
 * - TypeScript support with proper HTML attributes
 * - Customizable with className prop
 * - Semantic HTML elements for accessibility
 *
 * **Usage Examples:**
 * ```tsx
 * <Typography.H1>Main Page Title</Typography.H1>
 * <Typography.H2>Section Header</Typography.H2>
 * <Typography.H3 className="text-blue-500">Custom Styled Header</Typography.H3>
 * ```
 */
export const Typography = {
  H1: ({ className, children, ...props }: TypographyProps) => (
    <h1
      className={cn(
        "font-bold text-2xl leading-6 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),

  H2: ({ className, children, ...props }: TypographyProps) => (
    <h2
      className={cn(
        "font-bold text-2xl leading-6 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  ),

  H3: ({ className, children, ...props }: TypographyProps) => (
    <h3
      className={cn(
        "font-bold text-xl leading-5 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  ),

  H4: ({ className, children, ...props }: TypographyProps) => (
    <h4
      className={cn(
        "font-bold text-lg leading-5 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  ),

  H5: ({ className, children, ...props }: TypographyProps) => (
    <h5
      className={cn(
        "font-bold text-base leading-5 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  ),

  H6: ({ className, children, ...props }: TypographyProps) => (
    <h6
      className={cn(
        "font-bold text-sm leading-4 font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  ),
};
