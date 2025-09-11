"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, Settings, Menu, PanelLeft, Inbox, PanelRight } from "lucide-react";

export function HeaderDocs() {
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
              <CardTitle>Header Variants</CardTitle>
              <CardDescription>Different header configurations and layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic with Breadcrumbs</h4>
                <Header
                  breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Weather Dashboard", href: "/dashboard" }
                  ]}
                  rightContent={<Button variant="secondary">Secondary</Button>}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Panel Controls</h4>
                <Header
                  leftContent={
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon">
                        <Inbox className="w-4 h-4" />
                      </Button>
                      <Breadcrumb>
                        <BreadcrumbList>
                          <BreadcrumbItem>
                            <BreadcrumbPage>Home</BreadcrumbPage>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>Weather Dashboard</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                      </Breadcrumb>
                    </div>
                  }
                  rightContent={
                    <Button variant="ghost" size="icon">
                      <PanelRight className="w-4 h-4" />
                    </Button>
                  }
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Custom Left Content</h4>
                <Header
                  leftContent={
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="icon">
                        <Inbox className="w-4 h-4" />
                      </Button>
                      <span className="font-medium">Custom Title</span>
                    </div>
                  }
                  rightContent={
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  }
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Minimal Header</h4>
                <Header
                  leftContent={<span className="font-medium">Simple Header</span>}
                  rightContent={<Button variant="ghost" size="sm">Action</Button>}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Multiple Actions</h4>
                <Header
                  breadcrumbs={[
                    { label: "Projects" },
                    { label: "Weather App" },
                    { label: "Dashboard" }
                  ]}
                  rightContent={
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                      <div className="w-px h-4 bg-border" />
                      <Button variant="outline" size="sm">Share</Button>
                      <Button variant="outline" size="sm">Export</Button>
                      <Button variant="secondary" size="sm">Save</Button>
                    </div>
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Header Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Header with Breadcrumbs</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Header
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Weather Dashboard", href: "/dashboard" }
  ]}
  rightContent={<Button variant="secondary">Secondary</Button>}
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Panel Controls Header</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Header
  leftContent={
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon">
        <Inbox className="w-4 h-4" />
      </Button>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Weather Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  }
  rightContent={
    <Button variant="ghost" size="icon">
      <PanelRight className="w-4 h-4" />
    </Button>
  }
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Left Content</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Header
  leftContent={
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon">
        <Inbox className="w-4 h-4" />
      </Button>
      <span className="font-medium">Custom Title</span>
    </div>
  }
  rightContent={
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon">
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ChevronRight className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Settings className="w-4 h-4" />
      </Button>
    </div>
  }
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Minimal Header</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Header
  leftContent={<span className="font-medium">Simple Header</span>}
  rightContent={<Button variant="ghost" size="sm">Action</Button>}
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Breadcrumb Navigation</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Header
  breadcrumbs={[
    { label: "Projects" },
    { label: "Weather App" },
    { label: "Dashboard" }
  ]}
  rightContent={
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="sm">
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <ChevronRight className="w-4 h-4" />
      </Button>
      <div className="w-px h-4 bg-border" />
      <Button variant="outline" size="sm">Share</Button>
      <Button variant="outline" size="sm">Export</Button>
      <Button variant="secondary" size="sm">Save</Button>
    </div>
  }
/>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Header Guidelines</CardTitle>
              <CardDescription>Best practices for using header components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Panel headers for consistent navigation and controls</li>
                  <li>Page headers with breadcrumb navigation</li>
                  <li>Dashboard headers with action buttons</li>
                  <li>Modal or dialog headers with controls</li>
                  <li>Section headers with contextual actions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use consistent spacing with <code className="bg-background px-1 py-0.5 rounded text-xs">px-3 py-2</code></li>
                  <li>Maintain visual hierarchy with proper typography</li>
                  <li>Use subtle borders and shadows for separation</li>
                  <li>Keep right-aligned actions organized and scannable</li>
                  <li>Ensure sufficient contrast for accessibility</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use semantic <code className="bg-background px-1 py-0.5 rounded text-xs">&lt;header&gt;</code> element</li>
                  <li>Provide proper ARIA labels for navigation</li>
                  <li>Ensure keyboard navigation for all interactive elements</li>
                  <li>Use descriptive button text and icons</li>
                  <li>Maintain focus indicators for all controls</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keep breadcrumbs concise and meaningful</li>
                  <li>Group related actions together with visual separators</li>
                  <li>Use consistent button variants for similar actions</li>
                  <li>Provide loading states for async actions</li>
                  <li>Consider responsive behavior for mobile devices</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Breadcrumbs:</strong> Show clear navigation path, last item is current page</li>
                  <li><strong>Left Content:</strong> Use for titles, logos, or custom navigation</li>
                  <li><strong>Right Content:</strong> Group actions by importance and frequency</li>
                  <li><strong>Icons:</strong> Use consistent icon sizing and spacing</li>
                  <li><strong>Buttons:</strong> Follow established button hierarchy patterns</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Responsive Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Hide less important actions on smaller screens</li>
                  <li>Use icon-only buttons for space-constrained layouts</li>
                  <li>Consider collapsible breadcrumbs for long paths</li>
                  <li>Ensure touch targets meet minimum size requirements</li>
                  <li>Test with different content lengths and screen sizes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
