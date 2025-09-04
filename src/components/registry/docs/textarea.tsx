"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { CodeBlock } from "@/components/ui/code-block";
export function TextareaDocs() {
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
              <CardTitle>Textarea Variants</CardTitle>
              <CardDescription>Different textarea states and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Default States</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-textarea">Default</Label>
                    <Textarea id="default-textarea" placeholder="Enter your text here..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="filled-textarea">With Content</Label>
                    <Textarea
                      id="filled-textarea"
                      defaultValue="This textarea contains some sample content to demonstrate how it looks when filled with text."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled-textarea">Disabled</Label>
                    <Textarea
                      id="disabled-textarea"
                      disabled
                      placeholder="This textarea is disabled"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="invalid-textarea">Invalid State</Label>
                    <Textarea
                      id="invalid-textarea"
                      aria-invalid="true"
                      placeholder="This textarea shows an invalid state"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Sizes and Layouts</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="small-textarea">Small Height</Label>
                    <Textarea
                      id="small-textarea"
                      className="min-h-12"
                      placeholder="Smaller textarea"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="large-textarea">Large Height</Label>
                    <Textarea
                      id="large-textarea"
                      className="min-h-32"
                      placeholder="Larger textarea for more content"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Integration</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio-textarea">Bio/Description</Label>
                    <Textarea
                      id="bio-textarea"
                      placeholder="Tell us about yourself..."
                      className="min-h-24"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes-textarea">Notes</Label>
                    <Textarea
                      id="notes-textarea"
                      placeholder="Add your notes here..."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Textarea Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Textarea</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Textarea placeholder="Enter your text here..." />`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Textarea with Label</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Label htmlFor="bio">Bio</Label>
<Textarea
  id="bio"
  placeholder="Tell us about yourself..."
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Controlled Textarea</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [value, setValue] = useState("");

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled textarea"
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Textarea with Validation</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Textarea
  aria-invalid={hasError}
  placeholder="Enter required information"
  className={hasError ? "border-destructive" : ""}
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Component Implementation</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Textarea Guidelines</CardTitle>
              <CardDescription>Best practices and design considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Design Specifications</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Border Radius:</strong> 6px rounded corners (rounded-md)</li>
                  <li><strong>Border:</strong> 1px border-input color</li>
                  <li><strong>Padding:</strong> 12px horizontal, 8px vertical (px-3 py-2)</li>
                  <li><strong>Min Height:</strong> 64px (min-h-16)</li>
                  <li><strong>Focus Ring:</strong> 3px ring with 50% opacity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Usage Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use for multi-line text input (comments, descriptions, notes)</li>
                  <li>Always pair with descriptive labels for accessibility</li>
                  <li>Provide helpful placeholder text to guide users</li>
                  <li>Consider minimum height based on expected content length</li>
                  <li>Use appropriate sizing for the context (small for short notes, large for long content)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Includes proper ARIA attributes (aria-invalid for validation)</li>
                  <li>Keyboard navigation support</li>
                  <li>Screen reader compatible with proper labeling</li>
                  <li>High contrast focus indicators</li>
                  <li>Proper association with Label components</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">States</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> Border with transparent background</li>
                  <li><strong>Focus:</strong> Ring indicator for keyboard navigation</li>
                  <li><strong>Disabled:</strong> Reduced opacity and not-allowed cursor</li>
                  <li><strong>Invalid:</strong> Destructive color for form validation</li>
                  <li><strong>Hover:</strong> Smooth transitions for interactive states</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">v0 Integration</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Ready for v0.dev integration with proper registry structure</li>
                  <li>Uses design system tokens for consistent theming</li>
                  <li>Includes data-slot attributes for proper component identification</li>
                  <li>Compatible with v0's component system</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
