"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { type ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <BrandSidebar />
      <SidebarInset>
        <BrandHeader />
        <main className="flex w-full flex-1 flex-col">{children}</main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
