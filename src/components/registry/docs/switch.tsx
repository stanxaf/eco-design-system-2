"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { CodeBlock } from "@/components/ui/code-block";
export function SwitchDocs() {
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
              <CardTitle>Switch Variants</CardTitle>
              <CardDescription>Different switch states and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Default States</h4>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center space-x-2">
                    <Switch id="default" />
                    <Label htmlFor="default">Default (Unchecked)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="checked" defaultChecked />
                    <Label htmlFor="checked">Checked</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="disabled" disabled />
                    <Label htmlFor="disabled">Disabled</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="disabled-checked" disabled defaultChecked />
                    <Label htmlFor="disabled-checked">Disabled Checked</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Integration</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Email notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="dark-mode" />
                    <Label htmlFor="dark-mode">Dark mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-save" />
                    <Label htmlFor="auto-save">Auto-save</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Accessibility Features</h4>
                <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                  <strong>Note:</strong> The switch includes proper ARIA attributes, keyboard navigation,
                  and screen reader support. Use with Label components for best accessibility.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Switch Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Switch</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Switch id="switch" />
<Label htmlFor="switch">Switch label</Label>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Controlled Switch</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [checked, setChecked] = useState(false);

<Switch
  id="controlled"
  checked={checked}
  onCheckedChange={setChecked}
/>
<Label htmlFor="controlled">Controlled switch</Label>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Switch with Form</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<form className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="terms" required />
    <Label htmlFor="terms">I agree to the terms</Label>
  </div>
  <Button type="submit">Submit</Button>
</form>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Component Implementation</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground",
        )}
      />
    </SwitchPrimitive.Root>
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
              <CardTitle>Switch Guidelines</CardTitle>
              <CardDescription>Best practices and design considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Design Specifications</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Size:</strong> 18.4px height × 32px width (h-[1.15rem] w-8)</li>
                  <li><strong>Border Radius:</strong> Fully rounded (rounded-full)</li>
                  <li><strong>Thumb Size:</strong> 16px × 16px (size-4)</li>
                  <li><strong>Focus Ring:</strong> 3px ring with 50% opacity</li>
                  <li><strong>Shadow:</strong> Subtle shadow (shadow-xs)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Usage Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use for binary on/off states (enabled/disabled, yes/no)</li>
                  <li>Always pair with descriptive labels for accessibility</li>
                  <li>Provide clear, concise label text</li>
                  <li>Use for settings, preferences, and feature toggles</li>
                  <li>Consider using switches for immediate state changes</li>
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
                  <li><strong>Unchecked:</strong> Input color background</li>
                  <li><strong>Checked:</strong> Primary color background</li>
                  <li><strong>Disabled:</strong> Reduced opacity and not-allowed cursor</li>
                  <li><strong>Focus:</strong> Ring indicator for keyboard navigation</li>
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
