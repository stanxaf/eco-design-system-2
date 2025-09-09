"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TypographyH6 } from "@/components/ui/typography-h6";
import { MoreHorizontal } from "lucide-react";

type ColumnSize = "auto" | "1" | "2" | "3" | "4" | "5" | "6" | "12" | "full" | "fit";

interface PanelProps {
  // Sizing
  size?: ColumnSize;
  responsive?: {
    sm?: ColumnSize;
    md?: ColumnSize;
    lg?: ColumnSize;
    xl?: ColumnSize;
  };

  // Layout
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";

  // Content areas
  title?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;

  // Styling
  borderRight?: boolean;
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
  className,
  ...props
}: PanelProps) {
  const baseSizeClass = sizeClasses[size];
  const responsiveClasses = getResponsiveClasses(responsive);

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen",
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
            <TypographyH6>{title}</TypographyH6>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {children && (
        <div className={cn(
          "flex-1 w-full p-3 items-start self-stretch bg-background pt-12",
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