"use client";

import { useTheme } from "next-themes";
import { type CSSProperties } from "react";

// Fallback toast component when sonner fails to load
const FallbackToaster = () => {
  const { theme = "system" } = useTheme();

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

// Try to import sonner, but gracefully handle failures
let Sonner: any;

try {
  // Dynamic import to avoid build-time failures
  const sonnerModule = await import("sonner");
  Sonner = sonnerModule.Toaster;
} catch (error) {
  console.warn("Sonner package failed to load, using fallback toast implementation");
  Sonner = null;
}

const Toaster = ({ ...props }: any) => {
  const { theme = "system" } = useTheme();

  // If sonner failed to load, use fallback
  if (!Sonner) {
    return <FallbackToaster />;
  }

  return (
    <Sonner
      theme={theme as any}
      className="toaster group"
      toastOptions={{
          classNames: {
              description: "!text-popover-foreground",
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
