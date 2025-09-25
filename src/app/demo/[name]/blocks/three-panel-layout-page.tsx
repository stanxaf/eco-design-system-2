/**
 * Three Panel Layout Page Component
 *
 * A layout with three side-by-side panels:
 * - Left panel: Fixed width, max 280px with clean panel structure
 * - Center panel: Flexible width with clean panel structure
 * - Right panel: Fixed width, max 280px with clean panel structure
 * - Responsive design - panels stack vertically on mobile
 * - Uses Panel component from the design system
 *
 * This component provides a flexible three-panel layout structure
 * perfect for applications with sidebar navigation, main content area,
 * and a details/settings panel on the right.
 *
 * @returns JSX element with three-panel layout
 */
import { Panel } from "@/components/panel";

export default function ThreePanelLayoutPage() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Left Panel - Fixed width, max 280px on desktop, full width on mobile */}
      <Panel
        size="fit"
        responsive={{ md: "fit" }}
        title="Left Panel"
        className="w-full md:max-w-[280px] md:w-[280px]"
        footer={<span className="text-sm text-muted-foreground">Left Panel Footer</span>}
      >
        {/* Panel content area - ready for your content */}
      </Panel>

      {/* Center Panel - Flexible width on desktop, full width on mobile */}
      <Panel
        size="full"
        responsive={{ md: "full" }}
        title="Main Content"
        className="w-full flex-1"
        footer={<span className="text-sm text-muted-foreground">Main Content Footer</span>}
      >
        {/* Panel content area - ready for your content */}
      </Panel>

      {/* Right Panel - Fixed width, max 280px on desktop, full width on mobile */}
      <Panel
        size="fit"
        responsive={{ md: "fit" }}
        title="Right Panel"
        className="w-full md:max-w-[280px] md:w-[280px]"
        borderRight={false}
        footer={<span className="text-sm text-muted-foreground">Right Panel Footer</span>}
      >
        {/* Panel content area - ready for your content */}
      </Panel>
    </div>
  );
}
