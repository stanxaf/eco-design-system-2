import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const resizable = {
  name: "resizable",
  components: {
    Default: (
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 1</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Panel 2</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  },
};
