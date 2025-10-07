/**
 * Two Panel Layout Page Component
 *
 * A layout with two side-by-side panels:
 * - BrandSidebar for navigation
 * - Header with breadcrumbs for navigation
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
import { BrandSidebar } from "@/components/brand-sidebar";
import { Panel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function TwoPanelLayoutPage() {
  return (
    <SidebarProvider>
      <BrandSidebar />
      <main className="flex-1 flex flex-col">
        {/* Header with breadcrumbs */}
        <Header
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Weather Dashboard" },
        ]}
        rightContent={<Button variant="outline">Settings</Button>}
      />

      {/* Two Panel Layout */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Panel - max 320px width on desktop, full width on mobile */}
        <Panel
          size="fit"
          responsive={{ md: "fit" }}
          title="Left Panel"
          className="w-full md:max-w-[320px] md:w-[30%] h-full"
          footer={
            <span className="text-sm text-muted-foreground">
              Left Panel Footer
            </span>
          }
        >
          {/* Panel content area - ready for your content */}
        </Panel>

        {/* Right Panel - 70% width on desktop, full width on mobile */}
        <Panel
          size="full"
          responsive={{ md: "full" }}
          title="Right Panel"
          className="w-full md:w-[70%] h-full"
          borderRight={false}
          footer={
            <span className="text-sm text-muted-foreground">
              Right Panel Footer
            </span>
          }
        >
          {/* Panel content area - ready for your content */}
        </Panel>
      </div>
      </main>
    </SidebarProvider>
  );
}
