/**
 * Single Panel Layout Page Component
 *
 * A clean single-panel layout with:
 * - BrandSidebar for navigation
 * - Header for page context
 * - Full-width main content panel
 * - Clean, content-focused design
 * - Footer area for pagination, status, or actions
 * - Perfect for documentation, articles, forms, or single-column applications
 *
 * This component provides a minimal, content-focused layout structure
 * that maximizes content space while maintaining navigation accessibility.
 *
 * @returns JSX element with single-panel layout
 */
import { BrandSidebar } from "@/components/brand-sidebar";
import { Panel } from "@/components/panel";
import { Header } from "@/components/ui/header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function SinglePanelLayoutPage() {
  return (
    <SidebarProvider>
      <BrandSidebar />
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Content" },
          ]}
        />
        
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
      </main>
    </SidebarProvider>
  );
}
