import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <SidebarProvider defaultOpen={false}>
        <BrandSidebar />
        <main className="w-full p-4">
          <p className="text-sm text-muted-foreground">
            Main content area. The sidebar collapses to icons with Cmd+B (Mac)
            or Ctrl+B (Windows).
          </p>
        </main>
      </SidebarProvider>
    ),
  },
};
