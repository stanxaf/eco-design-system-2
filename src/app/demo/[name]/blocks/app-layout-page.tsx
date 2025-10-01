"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppLayoutPage() {
  return (
    <AppLayout defaultSidebarOpen={true}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome to App Layout</h1>
          <p className="text-muted-foreground">
            This is a complete application layout with sidebar, header, and main content area.
            Perfect for v0.dev since it includes all necessary context providers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What's included in this layout</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ SidebarProvider context</li>
                <li>✅ Brand sidebar with navigation</li>
                <li>✅ Responsive header</li>
                <li>✅ Main content area</li>
                <li>✅ Toast notifications</li>
                <li>✅ Mobile responsive</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>v0.dev Ready</CardTitle>
              <CardDescription>Perfect for v0.dev integration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This layout includes all necessary context providers, so it works
                out of the box in v0.dev without any additional setup.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
              <CardDescription>Make it your own</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                You can customize the default sidebar state and add your own
                content in the children area. All components are fully styled.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Try It Out</CardTitle>
            <CardDescription>Test the layout functionality</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              The sidebar can be collapsed/expanded, and the header appears on mobile devices.
              All context is properly provided, so no additional setup is needed.
            </p>
            <div className="flex gap-2">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
              <Button variant="ghost">Ghost Action</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>How to use this layout in your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-md">
              <code className="text-sm">
                {`import { AppLayout } from "@/components/app-layout";

export default function MyPage() {
  return (
    <AppLayout defaultSidebarOpen={true}>
      <div>Your content here</div>
    </AppLayout>
  );
}`}
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
