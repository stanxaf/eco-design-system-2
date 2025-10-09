# Using DTN Design System in Your Projects

Quick guide for DTN developers to integrate and use design system components in your projects.

## 🚀 Quick Start

### For Next.js Projects (Recommended)

The simplest way to add components from the DTN design system:

```bash
# Add a single component
npx shadcn@latest add button --registry https://eco-design-system-2.vercel.app/r/registry.json

# Add multiple components
npx shadcn@latest add button card dialog --registry https://eco-design-system-2.vercel.app/r/registry.json
```

### First Time Setup

If this is your first time using the registry in a project:

```bash
# Initialize shadcn in your project
npx shadcn@latest init

# Then add components from DTN registry
npx shadcn@latest add button --registry https://eco-design-system-2.vercel.app/r/registry.json
```

---

## 📦 Available Components

### UI Primitives

**Layout & Structure:**
- Accordion, Card, Collapsible, Separator, Tabs, Sheet, Dialog, Drawer

**Forms & Inputs:**
- Button, Button Group, Input, Input Group, Textarea, Select, Checkbox, Radio Group, Switch, Slider, Calendar, Date Picker

**Navigation:**
- Breadcrumb, Navigation Menu, Menubar, Pagination, Sidebar

**Feedback & Status:**
- Alert, Badge, Progress, Skeleton, Spinner, Toast (Sonner), Empty, Tooltip

**Data Display:**
- Table, Data Table (with pagination & toolbar), Chart, Avatar, Hover Card

**Utilities:**
- Command, Combobox, Context Menu, Dropdown Menu, Popover, Scroll Area, Resizable, Kbd

### Brand Components

- Brand Header, Brand Sidebar, Brand Sidebar Stacked, Logo, Hero, Login, Promo, Product Grid, Panel

### Layout Blocks

- Blank, Dashboard, Starter Template, Single Panel, Two Panel, Three Panel, Filtered Content, Map Layout

**View all components:** [https://eco-design-system-2.vercel.app](https://eco-design-system-2.vercel.app)

---

## 🎨 Customization

### Using DTN Theme

All components automatically use the DTN theme colors and design tokens. No additional configuration needed.

### Overriding Styles

You can override component styles using className:

```tsx
import { Button } from "@/components/ui/button"

<Button className="custom-class">Click me</Button>
```

### Custom Variants

Components use `class-variance-authority`. Check the component source for available variants:

```tsx
// Example: Button variants
<Button variant="default">Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Subtle</Button>
<Button variant="destructive">Danger</Button>
```

---

## 🤖 MCP Integration (AI IDEs)

For AI-powered IDEs like Cursor and Windsurf, integrate this registry using Model Context Protocol (MCP).

### Cursor Integration

Add this to your project's `.cursor/mcp.json` or global Cursor settings:

```json
{
  "mcpServers": {
    "dtn-design-system": {
      "command": "npx -y shadcn@canary registry:mcp",
      "env": {
        "REGISTRY_URL": "https://eco-design-system-2.vercel.app/r/registry.json"
      }
    }
  }
}
```

This allows AI assistants to:
- Access and suggest components from the DTN design system
- Install components directly
- Reference the correct component APIs
- Follow DTN design patterns

---

## 🔧 For Non-Next.js Projects

### Other React Frameworks

The shadcn CLI works best with Next.js. For other frameworks:

**Option 1: Manual Component Copy**
```bash
# Clone or download the registry repo
# Copy needed files from src/components/ui/ to your project
# Install required dependencies
```

**Option 2: Use Registry API**
```bash
# Download component JSON
curl https://eco-design-system-2.vercel.app/r/styles/button.json

# Extract the component code from the JSON
```

For detailed manual installation, see the [shadcn CLI documentation](https://ui.shadcn.com/docs/cli).

---

## 🔄 Updates

To update components to the latest version:

```bash
# Update a single component
npx shadcn@latest add button --registry https://eco-design-system-2.vercel.app/r/registry.json --overwrite

# Check for updates
npx shadcn@latest diff button --registry https://eco-design-system-2.vercel.app/r/registry.json
```

---

## 📚 Examples

### Basic Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
  )
}
```

### Using Brand Components

```tsx
import { BrandHeader } from "@/components/brand-header"
import { BrandSidebar } from "@/components/brand-sidebar"

export function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <BrandHeader />
      <div className="flex">
        <BrandSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

---

## 🆘 Troubleshooting

### Component Import Errors

If you get import errors, ensure dependencies are installed:

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
```

### Path Alias Issues

Ensure your `tsconfig.json` or `jsconfig.json` has:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Tailwind Not Working

Check your `tailwind.config.js` includes the component paths:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of config
}
```

---

## 📖 Related Documentation

- **[ADDING_SHADCN_COMPONENTS.md](./ADDING_SHADCN_COMPONENTS.md)** - For maintainers: how to add new components to this registry
- **[V0_INTEGRATION.md](./V0_INTEGRATION.md)** - v0.dev compatibility details
- **[shadcn/ui Documentation](https://ui.shadcn.com/)** - Official shadcn documentation
- **[shadcn Registry Docs](https://ui.shadcn.com/docs/registry)** - Registry system documentation

---

## 📄 License

This design system is proprietary to DTN. Ensure compliance with your organization's usage policies.

---

**Need Help?** Contact the design system team or check the component source files for implementation details.

**Registry URL:** `https://eco-design-system-2.vercel.app/r/registry.json`
