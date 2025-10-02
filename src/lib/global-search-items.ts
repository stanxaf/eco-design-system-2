import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
  Frame,
  PieChart,
  Map,
  Home,
  Search,
  Palette,
  FileText,
  Layers
} from "lucide-react";

export interface GlobalSearchItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  group: string;
  keywords?: string[];
}

/**
 * Get all searchable items for the global command palette
 */
export function getGlobalSearchItems(): GlobalSearchItem[] {
  return [
    // Navigation
    {
      label: "Home",
      href: "/",
      icon: Home,
      group: "Navigation",
      keywords: ["home", "main", "dashboard"]
    },
    {
      label: "Playground",
      href: "#",
      icon: SquareTerminal,
      group: "Platform",
      keywords: ["playground", "terminal", "console", "development"]
    },
    {
      label: "Models",
      href: "#",
      icon: Bot,
      group: "Platform",
      keywords: ["models", "ai", "bot", "machine learning"]
    },
    {
      label: "Documentation",
      href: "#",
      icon: BookOpen,
      group: "Platform",
      keywords: ["docs", "documentation", "help", "guide"]
    },
    {
      label: "Settings",
      href: "#",
      icon: Settings2,
      group: "Platform",
      keywords: ["settings", "preferences", "config", "configuration"]
    },

    // Projects
    {
      label: "Design Engineering",
      href: "#",
      icon: Frame,
      group: "Projects",
      keywords: ["design", "engineering", "ui", "ux"]
    },
    {
      label: "Sales & Marketing",
      href: "#",
      icon: PieChart,
      group: "Projects",
      keywords: ["sales", "marketing", "analytics", "charts"]
    },
    {
      label: "Travel",
      href: "#",
      icon: Map,
      group: "Projects",
      keywords: ["travel", "map", "location", "geography"]
    },

    // Design System
    {
      label: "Components",
      href: "/",
      icon: Layers,
      group: "Design System",
      keywords: ["components", "ui", "elements", "library"]
    },
    {
      label: "Colors",
      href: "/colors",
      icon: Palette,
      group: "Design System",
      keywords: ["colors", "palette", "themes", "styling"]
    },
    {
      label: "Typography",
      href: "/typography",
      icon: FileText,
      group: "Design System",
      keywords: ["typography", "fonts", "text", "type"]
    },
    {
      label: "Tokens",
      href: "/tokens",
      icon: Search,
      group: "Design System",
      keywords: ["tokens", "design tokens", "variables", "css"]
    }
  ];
}
