import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import ThreePanelLayoutPage from "@/app/demo/[name]/blocks/three-panel-layout-page";

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
