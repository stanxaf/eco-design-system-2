import { BrandSidebarStacked } from "@/components/brand-sidebar-stacked";
import { SidebarProvider } from "@/components/ui/sidebar";

export const brandSidebarStacked = {
  name: "brand-sidebar-stacked",
  components: {
    Default: (
      <SidebarProvider defaultOpen={false}>
        <BrandSidebarStacked />
      </SidebarProvider>
    ),
  },
};
