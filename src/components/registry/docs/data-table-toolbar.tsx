/**
 * @name DataTableToolbar
 * @description A toolbar component for data tables with global search functionality. Integrates seamlessly with TanStack Table for filtering across all columns.
 * @component
 * @example
 * ```tsx
 * import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
 * import { useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
 * import { useState } from "react";
 *
 * const [globalFilter, setGlobalFilter] = useState("");
 * const table = useReactTable({
 *   data,
 *   columns,
 *   onGlobalFilterChange: setGlobalFilter,
 *   getCoreRowModel: getCoreRowModel(),
 *   getFilteredRowModel: getFilteredRowModel(),
 *   state: { globalFilter },
 * });
 *
 * <DataTableToolbar
 *   table={table}
 *   globalFilter={globalFilter}
 *   setGlobalFilter={setGlobalFilter}
 * />
 * ```
 * @props {Table} table - TanStack Table instance
 * @props {string} globalFilter - Current global filter value
 * @props {function} setGlobalFilter - Function to update global filter
 * @props {string} [className] - Additional CSS classes
 */

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";

export function DataTableToolbarDocs() {
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
              <h3 className="text-lg font-semibold mb-2">Default Toolbar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A clean toolbar with global search input and space for future features.
              </p>
              <div className="w-full border rounded-lg p-4">
                <div className="flex items-center justify-between space-x-2 py-4">
                  <div className="flex flex-1 items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search all columns..."
                        className="pl-8 h-8"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Space for future features */}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">With Custom Styling</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The toolbar can be customized with additional CSS classes for different layouts.
              </p>
              <div className="w-full border rounded-lg p-4">
                <div className="flex items-center justify-between space-x-2 py-4 bg-muted/50 rounded-md px-4">
                  <div className="flex flex-1 items-center space-x-2">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search all columns..."
                        className="pl-8 h-8"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Export
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Filter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
              <CodeBlock className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState } from "react";

const [globalFilter, setGlobalFilter] = useState("");

const table = useReactTable({
  data,
  columns,
  onGlobalFilterChange: setGlobalFilter,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: { globalFilter },
});

<DataTableToolbar
  table={table}
  globalFilter={globalFilter}
  setGlobalFilter={setGlobalFilter}
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">With Custom Styling</h3>
              <CodeBlock className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`<DataTableToolbar
  table={table}
  globalFilter={globalFilter}
  setGlobalFilter={setGlobalFilter}
  className="bg-muted/50 rounded-md px-4"
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Integrated with DataTable</h3>
              <CodeBlock className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { DataTable } from "@/components/ui/data-table";

function MyDataTable({ data, columns }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      globalSearch={true}
      showColumnVisibility={true}
      showRowSelection={true}
      paginationVariant="advanced"
    />
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Standalone Usage</h3>
              <CodeBlock className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from "@tanstack/react-table";
import { useState } from "react";

function MyDataTable({ data, columns }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {/* Your custom table implementation */}
    </div>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="guide" className="space-y-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">When to Use</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• When you need to search across all columns in a data table</li>
                <li>• For complex data tables with multiple columns</li>
                <li>• When you want a clean, minimal search interface</li>
                <li>• For applications requiring responsive design</li>
                <li>• When integrating with TanStack Table</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Global search across all table columns</li>
                <li>• Search icon for visual clarity</li>
                <li>• Responsive design with max-width constraints</li>
                <li>• Space reserved for future toolbar features</li>
                <li>• Full TypeScript support</li>
                <li>• Accessibility compliant with ARIA labels</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Integration with TanStack Table</h3>
              <p className="text-sm text-muted-foreground mb-2">
                The toolbar integrates seamlessly with TanStack Table's global filtering system:
              </p>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Uses the table instance for state management</li>
                <li>• Connects to globalFilter state</li>
                <li>• Automatically updates filtered results</li>
                <li>• Works with all table features (sorting, pagination, etc.)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Accessibility Features</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Proper ARIA labels for screen readers</li>
                <li>• Semantic HTML structure</li>
                <li>• Keyboard navigation support</li>
                <li>• Focus management for search input</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Search input adapts to screen size</li>
                <li>• Max-width constraint prevents overflow</li>
                <li>• Flexible layout for different screen sizes</li>
                <li>• Touch-friendly on mobile devices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Always provide meaningful placeholder text</li>
                <li>• Use consistent spacing and sizing</li>
                <li>• Handle empty states gracefully</li>
                <li>• Consider debouncing for large datasets</li>
                <li>• Test with screen readers for accessibility</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
