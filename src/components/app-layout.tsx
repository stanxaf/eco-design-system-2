"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { BrandSidebar } from "@/components/brand-sidebar";
import { BrandHeader } from "@/components/brand-header";
import { Toaster } from "@/components/ui/sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppLayoutProps {
  children: React.ReactNode;
  defaultSidebarOpen?: boolean;
}

export function AppLayout({
  children,
  defaultSidebarOpen = false
}: AppLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={defaultSidebarOpen}>
      <div className="flex min-h-screen bg-background text-foreground">
        <BrandSidebar />
        <div className="flex-1 flex flex-col">
          <BrandHeader />
          <main className="flex-1 p-4 bg-background">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
