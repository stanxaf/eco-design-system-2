"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BadgeDocs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="variants">
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Different badge styles and use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Badge variant="default">Default</Badge>
                <div>
                  <p className="text-sm font-medium">Default</p>
                  <p className="text-sm text-muted-foreground">Primary badge style</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="secondary">Secondary</Badge>
                <div>
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-sm text-muted-foreground">Subtle secondary style</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="destructive">Destructive</Badge>
                <div>
                  <p className="text-sm font-medium">Destructive</p>
                  <p className="text-sm text-muted-foreground">For errors or warnings</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="outline">Outline</Badge>
                <div>
                  <p className="text-sm font-medium">Outline</p>
                  <p className="text-sm text-muted-foreground">Bordered badge style</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge className="bg-blue-500 hover:bg-blue-600">Custom</Badge>
                <div>
                  <p className="text-sm font-medium">Custom Colors</p>
                  <p className="text-sm text-muted-foreground">Using custom Tailwind classes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Badge Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Badge</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge>Default</Badge>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Badge Variants</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Styling</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge className="bg-blue-500 hover:bg-blue-600">
  Custom Color
</Badge>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Icons</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge variant="outline">
  <Check className="mr-1 h-3 w-3" />
  Completed
</Badge>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Badge Guidelines</CardTitle>
              <CardDescription>Best practices for using badges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Status indicators (online, offline, pending)</li>
                  <li>Category labels (featured, new, beta)</li>
                  <li>Count indicators (notifications, items)</li>
                  <li>Priority levels (high, medium, low)</li>
                  <li>Tags for categorization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Ensure sufficient color contrast for all variants</li>
                  <li>Use semantic colors (red for errors, green for success)</li>
                  <li>Provide context through surrounding text or labels</li>
                  <li>Consider screen reader users when using color-only indicators</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keep badge text concise (1-3 words)</li>
                  <li>Use consistent styling across similar contexts</li>
                  <li>Limit the number of badges to avoid visual clutter</li>
                  <li>Choose appropriate variants for the context</li>
                  <li>Consider using icons to enhance meaning</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Variant Usage</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> General purpose, primary actions</li>
                  <li><strong>Secondary:</strong> Less prominent information</li>
                  <li><strong>Destructive:</strong> Errors, warnings, or dangerous actions</li>
                  <li><strong>Outline:</strong> Subtle emphasis without background</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
