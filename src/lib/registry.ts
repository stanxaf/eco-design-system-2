import registry from "@/registry";

export interface Component {
  name: string;
  type: string;
  title: string;
  description?: string;
  files?: { path: string; type: string; target: string }[];
}

export function getRegistryItems(): Component[] {
  // exclude style item as it's not relevant to show in the ui
  const components = registry.items.filter(
    (item) => item.type !== "registry:style",
  );

  return components as Component[];
}

export function getRegistryItem(name: string): Component | null {
  const components = getRegistryItems();

  const component = components.find(
    (item: { name: string }) => item.name === name,
  );

  return component || null;
}

export function getBlocks() {
  return getRegistryItems()
    .filter(
      (component) => component.type === "registry:block",
    )
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getUIPrimitives() {
  return getRegistryItems()
    .filter(
      (component) => component.type === "registry:ui",
    )
    .filter(
      (component) => !["menubar", "typography", "typography-h1", "typography-h2", "typography-h3", "typography-h4", "typography-h5", "typography-h6"].includes(component.name),
    )
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getComponents() {
  return getRegistryItems()
    .filter(
      (component) => component.type === "registry:component",
    )
    .filter(
      (component) => !["hero", "product-grid", "promo"].includes(component.name),
    )
    .sort((a, b) => a.title.localeCompare(b.title));
}
