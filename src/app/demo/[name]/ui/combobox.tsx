import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export const combobox = {
  name: "combobox",
  components: {
    Default: (
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Framework</label>
          <p className="text-sm text-muted-foreground mb-2">
            Select your preferred framework
          </p>
        </div>
        <Combobox
          options={frameworks}
          placeholder="Select framework..."
          searchPlaceholder="Search frameworks..."
        />
      </div>
    ),
  },
};
