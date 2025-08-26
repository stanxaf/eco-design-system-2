"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Terminal, Info, CheckCircle, AlertTriangle } from "lucide-react";

export function AlertDocs() {
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
              <CardTitle>Alert Variants</CardTitle>
              <CardDescription>Different alert styles for different message types</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Default Alert</h4>
                <Alert>
                  <Terminal className="size-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">General information and announcements</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Destructive Alert</h4>
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Critical errors and dangerous situations</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Info Alert</h4>
                <Alert variant="info">
                  <Info className="size-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational message with important details.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Important information and updates</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Success Alert</h4>
                <Alert variant="success">
                  <CheckCircle className="size-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Successful operations and confirmations</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Warning Alert</h4>
                <Alert variant="warning">
                  <AlertTriangle className="size-4" />
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your input before proceeding.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Warnings and cautionary messages</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Alert with Close Button</h4>
                <Alert showCloseButton onClose={() => console.log("Alert closed")}>
                  <Terminal className="size-4" />
                  <AlertTitle>Dismissible Alert</AlertTitle>
                  <AlertDescription>
                    This alert can be closed by clicking the X button in the top right corner.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Dismissible alerts with close functionality</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Long Text with Close Button</h4>
                <Alert variant="info" showCloseButton onClose={() => console.log("Info alert closed")}>
                  <Info className="size-4" />
                  <AlertTitle>Important Information with Very Long Title That Should Not Overlap</AlertTitle>
                  <AlertDescription>
                    This is a very long informational message that demonstrates how the close button
                    is positioned in the top right corner without overlapping with the text content,
                    even when the title and description are quite lengthy.
                  </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">Close button positioning with long content</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Alert Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Alert</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Alert>
  <Terminal className="size-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Alert Variants</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Alert variant="default">Default Alert</Alert>
<Alert variant="destructive">Error Alert</Alert>
<Alert variant="info">Info Alert</Alert>
<Alert variant="success">Success Alert</Alert>
<Alert variant="warning">Warning Alert</Alert>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Alert with Icon</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Alert variant="info">
  <Info className="size-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Alert Components</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Alert: Main container
// AlertTitle: Bold title text
// AlertDescription: Descriptive text below title`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Styling</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Alert className="border-2 border-dashed">
  <AlertTitle>Custom Style</AlertTitle>
  <AlertDescription>
    Alert with custom border styling.
  </AlertDescription>
</Alert>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Alert with Close Button</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Alert showCloseButton onClose={() => handleClose()}>
  <Info className="size-4" />
  <AlertTitle>Dismissible Alert</AlertTitle>
  <AlertDescription>
    This alert can be closed by the user.
  </AlertDescription>
</Alert>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Close Button Props</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`interface AlertProps {
  showCloseButton?: boolean;  // Show/hide close button
  onClose?: () => void;       // Function called when close button is clicked
  // ... other props
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Alert Guidelines</CardTitle>
              <CardDescription>Best practices for using alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Important system messages and notifications</li>
                  <li>Error states and validation feedback</li>
                  <li>Success confirmations and completion notices</li>
                  <li>Warning messages and cautionary information</li>
                  <li>Informational updates and announcements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Variant Usage</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> General information, announcements</li>
                  <li><strong>Destructive:</strong> Critical errors, dangerous actions, session issues</li>
                  <li><strong>Info:</strong> Important updates, system information, helpful tips</li>
                  <li><strong>Success:</strong> Successful operations, confirmations, completion notices</li>
                  <li><strong>Warning:</strong> Cautionary messages, validation warnings, potential issues</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use semantic role="alert" for important messages</li>
                  <li>Provide clear, concise titles and descriptions</li>
                  <li>Ensure sufficient color contrast for all variants</li>
                  <li>Use appropriate icons to reinforce message types</li>
                  <li>Consider screen reader announcements for critical alerts</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keep alert messages concise and actionable</li>
                  <li>Use consistent iconography across similar message types</li>
                  <li>Position alerts prominently but don't overwhelm the interface</li>
                  <li>Provide clear next steps or actions when appropriate</li>
                  <li>Use alerts sparingly - not every message needs to be an alert</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Title:</strong> Brief, action-oriented summary (5-10 words)</li>
                  <li><strong>Description:</strong> Clear explanation with context and next steps</li>
                  <li><strong>Icons:</strong> Use consistent icons that match the message type</li>
                  <li><strong>Tone:</strong> Match the alert variant to the message urgency</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Layout Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Place alerts at the top of content areas for visibility</li>
                  <li>Use consistent spacing and alignment across all variants</li>
                  <li>Ensure alerts don't interfere with primary content flow</li>
                  <li>Consider dismissible alerts for non-critical messages</li>
                  <li>Group related alerts when multiple messages exist</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Close Button Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Use sparingly:</strong> Only for non-critical, dismissible messages</li>
                  <li><strong>Positioning:</strong> Always in top-right corner, never overlaps text</li>
                  <li><strong>Accessibility:</strong> Includes proper aria-label and screen reader support</li>
                  <li><strong>State management:</strong> Handle close events in your application logic</li>
                  <li><strong>Visual feedback:</strong> Hover and focus states for better UX</li>
                  <li><strong>Critical alerts:</strong> Never make error or destructive alerts dismissible</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
