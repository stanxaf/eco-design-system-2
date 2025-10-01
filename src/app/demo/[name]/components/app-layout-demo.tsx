"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppLayoutDemo() {
  return (
    <AppLayout defaultSidebarOpen={true}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome to App Layout</h1>
          <p className="text-muted-foreground">
            This is a complete application layout with sidebar, header, and main content area.
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
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>How to use this component</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Simply wrap your content with the AppLayout component.
                Perfect for v0.dev since it includes all necessary context.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customization</CardTitle>
              <CardDescription>Make it your own</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                You can customize the default sidebar state and add your own
                content in the children area.
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
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
