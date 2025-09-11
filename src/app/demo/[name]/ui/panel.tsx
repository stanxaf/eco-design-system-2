import { Panel } from "@/components/panel";

export const panel = {
  name: "panel",
  components: {
    Default: (
      <Panel
        size="full"
        title="Sample Panel"
        borderRight={false}
        footer={<span>Status: Active</span>}
      >
        <div>Content</div>
      </Panel>
    ),
  },
};
