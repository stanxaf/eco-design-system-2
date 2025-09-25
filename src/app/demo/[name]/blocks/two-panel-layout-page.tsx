/**
 * Two Panel Layout Page Component
 *
 * A layout with two side-by-side panels:
 * - Left panel: max 320px width with clean panel structure
 * - Right panel: 70% width with clean panel structure
 * - Responsive design - panels stack vertically on mobile
 * - Uses Panel component from the design system
 *
 * This component provides a flexible two-panel layout structure
 * that adapts to different screen sizes and content needs.
 *
 * @returns JSX element with two-panel layout
 */
import { Panel } from "@/components/panel";

export default function TwoPanelLayoutPage() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Panel - max 320px width on desktop, full width on mobile */}
      <Panel
        size="fit"
        responsive={{ md: "fit" }}
        title="Left Panel"
        className="w-full md:max-w-[320px] md:w-[30%]"
        footer={<span className="text-sm text-muted-foreground">Left Panel Footer</span>}
      >
        {/* Panel content area - ready for your content */}
      </Panel>

      {/* Right Panel - 70% width on desktop, full width on mobile */}
      <Panel
        size="full"
        responsive={{ md: "full" }}
        title="Right Panel"
        className="w-full md:w-[70%]"
        borderRight={false}
        footer={<span className="text-sm text-muted-foreground">Right Panel Footer</span>}
      >
        {/* Panel content area - ready for your content */}
      </Panel>
    </div>
  );
}
