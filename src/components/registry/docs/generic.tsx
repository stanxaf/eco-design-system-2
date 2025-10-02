"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Component } from "@/lib/registry";

import { CodeBlock } from "@/components/ui/code-block";
interface GenericDocsProps {
  component: Component;
}

export function GenericDocs({ component }: GenericDocsProps) {
  return (
    <div className="mt-8">
      <Tabs defaultValue="code" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>{component.title} Code</CardTitle>
              <CardDescription>Component implementation files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {component.files && component.files.length > 0 ? (
                component.files.map((file, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-2">{file.path}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Type: {file.type} | Target: {file.target}
                    </p>
                    <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                      {`// ${file.path}
// Type: ${file.type}
// Target: ${file.target}

// File content would be displayed here
// This component doesn't have specific documentation yet`}
                    </CodeBlock>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">
                  No files available for this component.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>{component.title} Guidelines</CardTitle>
              <CardDescription>General usage guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">About This Component</h4>
                <p className="text-sm text-muted-foreground">
                  {component.description ||
                    "This component is part of the design system."}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">General Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    Follow the design system's spacing and typography guidelines
                  </li>
                  <li>Ensure sufficient color contrast for accessibility</li>
                  <li>Test with keyboard navigation and screen readers</li>
                  <li>Use consistent styling across similar contexts</li>
                  <li>
                    Consider responsive behavior on different screen sizes
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Getting Started</h4>
                <p className="text-sm text-muted-foreground">
                  Use the npx command above to add this component to your
                  project. Refer to the component's source code for
                  implementation details.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
