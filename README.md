<a href="https://eco-design-system-2.vercel.app/">
  <h1 align="center">DTN Design System</h1>
</a>

<p align="center">
  The official design system registry for DTN, built with Next.js and shadcn/ui.
  Serving hundreds of projects across different environments.
</p>

<p align="center">
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#documentation"><strong>Documentation</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>shadcn Docs</strong></a>
</p>
<br/>

## 🎨 v0.dev Integration

This design system is optimized for [v0.dev](https://v0.dev).

**Registry URL:** `https://eco-design-system-2.vercel.app/r/registry.json`

⚠️ **Important for Developers:** If modifying the build process or theme, read [`V0_INTEGRATION.md`](./V0_INTEGRATION.md) to maintain v0 compatibility. This ensures v0 can correctly apply your custom styles and colors.

## Documentation

- **[ADDING_SHADCN_COMPONENTS.md](./ADDING_SHADCN_COMPONENTS.md)** - Step-by-step guide for adding new shadcn components
- **[V0_INTEGRATION.md](./V0_INTEGRATION.md)** - v0.dev compatibility requirements and troubleshooting
- **[REGISTRY_INTEGRATION.md](./REGISTRY_INTEGRATION.md)** - Using this registry in your projects

## Open in v0

[![Open in v0](https://eco-design-system-2.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=DTN+Design+System&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Feco-design-system-2.vercel.app%2Fr%2Fdashboard.json)

This registry application exposes `Open in v0` buttons for each component. The `Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this registry's `/r/${component_name}.json` endpoint. This endpoint provides v0 with the necessary file information, content, and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the repository's [`registry.json`](./registry.json). For more information, refer to the [shadcn registry documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Theming

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`globals.css`](./src/app/globals.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

### 🎯 **Important: Keeping Your Design System Updated**

When you make UI changes (colors, fonts, design tokens), you need to update **both** files to ensure consistency:

1. **`src/app/globals.css`** - for your local development
2. **`registry.json`** - for the registry system and external tools

**Always run this command after any UI changes:**
```bash
npm run registry:build
```

This ensures that v0, Cursor, and other tools see your latest design system updates.

### **Complete Workflow for UI Changes**

#### **Step 1: Make Your Changes**
```bash
# Edit design tokens
code src/app/globals.css

# Edit registry configuration
code registry.json
```

#### **Step 2: Update Both Files**
- ✅ Update `globals.css` with new colors/fonts
- ✅ Update `registry.json` cssVars section to match
- ✅ Keep both files in sync

#### **Step 3: Rebuild & Deploy**
```bash
npm run registry:build  # Regenerates all registry files
npm run build          # Builds your application
```

### **What to Update When**

| Change Type | Files to Update | Command to Run |
|-------------|----------------|----------------|
| **Colors & Design Tokens** | `globals.css` + `registry.json` | `npm run registry:build` |
| **Fonts** | `layout.tsx` + `globals.css` | `npm run registry:build` |
| **Components** | Component files | `npm run registry:build` |
| **Layouts & Pages** | Layout/page files | `npm run registry:build` |

### **Common Pitfalls to Avoid**

❌ **Don't:**
- Only update `globals.css` without rebuilding registry
- Only update `registry.json` without updating `globals.css`
- Forget to run `npm run registry:build` after changes
- Deploy without rebuilding registry

✅ **Do:**
- Keep both files in sync
- Always rebuild after changes
- Test locally before deploying
- Use consistent naming conventions

### **Testing Your Changes**

```bash
# Local testing
npm run dev
# Check your app locally, toggle themes, verify colors

# Registry testing
npm run registry:build
# Visit registry page, check theme toggle, verify component previews

# v0 integration testing
# Use "Open in v0" buttons, verify new colors are applied
```

#### **MCP Integration**

To use this registry with MCP, you must also edit [`registry.json`](./registry.json)'s first
`registry-item` named `theme`. This `registry:theme` item not only contains the tailwind configuration, but it also
contains your design tokens / CSS variables.

The `shadcn/ui` CLI's MCP command will use the entire `registry.json` file, so it must be put in the `/public` folder
with all of your `registry:item`s. This will enable you to use your registry in tools like Cursor & Windsurf.

#### **Fonts**

To use custom fonts, you can either use [
`next/font/google`](https://nextjs.org/docs/pages/getting-started/fonts#google-fonts) or the
[`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS rule in your
[`globals.css`](./src/app/globals.css).

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbi49c.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbj49c.woff') format('woff');
}
```

If you use `@font-face`, ensure you modify [`globals.css`](src/app/globals.css) tailwind configuration to map
your custom font variables to Tailwind fonts. Refer to this
[Tailwind documentation](https://tailwindcss.com/docs/font-family#customizing-your-theme)

### **For Team Development**

- **Communication**: Document design system changes, share registry links for reviews
- **Version Control**: Commit both files together, use descriptive commit messages
- **Consistency**: Use CSS variables for all colors, maintain clear naming conventions
- **Accessibility**: Ensure sufficient contrast ratios, test both themes

### **Adding New Components**

For detailed instructions on adding new shadcn components to the registry, see [ADDING_SHADCN_COMPONENTS.md](./ADDING_SHADCN_COMPONENTS.md).

## Running locally

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this design system registry application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/layouts` contains all v0 layouts used in `registry.json`