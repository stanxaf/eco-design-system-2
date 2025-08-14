import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const form = {
  name: "form",
  components: {
    Default: (
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="shadcn" />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
        </div>
        <Button type="submit">Submit</Button>
      </div>
    ),
  },
};
