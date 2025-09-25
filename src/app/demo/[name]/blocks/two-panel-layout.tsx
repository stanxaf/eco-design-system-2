import TwoPanelLayoutPage from "@/app/demo/[name]/blocks/two-panel-layout-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const twoPanelLayout = {
  name: "two-panel-layout",
  components: {
    Default: (
      <ShellLayout>
        <TwoPanelLayoutPage />
      </ShellLayout>
    ),
  },
};
