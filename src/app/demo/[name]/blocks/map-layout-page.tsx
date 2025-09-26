"use client";

/**
 * Map Layout Page Component
 *
 * A complete page layout with sidebar navigation and interactive map:
 * - Brand sidebar with navigation
 * - Header with breadcrumbs and actions
 * - Left panel: Map controls and settings
 * - Right panel: Full-screen interactive map (edge-to-edge)
 * - Responsive design for mobile and desktop
 * - Uses Panel, Header, Button, Map, and BrandSidebar components
 *
 * @returns JSX element with complete map layout
 */
import { Panel } from "@/components/panel";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Map } from "@/components/ui/map";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function MapLayoutPage() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([-98.5795, 39.8283]);
  const [mapZoom, setMapZoom] = useState(4);

  // Mapbox access token - replace with your own token
  const MAPBOX_TOKEN = "pk.eyJ1Ijoic3RhbnhhZiIsImEiOiJjbWcwODl2N2UwYTN1MmpzOW1oYXRzbXRxIn0.QsDOJWYQe4_jQFc11bVBlQ";

  const handleMapMove = (center: [number, number]) => {
    setMapCenter(center);
  };

  const handleMapZoom = (zoom: number) => {
    setMapZoom(zoom);
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <BrandSidebar />
      <main className="flex w-full">
        <div className="w-full h-screen flex flex-col">
          {/* Header with breadcrumbs */}
          <Header
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Weather Dashboard" }
            ]}
            rightContent={
              <Button variant="outline">
                Settings
              </Button>
            }
          />

          {/* Two Panel Layout */}
          <div className="flex flex-col md:flex-row flex-1">
            {/* Left Panel - Map Controls */}
            <Panel
              size="fit"
              responsive={{ md: "fit" }}
              title="Map Controls"
              className="w-full md:max-w-[320px] md:w-[30%] h-full"
              footer={<span className="text-sm text-muted-foreground">Map Controls</span>}
            >
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Map controls and settings can be added here.
                </div>
              </div>
            </Panel>

            {/* Right Panel - Interactive Map */}
            <Panel
              size="full"
              responsive={{ md: "full" }}
              title="Weather Map"
              className="w-full md:w-[70%] h-full"
              borderRight={false}
              footer={<span className="text-sm text-muted-foreground">Interactive Weather Map</span>}
            >
              {/* Map Component - Edge to edge */}
              <div className="absolute inset-0 top-12 bottom-12 left-0 right-0">
                <Map
                  accessToken={MAPBOX_TOKEN}
                  center={mapCenter}
                  zoom={mapZoom}
                  height="100%"
                  width="100%"
                  onMove={handleMapMove}
                  onZoom={handleMapZoom}
                  showControls={false}
                  showNavigation={false}
                  showZoom={false}
                  showGeolocation={false}
                  showReset={false}
                  className="h-full w-full"
                  aria-label="Interactive map"
                />
              </div>
            </Panel>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
