/**
 * @name DataTablePagination
 * @description Enhanced pagination component designed for data tables with items per page selection, page input, and responsive design.
 * @component
 * @example
 * ```tsx
 * import { DataTablePagination } from "@/components/ui/data-table-pagination";
 *
 * <DataTablePagination
 *   currentPage={10}
 *   totalPages={40}
 *   totalItems={97}
 *   itemsPerPage={10}
 *   onPageChange={(page) => setCurrentPage(page)}
 *   onItemsPerPageChange={(itemsPerPage) => setItemsPerPage(itemsPerPage)}
 * />
 * ```
 * @props {number} currentPage - Current page number (1-based)
 * @props {number} totalPages - Total number of pages
 * @props {number} totalItems - Total number of items across all pages
 * @props {number} itemsPerPage - Number of items displayed per page
 * @props {function} onPageChange - Callback when page changes
 * @props {function} onItemsPerPageChange - Callback when items per page changes
 * @props {number[]} [itemsPerPageOptions] - Custom options for items per page (default: [10, 25, 50, 100])
 * @props {"advanced" | "basic"} [variant] - Component variant (default: "advanced")
 * @props {string} [className] - Additional CSS classes
 */

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DataTablePaginationDocs() {
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
              <h3 className="text-lg font-semibold mb-2">Advanced Variant</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full-featured pagination with items per page selection, page input, and responsive design.
              </p>
              <div className="w-full">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="w-[160px]" size="default">
                          <SelectValue placeholder="10 items per page" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 items per page</SelectItem>
                          <SelectItem value="25">25 items per page</SelectItem>
                          <SelectItem value="50">50 items per page</SelectItem>
                          <SelectItem value="100">100 items per page</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      97 total items
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-muted-foreground">Page</span>
                      <Input
                        type="number"
                        min="1"
                        max="40"
                        defaultValue="10"
                        className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="text-sm text-muted-foreground">of 40</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="default"
                        disabled
                      >
                        <ChevronLeftIcon className="size-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="default"
                      >
                        <ChevronRightIcon className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-3">
                  <div className="flex items-center justify-between">
                    <Select>
                      <SelectTrigger className="w-[140px]" size="default">
                        <SelectValue placeholder="10 items per page" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 items per page</SelectItem>
                        <SelectItem value="25">25 items per page</SelectItem>
                        <SelectItem value="50">50 items per page</SelectItem>
                        <SelectItem value="100">100 items per page</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">
                      97 total items
                    </span>
                  </div>

                  <Separator className="my-0" />

                  <div className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-muted-foreground">Page</span>
                      <Input
                        type="number"
                        min="1"
                        max="40"
                        defaultValue="10"
                        className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <span className="text-sm text-muted-foreground">of 40</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="default"
                        disabled
                      >
                        <ChevronLeftIcon className="size-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="default"
                      >
                        <ChevronRightIcon className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Variant</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Simple pagination with just item count, page info, and navigation buttons.
              </p>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-muted-foreground">
                  97 items
                </span>

                <span className="text-sm text-muted-foreground text-center">
                  Page 3 of 7
                </span>

                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="default"
                  >
                    <ChevronLeftIcon className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                  >
                    <ChevronRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { DataTablePagination } from "@/components/ui/data-table-pagination";

<DataTablePagination
  currentPage={10}
  totalPages={40}
  totalItems={97}
  itemsPerPage={10}
  onPageChange={(page) => setCurrentPage(page)}
  onItemsPerPageChange={(itemsPerPage) => setItemsPerPage(itemsPerPage)}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">With Variants</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`// Advanced variant (default)
<DataTablePagination
  variant="advanced"
  currentPage={10}
  totalPages={40}
  totalItems={97}
  itemsPerPage={10}
  onPageChange={setCurrentPage}
  onItemsPerPageChange={setItemsPerPage}
/>

// Basic variant
<DataTablePagination
  variant="basic"
  currentPage={3}
  totalPages={7}
  totalItems={97}
  itemsPerPage={25}
  onPageChange={setCurrentPage}
  onItemsPerPageChange={setItemsPerPage}
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Custom Items Per Page Options</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<DataTablePagination
  variant="advanced"
  currentPage={5}
  totalPages={20}
  totalItems={500}
  itemsPerPage={25}
  itemsPerPageOptions={[5, 10, 25, 50, 100]}
  onPageChange={setCurrentPage}
  onItemsPerPageChange={setItemsPerPage}
/>`}
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guide" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">When to Use Each Variant</h3>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">Advanced Variant</h4>
                  <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                    <li>• Data tables with complex filtering and sorting</li>
                    <li>• Applications where users need control over items per page</li>
                    <li>• When you need detailed pagination information</li>
                    <li>• Professional dashboards and admin panels</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground">Basic Variant</h4>
                  <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                    <li>• Simple lists and basic data displays</li>
                    <li>• Space-constrained layouts</li>
                    <li>• When items per page selection isn't needed</li>
                    <li>• Quick navigation without complexity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Accessibility Features</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Proper ARIA labels for all interactive elements</li>
                <li>• Keyboard navigation support</li>
                <li>• Screen reader friendly with semantic HTML</li>
                <li>• Disabled states for navigation buttons when appropriate</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Responsive Behavior</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Desktop: Horizontal layout with all features</li>
                <li>• Mobile: Vertical stacked layout with separator</li>
                <li>• Automatic adaptation based on screen size</li>
                <li>• Touch-friendly button sizes on mobile</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Always provide meaningful page information</li>
                <li>• Use consistent spacing and sizing across variants</li>
                <li>• Handle edge cases (first/last page, empty results)</li>
                <li>• Provide clear visual feedback for current state</li>
                <li>• Consider loading states for dynamic content</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
