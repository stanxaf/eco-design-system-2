import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const command = {
  name: "command",
  components: {
    Default: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input placeholder="Search commands..." className="w-[300px]" />
          <Button>Search</Button>
        </div>
        <div className="border rounded-md p-4">
          <p className="text-sm text-muted-foreground">
            Command palette component for searching and executing commands.
          </p>
        </div>
      </div>
    ),
  },
};
