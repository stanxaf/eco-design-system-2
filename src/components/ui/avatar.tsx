"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Avatar component with comprehensive size variant system and accessibility features.
 *
 * **Available Sizes:**
 * - `sm`: Small avatar (32px) - Compact layouts, user lists
 * - `md`: Medium avatar (40px) - Standard size, most use cases
 * - `lg`: Large avatar (48px) - Prominent display, headers
 *
 * **Features:**
 * - Size variants with precise pixel dimensions
 * - Image fallback for failed image loads
 * - Comprehensive accessibility (ARIA labels, screen reader support)
 * - Radix UI primitives for robust functionality
 * - Responsive design with proper scaling
 * - Fallback initials or icons support
 *
 * **Usage Examples:**
 * ```tsx
 * // Basic avatar
 * <Avatar>
 *   <AvatarImage src="/user.jpg" alt="User avatar" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // With size variants
 * <Avatar size="sm">
 *   <AvatarImage src="/user.jpg" alt="User avatar" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * <Avatar size="md">
 *   <AvatarImage src="/user.jpg" alt="User avatar" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * <Avatar size="lg">
 *   <AvatarImage src="/user.jpg" alt="User avatar" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * // All sizes
 * <div className="flex gap-4 items-center">
 *   <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
 *   <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
 *   <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
 * </div>
 * ```
 */
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "size-8", // 32px
        md: "size-10", // 40px
        lg: "size-12", // 48px
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

/**
 * Props for the Avatar component.
 *
 * @property size - Avatar size variant (sm: 32px, md: 40px, lg: 48px)
 * @property className - Additional CSS classes
 * @property children - Avatar content (AvatarImage, AvatarFallback)
 */
function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      {...props}
    />
  );
}

/**
 * AvatarImage component for displaying user profile images.
 *
 * **Usage:**
 * ```tsx
 * <AvatarImage src="/user.jpg" alt="User avatar" />
 * ```
 *
 * **Features:**
 * - Automatic aspect-square sizing
 * - Proper alt text support for accessibility
 * - Graceful fallback to AvatarFallback on load failure
 * - Responsive image handling
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

/**
 * AvatarFallback component for displaying fallback content when images fail to load.
 *
 * **Usage:**
 * ```tsx
 * <AvatarFallback>JD</AvatarFallback>
 * <AvatarFallback><UserIcon className="size-4" /></AvatarFallback>
 * ```
 *
 * **Features:**
 * - Displays initials, icons, or other fallback content
 * - Muted background for visual distinction
 * - Proper centering and sizing
 * - Accessible text and icon support
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
