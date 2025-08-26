import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Button component with comprehensive variant system and accessibility features.
 *
 * **Available Variants:**
 * - `default`: Primary action button with primary colors
 * - `destructive`: Dangerous actions with destructive styling
 * - `outline`: Secondary actions with border and background hover
 * - `secondary`: Alternative primary actions with secondary colors
 * - `ghost`: Subtle actions with background hover only
 * - `link`: Text-based actions that look like links
 *
 * **Available Sizes:**
 * - `default`: Standard button size (h-8, px-4, py-2)
 * - `sm`: Small button for compact layouts (h-6, px-3)
 * - `lg`: Large button for prominent actions (h-10, px-6)
 * - `icon`: Square button for icon-only content (size-8)
 *
 * **Features:**
 * - asChild support for polymorphic rendering
 * - Comprehensive accessibility (focus-visible, aria-invalid)
 * - Icon support with automatic sizing and spacing
 * - Responsive design with proper hover states
 * - Dark mode support with theme-aware colors
 * - Disabled state handling with proper opacity
 *
 * **Usage Examples:**
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // With variant and size
 * <Button variant="destructive" size="lg">
 *   Delete Item
 * </Button>
 *
 * // Icon button
 * <Button size="icon" variant="outline">
 *   <Plus className="size-4" />
 * </Button>
 *
 * // With asChild for custom elements
 * <Button asChild>
 *   <Link href="/dashboard">Go to Dashboard</Link>
 * </Button>
 *
 * // All variants
 * <Button variant="default">Default</Button>
 * <Button variant="destructive">Destructive</Button>
 * <Button variant="outline">Outline</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="ghost">Ghost</Button>
 * <Button variant="link">Link</Button>
 * ```
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary border border-interactive text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2 has-[>svg]:px-3",
        sm: "h-6 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Props for the Button component.
 *
 * @property asChild - Whether to render as a child component using Radix Slot
 * @property variant - Button variant for styling and semantic meaning
 * @property size - Button size for layout and spacing
 * @property className - Additional CSS classes
 * @property children - Button content (text, icons, etc.)
 * @property disabled - Whether the button is disabled
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

/**
 * Main Button component with variant and size support.
 *
 * **Props:**
 * - `variant`: Choose from 6 semantic variants
 * - `size`: Choose from 4 size options
 * - `asChild`: Enable polymorphic rendering with Radix Slot
 * - `className`: Add custom styling
 * - `disabled`: Disable the button
 *
 * **Children:**
 * - Text content for button labels
 * - Icons with automatic sizing (size-4 by default)
 * - Any valid React children
 *
 * **Accessibility:**
 * - Proper focus-visible states with ring styling
 * - aria-invalid support for form validation
 * - Disabled state with proper opacity and pointer events
 * - Semantic button element with proper ARIA attributes
 *
 * **asChild Feature:**
 * - Renders as any valid HTML element or component
 * - Useful for creating button-styled links, form elements, etc.
 * - Maintains all button styling and behavior
 * - Example: <Button asChild><Link href="/path">Text</Link></Button>
 */
export { Button, buttonVariants };
