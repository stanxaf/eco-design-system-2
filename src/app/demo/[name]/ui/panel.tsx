import { Panel } from "@/components/panel";

export const panel = {
  name: "panel",
  components: {
    Default: (
      <div className="flex">
        <Panel
          size="4"
          title="Panel 1"
          borderRight={true}
        >
          <div>Content 1</div>
        </Panel>
        <Panel
          size="4"
          title="Panel 2"
          borderRight={true}
        >
          <div>Content 2</div>
        </Panel>
        <Panel
          size="4"
          title="Panel 3"
          borderRight={false}
        >
          <div>Content 3</div>
        </Panel>
      </div>
    ),
  },
};
