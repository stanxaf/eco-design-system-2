#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the base URL from environment variables or use localhost for development
const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ||
                process.env.NEXT_PUBLIC_SITE_URL ||
                process.env.VERCEL_URL ||
                'https://eco-design-system-2.vercel.app';

// Ensure the base URL has the correct protocol
const fullBaseUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;

console.log(`Building registry with base URL: ${fullBaseUrl}`);

// Read the original registry.json
const registryPath = path.join(process.cwd(), 'registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

// Ensure the registry has the required type field
if (!registry.type) {
  registry.type = 'registry';
}

// Update the homepage to match the deployed URL
registry.homepage = fullBaseUrl;

// Create the proper shadcn registry directory structure
const publicRDir = path.join(process.cwd(), 'public', 'r');
const stylesDir = path.join(publicRDir, 'styles');
const componentsDir = path.join(publicRDir, 'components');
const blocksDir = path.join(publicRDir, 'blocks');
const themesDir = path.join(publicRDir, 'themes');

// Ensure directories exist
[stylesDir, componentsDir, blocksDir, themesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Update all registry dependencies to use the correct base URL
function updateRegistryDependencies(items) {
  items.forEach(item => {
    if (item.registryDependencies) {
      item.registryDependencies = item.registryDependencies.map(dep => {
        if (typeof dep === 'string' && dep.startsWith('http')) {
          // Extract the component name from the URL
          const urlParts = dep.split('/');
          const componentName = urlParts[urlParts.length - 1];

          // Determine the correct subdirectory based on component type
          let subDir = 'styles'; // default for UI components
          if (componentName.includes('brand-') || componentName.includes('logo') || componentName.includes('hero') || componentName.includes('promo') || componentName.includes('product-') || componentName.includes('login')) {
            subDir = 'components';
          } else if (componentName.includes('blank') || componentName.includes('dashboard') || componentName.includes('store')) {
            subDir = 'blocks';
          } else if (componentName.includes('theme')) {
            subDir = 'themes';
          }

          return `${fullBaseUrl}/r/${subDir}/${componentName}`;
        }
        return dep;
      });
    }
  });
}

// Update the registry
updateRegistryDependencies(registry.items);

// Write the updated registry to public/r/
const publicRegistryPath = path.join(process.cwd(), 'public', 'r', 'registry.json');
fs.writeFileSync(publicRegistryPath, JSON.stringify(registry, null, 2));

// Also update individual component files and organize them into proper directories
const componentFiles = fs.readdirSync(publicRDir).filter(file => file.endsWith('.json') && file !== 'registry.json');

componentFiles.forEach(file => {
  const filePath = path.join(publicRDir, file);
  const component = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Determine the correct subdirectory based on component type
  let targetDir = stylesDir; // default for UI components
  let subDir = 'styles';

  if (component.type === 'registry:component' ||
      component.name.includes('brand-') ||
      component.name.includes('logo') ||
      component.name.includes('hero') ||
      component.name.includes('promo') ||
      component.name.includes('product-') ||
      component.name.includes('login')) {
    targetDir = componentsDir;
    subDir = 'components';
  } else if (component.type === 'registry:block' ||
             component.name.includes('blank') ||
             component.name.includes('dashboard') ||
             component.name.includes('store')) {
    targetDir = blocksDir;
    subDir = 'blocks';
  } else if (component.type === 'registry:theme' ||
             component.name.includes('theme')) {
    targetDir = themesDir;
    subDir = 'themes';
  }

  // Update dependencies to use the correct paths
  if (component.registryDependencies) {
    component.registryDependencies = component.registryDependencies.map(dep => {
      if (typeof dep === 'string' && dep.startsWith('http')) {
        const urlParts = dep.split('/');
        const componentName = urlParts[urlParts.length - 1];

        // Determine the correct subdirectory for dependencies
        let depSubDir = 'styles';
        if (componentName.includes('brand-') || componentName.includes('logo') || componentName.includes('hero') || componentName.includes('promo') || componentName.includes('product-') || componentName.includes('login')) {
          depSubDir = 'components';
        } else if (componentName.includes('blank') || componentName.includes('dashboard') || componentName.includes('store')) {
          depSubDir = 'blocks';
        } else if (componentName.includes('theme')) {
          depSubDir = 'themes';
        }

        return `${fullBaseUrl}/r/${depSubDir}/${componentName}`;
      }
      return dep;
    });
  }

  // Write the updated component to the correct subdirectory
  const targetFilePath = path.join(targetDir, file);
  fs.writeFileSync(targetFilePath, JSON.stringify(component, null, 2));

  // Remove the original file from the root r/ directory
  fs.unlinkSync(filePath);
});

console.log('Registry built successfully with proper shadcn structure');
console.log(`Updated registry saved to: ${publicRegistryPath}`);
console.log(`Components organized into: styles/, components/, blocks/, themes/`);
console.log(`Updated ${componentFiles.length} component files`);
