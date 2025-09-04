"use client";

import { type CSSProperties } from "react";
import { useEffect, useState } from "react";

/**
 * Sonner Toast Component with v0 Compatibility
 *
 * **IMPORTANT FOR v0: This component uses button-specific CSS variables for action buttons.
 * DO NOT use generic variables like --primary, --secondary, etc.
 * ONLY use the --button-* variables for consistent theming.**
 */

// Fallback toast component when sonner fails to load
const FallbackToaster = () => {
  return (
    <div
      className="fixed top-4 right-4 z-50 pointer-events-none"
      style={{
        '--normal-bg': 'var(--popover)',
        '--normal-text': 'var(--popover-foreground)',
        '--normal-border': 'var(--border)',
      } as CSSProperties}
    >
      {/* Fallback toast container - will show console message instead */}
    </div>
  );
};

const Toaster = ({ ...props }: any) => {
  const [Sonner, setSonner] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSonner = async () => {
      try {
        const sonnerModule = await import("sonner");
        setSonner(() => sonnerModule.Toaster);
      } catch (error) {
        console.warn("Sonner package failed to load, using fallback toast implementation");
        setSonner(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadSonner();
  }, []);

  // Show fallback while loading or if sonner failed to load
  if (isLoading || !Sonner) {
    return <FallbackToaster />;
  }

  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
          classNames: {
              toast: "!p-3 !rounded-lg",
              title: "!font-normal",
              description: "!text-popover-foreground !font-normal",
              success: "[&>div>svg]:!text-green-600",
              warning: "[&>div>svg]:!text-yellow-600",
              error: "[&>div>svg]:!text-red-600",
              actionButton: "toast-action-button !bg-button-secondary !border !border-border !text-button-secondary-foreground hover:!bg-button-secondary-hover !inline-flex !items-center !justify-center !gap-1.5 !whitespace-nowrap !rounded-md !text-sm !transition-all !disabled:pointer-events-none !disabled:opacity-50 [&_svg]:!pointer-events-none [&_svg:not([class*='size-'])]:!size-4 !shrink-0 [&_svg]:!shrink-0 !outline-none focus-visible:!border-ring focus-visible:!ring-ring/50 focus-visible:!ring-[3px] aria-invalid:!ring-destructive/20 dark:aria-invalid:!ring-destructive/40 aria-invalid:!border-destructive !h-6 !px-3 has-[>svg]:!px-2.5",
          },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-description": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
