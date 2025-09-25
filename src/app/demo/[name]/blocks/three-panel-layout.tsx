import ThreePanelLayoutPage from "@/app/demo/[name]/blocks/three-panel-layout-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const threePanelLayout = {
  name: "three-panel-layout",
  components: {
    Default: (
      <ShellLayout>
        <ThreePanelLayoutPage />
      </ShellLayout>
    ),
  },
};
