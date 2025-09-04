"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { CodeBlock } from "@/components/ui/code-block";
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
                  <p className="text-sm text-muted-foreground">General information with slate colors</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="info">Info</Badge>
                <div>
                  <p className="text-sm font-medium">Info</p>
                  <p className="text-sm text-muted-foreground">Information and updates</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="success">Success</Badge>
                <div>
                  <p className="text-sm font-medium">Success</p>
                  <p className="text-sm text-muted-foreground">Successful operations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="warning">Warning</Badge>
                <div>
                  <p className="text-sm font-medium">Warning</p>
                  <p className="text-sm text-muted-foreground">Warnings and caution</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Badge variant="destructive">Destructive</Badge>
                <div>
                  <p className="text-sm font-medium">Destructive</p>
                  <p className="text-sm text-muted-foreground">Errors and dangerous situations</p>
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
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge>Default</Badge>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Secondary Badge</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge variant="info">Info</Badge>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">All Variants</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge variant="default">Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Styling</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge className="bg-blue-500 hover:bg-blue-600">
  Custom Color
</Badge>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Icons</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Badge variant="info">
  <Check className="mr-1 h-3 w-3" />
  Completed
</Badge>`}
                </CodeBlock>
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
                <h4 className="font-medium mb-2">Color System</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> Slate colors for general information and neutral states</li>
                  <li><strong>Info:</strong> Blue colors for informational content and updates</li>
                  <li><strong>Success:</strong> Green colors for successful operations and confirmations</li>
                  <li><strong>Warning:</strong> Orange colors for warnings and cautionary messages</li>
                  <li><strong>Destructive:</strong> Red colors for errors and dangerous situations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
