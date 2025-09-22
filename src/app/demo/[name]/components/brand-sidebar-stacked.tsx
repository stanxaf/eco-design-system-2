import { BrandSidebarStacked } from "@/components/brand-sidebar-stacked";
import { SidebarProvider } from "@/components/ui/sidebar";

export const brandSidebarStacked = {
  name: "brand-sidebar-stacked",
  components: {
    Default: (
      <div className="h-[400px] w-[72px] border rounded-lg overflow-hidden bg-sidebar">
        <SidebarProvider
          defaultOpen={false}
          width="72px"
          widthIcon="72px"
          widthMobile="72px"
        >
          <BrandSidebarStacked />
        </SidebarProvider>
      </div>
    ),
  },
};
