"use client";

import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { useIsMobile } from "@/hooks/use-mobile";

export default function AppShellLayoutDemo({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={false}>
      {isMobile && <BrandHeader />}
      <BrandSidebar />
      <main className="flex w-full">
        {children}
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
