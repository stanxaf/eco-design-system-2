"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Alert Dialog component system for building accessible modal dialogs.
 *
 * **Component Architecture:**
 * - **AlertDialog**: Root component that manages dialog state
 * - **AlertDialogTrigger**: Button/element that opens the dialog
 * - **AlertDialogPortal**: Renders dialog outside normal DOM flow
 * - **AlertDialogOverlay**: Backdrop overlay with animations
 * - **AlertDialogContent**: Main dialog container with animations
 * - **AlertDialogHeader**: Title and description container
 * - **AlertDialogFooter**: Action buttons container
 * - **AlertDialogTitle**: Dialog heading with semantic markup
 * - **AlertDialogDescription**: Dialog content with proper styling
 * - **AlertDialogAction**: Primary action button (uses button variants)
 * - **AlertDialogCancel**: Secondary cancel button (outline variant)
 *
 * **Features:**
 * - Modal behavior with focus management
 * - Smooth animations (fade in/out, zoom in/out)
 * - Responsive design (mobile-first approach)
 * - Accessibility via Radix UI primitives
 * - Button integration with variant system
 * - Portal rendering for proper z-index handling
 *
 * **Usage Example:**
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger asChild>
 *     <Button variant="outline">Delete Account</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         This action cannot be undone.
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Delete</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

/**
 * Trigger component that opens the alert dialog.
 * Use with asChild to render as any element (Button, Link, etc.).
 */
function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

/**
 * Portal component that renders the dialog outside the normal DOM flow.
 * Ensures proper z-index stacking and accessibility.
 */
function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

/**
 * Overlay component that provides the backdrop and handles click-outside behavior.
 * Includes fade animations and proper z-index positioning.
 */
function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Content container for the dialog with animations and responsive positioning.
 * Automatically includes Portal and Overlay for proper modal behavior.
 */
function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-md bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-md",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

/**
 * Header container for dialog title and description.
 * Responsive layout: centered on mobile, left-aligned on desktop.
 */
function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

/**
 * Footer container for action buttons.
 * Responsive layout: buttons stacked on mobile, side-by-side on desktop.
 */
function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Dialog title with semantic heading markup and consistent typography.
 * Uses font-semibold and text-xl for proper visual hierarchy.
 */
function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("font-semibold text-xl", className)}
      {...props}
    />
  );
}

/**
 * Dialog description with muted text styling and proper spacing.
 * Uses text-muted-foreground and text-base for readability.
 */
function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-base", className)}
      {...props}
    />
  );
}

/**
 * Primary action button with default button styling.
 * Integrates with button component variants and accessibility features.
 */
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  );
}

/**
 * Cancel button with outline variant styling.
 * Provides clear visual distinction from the primary action.
 */
function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
