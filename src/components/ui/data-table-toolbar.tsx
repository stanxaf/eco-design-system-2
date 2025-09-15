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
 * A flexible toolbar component designed for data tables that provides global search
 * capabilities and space for additional table actions. Integrates seamlessly with
 * TanStack Table for filtering across all columns.
 *
 * @template TData - The type of data in the table
 */
interface DataTableToolbarProps<TData> {
  /** TanStack Table instance with configured data and columns */
  table: Table<TData>;
  /** Current global filter value */
  globalFilter: string;
  /** Function to update the global filter value */
  setGlobalFilter: (value: string) => void;
  /** Optional additional CSS classes for styling */
  className?: string;
}

/**
 * Renders a data table toolbar with global search functionality.
 *
 * @param props - The component props
 * @returns JSX element representing the toolbar
 */
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
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
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