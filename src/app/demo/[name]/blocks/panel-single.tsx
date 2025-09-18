import PanelSinglePage from "@/app/demo/[name]/blocks/panel-single-page";
import AppShellLayoutDemo from "@/app/demo/[name]/blocks/app-shell-layout-demo";

export const panelSingle = {
  name: "panel-single",
  components: {
    Default: (
      <AppShellLayoutDemo>
        <PanelSinglePage />
      </AppShellLayoutDemo>
    ),
  },
};
