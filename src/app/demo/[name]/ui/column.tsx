import { Column } from "@/components/ui/column";

export const column = {
  name: "column",
  components: {
    Default: (
      <Column
        size="4"
        title="Column Title"
        footer={<div>Footer</div>}
      >
        <div>Content</div>
      </Column>
    ),
  },
};
