import ShellLayout from "@/app/demo/[name]/blocks/shell-layout";
import StarterTemplatePage from "@/app/demo/[name]/blocks/starter-template-page";

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
