import { Panel } from "@/components/panel";

/**
 * Starter Template Page Component
 * 
 * A minimal starter page with a clean panel layout that provides:
 * - Full-screen panel with title and footer
 * - Centered placeholder content
 * - Ready-to-customize foundation
 * 
 * This component serves as a blank slate for users to build upon,
 * featuring the complete layout structure with sidebar and header.
 * 
 * @returns JSX element with panel layout and placeholder content
 */
export default function StarterTemplatePage() {
  return (
    <main className="flex w-full">
      <Panel 
        title="Starter Template"
        size="12"
        height="screen"
        footer="Ready to customize"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              Your content goes here
            </p>
          </div>
        </div>
      </Panel>
    </main>
  );
}
