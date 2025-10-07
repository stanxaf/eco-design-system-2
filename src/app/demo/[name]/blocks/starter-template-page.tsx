/**
 * Starter Template Page Component
 *
 * A minimal starter page that provides:
 * - BrandSidebar for navigation
 * - Clean, simple layout without panel wrapper
 * - Centered placeholder content
 * - Ready-to-customize foundation
 *
 * This component serves as a blank slate for users to build upon,
 * featuring the complete layout structure with sidebar and header.
 *
 * @returns JSX element with simple layout and placeholder content
 */
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function StarterTemplatePage() {
  return (
    <SidebarProvider>
      <BrandSidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-muted-foreground">Your content goes here</p>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
