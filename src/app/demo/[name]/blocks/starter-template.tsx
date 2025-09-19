import StarterTemplatePage from "@/app/demo/[name]/blocks/starter-template-page";
import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";

export const starterTemplate = {
  name: "starter-template",
  components: {
    Default: (
      <ShellLayout>
        <StarterTemplatePage />
      </ShellLayout>
    ),
  },
};
