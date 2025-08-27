import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Badge component with comprehensive variant system matching alert colors.
 *
 * **Available Variants:**
 * - `default`: General information with default color system (--default, --default-foreground)
 * - `destructive`: Critical errors and dangerous situations
 * - `info`: Important updates and system information
 * - `success`: Successful operations and confirmations
 * - `warning`: Warnings and cautionary messages
 *
 * **Features:**
 * - Color system matching alert component variants
 * - Light backgrounds with appropriate foreground colors
 * - Consistent semantic meaning across components
 * - asChild support for polymorphic rendering
 * - Comprehensive accessibility features
 * - Responsive design with proper sizing
 * - 4px border radius for all variants
 * - Default color system using slate colors for consistency
 *
 * **Usage Examples:**
 * ```tsx
 * // Basic badge
 * <Badge>New</Badge>
 *
 * // With variants
 * <Badge variant="info">Info</Badge>
 * <Badge variant="success">Success</Badge>
 * <Badge variant="warning">Warning</Badge>
 * <Badge variant="destructive">Error</Badge>
 *
 * // With asChild
 * <Badge asChild>
 *   <Link href="/notifications">5</Link>
 * </Badge>
 * ```
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center h-6 rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-default text-default-foreground",
        destructive:
          "bg-alert-destructive text-alert-destructive-foreground",
        info:
          "bg-info text-info-foreground",
        success:
          "bg-success text-success-foreground",
        warning:
          "bg-warning text-warning-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Props for the Badge component.
 *
 * @property asChild - Whether to render as a child component using Radix Slot
 * @property variant - Badge variant for styling and semantic meaning
 * @property className - Additional CSS classes
 * @property children - Badge content (text, icons, etc.)
 */
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

/**
 * Main Badge component with variant support and asChild functionality.
 *
 * **Props:**
 * - `variant`: Choose from 5 semantic variants
 * - `asChild`: Enable polymorphic rendering with Radix Slot
 * - `className`: Add custom styling
 *
 * **Children:**
 * - Text content for badge labels
 * - Icons with automatic sizing (size-3)
 * - Any valid React children
 *
 * **Accessibility:**
 * - Proper focus-visible states with ring styling
 * - aria-invalid support for form validation
 * - Semantic span element with proper ARIA attributes
 *
 * **asChild Feature:**
 * - Renders as any valid HTML element or component
 * - Useful for creating badge-styled links, buttons, etc.
 * - Maintains all badge styling and behavior
 * - Example: <Badge asChild><Link href="/path">Text</Link></Badge>
 */
export { Badge, badgeVariants };
