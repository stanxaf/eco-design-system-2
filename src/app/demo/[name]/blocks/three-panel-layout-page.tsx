/**
 * Three Panel Layout Page Component
 *
 * A layout with three side-by-side panels:
 * - BrandSidebar for navigation
 * - Header with custom left content for navigation
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
import { BrandSidebar } from "@/components/brand-sidebar";
import { Panel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Inbox, Settings } from "lucide-react";

export default function ThreePanelLayoutPage() {
  return (
    <SidebarProvider>
      <BrandSidebar />
      <main className="flex-1 flex flex-col">
        {/* Header with custom left content */}
        <Header
        leftContent={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Inbox className="w-4 h-4" />
            </Button>
            <h6 className="font-medium">Three Panel Dashboard</h6>
          </div>
        }
        rightContent={
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        }
      />

      {/* Three Panel Layout */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Panel - Fixed width, max 280px on desktop, full width on mobile */}
        <Panel
          size="fit"
          responsive={{ md: "fit" }}
          title="Left Panel"
          className="w-full md:max-w-[280px] md:w-[280px]"
          footer={
            <span className="text-sm text-muted-foreground">
              Left Panel Footer
            </span>
          }
        >
          {/* Panel content area - ready for your content */}
        </Panel>

        {/* Center Panel - Flexible width on desktop, full width on mobile */}
        <Panel
          size="full"
          responsive={{ md: "full" }}
          title="Main Content"
          className="w-full flex-1"
          footer={
            <span className="text-sm text-muted-foreground">
              Main Content Footer
            </span>
          }
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
