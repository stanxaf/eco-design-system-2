#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get the base URL from environment variables or use localhost for development
const baseUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_URL ||
  "https://eco-design-system-2.vercel.app";

// Ensure the base URL has the correct protocol
const fullBaseUrl = baseUrl.startsWith("http") ? baseUrl : `https://${baseUrl}`;

console.log(`Building registry with base URL: ${fullBaseUrl}`);

// Read the original registry.json
const registryPath = path.join(process.cwd(), "registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

// Ensure the registry has the required type field
if (!registry.type) {
  registry.type = "registry";
}

// Update the homepage to match the deployed URL
registry.homepage = fullBaseUrl;

// Create the proper shadcn registry directory structure
const publicRDir = path.join(process.cwd(), "public", "r");
const stylesDir = path.join(publicRDir, "styles");
const componentsDir = path.join(publicRDir, "components");
const blocksDir = path.join(publicRDir, "blocks");
const themesDir = path.join(publicRDir, "themes");

// Ensure directories exist
[stylesDir, componentsDir, blocksDir, themesDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Update all registry dependencies to use the correct base URL
function updateRegistryDependencies(items) {
  items.forEach((item) => {
    if (item.registryDependencies) {
      item.registryDependencies = item.registryDependencies.map((dep) => {
        if (typeof dep === "string" && dep.startsWith("http")) {
          // Extract the component name from the URL
          const urlParts = dep.split("/");
          const componentName = urlParts[urlParts.length - 1];

          // Determine the correct subdirectory based on component type
          let subDir = "styles"; // default for UI components
          if (
            componentName.includes("brand-") ||
            componentName.includes("logo") ||
            componentName.includes("hero") ||
            componentName.includes("promo") ||
            componentName.includes("product-") ||
            componentName.includes("login") ||
            componentName.includes("panel")
          ) {
            subDir = "components";
          } else if (
            componentName.includes("blank") ||
            componentName.includes("dashboard") ||
            componentName.includes("store")
          ) {
            subDir = "blocks";
          } else if (componentName.includes("theme")) {
            subDir = "themes";
          }

          return `${fullBaseUrl}/r/${subDir}/${componentName}`;
        } else if (typeof dep === "string" && !dep.startsWith("http")) {
          // Handle simple names like "logo", "icons", etc.
          let subDir = "styles"; // default for UI components
          let fileName = dep;

          if (
            dep === "logo" ||
            dep.includes("brand-") ||
            dep.includes("hero") ||
            dep.includes("promo") ||
            dep.includes("product-") ||
            dep.includes("login") ||
            dep.includes("panel")
          ) {
            subDir = "components";
          } else if (
            dep.includes("blank") ||
            dep.includes("dashboard") ||
            dep.includes("store")
          ) {
            subDir = "blocks";
          } else if (dep.includes("theme")) {
            subDir = "themes";
          }

          // Add .json extension if not present
          if (!fileName.endsWith(".json")) {
            fileName = `${fileName}.json`;
          }

          return `${fullBaseUrl}/r/${subDir}/${fileName}`;
        }
        return dep;
      });
    }
  });
}

// Update the registry
updateRegistryDependencies(registry.items);

// Write the updated registry to public/r/
const publicRegistryPath = path.join(
  process.cwd(),
  "public",
  "r",
  "registry.json",
);
fs.writeFileSync(publicRegistryPath, JSON.stringify(registry, null, 2));

// Generate individual component files from the main registry
registry.items.forEach((item) => {
  const component = { ...item };

  // Determine the correct subdirectory based on component type
  let targetDir = stylesDir; // default for UI components
  let subDir = "styles";

  if (
    component.type === "registry:component" ||
    component.name.includes("brand-") ||
    component.name.includes("logo") ||
    component.name.includes("hero") ||
    component.name.includes("promo") ||
    component.name.includes("product-") ||
    component.name.includes("login")
  ) {
    targetDir = componentsDir;
    subDir = "components";
  } else if (
    component.type === "registry:block" ||
    component.name.includes("blank") ||
    component.name.includes("dashboard") ||
    component.name.includes("store") ||
    component.name.includes("starter-template")
  ) {
    targetDir = blocksDir;
    subDir = "blocks";
  } else if (
    component.type === "registry:theme" ||
    component.name.includes("theme")
  ) {
    targetDir = themesDir;
    subDir = "themes";
  }

  // Update dependencies to use the correct paths
  if (component.registryDependencies) {
    component.registryDependencies = component.registryDependencies.map(
      (dep) => {
        if (typeof dep === "string" && dep.startsWith("http")) {
          const urlParts = dep.split("/");
          const componentName = urlParts[urlParts.length - 1];

          // Determine the correct subdirectory for dependencies
          let depSubDir = "styles";
          if (
            componentName.includes("brand-") ||
            componentName.includes("logo") ||
            componentName.includes("hero") ||
            componentName.includes("promo") ||
            componentName.includes("product-") ||
            componentName.includes("login") ||
            componentName.includes("panel")
          ) {
            depSubDir = "components";
          } else if (
            componentName.includes("blank") ||
            componentName.includes("dashboard") ||
            componentName.includes("store")
          ) {
            depSubDir = "blocks";
          } else if (componentName.includes("theme")) {
            depSubDir = "themes";
          }

          return `${fullBaseUrl}/r/${depSubDir}/${componentName}`;
        } else if (typeof dep === "string" && !dep.startsWith("http")) {
          // Handle simple names like "logo", "icons", etc.
          let depSubDir = "styles";
          let fileName = dep;

          if (
            dep === "logo" ||
            dep.includes("brand-") ||
            dep.includes("hero") ||
            dep.includes("promo") ||
            dep.includes("product-") ||
            dep.includes("login") ||
            dep.includes("panel")
          ) {
            depSubDir = "components";
          } else if (
            dep.includes("blank") ||
            dep.includes("dashboard") ||
            dep.includes("store")
          ) {
            depSubDir = "blocks";
          } else if (dep.includes("theme")) {
            depSubDir = "themes";
          }

          // Add .json extension if not present
          if (!fileName.endsWith(".json")) {
            fileName = `${fileName}.json`;
          }

          return `${fullBaseUrl}/r/${depSubDir}/${fileName}`;
        }
        return dep;
      },
    );
  }

  // Add file content for component, page, and file types
  if (component.files) {
    component.files.forEach((file) => {
      if (
        (file.type === "registry:component" ||
          file.type === "registry:page" ||
          file.type === "registry:file") &&
        file.path
      ) {
        const sourcePath = path.join(process.cwd(), file.path);
        if (fs.existsSync(sourcePath)) {
          file.content = fs.readFileSync(sourcePath, "utf8");
        }
      }
    });
  }

  // Write the updated component to the correct subdirectory
  const fileName = `${component.name}.json`;
  const targetFilePath = path.join(targetDir, fileName);
  fs.writeFileSync(targetFilePath, JSON.stringify(component, null, 2));
});

console.log("Registry built successfully with proper shadcn structure");
console.log(`Updated registry saved to: ${publicRegistryPath}`);
console.log(
  `Components organized into: styles/, components/, blocks/, themes/`,
);
console.log(`Updated ${registry.items.length} component files`);
