"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { BrandSidebar } from "@/components/brand-sidebar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Search
} from "lucide-react";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <BrandSidebar />
      <main className="flex-1 flex flex-col">
        {/* Content */}
        <div className="flex-1 p-6">
          <p className="text-sm text-muted-foreground">Dashboard content placeholder</p>
        </div>
      </main>
    </SidebarProvider>
  );
}
