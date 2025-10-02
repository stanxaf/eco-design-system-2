import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavigationMenuDocs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guide">Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="variants" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Default Navigation Menu</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A comprehensive navigation menu with multiple sections and rich
                content.
              </p>
              <div className="border rounded-lg p-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Getting started
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  shadcn/ui
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Beautifully designed components built with
                                  Radix UI and Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href="/docs"
                              >
                                <div className="text-sm font-medium leading-none">
                                  Introduction
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Build high-quality, accessible design systems
                                  and web apps.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <a
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          href="/blog"
                        >
                          Blog
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Basic Navigation Menu</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  {`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <div className="mb-2 mt-4 text-lg font-medium">
                  shadcn/ui
                </div>
                <p className="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and Tailwind CSS.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs"
              >
                <div className="text-sm font-medium leading-none">Introduction</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Build high-quality, accessible design systems and web apps.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">With Multiple Sections</h3>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  {`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <li>
            <NavigationMenuLink asChild>
              <a
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs/components/button"
              >
                <div className="text-sm font-medium leading-none">Button</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Displays a button or a component that looks like a button.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <a
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/docs/components/card"
              >
                <div className="text-sm font-medium leading-none">Card</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Displays a card with header, content, and footer.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guide" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Usage Guidelines</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">When to Use</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Main site navigation with multiple sections</li>
                    <li>• Applications requiring hierarchical navigation</li>
                    <li>• Content-heavy websites with organized sections</li>
                    <li>• Design systems and documentation sites</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Keep navigation items to 3-5 main sections</li>
                    <li>• Use descriptive labels for each section</li>
                    <li>• Provide helpful descriptions in dropdown content</li>
                    <li>• Ensure keyboard navigation works properly</li>
                    <li>• Test on mobile devices for responsive behavior</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Accessibility</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>
                      • Supports keyboard navigation (Tab, Arrow keys, Enter,
                      Escape)
                    </li>
                    <li>• Proper ARIA attributes for screen readers</li>
                    <li>• Focus management for dropdown menus</li>
                    <li>• High contrast ratios for text readability</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Customization</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Modify grid layouts for different content types</li>
                    <li>• Adjust spacing and sizing with Tailwind classes</li>
                    <li>• Customize hover and focus states</li>
                    <li>• Add icons or additional visual elements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
