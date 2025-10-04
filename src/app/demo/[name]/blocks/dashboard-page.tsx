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
      <div className="flex h-screen w-full">
        <BrandSidebar />

        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="flex h-16 items-center justify-between border-b px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 p-6">
            <p className="text-sm text-muted-foreground">Dashboard content placeholder</p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
