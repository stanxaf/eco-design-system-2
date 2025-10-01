"use client";

import { AppLayout } from "@/components/app-layout";

export default function AppLayoutDemo() {
  return (
    <AppLayout defaultSidebarOpen={true}>
      <div className="space-y-6">
        <p className="text-muted-foreground">
          This is a complete application layout with sidebar, header, and main content area.
        </p>
      </div>
    </AppLayout>
  );
}