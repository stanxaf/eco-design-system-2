import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const textarea = {
  name: "textarea",
  components: {
    Default: (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here."
          className="min-h-[100px]"
        />
      </div>
    ),
  },
};
