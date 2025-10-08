# v0.dev Integration Guide

> **Critical:** This registry is designed to work with v0.dev. Follow these requirements strictly to maintain compatibility.

## Quick Checklist ✓

Before every deployment, verify:
- [ ] `cssVars` property exists in theme item of `registry.json`
- [ ] `registry:style` is handled in `scripts/build-registry.js` (line 237)
- [ ] Run `node scripts/build-registry.js` after any changes
- [ ] Verify `public/r/themes/theme.json` has `cssVars` and `content`
- [ ] All registry URLs are publicly accessible

## Critical Requirements

### 1. Theme Must Have cssVars (REQUIRED)

v0 reads the `cssVars` property to understand your color system. Without this, v0 will use default shadcn colors instead of your custom theme.

**Location:** `registry.json` → theme item → `cssVars` property

**Format:**
```json
{
  "name": "theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-sans": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif",
      "radius": "0.375rem"
    },
    "light": {
      "background": "#ffffff",
      "foreground": "#060608",
      "primary": "#007bd9",
      "primary-foreground": "#ffffff",
      "secondary": "#f4f4f5",
      "secondary-foreground": "#27272e",
      "muted": "#e4e4e7",
      "muted-foreground": "#6e6e78",
      "accent": "#007bd9",
      "accent-foreground": "#ffffff",
      "destructive": "#e0230f",
      "destructive-foreground": "#ffffff",
      "border": "#e4e4e7",
      "input": "#cdd3da",
      "ring": "#1a93ef"
    },
    "dark": {
      "background": "#000000",
      "foreground": "#ffffff",
      "primary": "#007bd9",
      "primary-foreground": "#ffffff",
      "secondary": "#1a1a1f",
      "secondary-foreground": "#e4e4e7",
      "muted": "#27272e",
      "muted-foreground": "#b0b0b8",
      "accent": "#007bd9",
      "accent-foreground": "#ffffff",
      "destructive": "#e0230f",
      "destructive-foreground": "#ffffff",
      "border": "#27272e",
      "input": "#4b5762",
      "ring": "#005aa1"
    }
  },
  "files": [...]
}
```

### 2. Build Script Must Include Style Files

**Location:** `scripts/build-registry.js` (line 237)

The build script MUST add content for `registry:style` files:

```javascript
if (
  (file.type === "registry:component" ||
   file.type === "registry:page" ||
   file.type === "registry:style" ||    // ⚠️ CRITICAL: Don't remove this
   file.type === "registry:file") &&
  file.path
) {
  file.content = fs.readFileSync(sourcePath, "utf8");
}
```

**Why:** v0 needs the actual CSS content to apply your styles. Without this, the `globals.css` content won't be included in the generated `theme.json`, and v0 will have no access to your custom CSS.

### 3. Color Format Rules

In `cssVars`, use:
- ✅ Hex values: `"primary": "#007bd9"`
- ✅ HSL format: `"primary": "221.2 83.2% 53.3%"`

Don't use:
- ❌ CSS variables: `"primary": "var(--blue-500)"`
- ❌ RGB format: `"primary": "rgb(0, 123, 217)"`

**Why:** v0 parses these values to generate Tailwind configuration. It cannot resolve CSS variable references or convert RGB values.

### 4. Essential cssVars Properties

Make sure to include these minimum properties in your theme:

**Theme section (non-color variables):**
- `font-sans` (or your font family)
- `radius` (border radius)

**Light/Dark sections (must have both):**
- `background` / `foreground`
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `muted` / `muted-foreground`
- `accent` / `accent-foreground`
- `destructive` / `destructive-foreground`
- `border`
- `input`
- `ring`
- `card` / `card-foreground`
- `popover` / `popover-foreground`

## Common Issues & Fixes

### Issue: v0 renders with default shadcn colors

**Symptoms:** Components appear in v0 but use default blue/gray colors instead of your brand colors.

**Cause:** Missing or incorrect `cssVars` in theme

**Fix:**
1. Check `registry.json` has `cssVars` in theme item (lines 13-60)
2. Rebuild: `node scripts/build-registry.js`
3. Verify: `cat public/r/themes/theme.json | grep "cssVars" -A 5`
4. Should show your color definitions

### Issue: Components have no styling in v0

**Symptoms:** Components render as unstyled HTML in v0.

**Cause:** File content not included in JSON

**Fix:**
1. Verify `build-registry.js` includes `registry:style` (line 237)
2. Rebuild: `node scripts/build-registry.js`
3. Check: `cat public/r/themes/theme.json | grep "content"`
4. Should show CSS content is present

### Issue: Some components work, others don't

**Symptoms:** Basic components work but custom components have no styling.

**Cause:** Missing theme dependency in component definition

**Fix:** Each component must reference theme:
```json
"registryDependencies": [
  "https://eco-design-system-2.vercel.app/r/themes/theme.json"
]
```

### Issue: Colors work but fonts don't

**Cause:** Font family not specified in cssVars.theme

**Fix:** Add to theme section:
```json
"cssVars": {
  "theme": {
    "font-sans": "Inter, ui-sans-serif, system-ui, ..."
  }
}
```

## Build Process

Every time you update the design system:

```bash
# 1. Make changes to source files (components, CSS, etc.)
# 2. Update registry.json if needed (add/remove components)
# 3. Build registry
node scripts/build-registry.js

# 4. Verify (critical!)
npm run verify:v0  # Or use manual commands below

# Manual verification:
cat public/r/themes/theme.json | grep -A 5 "cssVars"  # Should show colors
cat public/r/themes/theme.json | grep "content"       # Should exist

# 5. Test locally (optional)
# Open v0.dev and test with localhost:3000/r/registry.json

# 6. Commit and deploy
git add .
git commit -m "Update registry"
git push
```

## File Structure

```
/
├── registry.json              # Source registry (edit this)
│   └── theme item            # Must have cssVars property
├── public/r/
│   ├── registry.json         # Generated (don't edit directly)
│   ├── themes/
│   │   └── theme.json        # Must have cssVars + content
│   ├── styles/               # UI components (shadcn-like)
│   ├── components/           # Custom components
│   └── blocks/              # Complete layouts
├── scripts/
│   └── build-registry.js     # Must handle registry:style
└── src/app/
    └── globals.css           # Source of truth for styles
```

## Registry Dependencies Structure

When referencing dependencies, use FULL URLs for your own registry:

```json
"registryDependencies": [
  "https://eco-design-system-2.vercel.app/r/themes/theme.json",     // ✅ Full URL
  "https://eco-design-system-2.vercel.app/r/styles/button.json",    // ✅ Full URL
  "button",       // ✅ OK - resolves to shadcn's registry
  "card",         // ✅ OK - resolves to shadcn's registry
  "icons"         // ✅ OK - resolves to shadcn's registry
]
```

**Why:** v0 needs absolute URLs to fetch your custom components, but can resolve standard shadcn component names.

## Testing v0 Integration

### Local Testing (Before Deployment)

1. Start local dev server: `npm run dev`
2. In v0.dev, use: `http://localhost:3000/r/registry.json`
3. Select a component and verify colors/styles

### Production Testing

1. Open [v0.dev](https://v0.dev)
2. Use "Add component from URL"
3. Enter: `https://eco-design-system-2.vercel.app/r/registry.json`
4. Select a component (e.g., button, card)
5. Verify it renders with your custom colors and styles

**Expected behavior:**
- ✅ Components use your blue (#007bd9) as primary color
- ✅ Backgrounds match your gray scale
- ✅ Typography uses Inter font
- ✅ Border radius is 0.375rem
- ✅ Light/dark mode both work

**If not working:**
- Check browser console for errors
- Verify registry URL is accessible
- Run `npm run verify:v0` to check local files

## Historical Context

**Date Fixed:** October 8, 2025

**Issue:** v0 was rendering components without custom styles. Components would appear with default shadcn colors (blue-500, slate) instead of our custom brand colors.

**Root Cause:**
1. Missing `cssVars` property in theme item - v0 had no way to understand our color system
2. Build script not including CSS file content - `globals.css` content was never added to theme.json
3. No standardized way for v0 to read design tokens from the registry

**Solution Applied:**
1. Added `cssVars` object with theme, light, and dark sections to theme item in `registry.json`
2. Modified `build-registry.js` to include `registry:style` file content (line 237)
3. Rebuilt registry: `node scripts/build-registry.js`
4. Verified `public/r/themes/theme.json` now has both `cssVars` and `content` properties

**Result:** v0 now correctly applies custom colors, fonts, and design tokens when rendering components.

## Deployment Requirements

For v0 to access your registry:

1. ✅ Host on public URL (Vercel, Netlify, etc.)
2. ✅ HTTPS required (v0 won't fetch from http://)
3. ✅ Ensure `/r/registry.json` is publicly accessible
4. ✅ All referenced JSON files must be accessible
5. ✅ Enable CORS if needed (usually automatic on Vercel)
6. ✅ Verify URLs return JSON (not 404 or HTML)

**Quick test:**
```bash
curl https://eco-design-system-2.vercel.app/r/themes/theme.json | jq .cssVars
# Should output your color definitions
```

## Advanced: Updating Colors

When updating your color system:

1. Update CSS variables in `src/app/globals.css`
2. Update `cssVars` in `registry.json` to match
3. Keep both in sync (cssVars should mirror your CSS but in hex/HSL format)
4. Rebuild: `node scripts/build-registry.js`
5. Test in v0 to verify colors appear correctly

**Example:**
```css
/* globals.css */
:root {
  --primary: #007bd9;  /* Your source of truth */
}
```

```json
/* registry.json */
"cssVars": {
  "light": {
    "primary": "#007bd9"  /* Keep in sync */
  }
}
```

## References

- [Shadcn Registry Schema](https://ui.shadcn.com/schema/registry.json)
- [Shadcn Registry Docs](https://ui.shadcn.com/docs/registry)
- [v0 Design Systems Docs](https://v0.app/docs/design-systems)
- Internal: `REGISTRY_INTEGRATION.md` for general registry info
- Internal: `fix-v0-custom-styles.plan.md` for detailed fix history

## Support

If v0 integration breaks:

1. Check this guide's "Common Issues" section
2. Run `npm run verify:v0` to check local files
3. Review recent changes to `registry.json` or `build-registry.js`
4. Verify registry is publicly accessible
5. Test with a simple component (button) first

**Remember:** The three critical elements are:
1. `cssVars` in theme (tells v0 your colors)
2. File `content` in JSON (gives v0 the CSS)
3. Public URLs (lets v0 download everything)

Miss any of these and v0 won't apply your custom styles!

