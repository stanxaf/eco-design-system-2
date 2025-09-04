"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { CodeBlock } from "@/components/ui/code-block";
export function AvatarDocs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="variants" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Size Variants</CardTitle>
              <CardDescription>Three size options for different use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Small Size (32px) */}
              <div className="flex items-center space-x-4">
                <Avatar size="sm">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Small (32px)</p>
                  <p className="text-sm text-muted-foreground">Compact layouts, user lists, tight spaces</p>
                </div>
              </div>

              {/* Medium Size (40px) - Default */}
              <div className="flex items-center space-x-4">
                <Avatar size="md">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Medium (40px) - Default</p>
                  <p className="text-sm text-muted-foreground">Standard use cases, most applications</p>
                </div>
              </div>

              {/* Large Size (48px) */}
              <div className="flex items-center space-x-4">
                <Avatar size="lg">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Large (48px)</p>
                  <p className="text-sm text-muted-foreground">Prominent display, headers, featured content</p>
                </div>
              </div>

              {/* All Sizes Comparison */}
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Size Comparison</h4>
                <div className="flex items-center gap-4">
                  <Avatar size="sm">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar size="md">
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <div className="text-sm text-muted-foreground">
                    <p>32px • 40px • 48px</p>
                  </div>
                </div>
              </div>

              {/* Fallback Only Example */}
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-3">Fallback Only</h4>
                <div className="flex items-center space-x-4">
                  <Avatar size="md">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Initials Fallback</p>
                    <p className="text-sm text-muted-foreground">Shows initials when no image is available</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Code</CardTitle>
              <CardDescription>Implementation examples with size variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Avatar (Default Medium)</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Small Size (32px)</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar size="sm">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Medium Size (40px)</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar size="md">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Large Size (48px)</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar size="lg">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Fallback Only</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar size="md">
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Size Comparison</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<div className="flex items-center gap-4">
  <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
  <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
  <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
</div>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Guidelines</CardTitle>
              <CardDescription>Best practices for using avatars with size variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Size Variants</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Small (32px):</strong> Use in compact layouts, user lists, navigation bars, and tight spaces</li>
                  <li><strong>Medium (40px):</strong> Default size for most use cases, user profiles, and general interfaces</li>
                  <li><strong>Large (48px):</strong> Use for prominent display, headers, featured content, and user settings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>User profile pictures in navigation or user lists</li>
                  <li>Team member displays in collaborative interfaces</li>
                  <li>User identification in comments or chat systems</li>
                  <li>Profile sections and user settings</li>
                  <li>Dashboard widgets and user cards</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide meaningful alt text for images</li>
                  <li>Use descriptive fallback text (initials or name)</li>
                  <li>Ensure sufficient color contrast for fallback text</li>
                  <li>Consider using aria-label for additional context</li>
                  <li>Maintain consistent sizing for similar contexts</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use consistent sizing across similar contexts in your interface</li>
                  <li>Provide fallbacks for failed image loads</li>
                  <li>Keep fallback text concise (2-3 characters)</li>
                  <li>Use appropriate image formats (WebP, PNG, JPG)</li>
                  <li>Choose size based on context and visual hierarchy</li>
                  <li>Maintain proper spacing between avatars in lists</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Size Consistency</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use the same size for all avatars in a user list</li>
                  <li>Maintain consistent sizing in navigation elements</li>
                  <li>Scale appropriately for different screen sizes</li>
                  <li>Consider the surrounding content when choosing size</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
