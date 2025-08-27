<a href="https://registry-starter.vercel.app/">
  <h1 align="center">Registry Starter</h1>
</a>

<p align="center">
    Registry Starter is a free, open-source template built with Next.js and Shadcn/ui Registry to accelerate your AI-Native Design System.
</p>

<p align="center">
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## Deploy Your Own

You can deploy your own version of the Next.js Registry Starter to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=my-registry&repository-name=my-registry&demo-title=Registry%20Starter&demo-description=Registry%20Starter%20is%20a%20free%2C%20open-source%20template%20built%20with%20Next.js%20and%20Shadcn%2Fui%20Registry%20to%20accelerate%20your%20AI-Native%20Design%20System.&demo-url=https%3A%2F%2Fregistry-starter.vercel.app&demo-image=%2F%2Fregistry-starter.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://registry-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Dashboard+Kit&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Fdashboard.json)

This registry application also exposes `Open in v0` buttons for each component. Once this application is deployed, the
`Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this
registry's `/r/${component_name}.json` endpoint. This endpoint will provide v0 the necessary file information, content,
and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

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

### **v0 Integration Best Practices**

Based on real-world testing, here are the key lessons for successful v0 integration:

#### **Critical v0 Workflow**

1. **Always Search First**: v0 must search the repository before making changes
2. **Persist with ReadFile**: v0 often gets redacted content initially - it must persist until it gets actual file content
3. **Import Registry Files**: When you provide registry components, v0 should use `ImportReadOnlyFile` to bring them in
4. **Use Existing CSS Variables**: Never create hardcoded colors (like `emerald-500`) - only use design system CSS variables
5. **Work Within Constraints**: Don't expand component variants unless explicitly requested

#### **Common v0 Failures & Solutions**

❌ **What v0 Does Wrong:**
- Creates hardcoded color variants instead of using CSS custom properties
- Gives up on redacted content instead of persisting with ReadFile
- Ignores provided registry files and tries to recreate components
- Expands design system beyond documented constraints

✅ **What v0 Should Do:**
- Search repository first with `SearchRepo`
- Use `ReadFile` repeatedly until getting actual content (not redacted)
- Import registry components when provided via `ImportReadOnlyFile`
- Use only existing CSS variables from `globals.css`
- Follow registry specifications exactly
- Preserve existing APIs and TypeScript types

#### **Testing v0 Integration**

```bash
# Test with simple requests first
"Show me an alert component"

# Then test with more complex requests
"Create a badge with different variants"

# Verify v0 follows design system rules
# - Uses existing CSS variables
# - Doesn't create new variants
# - Imports registry files when provided
```

#### **Button Component Specific Rules for v0:**

- **Secondary vs Outline**: These variants look identical but use different CSS variables
- **CSS Variables**: Always use button-specific variables (--button-* not --primary, --secondary)
- **Border Handling**: Secondary and outline variants both have borders
- **No Hardcoded Colors**: Use only the button-specific CSS variables defined in globals.css

#### **Button CSS Variables Reference for v0:**

```css
/* Available button variables for v0 to use */
--button-primary, --button-primary-foreground, --button-primary-hover
--button-secondary, --button-secondary-foreground, --button-secondary-hover, --button-secondary-border
--button-outline, --button-outline-foreground, --button-outline-hover, --button-outline-border
--button-destructive, --button-destructive-foreground, --button-destructive-hover
--button-ghost-hover, --button-ghost-hover-foreground
--button-link, --button-link-hover
```

**v0 Button Usage Examples:**
- ✅ `className="bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover"`
- ❌ `className="bg-primary text-primary-foreground"` (don't use generic variables)
- ✅ `className="bg-button-secondary border border-button-secondary-border text-button-secondary-foreground"`
- ❌ `className="bg-secondary border border-gray-300"` (don't hardcode colors)

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

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/layouts` contains all v0 layouts used in `registry.json`