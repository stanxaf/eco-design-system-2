"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ButtonDocs() {
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
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                <strong>Note:</strong> The "Secondary" and "Outline" variants
                are visually identical and use the same button-specific CSS
                variables. Choose based on semantic meaning.
              </div>
              <div>
                <h4 className="font-medium mb-3">Variants</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-50">Loading</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Icon-Only Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="icon" variant="default">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Button>
                  <Button size="icon" variant="secondary">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Button>
                  <Button size="icon" variant="destructive">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                  <Button size="icon" variant="outline">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                  <Button size="icon" variant="link">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Small Icon-Only Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="icon-sm" variant="default">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </Button>
                  <Button size="icon-sm" variant="secondary">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </Button>
                  <Button size="icon-sm" variant="destructive">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                  <Button size="icon-sm" variant="outline">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </Button>
                  <Button size="icon-sm" variant="ghost">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </Button>
                  <Button size="icon-sm" variant="link">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">With Icons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Item
                  </Button>
                  <Button variant="outline" size="sm">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Button Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Button</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button>Click me</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Button Variants</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Button Sizes</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Icon-Only Buttons</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button size="icon" variant="default">
  <Plus className="h-4 w-4" />
</Button>
<Button size="icon" variant="secondary">
  <Check className="h-4 w-4" />
</Button>
<Button size="icon" variant="destructive">
  <Trash className="h-4 w-4" />
</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Small Icon-Only Buttons</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button size="icon-sm" variant="default">
  <Plus className="h-3 w-3" />
</Button>
<Button size="icon-sm" variant="secondary">
  <Check className="h-3 w-3" />
</Button>
<Button size="icon-sm" variant="destructive">
  <Trash className="h-3 w-3" />
</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Button with Icon</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button>
  <Plus className="h-4 w-4" />
  Add Item
</Button>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Disabled State</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<Button disabled>Disabled Button</Button>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Button Guidelines</CardTitle>
              <CardDescription>
                Best practices for using buttons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Primary actions that move users forward in a flow</li>
                  <li>Form submissions and data processing</li>
                  <li>Navigation to important pages or sections</li>
                  <li>Triggering modals, dialogs, or overlays</li>
                  <li>File uploads or downloads</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide descriptive button text</li>
                  <li>Use aria-label for buttons with only icons</li>
                  <li>Ensure sufficient color contrast for all variants</li>
                  <li>Provide focus indicators for keyboard navigation</li>
                  <li>Use semantic button types (button, submit, reset)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use primary buttons sparingly (1-2 per page)</li>
                  <li>
                    Make button text action-oriented ("Save" not "Submit")
                  </li>
                  <li>
                    Ensure buttons are large enough for touch targets (44px
                    minimum)
                  </li>
                  <li>Use consistent button hierarchy across your interface</li>
                  <li>Provide loading states for async actions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Variant Usage</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Default:</strong> Primary actions, form submissions
                  </li>
                  <li>
                    <strong>Secondary:</strong> Alternative actions, less
                    important (has border)
                  </li>
                  <li>
                    <strong>Destructive:</strong> Dangerous actions (delete,
                    remove)
                  </li>
                  <li>
                    <strong>Outline:</strong> Identical to Secondary - use for
                    secondary actions with borders
                  </li>
                  <li>
                    <strong>Ghost:</strong> Subtle actions, navigation (no
                    border)
                  </li>
                  <li>
                    <strong>Link:</strong> Inline actions that look like links
                    (no border)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Size Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Small:</strong> Dense interfaces, inline actions
                  </li>
                  <li>
                    <strong>Default:</strong> Standard use cases, most buttons
                  </li>
                  <li>
                    <strong>Large:</strong> Prominent actions, hero sections
                  </li>
                  <li>
                    <strong>Icon:</strong> Icon-only buttons, toolbars, compact
                    spaces
                  </li>
                  <li>
                    <strong>Icon-Small:</strong> Very compact icon-only buttons,
                    dense toolbars
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Icon-Only Button Guidelines
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide an aria-label for accessibility</li>
                  <li>Use clear, recognizable icons that match the action</li>
                  <li>Ensure sufficient touch target size (44px minimum)</li>
                  <li>Consider tooltips for additional context</li>
                  <li>Use sparingly - prefer text labels when space allows</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
