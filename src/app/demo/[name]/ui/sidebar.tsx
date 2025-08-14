import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const sidebar = {
  name: "sidebar",
  components: {
    Default: (
      <div className="flex h-[200px] w-[200px] flex-col border rounded-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>
        </div>
        <Separator />
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2 py-2">
            <Button variant="ghost" className="w-full justify-start">
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Help
            </Button>
          </div>
        </ScrollArea>
      </div>
    ),
  },
};
