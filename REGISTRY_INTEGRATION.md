# Design System Registry Integration Guide

This guide explains how to integrate the DTN Design System Registry with your React project using Tailwind CSS v3+.

## 🚀 Quick Start (Recommended - Works with ALL React Frameworks)

The **manual installation approach** is the most reliable method that works with **ANY React framework** (Create React App, Vite, Next.js, etc.). This bypasses registry complexity and gives you immediate results.

### Prerequisites

- React 16.8+ or React 18+
- Tailwind CSS v3+
- TypeScript (recommended)
- Node.js 18+

### Step 1: Install Core Dependencies

```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-tabs class-variance-authority clsx tailwind-merge lucide-react
```

### Step 2: Copy Components

Create the component structure in your project:

```bash
mkdir -p src/components/ui
mkdir -p src/components/brand
mkdir -p src/lib
```

**Copy UI Components:**
```bash
# Copy all UI components
cp -r [registry-project]/src/components/ui/* src/components/ui/
```

**Copy Brand Components:**
```bash
# Copy brand-specific components
cp [registry-project]/src/components/brand-*.tsx src/components/brand/
cp [registry-project]/src/components/logo.tsx src/components/brand/
cp [registry-project]/src/components/hero.tsx src/components/brand/
cp [registry-project]/src/components/login.tsx src/components/brand/
cp [registry-project]/src/components/promo.tsx src/components/brand/
cp [registry-project]/src/components/product-grid.tsx src/components/brand/
```

**Copy Utilities:**
```bash
cp [registry-project]/src/lib/utils.ts src/lib/
cp [registry-project]/src/lib/products.ts src/lib/ # If using product grid
```

### Step 3: Copy Theme CSS

Copy the CSS variables from `[registry-project]/src/app/globals.css` to your project's main CSS file:

```css
/* Add these CSS variables to your main CSS file */
:root {
  --neutral-white: #ffffff;
  --neutral-black: #000000;

  --background: #ffffff;
  --foreground: #1A1A1F;
  --card: #FAFAFA;
  --card-foreground: #1A1A1F;
  --popover: #FAFAFA;
  --popover-foreground: #1A1A1F;

  --primary: #007BD9;
  --primary-foreground: #ffffff;
  --secondary: #F4F4F5;
  --secondary-foreground: #27272E;

  --muted: #F4F4F5;
  --muted-foreground: #6E6E78;
  --accent: #007BD9;
  --accent-foreground: #ffffff;

  --destructive: #ef4444;
  --destructive-foreground: #ffffff;

  --border: #E4E4E7;
  --input: #CDD3DA;
  --ring: #1A93EF;

  --radius: 0.375rem;
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  --card: #1A1A1F;
  --card-foreground: #ffffff;
  --popover: #1A1A1F;
  --popover-foreground: #ffffff;

  --secondary: #27272E;
  --secondary-foreground: #E4E4E7;
  --muted: #27272E;
  --muted-foreground: #B0B0B8;

  --border: #27272E;
  --input: #4B5762;
  --ring: #005AA1;
}
```

### Step 4: Configure Tailwind

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

### Step 5: Test Installation

Create a simple test component:

```tsx
// src/components/TestComponent.tsx
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function TestComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Design System Test</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me!</Button>
      </CardContent>
    </Card>
  )
}
```

## 🔧 Registry CLI Installation (Next.js Projects Only)

> **⚠️ IMPORTANT LIMITATION:** The shadcn CLI **ONLY supports Next.js projects** by default. It will NOT work with:
> - ❌ Create React App (CRA)
> - ❌ Vite React projects
> - ❌ Other React frameworks
> - ❌ Non-React projects
>
> **For non-Next.js projects, use the Manual Installation approach above.**

If you have a **Next.js project** and want to use the registry CLI approach, follow these steps:

### Prerequisites

- **Next.js project** (this is a hard requirement)
- Node.js 20+
- Access to the registry URL
- Proper environment variables configured

### Step 1: Install Registry CLI

```bash
npm install -g @shadcn/ui
```

### Step 2: Initialize Registry

```bash
# Initialize shadcn normally first
npx shadcn@latest init --yes

# Then manually edit the generated components.json to add your registry
# Your components.json should look like this:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "registry": "https://eco-design-system-2.vercel.app/r/registry.json"
}
```

### Framework Detection Issues

If you get this error:
```
✖ Verifying framework.
We could not detect a supported framework at [your-project-path].
```

**This means your project is NOT a Next.js project.** The shadcn CLI only supports:
- ✅ **Next.js** (fully supported)
- ❌ **Create React App** (not supported)
- ❌ **Vite** (not supported)
- ❌ **Other frameworks** (not supported)

**Solution:** Use the Manual Installation approach above instead.
```

### Step 3: Add Components

```bash
# After setting up components.json with your registry, add components normally:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

## 📦 Available Components

### UI Components
- **Layout**: Accordion, Card, Dialog, Drawer, Sheet, Sidebar
- **Forms**: Button, Input, Select, Checkbox, Radio Group, Switch
- **Navigation**: Breadcrumb, Navigation Menu, Pagination, Tabs
- **Feedback**: Alert, Badge, Progress, Skeleton, Toast
- **Data**: Table, Data Table, Chart, Calendar, Date Picker

### Brand Components
- **Brand Header**: Navigation header with logo and user menu
- **Brand Sidebar**: Collapsible sidebar with navigation
- **Logo**: Brand logo component
- **Hero**: Landing page hero section
- **Login**: Authentication form
- **Promo**: Promotional content section
- **Product Grid**: Product display with API integration

### Layout Blocks
- **Blank**: Minimal layout with brand components
- **Dashboard**: Full dashboard layout with sidebar
- **Store**: E-commerce layout with product grid

## 🎨 Customization

### Theme Colors

Modify the CSS variables in your CSS file to customize colors:

```css
:root {
  --primary: #007BD9;  /* Example: DTN Blue */
  --secondary: #F4F4F5;  /* Example: Light Gray */
  /* ... other colors */
}
```

### Component Variants

Components use `class-variance-authority` for variants. Customize in the component files:

```tsx
// Example: Customizing button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // Add your custom variants here
        custom: "bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🚨 Troubleshooting

### Common Issues

**1. Component Import Errors**
```bash
# Ensure all dependencies are installed
npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge
```

**2. Tailwind Classes Not Working**
```bash
# Check your tailwind.config.js content paths
# Ensure components are included in the build
```

**3. CSS Variables Not Applied**
```css
/* Make sure CSS variables are loaded before Tailwind */
@import "tailwindcss";
/* Your CSS variables should come after */
```

**4. TypeScript Errors**
```bash
# Install proper types
npm install @types/react @types/react-dom
```

### Getting Help

- Check the component source files for dependencies
- Verify all required packages are installed
- Ensure Tailwind CSS is properly configured
- Check browser console for JavaScript errors

### Registry CLI Issues

**"unknown option '--registry'" Error:**
```bash
# The --registry flag isn't supported in your version of shadcn CLI
# Use this approach instead:

# 1. Initialize normally
npx shadcn@latest init --yes

# 2. Edit components.json to add your registry
# Add: "registry": "https://eco-design-system-2.vercel.app/r/registry.json"

# 3. Then add components normally
npx shadcn@latest add button
```

**"We could not detect a supported framework" Error:**
```bash
# This means your project is NOT a Next.js project
# The shadcn CLI only supports Next.js by default

# Solution: Use Manual Installation instead
cp -r /path/to/eco-design-system-2/src/components/ui/* src/components/ui/
```

**"Validation failed: type: Required" Error:**
This error has been fixed in the registry. If you still see this error, try rebuilding the registry:

```bash
# In the registry project, run:
npm run registry:build

# Then try the CLI again:
npx shadcn@latest init --yes --registry https://eco-design-system-2.vercel.app/r/registry.json
```

**Registry Setup (Recommended):**
Since the `--registry` flag isn't supported, use this approach:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "registry": "https://eco-design-system-2.vercel.app/r/registry.json"
}
```

## 📚 Examples

### Basic Usage

```tsx
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Brand Components

```tsx
import { BrandHeader } from './components/brand/brand-header'
import { BrandSidebar } from './components/brand/brand-sidebar'

function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <BrandHeader />
      <div className="flex">
        <BrandSidebar />
        <main className="flex-1 p-6">
          {/* Your dashboard content */}
        </main>
      </div>
    </div>
  )
}
```

## 🔄 Updates

To update components:

1. **Manual Copy**: Copy updated files from the registry source
2. **Registry CLI**: Run `npx shadcn@latest add [component] --registry [url]`

## 🤖 MCP Integration (AI IDEs)

For AI-powered IDEs like Cursor, you can integrate this registry using Model Context Protocol (MCP):

### Cursor Integration

Add this to your `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx -y shadcn@canary registry:mcp",
      "env": {
        "REGISTRY_URL": "https://eco-design-system-2.vercel.app/r/registry.json"
      }
    }
  }
}
```

This allows AI assistants to access and suggest components from your design system registry.

## 📄 License

This design system is proprietary to DTN. Please ensure compliance with your organization's usage policies.

## 🎯 **Final Recommendation for DTN**

Given the **shadcn CLI limitations** and DTN's diverse project landscape:

### **✅ Use Manual Installation (Recommended)**
- **Works with ALL React frameworks** (CRA, Vite, Next.js, etc.)
- **No framework detection issues**
- **Immediate results** - components work right away
- **Perfect for hundreds of projects** in different environments

### **❌ Avoid Registry CLI for Non-Next.js Projects**
- **Only works with Next.js**
- **Framework detection errors** for CRA/Vite projects
- **More complex setup** with potential failures
- **Limited compatibility** across your project ecosystem

### **🚀 Get Started Now**
```bash
# Copy components directly (works everywhere)
cp -r /path/to/eco-design-system-2/src/components/ui/* src/components/ui/
cp /path/to/eco-design-system-2/src/components/brand-*.tsx src/components/brand/
```

---

**Need Help?** Contact your design system team or refer to the component source files for implementation details.
