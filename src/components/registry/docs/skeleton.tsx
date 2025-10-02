"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CodeBlock } from "@/components/ui/code-block";
export function SkeletonDocs() {
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
              <CardTitle>Skeleton Variants</CardTitle>
              <CardDescription>
                Different skeleton shapes and sizes for loading states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic Shapes</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <p className="text-xs text-muted-foreground">Text line</p>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <p className="text-xs text-muted-foreground">Avatar</p>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-20 w-32 rounded-lg" />
                    <p className="text-xs text-muted-foreground">Card</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                  <strong>Note:</strong> The skeleton component uses{" "}
                  <code className="bg-background px-1 py-0.5 rounded text-xs">
                    bg-muted
                  </code>{" "}
                  for a subtle, muted appearance that doesn't compete with
                  actual content.
                </h4>
              </div>

              <div>
                <h4 className="font-medium mb-3">Content Layouts</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    User profile layout
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Card with content
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Elements</h4>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Skeleton className="h-10 w-[300px]" />
                    <Skeleton className="h-10 w-[200px]" />
                    <Skeleton className="h-10 w-[150px]" />
                  </div>
                  <p className="text-xs text-muted-foreground">Form inputs</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Table Rows</h4>
                <div className="space-y-2">
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                  <div className="flex space-x-4">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Table data rows
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Skeleton</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Skeleton className="h-4 w-[200px]" />`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Avatar Skeleton</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Skeleton className="h-12 w-12 rounded-full" />`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Card Skeleton</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Skeleton className="h-[125px] w-[250px] rounded-xl" />`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Layout</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Form Layout</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<div className="space-y-3">
  <Skeleton className="h-10 w-[300px]" />
  <Skeleton className="h-10 w-[200px]" />
  <Skeleton className="h-10 w-[150px]" />
</div>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Table Rows</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<div className="space-y-2">
  <div className="flex space-x-4">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[80px]" />
  </div>
  {/* Repeat for more rows */}
</div>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Styling</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Skeleton
  className="h-20 w-full bg-gradient-to-r from-muted to-muted/50"
/>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Guidelines</CardTitle>
              <CardDescription>
                Best practices for using skeleton loading states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Initial page loads with dynamic content</li>
                  <li>
                    Data fetching operations (API calls, database queries)
                  </li>
                  <li>Image loading states</li>
                  <li>Form submission processing</li>
                  <li>Navigation between routes</li>
                  <li>Search results loading</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    Use{" "}
                    <code className="bg-background px-1 py-0.5 rounded text-xs">
                      bg-muted
                    </code>{" "}
                    for subtle, non-intrusive appearance
                  </li>
                  <li>Match skeleton dimensions to actual content size</li>
                  <li>
                    Maintain consistent spacing and layout with real content
                  </li>
                  <li>Use rounded corners that match your design system</li>
                  <li>Keep animations subtle and not distracting</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Provide loading announcements for screen readers</li>
                  <li>
                    Use{" "}
                    <code className="bg-background px-1 py-0.5 rounded text-xs">
                      aria-busy="true"
                    </code>{" "}
                    on loading containers
                  </li>
                  <li>
                    Ensure skeleton content doesn't interfere with navigation
                  </li>
                  <li>
                    Provide fallback content for users who disable animations
                  </li>
                  <li>Use semantic HTML structure even in loading states</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Show skeletons immediately when loading starts</li>
                  <li>Keep skeleton layouts consistent with actual content</li>
                  <li>
                    Use appropriate skeleton shapes for different content types
                  </li>
                  <li>
                    Provide loading progress indicators for long operations
                  </li>
                  <li>Handle error states gracefully with fallback content</li>
                  <li>Test skeleton behavior across different screen sizes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Type Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Text:</strong> Use rectangular shapes with
                    appropriate heights
                  </li>
                  <li>
                    <strong>Images:</strong> Match aspect ratios and use rounded
                    corners
                  </li>
                  <li>
                    <strong>Avatars:</strong> Use circular shapes with
                    consistent sizing
                  </li>
                  <li>
                    <strong>Cards:</strong> Maintain padding and border radius
                  </li>
                  <li>
                    <strong>Forms:</strong> Preserve input heights and spacing
                  </li>
                  <li>
                    <strong>Tables:</strong> Keep column widths consistent
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Performance Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    Keep skeleton animations lightweight (CSS-only when
                    possible)
                  </li>
                  <li>
                    Use{" "}
                    <code className="bg-background px-1 py-0.5 rounded text-xs">
                      animate-pulse
                    </code>{" "}
                    for subtle movement
                  </li>
                  <li>
                    Avoid complex animations that might cause layout shifts
                  </li>
                  <li>
                    Consider reducing motion for users with vestibular disorders
                  </li>
                  <li>Test skeleton performance on lower-end devices</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
