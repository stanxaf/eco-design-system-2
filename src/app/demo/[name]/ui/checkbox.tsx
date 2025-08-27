import { Checkbox } from "@/components/ui/checkbox";

export const checkbox = {
  name: "checkbox",
  components: {
    Default: (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="font-regular text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    ),
  },
};
