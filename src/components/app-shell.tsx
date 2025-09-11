"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children?: React.ReactNode;
  className?: string;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * App Shell component for creating consistent application layouts with sidebar and main content.
 * Optimized to prevent horizontal scroll issues with responsive design.
 *
 * @example
 * ```tsx
 * <AppShell
 *   sidebar={<div>Sidebar content</div>}
 *   footer={<div>Footer content</div>}
 * >
 *   <div>Main content goes here</div>
 * </AppShell>
 * ```
 */
export default function AppShell({
  children,
  className,
  sidebar,
  footer,
}: AppShellProps) {
  return (
    <div className={cn("flex min-h-screen flex-col overflow-x-hidden", className)}>
      {/* Main Layout */}
      <div className="flex flex-1 overflow-x-hidden">
        {/* Sidebar */}
        {sidebar && (
          <aside className="hidden md:flex md:w-64 md:flex-col">
            <div className="flex-1 flex flex-col min-h-0 border-r bg-background">
              {sidebar}
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className={cn(
          "flex-1 flex flex-col min-h-0",
          sidebar ? "md:pl-64" : ""
        )}>
          <div className="flex-1 p-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto space-y-6">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="border-t bg-background">
          {footer}
        </footer>
      )}
    </div>
  );
}
