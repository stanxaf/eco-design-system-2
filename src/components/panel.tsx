"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// Removed external component imports for v0 compatibility

/**
 * Panel component for creating flexible layouts with header, content, and footer areas.
 *
 * Features:
 * - Responsive sizing with flexible column system
 * - Header with title and action button
 * - Content area with proper spacing
 * - Footer with status information
 * - Customizable alignment and justification
 * - Border and styling options
 *
 * @example
 * ```tsx
 * // Basic panel with default 100% height (fills parent container)
 * <Panel size="4" title="My Panel" footer={<span>Status: Active</span>}>
 *   <div>Panel content goes here</div>
 * </Panel>
 *
 * // Panel with full screen height (100vh)
 * <Panel height="screen" title="My Panel">
 *   <div>Panel content goes here</div>
 * </Panel>
 *
 * // Panel with custom header and full height
 * <Panel height="full" header={
 *   <div className="flex items-center justify-between w-full">
 *     <h6>Custom Header</h6>
 *     <Button size="sm">Action</Button>
 *   </div>
 * }>
 *   <div>Panel content with custom header</div>
 * </Panel>
 *
 * // Panel with responsive sizing and full height
 * <Panel
 *   size="6"
 *   height="full"
 *   responsive={{ md: "4", lg: "3" }}
 *   title="Responsive Panel"
 * >
 *   <div>Content adapts to screen size</div>
 * </Panel>
 * ```
 */

type ColumnSize = "auto" | "1" | "2" | "3" | "4" | "5" | "6" | "12" | "full" | "fit";

/**
 * Props for the Panel component
 */
interface PanelProps {
  /** Sizing */
  /** Panel size using flexible column system */
  size?: ColumnSize;
  /** Responsive sizing for different breakpoints */
  responsive?: {
    sm?: ColumnSize;
    md?: ColumnSize;
    lg?: ColumnSize;
    xl?: ColumnSize;
  };

  /** Layout */
  /** Vertical alignment of panel content */
  align?: "start" | "center" | "end" | "stretch";
  /** Horizontal justification of panel content */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";

  /** Content areas */
  /** Panel title displayed in header */
  title?: string;
  /** Custom header content (overrides title) */
  header?: React.ReactNode;
  /** Main panel content */
  children?: React.ReactNode;
  /** Footer content with status information */
  footer?: React.ReactNode;

  /** Styling */
  /** Whether to show right border */
  borderRight?: boolean;
  /** Height behavior: 'screen' for 100vh, 'full' for 100% of parent */
  height?: "screen" | "full";
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  auto: "flex-auto",
  "1": "flex-[0_0_8.333333%]",
  "2": "flex-[0_0_16.666667%]",
  "3": "flex-[0_0_25%]",
  "4": "flex-[0_0_33.333333%]",
  "5": "flex-[0_0_41.666667%]",
  "6": "flex-[0_0_50%]",
  "12": "flex-[0_0_100%]",
  full: "flex-1",
  fit: "flex-none",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const getResponsiveClasses = (responsive?: PanelProps["responsive"]) => {
  if (!responsive) return "";

  const classes: string[] = [];

  if (responsive.sm) classes.push(`sm:${sizeClasses[responsive.sm]}`);
  if (responsive.md) classes.push(`md:${sizeClasses[responsive.md]}`);
  if (responsive.lg) classes.push(`lg:${sizeClasses[responsive.lg]}`);
  if (responsive.xl) classes.push(`xl:${sizeClasses[responsive.xl]}`);

  return classes.join(" ");
};

/**
 * Panel component for creating flexible layouts with header, content, and footer areas.
 *
 * @param props - Panel component props
 * @returns JSX element
 */
export function Panel({
  size = "auto",
  responsive,
  align = "stretch",
  justify = "start",
  title = "Panel",
  header,
  children,
  footer,
  borderRight = true,
  height = "full",
  className,
  ...props
}: PanelProps) {
  const baseSizeClass = sizeClasses[size];
  const responsiveClasses = getResponsiveClasses(responsive);

  // Determine height class based on height prop
  const heightClass = height === "screen" ? "h-screen" : "h-full";

  return (
    <div
      className={cn(
        "relative flex flex-col",
        heightClass,
        borderRight && "border-r border-border",
        baseSizeClass,
        responsiveClasses,
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 right-0 z-10 flex w-full h-12 px-3 py-2 justify-between items-center border-b border-border bg-background shadow-sm">
        {header ? (
          header
        ) : (
          <>
            <h6>{title}</h6>
            <Button variant="ghost" size="icon">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </Button>
          </>
        )}
      </div>

      {children && (
        <div className={cn(
          "flex-1 w-full p-3 items-start self-stretch bg-background pt-12",
          "pt-[60px]", // 48px for header + 12px spacing
          footer && "pb-12"
        )}>
          {children}
        </div>
      )}

      {footer && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex w-full h-12 min-h-10 px-3 py-2 justify-between items-center border-t border-border bg-background text-muted-foreground text-sm">
          {footer}
        </div>
      )}
    </div>
  );
}