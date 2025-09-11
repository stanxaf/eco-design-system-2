import AppShellPage from "@/app/demo/[name]/blocks/app-shell-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const appShell = {
  name: "app-shell",
  components: {
    Default: (
      <ShellLayout>
        <AppShellPage />
      </ShellLayout>
    ),
  },
};
