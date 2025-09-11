"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

/**
 * Header component for creating flexible headers that can contain controls for panels.
 *
 * Features:
 * - Flexible layout with left and right content areas
 * - Built-in breadcrumb support
 * - Button and control placement on the right
 * - Consistent styling with design system
 * - Responsive design
 *
 * @example
 * ```tsx
 * <Header
 *   breadcrumbs={[
 *     { label: "Home", href: "/" },
 *     { label: "Weather Dashboard", href: "/dashboard" }
 *   ]}
 *   rightContent={<Button>Secondary</Button>}
 * />
 * ```
 */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderProps {
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Content to display on the left side (overrides breadcrumbs) */
  leftContent?: React.ReactNode;
  /** Content to display on the right side (buttons, controls, etc.) */
  rightContent?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Header component for creating flexible headers with breadcrumbs and controls.
 *
 * @param props - Header component props
 * @returns JSX element
 */
export function Header({
  breadcrumbs,
  leftContent,
  rightContent,
  className,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between border-b border-border bg-background px-3 py-2 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Left side content */}
      <div className="flex items-center">
        {leftContent ? (
          leftContent
        ) : breadcrumbs ? (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink href={item.href}>
                        {item.label}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
      </div>

      {/* Right side content */}
      {rightContent && (
        <div className="flex items-center space-x-2">
          {rightContent}
        </div>
      )}
    </header>
  );
}
