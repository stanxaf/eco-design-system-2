import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-md border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] grid-cols-[0_1fr_auto] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-default text-default-foreground border-default-border",
        destructive:
          "text-alert-destructive-foreground bg-alert-destructive border-alert-destructive-border [&>svg]:text-alert-destructive-muted *:data-[slot=alert-description]:text-alert-destructive-muted/90",
        info: "text-info-foreground bg-info border-info-border [&>svg]:text-info-muted *:data-[slot=alert-description]:text-info-muted/90",
        success: "text-success-foreground bg-success border-success-border [&>svg]:text-success-muted *:data-[slot=alert-description]:text-success-muted/90",
        warning: "text-warning-foreground bg-warning border-warning-border [&>svg]:text-warning-muted *:data-[slot=alert-description]:text-warning-muted/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {
  onClose?: () => void;
  showCloseButton?: boolean;
}

function Alert({
  className,
  variant,
  onClose,
  showCloseButton = false,
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {props.children}
      {showCloseButton && (
        <button
          type="button"
          onClick={onClose || (() => {})}
          className="col-start-3 row-start-1 -mr-1 h-5 w-5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground flex items-center justify-center"
          aria-label="Close alert"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  );
}

/**
 * AlertTitle component for the main heading of an alert.
 *
 * **Usage:**
 * ```tsx
 * <AlertTitle>Important Information</AlertTitle>
 * ```
 *
 * **Features:**
 * - Bold, prominent text styling
 * - Proper semantic structure
 * - Accessible heading hierarchy
 * - Responsive text sizing
 */
function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

/**
 * AlertDescription component for the detailed content of an alert.
 *
 * **Usage:**
 * ```tsx
 * <AlertDescription>
 *   This is the detailed explanation of the alert message.
 * </AlertDescription>
 * ```
 *
 * **Features:**
 * - Muted text color for secondary information
 * - Proper spacing and typography
 * - Supports rich content (paragraphs, links, etc.)
 * - Responsive grid layout
 */
function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
