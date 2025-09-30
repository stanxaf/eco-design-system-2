"use client";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="hidden md:block">
        <BrandHeader />
      </div>
      <BrandSidebar />
      <main className="flex w-full">
        <div className="w-full p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your dashboard. This is a sample dashboard page.
          </p>
        </div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
