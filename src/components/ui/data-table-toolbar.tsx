"use client";

import { type Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * Data Table Toolbar component with global search functionality.
 *
 * **Features:**
 * - Global search input that searches across all table columns
 * - Responsive design that works on mobile and desktop
 * - Clean, minimal interface
 * - TanStack Table integration
 * - TypeScript support with proper interfaces
 * - Accessibility compliant with proper ARIA labels
 *
 * **Usage:**
 * ```tsx
 * <DataTableToolbar
 *   table={table}
 *   globalFilter={globalFilter}
 *   setGlobalFilter={setGlobalFilter}
 * />
 * ```
 */
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  className?: string;
}

export function DataTableToolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter,
  className,
}: DataTableToolbarProps<TData>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        className
      )}
      data-slot="data-table-toolbar"
    >
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="pl-8 h-8"
            data-slot="data-table-global-search"
            aria-label="Search table data"
          />
        </div>
      </div>

      {/* Space for future features */}
      <div className="flex items-center space-x-2">
        {/* Future toolbar items can be added here */}
      </div>
    </div>
  );
}
