"use client";

/**
 * Map Layout Page Component
 *
 * A full-screen map layout with sidebar navigation:
 * - BrandSidebar for navigation
 * - Header with breadcrumbs and actions
 * - Full-screen interactive map wrapped in a panel (no panel header/footer)
 * - Panel provides content area only - maximum map space
 * - Responsive design for mobile and desktop
 * - Uses Panel, Header, Button, Map, and BrandSidebar components
 *
 * @returns JSX element with full-screen map layout with sidebar navigation
 */
import { BrandSidebar } from "@/components/brand-sidebar";
import { Panel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Map } from "@/components/ui/map";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";

export default function MapLayoutPage() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    -98.5795, 39.8283,
  ]);
  const [mapZoom, setMapZoom] = useState(4);

  // Mapbox access token - replace with your own token
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoic3RhbnhhZiIsImEiOiJjbWcwODl2N2UwYTN1MmpzOW1oYXRzbXRxIn0.QsDOJWYQe4_jQFc11bVBlQ";

  const handleMapMove = (center: [number, number]) => {
    setMapCenter(center);
  };

  const handleMapZoom = (zoom: number) => {
    setMapZoom(zoom);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <BrandSidebar />
        
        <main className="flex-1 flex flex-col">
          <div className="w-full h-screen flex flex-col">
            {/* Header with breadcrumbs */}
            <Header
              breadcrumbs={[{ label: "Weather Hub", href: "/" }, { label: "Map" }]}
              rightContent={<Button variant="outline">Settings</Button>}
            />

            {/* Full Screen Map Panel */}
            <Panel
              size="full"
              hideHeader={true}
              hideFooter={true}
              className="w-full h-full"
              borderRight={false}
            >
              {/* Map Component - Full screen */}
              <div className="absolute inset-0 left-0 right-0 top-0 bottom-0">
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
        </main>
      </div>
    </SidebarProvider>
  );
}
