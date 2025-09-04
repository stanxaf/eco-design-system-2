import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

import {
  MobileSidebarTrigger,
  RegistrySidebar,
} from "@/components/registry/registry-sidebar";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <MobileSidebarTrigger />
      <RegistrySidebar />
      <main className="flex w-full justify-center">{children}</main>
    </SidebarProvider>
  );
}
