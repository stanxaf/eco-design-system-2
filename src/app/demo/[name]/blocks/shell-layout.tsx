"use client";

import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      {isMobile && <BrandHeader />}
      <BrandSidebar />
      <main className="flex w-full justify-center">
        <div className="container">{children}</div>
      </main>
    </SidebarProvider>
  );
}
