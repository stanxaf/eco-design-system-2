"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { BrandSidebar } from "@/components/brand-sidebar";
import { BrandHeader } from "@/components/brand-header";
import { Toaster } from "@/components/ui/sonner";

export default function AppLayoutDemo() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <BrandSidebar />
        <div className="flex-1 flex flex-col">
          <BrandHeader />
          <main className="flex-1 p-4">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Welcome to App Layout</h1>
                <p className="text-muted-foreground">
                  This is a complete application layout with sidebar, header, and main content area.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}