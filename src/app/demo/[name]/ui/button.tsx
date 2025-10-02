import { Button } from "@/components/ui/button";

export const button = {
  name: "button",
  components: {
    Primary: <Button variant="default">Primary</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Small: (
      <Button variant="outline" size="sm">
        Small
      </Button>
    ),
    "Icon Only": (
      <Button size="icon" variant="outline">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </Button>
    ),
    "Small Icon": (
      <Button size="icon-sm" variant="outline">
        <svg
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </Button>
    ),
  },
  // Note: Secondary and Outline variants are visually identical
  // but use different CSS variables for semantic distinction
};
