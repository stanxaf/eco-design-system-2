import { ScrollArea } from "@/components/ui/scroll-area";

export const scrollArea = {
  name: "scroll-area",
  components: {
    Default: (
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">
            Scrollable Content
          </h4>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-sm">
              <p>Item {i + 1}</p>
              <p className="text-muted-foreground">
                This is some content that demonstrates scrolling.
              </p>
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
  },
};
