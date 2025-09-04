"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { CodeBlock } from "@/components/ui/code-block";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function ComboboxForm() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Language</label>
        <p className="text-sm text-muted-foreground mb-2">
          This is the language that will be used in the dashboard.
        </p>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !value && "text-muted-foreground"
            )}
          >
            {value
              ? languages.find((language) => language.value === value)?.label
              : "Select language"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search language..." className="h-9" />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    value={language.label}
                    key={language.value}
                    onSelect={() => {
                      setValue(language.value);
                      setOpen(false);
                    }}
                  >
                    {language.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        language.value === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Button type="submit">Submit</Button>
    </div>
  );
}

export function ComboboxDocs() {
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
              <CardTitle>Combobox Variants</CardTitle>
              <CardDescription>Different combobox configurations and use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic Combobox</h4>
                <div className="flex flex-wrap items-center gap-6">
                  <ComboboxDemo />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Form Integration</h4>
                <div className="space-y-3">
                  <ComboboxForm />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Accessibility Features</h4>
                <div className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                  <strong>Note:</strong> The combobox includes proper ARIA attributes, keyboard navigation,
                  and screen reader support. It's built using Popover and Command components for enhanced accessibility.
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Combobox Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Combobox</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const [open, setOpen] = useState(false);
const [value, setValue] = useState("");

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline" role="combobox" aria-expanded={open}>
      {value ? selectedLabel : "Select option..."}
      <ChevronsUpDown className="opacity-50" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[200px] p-0">
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}
            >
              {option.label}
              <Check className={cn("ml-auto", value === option.value ? "opacity-100" : "opacity-0")} />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  </PopoverContent>
</Popover>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Combobox with Form</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<FormField
  control={form.control}
  name="language"
  render={({ field }) => (
    <FormItem className="flex flex-col">
      <FormLabel>Language</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button variant="outline" role="combobox">
              {field.value ? selectedLabel : "Select language"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search language..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    value={language.label}
                    key={language.value}
                    onSelect={() => {
                      form.setValue("language", language.value);
                    }}
                  >
                    {language.label}
                    <Check className={cn("ml-auto", language.value === field.value ? "opacity-100" : "opacity-0")} />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  )}
/>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Responsive Combobox</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`const isDesktop = useMediaQuery("(min-width: 768px)");

if (isDesktop) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Select option</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <StatusList setOpen={setOpen} setSelected={setSelected} />
      </PopoverContent>
    </Popover>
  );
}

return (
  <Drawer open={open} onOpenChange={setOpen}>
    <DrawerTrigger asChild>
      <Button variant="outline">Select option</Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="mt-4 border-t">
        <StatusList setOpen={setOpen} setSelected={setSelected} />
      </div>
    </DrawerContent>
  </Drawer>
);`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>Combobox Guidelines</CardTitle>
              <CardDescription>Best practices and design considerations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Design Specifications</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Width:</strong> Minimum 200px for comfortable interaction</li>
                  <li><strong>Height:</strong> Button height follows button component standards</li>
                  <li><strong>Spacing:</strong> Consistent with other form components</li>
                  <li><strong>Icons:</strong> Chevron down for closed state, up for open state</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Usage Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use for single selection from a list of options</li>
                  <li>Provide clear placeholder text when no option is selected</li>
                  <li>Include search functionality for long lists</li>
                  <li>Show selected state with checkmark icon</li>
                  <li>Consider responsive behavior on mobile devices</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Proper ARIA attributes (role="combobox", aria-expanded)</li>
                  <li>Keyboard navigation support (Arrow keys, Enter, Escape)</li>
                  <li>Screen reader compatible with Command component</li>
                  <li>Focus management between trigger and content</li>
                  <li>Clear labeling and descriptions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">States</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Default:</strong> Button with placeholder text and chevron</li>
                  <li><strong>Open:</strong> Popover with search input and options list</li>
                  <li><strong>Selected:</strong> Shows selected option with checkmark</li>
                  <li><strong>Searching:</strong> Filters options based on input</li>
                  <li><strong>Empty:</strong> Shows "No results found" message</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Component Composition</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Popover:</strong> Handles positioning and overlay</li>
                  <li><strong>Command:</strong> Provides search and keyboard navigation</li>
                  <li><strong>Button:</strong> Serves as the trigger element</li>
                  <li><strong>Check Icon:</strong> Indicates selected state</li>
                  <li><strong>Chevron Icon:</strong> Shows open/closed state</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
