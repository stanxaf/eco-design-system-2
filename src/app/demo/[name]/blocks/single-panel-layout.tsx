import SinglePanelLayoutPage from "@/app/demo/[name]/blocks/single-panel-layout-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const singlePanelLayout = {
  name: "single-panel-layout",
  components: {
    Default: (
      <ShellLayout>
        <SinglePanelLayoutPage />
      </ShellLayout>
    ),
  },
};
