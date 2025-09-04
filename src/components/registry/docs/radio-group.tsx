"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { CodeBlock } from "@/components/ui/code-block";
export function RadioGroupDocs() {
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
              <CardTitle>Radio Group Variants</CardTitle>
              <CardDescription>Different radio group layouts and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic Radio Group</h4>
                <div className="space-y-2">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label htmlFor="option-three">Option Three</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">Standard vertical layout with labels</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Horizontal Layout</h4>
                <div className="space-y-2">
                  <RadioGroup defaultValue="small" className="flex flex-row space-x-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="small" id="size-small" />
                      <Label htmlFor="size-small">Small</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="size-medium" />
                      <Label htmlFor="size-medium">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="size-large" />
                      <Label htmlFor="size-large">Large</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">Horizontal arrangement for compact layouts</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">With Descriptions</h4>
                <div className="space-y-2">
                  <RadioGroup defaultValue="light">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="light" id="theme-light" className="mt-1" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="theme-light">Light Theme</Label>
                        <p className="text-sm text-muted-foreground">Clean, bright interface with high contrast</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="dark" id="theme-dark" className="mt-1" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="theme-dark">Dark Theme</Label>
                        <p className="text-sm text-muted-foreground">Easy on the eyes, perfect for low-light environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="auto" id="theme-auto" className="mt-1" />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="theme-auto">Auto</Label>
                        <p className="text-sm text-muted-foreground">Follows your system preference automatically</p>
                      </div>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">Radio items with descriptive text below labels</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Disabled States</h4>
                <div className="space-y-2">
                  <RadioGroup defaultValue="enabled" disabled>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="enabled" id="enabled-option" />
                      <Label htmlFor="enabled-option" className="text-muted-foreground">Enabled Option</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="disabled" id="disabled-option" />
                      <Label htmlFor="disabled-option" className="text-muted-foreground">Disabled Option</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">Disabled radio group with muted appearance</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Invalid State</h4>
                <div className="space-y-2">
                  <RadioGroup defaultValue="valid">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="valid" id="valid-option" />
                      <Label htmlFor="valid-option">Valid Option</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="invalid" id="invalid-option" aria-invalid="true" />
                      <Label htmlFor="invalid-option">Invalid Option</Label>
                    </div>
                  </RadioGroup>
                  <p className="text-xs text-muted-foreground">Radio item with invalid state styling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Radio Group Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Radio Group</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Horizontal Layout</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<RadioGroup defaultValue="small" className="flex flex-row space-x-6">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="size-small" />
    <Label htmlFor="size-small">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="size-medium" />
    <Label htmlFor="size-medium">Medium</Label>
  </div>
</RadioGroup>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Descriptions</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<RadioGroup defaultValue="light">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="light" id="theme-light" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="theme-light">Light Theme</Label>
      <p className="text-sm text-muted-foreground">
        Clean, bright interface with high contrast
      </p>
    </div>
  </div>
</RadioGroup>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Controlled Radio Group</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [value, setValue] = useState("option-one");

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Disabled and Invalid States</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`{/* Disabled Radio Group */}
<RadioGroup defaultValue="enabled" disabled>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="enabled" id="enabled-option" />
    <Label htmlFor="enabled-option">Enabled Option</Label>
  </div>
</RadioGroup>

{/* Invalid Radio Item */}
<RadioGroupItem value="invalid" id="invalid-option" aria-invalid="true" />`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Styling</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<RadioGroup defaultValue="custom" className="grid grid-cols-2 gap-4">
  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
    <RadioGroupItem value="custom" id="custom-option" />
    <Label htmlFor="custom-option">Custom Option</Label>
  </div>
</RadioGroup>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Radio Group Guidelines</CardTitle>
              <CardDescription>Best practices for using radio group components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Single selection from a list of mutually exclusive options</li>
                  <li>Form inputs requiring one choice from multiple options</li>
                  <li>Settings and configuration panels</li>
                  <li>Preference selection (themes, sizes, languages)</li>
                  <li>Survey questions with single answers</li>
                  <li>Navigation options where only one can be active</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use <code className="bg-background px-1 py-0.5 rounded text-xs">border-input</code> for subtle borders that don't compete with content</li>
                  <li>Maintain consistent spacing between radio items and labels</li>
                  <li>Ensure sufficient contrast for selected and unselected states</li>
                  <li>Use appropriate sizing for touch targets (minimum 44px)</li>
                  <li>Keep radio groups visually grouped and organized</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always associate labels with radio items using <code className="bg-background px-1 py-0.5 rounded text-xs">htmlFor</code> and <code className="bg-background px-1 py-0.5 rounded text-xs">id</code></li>
                  <li>Use <code className="bg-background px-1 py-0.5 rounded text-xs">aria-invalid</code> for validation states</li>
                  <li>Ensure keyboard navigation works properly (arrow keys, Tab, Space)</li>
                  <li>Provide focus indicators with <code className="bg-background px-1 py-0.5 rounded text-xs">focus-visible:ring-ring</code></li>
                  <li>Use semantic HTML structure for screen readers</li>
                  <li>Provide clear visual feedback for selected items</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Limit options to 7 or fewer for better usability</li>
                  <li>Use descriptive labels that clearly explain each option</li>
                  <li>Group related options logically</li>
                  <li>Provide default values when appropriate</li>
                  <li>Handle loading and error states gracefully</li>
                  <li>Consider the layout (vertical vs horizontal) based on content length</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Layout Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Vertical Layout:</strong> Best for longer labels, descriptions, or when space allows</li>
                  <li><strong>Horizontal Layout:</strong> Good for short labels and compact interfaces</li>
                  <li>Use consistent spacing between items (typically <code className="bg-background px-1 py-0.5 rounded text-xs">space-x-2</code> or <code className="bg-background px-1 py-0.5 rounded text-xs">space-y-2</code>)</li>
                  <li>Align radio items with their labels properly</li>
                  <li>Consider grid layouts for complex arrangements</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">State Management</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use controlled components for form integration</li>
                  <li>Handle loading states during async operations</li>
                  <li>Provide clear feedback for validation errors</li>
                  <li>Consider default values for better user experience</li>
                  <li>Handle edge cases like empty option lists</li>
                  <li>Use appropriate disabled states when options are unavailable</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Labels:</strong> Keep them concise but descriptive</li>
                  <li><strong>Descriptions:</strong> Add explanatory text for complex options</li>
                  <li><strong>Icons:</strong> Use visual cues when helpful (flags, sizes, etc.)</li>
                  <li><strong>Grouping:</strong> Organize related options with visual separators</li>
                  <li><strong>Ordering:</strong> Place most common or recommended options first</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Performance Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keep radio groups lightweight and avoid complex nested structures</li>
                  <li>Use appropriate state management patterns to avoid unnecessary re-renders</li>
                  <li>Consider virtualization for extremely long option lists (50+ items)</li>
                  <li>Optimize label rendering for dynamic content</li>
                  <li>Test performance with different numbers of options</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
