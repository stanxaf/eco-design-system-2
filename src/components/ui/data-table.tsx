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
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronDown, MoreHorizontal } from "lucide-react";
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
import { DataTableToolbar } from "@/components/ui/data-table-toolbar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  useTablePerformance,
  useTableAccessibility,
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
  globalSearch?: boolean;
  showColumnVisibility?: boolean;
  showRowSelection?: boolean;
  className?: string;
  paginationVariant?: "advanced" | "basic";
  itemsPerPageOptions?: number[];
  columnWidths?: Record<string, string>; // Custom column widths
  /** Whether the table is in a loading state */
  isLoading?: boolean;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Whether to enable sticky headers */
  stickyHeaders?: boolean;
  /** Table variant for different use cases */
  tableVariant?: "default" | "data-table" | "compact";
  /** ARIA label for the table */
  ariaLabel?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  globalSearch = false,
  showColumnVisibility = true,
  showRowSelection = true,
  className,
  paginationVariant = "advanced",
  itemsPerPageOptions = [10, 25, 50, 100],
  columnWidths = { select: "w-8", actions: "w-12" }, // Default widths
  isLoading = false,
  loadingComponent,
  stickyHeaders = false,
  tableVariant = "data-table",
  ariaLabel = "Data table with sorting, filtering, and pagination",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pageSize, setPageSize] = React.useState(10);
  const [pageIndex, setPageIndex] = React.useState(0);

  // Performance optimization hook
  const { shouldVirtualize, performanceWarning } = useTablePerformance(data, {
    virtualizeThreshold: 100,
    enableVirtualization: true,
    pageSize: 25,
  });

  // Accessibility hook
  const { tableProps } = useTableAccessibility({
    caption: ariaLabel,
    totalRows: data.length,
    totalColumns: columns.length,
  });

  // Memoize column width getter to avoid recreating functions in render
  const getColumnWidth = React.useCallback((columnId: string) => {
    return columnWidths[columnId] || "";
  }, [columnWidths]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newPagination = updater({ pageIndex, pageSize });
        setPageIndex(newPagination.pageIndex);
        setPageSize(newPagination.pageSize);
      }
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
  });

  const handlePageChange = (page: number) => {
    setPageIndex(page - 1);
  };

  const handleItemsPerPageChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPageIndex(0); // Reset to first page when changing page size
  };

  return (
    <div className={cn("w-full space-y-2", className)} data-slot="data-table">
      {/* Performance Warning */}
      {performanceWarning && (
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm text-yellow-800">
          ⚠️ {performanceWarning}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between" data-slot="data-table-toolbar">
        {globalSearch ? (
          <DataTableToolbar
            table={table}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            className="flex-1"
          />
        ) : (
          <div className="flex flex-1 items-center space-x-2">
            {/* No search when globalSearch is disabled */}
          </div>
        )}
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
        <Table
          data-slot="data-table-main"
          isLoading={isLoading}
          loadingComponent={loadingComponent}
          isEmpty={!isLoading && table.getRowModel().rows?.length === 0}
          variant={tableVariant}
          ariaLabel={ariaLabel}
          stickyHeaders={stickyHeaders}
          enableHorizontalScroll={true}
          {...tableProps}
        >
          <TableHeader data-slot="data-table-header" sticky={stickyHeaders}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} data-slot="data-table-header-row">
                {headerGroup.headers.map((header) => {
                  const isSortable = header.column.getCanSort();
                  return (
                    <TableHead
                      key={header.id}
                      data-slot="data-table-header-cell"
                      className={cn(
                        getColumnWidth(header.id)
                      )}
                      sortable={isSortable}
                      sortDirection={isSortable ? (header.column.getIsSorted() || null) : null}
                      sticky={stickyHeaders}
                      onClick={isSortable ? () => header.column.toggleSorting(header.column.getIsSorted() === "asc") : undefined}
                    >
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
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                data-slot="data-table-row"
                selectable={showRowSelection}
                selected={row.getIsSelected()}
                interactive={true}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      data-slot="data-table-cell"
                      className={getColumnWidth(cell.column.id)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div data-slot="data-table-pagination">
        <DataTablePagination
          variant={paginationVariant}
          currentPage={pageIndex + 1}
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
  const sortState = column.getIsSorted();

  const getSortIcon = () => {
    if (sortState === "asc") {
      return <ArrowUp className="h-4 w-4" />;
    } else if (sortState === "desc") {
      return <ArrowDown className="h-4 w-4" />;
    }
    return null; // No icon when not sorted
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <span>{title}</span>
      {getSortIcon()}
    </div>
  );
}

// Utility function to create row selection column
export function createRowSelectionColumn<TData>(): ColumnDef<TData> {
  return {
    id: "select",
    size: 32,
    minSize: 32,
    maxSize: 32,
    header: ({ table }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
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
    size: 50, // Fixed width for actions column
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
