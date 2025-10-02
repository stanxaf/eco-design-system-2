/**
 * Single Panel Layout Page Component
 *
 * A clean single-panel layout with:
 * - Full-width main content panel
 * - Sidebar navigation (via StarterLayout)
 * - Clean, content-focused design
 * - Footer area for pagination, status, or actions
 * - Perfect for documentation, articles, forms, or single-column applications
 *
 * This component provides a minimal, content-focused layout structure
 * that maximizes content space while maintaining navigation accessibility.
 *
 * @returns JSX element with single-panel layout
 */
import { Panel } from "@/components/panel";

export default function SinglePanelLayoutPage() {
  return (
    <div className="w-full h-screen">
      {/* Single Panel - Full width main content area */}
      <Panel
        size="full"
        title="Main Content"
        className="w-full h-full"
        borderRight={false}
        footer={
          <span className="text-sm text-muted-foreground">
            Content Footer - Ready for pagination, status, or actions
          </span>
        }
      >
        {/* Panel content area - ready for your content */}
      </Panel>
    </div>
  );
}
