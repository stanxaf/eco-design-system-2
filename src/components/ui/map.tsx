"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Navigation, 
  ZoomIn, 
  ZoomOut, 
  MapPin, 
  RotateCcw,
  Map as MapIcon
} from "lucide-react";

// Import Mapbox CSS
import "mapbox-gl/dist/mapbox-gl.css";

// Import mapbox-gl with proper type handling
import mapboxgl from "mapbox-gl";

/**
 * Map component with Mapbox integration for the DTN design system.
 *
 * **Features:**
 * - Mapbox GL JS integration with free tier support
 * - Theme-aware styling (light/dark mode)
 * - Built-in controls (zoom, navigation, geolocation)
 * - Accessibility support with proper ARIA labels
 * - Customizable styling with className support
 * - TypeScript definitions for all props
 * - Responsive design with proper sizing
 *
 * **Required Props:**
 * - `accessToken`: Your Mapbox access token
 *
 * **Optional Props:**
 * - `className`: Additional CSS classes
 * - `center`: Initial map center [lng, lat] (default: [-98.5795, 39.8283])
 * - `zoom`: Initial zoom level (default: 4)
 * - `style`: Mapbox style URL (auto-detected based on theme)
 * - `showControls`: Show built-in controls (default: true)
 * - `showNavigation`: Show navigation control (default: true)
 * - `showZoom`: Show zoom controls (default: true)
 * - `showGeolocation`: Show geolocation button (default: true)
 * - `showReset`: Show reset button (default: true)
 * - `height`: Map height (default: "400px")
 * - `width`: Map width (default: "100%")
 *
 * **Theme Integration:**
 * - Automatically switches between light and dark map styles
 * - Uses CSS variables for consistent theming
 * - Supports both light and dark mode
 *
 * **Usage Examples:**
 * ```tsx
 * // Basic map
 * <Map accessToken="your-mapbox-token" />
 *
 * // Custom center and zoom
 * <Map
 *   accessToken="your-mapbox-token"
 *   center={[-74.006, 40.7128]}
 *   zoom={12}
 * />
 *
 * // Custom height and styling
 * <Map
 *   accessToken="your-mapbox-token"
 *   height="500px"
 *   className="rounded-lg border"
 * />
 *
 * // Minimal controls
 * <Map
 *   accessToken="your-mapbox-token"
 *   showControls={false}
 * />
 * ```
 */

export interface MapProps {
  /** Mapbox access token - required for map functionality */
  accessToken: string;
  /** Additional CSS classes */
  className?: string;
  /** Initial map center coordinates [longitude, latitude] */
  center?: [number, number];
  /** Initial zoom level */
  zoom?: number;
  /** Custom Mapbox style URL - overrides theme-based selection */
  style?: string;
  /** Show built-in control buttons */
  showControls?: boolean;
  /** Show navigation control (compass) */
  showNavigation?: boolean;
  /** Show zoom in/out buttons */
  showZoom?: boolean;
  /** Show geolocation button */
  showGeolocation?: boolean;
  /** Show reset button */
  showReset?: boolean;
  /** Map height */
  height?: string;
  /** Map width */
  width?: string;
  /** Callback when map is loaded */
  onLoad?: (map: mapboxgl.Map) => void;
  /** Callback when map center changes */
  onMove?: (center: [number, number]) => void;
  /** Callback when map zoom changes */
  onZoom?: (zoom: number) => void;
  /** Accessibility label for the map */
  "aria-label"?: string;
}

/**
 * Get the appropriate Mapbox style based on the current theme
 */
function getMapStyle(style?: string, isDark?: boolean): string {
  if (style) return style;

  // Default styles for light and dark themes
  return isDark
    ? "mapbox://styles/mapbox/dark-v11"
    : "mapbox://styles/mapbox/light-v11";
}

/**
 * Get the current theme from the document
 */
function getCurrentTheme(): boolean {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function Map({
  accessToken,
  className,
  center = [-98.5795, 39.8283], // Center of USA
  zoom = 4,
  style,
  showControls = true,
  showNavigation = true,
  showZoom = true,
  showGeolocation = true,
  showReset = true,
  height = "400px",
  width = "100%",
  onLoad,
  onMove,
  onZoom,
  "aria-label": ariaLabel = "Interactive map",
  ...props
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentCenter, setCurrentCenter] = useState<[number, number]>(center);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set Mapbox access token
  useEffect(() => {
    if (typeof window !== "undefined") {
      mapboxgl.accessToken = accessToken;
    }
  }, [accessToken]);

  // Initialize map
  useEffect(() => {
    if (!isMounted || !mapContainer.current || map.current || typeof window === "undefined") return;

    try {
      const theme = getCurrentTheme();
      setIsDark(theme);

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: getMapStyle(style, theme),
        center: center,
        zoom: zoom,
        attributionControl: false,
        ...props,
      });
    } catch (error) {
      console.error('Failed to initialize map:', error);
      setMapError('Map failed to load. Please provide a valid Mapbox access token. Get yours at mapbox.com');
      return;
    }

    // Add attribution control in bottom-right corner
    map.current.addControl(new mapboxgl.AttributionControl({
      compact: true,
    }), 'bottom-right');

    // Handle map load
    map.current.on("load", () => {
      setIsLoaded(true);
      onLoad?.(map.current!);
    });

    // Handle map errors
    map.current.on("error", (e) => {
      console.error('Map error:', e);
      setMapError('Map failed to load. Please provide a valid Mapbox access token. Get yours at mapbox.com');
    });

    // Handle map movement
    map.current.on("move", () => {
      const center = map.current!.getCenter();
      const newCenter: [number, number] = [center.lng, center.lat];
      setCurrentCenter(newCenter);
      onMove?.(newCenter);
    });

    // Handle zoom changes
    map.current.on("zoom", () => {
      const newZoom = map.current!.getZoom();
      setCurrentZoom(newZoom);
      onZoom?.(newZoom);
    });

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isMounted, accessToken, center, zoom, style, onLoad, onMove, onZoom, props]);

  // Handle theme changes
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    const newStyle = getMapStyle(style, isDark);
    map.current.setStyle(newStyle);
  }, [isDark, style, isLoaded]);

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = getCurrentTheme();
      if (newTheme !== isDark) {
        setIsDark(newTheme);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [isDark]);

  // Control handlers
  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      setGeolocationError("Geolocation is not supported by this browser.");
      return;
    }

    setGeolocationError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        if (map.current) {
          map.current.flyTo({
            center: [longitude, latitude],
            zoom: 12,
          });
        }
      },
      (error) => {
        setGeolocationError(`Geolocation error: ${error.message}`);
      }
    );
  };

  const handleReset = () => {
    if (map.current) {
      map.current.flyTo({
        center: center,
        zoom: zoom,
      });
    }
  };

  const handleNavigation = () => {
    if (map.current) {
      map.current.resetNorth();
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Map container */}
      <div
        ref={mapContainer}
        className="w-full rounded-lg border border-border bg-background"
        style={{ height, width }}
        role="img"
        aria-label={ariaLabel}
        aria-live="polite"
        aria-atomic="true"
      />

      {/* Custom controls */}
      {showControls && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Zoom controls */}
          {showZoom && (
            <div className="flex flex-col gap-1">
              <Button
                size="icon-sm"
                variant="outline"
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="bg-background/95 backdrop-blur-sm"
              >
                <ZoomIn className="size-3" />
              </Button>
              <Button
                size="icon-sm"
                variant="outline"
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="bg-background/95 backdrop-blur-sm"
              >
                <ZoomOut className="size-3" />
              </Button>
            </div>
          )}

          {/* Navigation control */}
          {showNavigation && (
            <Button
              size="icon-sm"
              variant="outline"
              onClick={handleNavigation}
              aria-label="Reset north"
              className="bg-background/95 backdrop-blur-sm"
            >
              <Navigation className="size-3" />
            </Button>
          )}

          {/* Geolocation control */}
          {showGeolocation && (
            <Button
              size="icon-sm"
              variant="outline"
              onClick={handleGeolocation}
              aria-label="Find my location"
              className="bg-background/95 backdrop-blur-sm"
            >
              <MapPin className="size-3" />
            </Button>
          )}

          {/* Reset control */}
          {showReset && (
            <Button
              size="icon-sm"
              variant="outline"
              onClick={handleReset}
              aria-label="Reset to initial view"
              className="bg-background/95 backdrop-blur-sm"
            >
              <RotateCcw className="size-3" />
            </Button>
          )}
        </div>
      )}

      {/* Error messages */}
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-lg border border-border">
          <div className="text-center p-6 max-w-sm">
            <MapIcon className="size-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-medium text-sm mb-2">Map Component</h3>
            <p className="text-xs text-muted-foreground mb-3">{mapError}</p>
            <p className="text-xs text-muted-foreground">
              Replace <code className="bg-muted px-1 rounded">pk.your-mapbox-token-here</code> with your actual token
            </p>
          </div>
        </div>
      )}

      {geolocationError && !mapError && (
        <div className="absolute bottom-4 left-4 right-4 bg-destructive text-destructive-foreground p-3 rounded-lg text-sm">
          {geolocationError}
        </div>
      )}

      {/* Loading indicator */}
      {(!isMounted || !isLoaded) && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapIcon className="size-4 animate-pulse" />
            <span className="text-sm">{!isMounted ? "Initializing..." : "Loading map..."}</span>
          </div>
        </div>
      )}

      {/* Map info */}
      {isLoaded && showControls && (
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-2 rounded-lg text-xs text-muted-foreground border border-border">
          <div>Center: {currentCenter[1].toFixed(4)}, {currentCenter[0].toFixed(4)}</div>
          <div>Zoom: {currentZoom.toFixed(1)}</div>
        </div>
      )}
    </div>
  );
}
