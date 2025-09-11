import { TypographyH1 } from "@/components/ui/typography-h1";

export default function AppShellPage() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center gap-4 w-full">
      <div className="w-full text-muted-foreground text-center">
        <TypographyH1>App Shell Template</TypographyH1>
        <p className="text-muted-foreground mt-2">
          This is your base layout with sidebar and main content area. Start adding components to customize it.
        </p>
      </div>
    </div>
  );
}
