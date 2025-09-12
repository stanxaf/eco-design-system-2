"use client";

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

/**
 * Data Table component with sorting, filtering, pagination, and row selection.
 *
 * **IMPORTANT FOR v0: This component uses data-table-specific CSS variables.
 * DO NOT use generic variables like --primary, --secondary, etc.
 * ONLY use the --data-table-* variables listed below.**
 *
 * **Available Components:**
 * - `DataTable`: Main data table with full functionality
 * - `createSortableHeader`: Utility for sortable column headers
 * - `createRowSelectionColumn`: Utility for row selection column
 * - `createActionsColumn`: Utility for actions dropdown column
 *
 * **CSS Variables Used:**
 * - Background: --data-table-background, --data-table-foreground
 * - Border: --data-table-border, --data-table-border-hover
 * - Header: --data-table-header-background, --data-table-header-foreground
 * - Row: --data-table-row-hover, --data-table-row-selected
 * - Pagination: --data-table-pagination-background, --data-table-pagination-foreground
 *
 * **Features:**
 * - Sorting with visual indicators
 * - Filtering with search input
 * - Pagination with customizable page sizes
 * - Row selection with checkboxes
 * - Column visibility controls
 * - Responsive design with mobile-friendly layout
 * - Accessibility compliant with proper ARIA attributes
 * - Dark mode support with theme-aware colors
 * - Customizable toolbar and actions
 *
 * **v0 Usage Rules:**
 * 1. ALWAYS use the data-table-specific CSS variables (--data-table-*)
 * 2. NEVER use generic variables (--primary, --secondary, etc.)
 * 3. Use proper TypeScript interfaces for type safety
 * 4. Include proper accessibility attributes
 * 5. Handle loading and empty states appropriately
 * 6. Use consistent naming conventions
 * 7. Provide clear column definitions with proper types
 */

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  showColumnVisibility?: boolean;
  showRowSelection?: boolean;
  className?: string;
  paginationVariant?: "advanced" | "basic";
  itemsPerPageOptions?: number[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Search...",
  showColumnVisibility = true,
  showRowSelection = true,
  className,
  paginationVariant = "advanced",
  itemsPerPageOptions = [10, 25, 50, 100],
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pageSize, setPageSize] = React.useState(10);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize,
      },
    },
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newPagination = updater({ pageIndex: table.getState().pagination.pageIndex, pageSize });
        setPageSize(newPagination.pageSize);
        table.setPageIndex(newPagination.pageIndex);
      }
    },
  });

  const handlePageChange = (page: number) => {
    table.setPageIndex(page - 1);
  };

  const handleItemsPerPageChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    table.setPageSize(newPageSize);
  };

  return (
    <div className={cn("w-full space-y-2", className)} data-slot="data-table">
      {/* Toolbar */}
      <div className="flex items-center justify-between" data-slot="data-table-toolbar">
        <div className="flex flex-1 items-center space-x-2">
          {searchKey && (
            <Input
              placeholder={searchPlaceholder}
              value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn(searchKey)?.setFilterValue(event.target.value)
              }
              className="h-8 w-[150px] lg:w-[250px]"
              data-slot="data-table-search"
              aria-label="Search table"
            />
          )}
        </div>
        {showColumnVisibility && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto hidden h-8 lg:flex"
                data-slot="data-table-column-toggle"
                aria-label="Toggle column visibility"
              >
                <ChevronDown className="ml-2 h-4 w-4" />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]" data-slot="data-table-column-menu">
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" && column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Table */}
      <div data-slot="data-table-container">
        <Table data-slot="data-table-main">
          <TableHeader data-slot="data-table-header">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} data-slot="data-table-header-row">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} data-slot="data-table-header-cell">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody data-slot="data-table-body">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  data-slot="data-table-row"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} data-slot="data-table-cell">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow data-slot="data-table-empty-row">
                <TableCell
                  colSpan={columns.length}
                  data-slot="data-table-empty-cell"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div data-slot="data-table-pagination">
        <DataTablePagination
          variant={paginationVariant}
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          totalItems={table.getFilteredRowModel().rows.length}
          itemsPerPage={pageSize}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemsPerPageOptions={itemsPerPageOptions}
          className="w-full"
        />
      </div>
    </div>
  );
}

// Utility function to create sortable column header
export function createSortableHeader<TData, TValue>(
  column: any,
  title: string
) {
  return (
    <div className="flex justify-end">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {title}
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

// Utility function to create row selection column
export function createRowSelectionColumn<TData>(): ColumnDef<TData> {
  return {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };
}

// Utility function to create actions column
export function createActionsColumn<TData>(
  actions: (row: any) => React.ReactNode
): ColumnDef<TData> {
  return {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {actions(row)}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  };
}
