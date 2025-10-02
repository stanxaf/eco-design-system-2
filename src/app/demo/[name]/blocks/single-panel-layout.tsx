import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import SinglePanelLayoutPage from "@/app/demo/[name]/blocks/single-panel-layout-page";

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
