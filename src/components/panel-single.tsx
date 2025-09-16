"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface PanelSingleProps {
  /** Main content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Panel Single component - A complete default app shell template.
 * Perfect for creating focused content pages or single-panel applications.
 *
 * Features:
 * - Complete app shell with header and sidebar
 * - Responsive design with mobile support
 * - Default app shell styling with bg-surface-medium
 *
 * @example
 * ```tsx
 * <PanelSingle>
 *   <div>Your content goes here</div>
 * </PanelSingle>
 * ```
 */
export function PanelSingle({
  children,
  className,
}: PanelSingleProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      {isMobile && <BrandHeader />}
      <BrandSidebar />
      <main className={cn("flex w-full bg-surface-medium", className)}>
        <div className="w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
