import PanelSinglePage from "@/app/demo/[name]/blocks/panel-single-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const panelSingle = {
  name: "panel-single",
  components: {
    Default: (
      <ShellLayout>
        <PanelSinglePage />
      </ShellLayout>
    ),
  },
};
