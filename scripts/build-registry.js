#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the base URL from environment variables or use localhost for development
const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ||
                process.env.NEXT_PUBLIC_SITE_URL ||
                process.env.VERCEL_URL ||
                'localhost:3000';

// Ensure the base URL has the correct protocol
const fullBaseUrl = baseUrl.startsWith('http') ? baseUrl : `http://${baseUrl}`;

console.log(`Building registry with base URL: ${fullBaseUrl}`);

// Read the original registry.json
const registryPath = path.join(process.cwd(), 'registry.json');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

// Update all registry dependencies to use the correct base URL
function updateRegistryDependencies(items) {
  items.forEach(item => {
    if (item.registryDependencies) {
      item.registryDependencies = item.registryDependencies.map(dep => {
        if (typeof dep === 'string' && dep.startsWith('http')) {
          // Extract the component name from the URL
          const urlParts = dep.split('/');
          const componentName = urlParts[urlParts.length - 1];
          return `${fullBaseUrl}/r/${componentName}`;
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

// Also update individual component files
const publicRDir = path.join(process.cwd(), 'public', 'r');
const componentFiles = fs.readdirSync(publicRDir).filter(file => file.endsWith('.json') && file !== 'registry.json');

componentFiles.forEach(file => {
  const filePath = path.join(publicRDir, file);
  const component = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (component.registryDependencies) {
    component.registryDependencies = component.registryDependencies.map(dep => {
      if (typeof dep === 'string' && dep.startsWith('http')) {
        const urlParts = dep.split('/');
        const componentName = urlParts[urlParts.length - 1];
        return `${fullBaseUrl}/r/${componentName}`;
      }
      return dep;
    });

    fs.writeFileSync(filePath, JSON.stringify(component, null, 2));
  }
});

console.log('Registry built successfully with updated URLs');
console.log(`Updated registry saved to: ${publicRegistryPath}`);
console.log(`Updated ${componentFiles.length} component files`);
