"use client";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardPage() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && <BrandHeader />}
      <BrandSidebar />
      <SidebarInset>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your dashboard. This is a sample dashboard page.
          </p>
        </div>
      </SidebarInset>
      <Toaster />
    </>
  );
}
