import FilteredContentLayoutPage from "@/app/demo/[name]/blocks/filtered-content-layout-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const filteredContentLayout = {
  name: "filtered-content-layout",
  components: {
    Default: (
      <ShellLayout>
        <FilteredContentLayoutPage />
      </ShellLayout>
    ),
  },
};
