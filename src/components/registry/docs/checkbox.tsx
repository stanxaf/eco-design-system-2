"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function CheckboxDocs() {
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
              <CardTitle>Checkbox Variants</CardTitle>
              <CardDescription>Different checkbox states and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Default States</h4>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="default" />
                    <Label htmlFor="default">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checked" defaultChecked />
                    <Label htmlFor="checked">Checked</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled">Disabled</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked" disabled defaultChecked />
                    <Label htmlFor="disabled-checked">Disabled Checked</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Integration</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">I agree to the terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Accessibility Features</h4>
                <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                  <strong>Note:</strong> The checkbox includes proper ARIA attributes, keyboard navigation,
                  and screen reader support. Use with Label components for best accessibility.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Checkbox Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Checkbox</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Checkbox id="checkbox" />
<Label htmlFor="checkbox">Checkbox label</Label>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Controlled Checkbox</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [checked, setChecked] = useState(false);

<Checkbox
  id="controlled"
  checked={checked}
  onCheckedChange={setChecked}
/>
<Label htmlFor="controlled">Controlled checkbox</Label>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Checkbox with Form</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<form className="space-y-4">
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" required />
    <Label htmlFor="terms">I agree to the terms</Label>
  </div>
  <Button type="submit">Submit</Button>
</form>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Component Implementation</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[2px] border border-interactive outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Checkbox Guidelines</CardTitle>
              <CardDescription>Best practices and design considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Design Specifications</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Size:</strong> 16x16px (size-4 in Tailwind)</li>
                  <li><strong>Border Radius:</strong> 2px rounded corners</li>
                  <li><strong>Border:</strong> 1px border-interactive color</li>
                  <li><strong>Focus Ring:</strong> 3px ring with 50% opacity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Usage Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always pair with descriptive labels for accessibility</li>
                  <li>Use for multiple choice selections</li>
                  <li>Provide clear, concise label text</li>
                  <li>Group related checkboxes logically</li>
                  <li>Consider using checkboxes for optional features or settings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Includes proper ARIA attributes</li>
                  <li>Keyboard navigation support (Space/Enter to toggle)</li>
                  <li>Screen reader compatible</li>
                  <li>High contrast focus indicators</li>
                  <li>Proper labeling with htmlFor attribute</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">States</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> Unchecked with border-interactive</li>
                  <li><strong>Checked:</strong> Primary color background with check icon</li>
                  <li><strong>Disabled:</strong> Reduced opacity and not-allowed cursor</li>
                  <li><strong>Focus:</strong> Ring indicator for keyboard navigation</li>
                  <li><strong>Invalid:</strong> Destructive color for form validation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
