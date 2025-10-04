import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Typography components for consistent text styling
 *
 * Provides a collection of typography components that follow design system
 * principles for consistent text rendering across the application.
 */

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

/**
 * Large heading component
 */
export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

/**
 * Secondary heading component
 */
export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

/**
 * Tertiary heading component
 */
export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

/**
 * Fourth level heading component
 */
export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

/**
 * Paragraph text component
 */
export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

/**
 * Blockquote component
 */
export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}

/**
 * List component
 */
export function TypographyUl({ children, className }: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

/**
 * Ordered list component
 */
export function TypographyOl({ children, className }: TypographyProps) {
  return (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}>
      {children}
    </ol>
  );
}

/**
 * List item component
 */
export function TypographyLi({ children, className }: TypographyProps) {
  return (
    <li className={cn("mt-2", className)}>
      {children}
    </li>
  );
}

/**
 * Code inline component
 */
export function TypographyCode({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

/**
 * Code block component
 */
export function TypographyPre({ children, className }: TypographyProps) {
  return (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4",
        className
      )}
    >
      <code>{children}</code>
    </pre>
  );
}

/**
 * Lead text component for introductory text
 */
export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}

/**
 * Large text component
 */
export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

/**
 * Small text component
 */
export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

/**
 * Muted text component
 */
export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

/**
 * Main typography component that exports all variants
 */
export const Typography = {
  H1: TypographyH1,
  H2: TypographyH2,
  H3: TypographyH3,
  H4: TypographyH4,
  P: TypographyP,
  Blockquote: TypographyBlockquote,
  Ul: TypographyUl,
  Ol: TypographyOl,
  Li: TypographyLi,
  Code: TypographyCode,
  Pre: TypographyPre,
  Lead: TypographyLead,
  Large: TypographyLarge,
  Small: TypographySmall,
  Muted: TypographyMuted,
};

/**
 * Example usage:
 *
 * ```tsx
 * import { Typography } from "@/components/ui/typography";
 *
 * export function Example() {
 *   return (
 *     <div>
 *       <Typography.H1>Main Heading</Typography.H1>
 *       <Typography.P>This is a paragraph with some text.</Typography.P>
 *       <Typography.Code>const example = "code";</Typography.Code>
 *       <Typography.Blockquote>
 *         This is a blockquote with important information.
 *       </Typography.Blockquote>
 *     </div>
 *   );
 * }
 * ```
 */
