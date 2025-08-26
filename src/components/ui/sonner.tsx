"use client";

import { type CSSProperties } from "react";
import { useEffect, useState } from "react";

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
