import { BrandSidebar } from "@/components/brand-sidebar";

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <BrandSidebar withProvider={true} defaultOpen={false} />
    ),
  },
};
