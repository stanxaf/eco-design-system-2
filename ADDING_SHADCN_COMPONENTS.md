# Adding New shadcn Components to DTN Registry

This guide provides a step-by-step checklist for adding new components from shadcn/ui to the DTN design system registry.

## Prerequisites

- [ ] Identify component from [shadcn changelog](https://ui.shadcn.com/docs/changelog)
- [ ] Review component documentation and dependencies
- [ ] Ensure you're in **agent mode** (not ask mode)

---

## Phase 1: Add Component File

### Option A: Using shadcn CLI (if no overwrites needed)

```bash
npx shadcn@latest add [component-name] --yes
```

### Option B: Direct Download (if CLI prompts overwrites)

```bash
curl -s "https://ui.shadcn.com/r/styles/default/[component-name].json" | \
  jq -r '.files[0].content' > src/components/ui/[component-name].tsx
```

### Post-download Verification

- [ ] Check file created: `ls -lh src/components/ui/[component-name].tsx`
- [ ] Fix import paths if needed:
  - Change: `@/registry/default/ui/*`
  - To: `@/components/ui/*`

---

## Phase 2: Customize for DTN Standards

### Required Adjustments

- [ ] **Adjust heights** (we use 32px standard):
  - Change `h-9` (36px) → `h-8` (32px)
  - Match your Input/Button component heights

- [ ] **Keep code pure** (no customizations):
  - Keep shadcn code as-is
  - No custom JSDoc documentation
  - No additional features

- [ ] **Verify imports**:
  - Use only `lucide-react` icons (not Tabler icons)
  - Use `@/components/ui/*` paths (not `@/registry/default/ui/*`)

---

## Phase 3: Create Demo File

### Demo File Structure

Create: `src/app/demo/[name]/ui/[component-name].tsx`

```tsx
import { ComponentName } from "@/components/ui/component-name";
import { Icon1, Icon2 } from "lucide-react";

export const componentName = {
  name: "component-name",
  components: {
    Example1: <ComponentName>...</ComponentName>,
    Example2: <ComponentName>...</ComponentName>,
    Example3: <ComponentName>...</ComponentName>,
  },
};
```

### Demo Guidelines

- [ ] 3-5 simple, practical examples
- [ ] Use only `lucide-react` icons
- [ ] No complex state or logic
- [ ] Show different variants/use cases
- [ ] Keep examples clean and minimal
- [ ] Match shadcn's official examples

---

## Phase 4: Registry Integration

### 4.1: Update registry.json

- [ ] Find alphabetical position in `registry.json`
- [ ] Add component entry:

```json
{
  "name": "component-name",
  "type": "registry:ui",
  "title": "Component Title",
  "badge": "New",
  "description": "Component description from shadcn docs",
  "registryDependencies": [
    "https://eco-design-system-2.vercel.app/r/themes/theme.json"
  ],
  "files": [
    {
      "path": "src/app/demo/[name]/ui/component-name.tsx",
      "type": "registry:component"
    }
  ]
}
```

### 4.2: Update Demo Index

- [ ] Open: `src/app/demo/[name]/index.tsx`
- [ ] Add import (alphabetically):
  ```tsx
  import { componentName } from "@/app/demo/[name]/ui/component-name"
  ```
- [ ] Add to demos object (alphabetically):
  ```tsx
  "component-name": componentName,
  ```

---

## Phase 5: Build and Verify

### 5.1: Build Registry

```bash
npm run registry:build
```

**Check output:**
- [ ] Shows: `- Building component-name...`
- [ ] Shows: `✔ Building registry.`
- [ ] Total components count increased

### 5.2: Verify Generated Files

```bash
# Check registry JSON generated
ls -lh public/r/styles/[component-name].json

# Verify badge property included
cat public/r/styles/[component-name].json | grep '"badge"'

# Confirm content field populated
cat public/r/styles/[component-name].json | grep '"content"' | head -1
```

### 5.3: Run Quality Checks

```bash
# Check linter
npm run lint

# Check TypeScript
npx tsc --noEmit

# Verify v0 compatibility
npm run verify:v0
```

### 5.4: Test Routes

```bash
# Start dev server
npm run dev
```

- [ ] Navigate to: `/demo/[component-name]`
- [ ] Verify demo examples display correctly
- [ ] Check component appears in registry sidebar
- [ ] Verify "New" badge displays next to component name

---

## Phase 6: Final Validation

### Files Checklist

- [ ] Component exists: `src/components/ui/[component-name].tsx`
- [ ] Demo exists: `src/app/demo/[name]/ui/[component-name].tsx`
- [ ] Registry JSON: `public/r/styles/[component-name].json`
- [ ] Listed in: `public/r/registry.json`

### Functionality Checklist

- [ ] Route `/demo/[component-name]` works
- [ ] Component appears in sidebar under "UI Primitives"
- [ ] "New" badge displays in sidebar
- [ ] No TypeScript errors
- [ ] No linter errors
- [ ] v0 verification passes
- [ ] All demo examples render correctly

---

## Quick Reference

### Files Modified Per Component

1. `src/components/ui/[component-name].tsx` *(new)*
2. `src/app/demo/[name]/ui/[component-name].tsx` *(new)*
3. `registry.json` *(add entry)*
4. `src/app/demo/[name]/index.tsx` *(add import/export)*

### Common Import Path Fixes

```tsx
// Fix these imports:
import { X } from "@/registry/default/ui/x"
import { Y } from "@/registry/default/ui/y"

// Change to:
import { X } from "@/components/ui/x"
import { Y } from "@/components/ui/y"
```

### Height Standards

```tsx
// DTN uses 32px (h-8) for inputs/buttons
h-9 (36px) → h-8 (32px)
h-10 (40px) → verify with existing components
```

---

## Troubleshooting

### CLI Prompts to Overwrite

**Problem:** CLI asks to overwrite existing files

**Solution:** Use Option B (direct download) or answer "No" to overwrites

### Import Errors

**Problem:** `Cannot find module '@/registry/default/ui/...'`

**Solution:** Update imports to use `@/components/ui/...`

### Demo Not Appearing

**Problem:** `/demo/[component-name]` returns 404

**Solution:**
1. Verify demo file exists
2. Check import added to `index.tsx`
3. Check export added to `demos` object
4. Rebuild registry

### Missing Dependencies

**Problem:** Component depends on another new component

**Solution:**
1. Add dependency component first
2. Follow same process for dependency
3. Then add main component

---

## Best Practices

1. **Keep it pure** - Use shadcn code as-is, only fix import paths and heights
2. **Simple demos** - Show practical examples, not complex scenarios
3. **Lucide icons only** - Don't use Tabler or other icon libraries
4. **Test thoroughly** - Verify builds, routes, and sidebar before considering done
5. **Document as you go** - Note any special adjustments in commit messages

---

## Example: Adding "Empty" Component

```bash
# 1. Add component
npx shadcn@latest add empty --yes

# 2. Create demo at src/app/demo/[name]/ui/empty.tsx
# (3 simple examples)

# 3. Add to registry.json
# (alphabetically between "dropdown-menu" and "form")

# 4. Update src/app/demo/[name]/index.tsx
# (import and export)

# 5. Build and verify
npm run registry:build
npm run verify:v0

# 6. Test
npm run dev
# Navigate to /demo/empty
```

---

## Related Documentation

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [shadcn Changelog](https://ui.shadcn.com/docs/changelog)
- [V0_INTEGRATION.md](./V0_INTEGRATION.md) - v0.dev compatibility requirements
- [REGISTRY_INTEGRATION.md](./REGISTRY_INTEGRATION.md) - Registry usage guide

---

**Last Updated:** October 2025
**Maintained by:** DTN Design System Team

