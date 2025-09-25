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
 * - `Typography.H1`: Main page titles (28px, font-weight: 700, line-height: 24px)
 * - `Typography.H2`: Section headers (24px, font-weight: 700, line-height: 20px)
 * - `Typography.H3`: Subsection headers (20px, font-weight: 700, line-height: 20px)
 * - `Typography.H4`: Component headers (18px, font-weight: 700, line-height: 16px)
 * - `Typography.H5`: Small headers (16px, font-weight: 700, line-height: 16px)
 * - `Typography.H6`: Smallest headers (14px, font-weight: 700, line-height: 22px)
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
        "font-bold text-4xl leading-6 font-sans",
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
        "font-bold text-3xl leading-5 font-sans",
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
        "font-bold text-2xl leading-5 font-sans",
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
        "font-bold text-xl leading-4 font-sans",
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
        "font-bold text-lg leading-4 font-sans",
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
        "font-bold text-md leading-[1.375rem] font-sans",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  ),
};
