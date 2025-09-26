"use client";

/**
 * Map Layout Page Component
 *
 * A clean full-screen map layout with panel wrapper:
 * - Header with breadcrumbs and actions
 * - Full-screen interactive map wrapped in a panel (no panel header/footer)
 * - Panel provides content area only - maximum map space
 * - Responsive design for mobile and desktop
 * - Layout-agnostic - ready for integration with sidebar/header
 * - Uses Panel, Header, Button, and Map components
 *
 * @returns JSX element with full-screen map layout ready for layout integration
 */
import { Panel } from "@/components/panel";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Map } from "@/components/ui/map";
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
  );
}
