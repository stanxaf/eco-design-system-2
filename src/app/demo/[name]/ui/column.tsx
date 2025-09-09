import { Column } from "@/components/column";

export const column = {
  name: "column",
  components: {
    Default: (
      <div className="flex">
        <Column
          size="4"
          title="Column 1"
          borderRight={true}
        >
          <div>Content 1</div>
        </Column>
        <Column
          size="4"
          title="Column 2"
          borderRight={true}
        >
          <div>Content 2</div>
        </Column>
        <Column
          size="4"
          title="Column 3"
          borderRight={false}
        >
          <div>Content 3</div>
        </Column>
      </div>
    ),
  },
};
