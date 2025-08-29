"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SelectDocs() {
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
              <CardTitle>Select Variants</CardTitle>
              <CardDescription>Different select sizes, layouts, and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Default Size <span className="text-xs text-muted-foreground font-normal">(Custom Feature)</span></h4>
                <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md mb-4">
                  <strong>Note:</strong> This codebase includes a custom size variant for the select component. The official shadcn/ui select only has a fixed height of h-10 (40px).
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Default size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Default (h-8) - custom variant</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Basic Select</h4>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Simple select without grouping</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Grouped Options</h4>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <SelectItem value="carrot">Carrot</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="spinach">Spinach</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">With groups, labels, and separators</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">With Icons</h4>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.27c-1.877 0-3.4 1.523-3.4 3.4 0 .188.015.37.043.548a6.632 6.632 0 0 0-1.44-.158c-3.64 0-6.6 2.96-6.6 6.6 0 3.64 2.96 6.6 6.6 6.6 3.64 0 6.6-2.96 6.6-6.6 0-.053-.002-.105-.005-.157.178.028.36.043.548.043 1.877 0 3.4-1.523 3.4-3.4 0-1.877-1.523-3.4-3.4-3.4z"/>
                        </svg>
                        React
                      </SelectItem>
                      <SelectItem value="vue">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24,1.61H14.06L12,5.16 9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
                        </svg>
                        Vue
                      </SelectItem>
                      <SelectItem value="angular">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.93 12.645h4.134L11.996 7.74 9.93 12.645ZM11.996.029L.686 3.988l1.725 14.84L11.996 24l9.585-5.172L23.306 3.988 11.996.029ZM11.995 18.827l-6.651-1.598L5.4 6.75l6.595 2.49 6.595-2.49-.056 10.479-6.539 1.598Z"/>
                        </svg>
                        Angular
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Select items with custom icons</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Disabled States</h4>
                <div className="space-y-2">
                  <Select disabled>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Disabled select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Disabled select trigger</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Invalid State</h4>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger className="w-[180px]" aria-invalid="true">
                      <SelectValue placeholder="Invalid select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">With invalid state styling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Select Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Select</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Groups and Labels</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a category" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Default Size</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Default" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Icons</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="react">
      <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.27c-1.877 0-3.4 1.523-3.4 3.4 0 .188.015.37.043.548a6.632 6.632 0 0 0-1.44-.158c-3.64 0-6.6 2.96-6.6 6.6 0 3.64 2.96 6.6 6.6 6.6 3.64 0 6.6-2.96 6.6-6.6 0-.053-.002-.105-.005-.157.178.028.36.043.548.043 1.877 0 3.4-1.523 3.4-3.4 0-1.877-1.523-3.4-3.4-3.4z"/>
      </svg>
      React
    </SelectItem>
  </SelectContent>
</Select>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Controlled Select</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [value, setValue] = useState("");

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Disabled and Invalid States</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`{/* Disabled Select */}
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>

{/* Invalid State */}
<Select>
  <SelectTrigger className="w-[180px]" aria-invalid="true">
    <SelectValue placeholder="Invalid" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Select Guidelines</CardTitle>
              <CardDescription>Best practices for using select components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Choosing from a predefined list of options (5-20 items)</li>
                  <li>Form inputs requiring single selection</li>
                  <li>Navigation menus with categorized options</li>
                  <li>Settings and configuration panels</li>
                  <li>Data filtering and sorting controls</li>
                  <li>Language or region selection</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Design Principles</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use <code className="bg-background px-1 py-0.5 rounded text-xs">border-input</code> for subtle borders that don't compete with content</li>
                  <li>Maintain consistent sizing with other form elements</li>
                  <li>Use appropriate placeholder text to guide user selection</li>
                  <li>Ensure sufficient contrast between trigger and content</li>
                  <li>Keep dropdown content width appropriate for content</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide descriptive labels or aria-labels</li>
                  <li>Use <code className="bg-background px-1 py-0.5 rounded text-xs">aria-invalid</code> for validation states</li>
                  <li>Ensure keyboard navigation works properly (arrow keys, Enter, Escape)</li>
                  <li>Provide focus indicators with <code className="bg-background px-1 py-0.5 rounded text-xs">focus-visible:ring-ring</code></li>
                  <li>Use semantic HTML structure for screen readers</li>
                  <li>Provide clear visual feedback for selected items</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Limit options to 20 or fewer for better usability</li>
                  <li>Use groups and labels for better organization</li>
                  <li>Provide meaningful placeholder text</li>
                  <li>Use consistent sizing across your interface</li>
                  <li>Handle loading and error states gracefully</li>
                  <li>Consider search functionality for long option lists</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Size Guidelines <span className="text-xs text-muted-foreground font-normal">(Custom Feature)</span></h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default (h-8):</strong> Standard forms, most use cases</li>
                  <li>Ensure touch targets meet minimum 44px requirements for mobile</li>
                  <li><strong>Note:</strong> This size variant is a custom addition to this codebase. Official shadcn/ui select has a fixed height of h-10 (40px).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Content Organization</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Groups:</strong> Use for logical categorization of options</li>
                  <li><strong>Labels:</strong> Provide clear section headers within groups</li>
                  <li><strong>Separators:</strong> Use to visually distinguish between groups</li>
                  <li><strong>Icons:</strong> Add visual context when helpful (flags, logos, etc.)</li>
                  <li>Keep option text concise and descriptive</li>
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
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Performance Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use virtualization for very long option lists (100+ items)</li>
                  <li>Lazy load options when appropriate</li>
                  <li>Debounce search inputs in searchable selects</li>
                  <li>Consider pagination for extremely long lists</li>
                  <li>Optimize re-renders with proper React patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
