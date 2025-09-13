"use client";

import type * as React from "react";
import { forwardRef, useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// Enhanced Table component with TypeScript generics and accessibility
interface TableProps extends React.ComponentProps<"table"> {
  /** Whether the table is in a loading state */
  isLoading?: boolean;
  /** Whether the table has an empty state */
  isEmpty?: boolean;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Custom empty state component */
  emptyComponent?: React.ReactNode;
  /** Whether to enable sticky headers */
  stickyHeaders?: boolean;
  /** Whether to enable horizontal scroll on mobile */
  enableHorizontalScroll?: boolean;
  /** Custom container class name */
  containerClassName?: string;
  /** Table variant for different use cases */
  variant?: "default" | "data-table" | "compact";
  /** ARIA label for the table */
  ariaLabel?: string;
  /** ARIA described by for additional context */
  ariaDescribedBy?: string;
  /** Role for the table (defaults to table) */
  role?: string;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      containerClassName,
      isLoading = false,
      isEmpty = false,
      loadingComponent,
      emptyComponent,
      stickyHeaders = false,
      enableHorizontalScroll = true,
      variant = "default",
      ariaLabel,
      ariaDescribedBy,
      role = "table",
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLTableElement>(null);

    // Combine refs
    const combinedRef = useCallback(
      (node: HTMLTableElement) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        tableRef.current = node;
      },
      [ref]
    );

    // Handle keyboard navigation
    useEffect(() => {
      const table = tableRef.current;
      if (!table) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        const target = event.target as HTMLElement;

        // Only handle keyboard navigation within table cells
        if (!target.closest('td, th')) return;

        switch (event.key) {
          case 'ArrowRight':
            event.preventDefault();
            const nextCell = target.parentElement?.nextElementSibling?.querySelector('td, th');
            if (nextCell) (nextCell as HTMLElement).focus();
            break;
          case 'ArrowLeft':
            event.preventDefault();
            const prevCell = target.parentElement?.previousElementSibling?.querySelector('td, th');
            if (prevCell) (prevCell as HTMLElement).focus();
            break;
          case 'ArrowDown':
            event.preventDefault();
            const nextRow = target.parentElement?.nextElementSibling;
            if (nextRow) {
              const cellAtIndex = nextRow.children[Array.from(target.parentElement!.children).indexOf(target)];
              if (cellAtIndex) (cellAtIndex as HTMLElement).focus();
            }
            break;
          case 'ArrowUp':
            event.preventDefault();
            const prevRow = target.parentElement?.previousElementSibling;
            if (prevRow) {
              const cellAtIndex = prevRow.children[Array.from(target.parentElement!.children).indexOf(target)];
              if (cellAtIndex) (cellAtIndex as HTMLElement).focus();
            }
            break;
        }
      };

      table.addEventListener('keydown', handleKeyDown);
      return () => table.removeEventListener('keydown', handleKeyDown);
    }, []);

    const defaultLoadingComponent = (
      <div
        className="flex items-center justify-center p-8"
        role="status"
        aria-label="Loading table data"
      >
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
        <span className="ml-2 text-sm text-muted-foreground">Loading...</span>
      </div>
    );

    const defaultEmptyComponent = (
      <div
        className="flex items-center justify-center p-8 text-muted-foreground"
        role="status"
        aria-label="No data available"
      >
        <span className="text-sm">No data available</span>
      </div>
    );

    const tableClasses = cn(
      "w-full caption-bottom text-sm",
      // Variant-specific styles
      {
        "table-fixed": variant === "compact",
        "table-auto": variant === "default" || variant === "data-table",
      },
      className
    );

    const containerClasses = cn(
      "relative w-full",
      {
        "overflow-x-auto": enableHorizontalScroll,
        "overflow-hidden": !enableHorizontalScroll,
      },
      containerClassName
    );

    return (
      <div
        ref={containerRef}
        data-slot="table-container"
        className={containerClasses}
        style={{
          // CSS custom properties for theming
          '--table-border-color': 'hsl(var(--border))',
          '--table-header-bg': 'hsl(var(--component-medium))',
          '--table-row-hover-bg': 'hsl(var(--component-light))',
          '--table-row-selected-bg': 'hsl(var(--component-light))',
          '--table-text-color': 'hsl(var(--foreground))',
          '--table-muted-text-color': 'hsl(var(--muted-foreground))',
        } as React.CSSProperties}
      >
        {isLoading ? (
          loadingComponent || defaultLoadingComponent
        ) : isEmpty ? (
          emptyComponent || defaultEmptyComponent
        ) : (
          <table
            ref={combinedRef}
            data-slot="table"
            className={tableClasses}
            role={role}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            tabIndex={0}
            {...props}
          >
            {children}
          </table>
        )}
      </div>
    );
  }
);

Table.displayName = "Table";

interface TableHeaderProps extends React.ComponentProps<"thead"> {
  /** Whether this header should be sticky */
  sticky?: boolean;
  /** ARIA label for the header section */
  ariaLabel?: string;
}

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, sticky = false, ariaLabel, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        data-slot="table-header"
        className={cn(
          "[&_tr]:border-b",
          {
            "sticky top-0 z-10": sticky,
          },
          className
        )}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

TableHeader.displayName = "TableHeader";

interface TableBodyProps extends React.ComponentProps<"tbody"> {
  /** ARIA label for the body section */
  ariaLabel?: string;
  /** Whether to enable row virtualization for large datasets */
  virtualized?: boolean;
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ariaLabel, virtualized = false, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        data-slot="table-body"
        className={cn(
          "[&_tr:last-child]:border-0",
          {
            "overflow-y-auto": virtualized,
          },
          className
        )}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

TableBody.displayName = "TableBody";

interface TableFooterProps extends React.ComponentProps<"tfoot"> {
  /** ARIA label for the footer section */
  ariaLabel?: string;
  /** Whether this footer should be sticky */
  sticky?: boolean;
}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ariaLabel, sticky = false, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        data-slot="table-footer"
        className={cn(
          "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
          {
            "sticky bottom-0 z-10": sticky,
          },
          className,
        )}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

TableFooter.displayName = "TableFooter";

interface TableRowProps extends React.ComponentProps<"tr"> {
  /** Whether this row is selectable */
  selectable?: boolean;
  /** Whether this row is currently selected */
  selected?: boolean;
  /** ARIA label for the row */
  ariaLabel?: string;
  /** Role for the row (defaults to row) */
  role?: string;
  /** Whether this row is interactive */
  interactive?: boolean;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({
    className,
    selectable = false,
    selected = false,
    ariaLabel,
    role = "row",
    interactive = false,
    ...props
  }, ref) => {
    return (
      <tr
        ref={ref}
        data-slot="table-row"
        data-state={selected ? "selected" : undefined}
        data-selectable={selectable ? "true" : undefined}
        data-interactive={interactive ? "true" : undefined}
        className={cn(
          "border-b transition-colors",
          {
            "hover:bg-component-light": interactive || selectable,
            "bg-component-light": selected,
            "cursor-pointer": interactive || selectable,
            "focus-within:bg-component-light": selectable,
          },
          className,
        )}
        role={role}
        aria-label={ariaLabel}
        tabIndex={selectable || interactive ? 0 : undefined}
        {...props}
      />
    );
  }
);

TableRow.displayName = "TableRow";

interface TableHeadProps extends React.ComponentProps<"th"> {
  /** Whether this header is sortable */
  sortable?: boolean;
  /** Current sort direction */
  sortDirection?: "asc" | "desc" | null;
  /** ARIA label for the header */
  ariaLabel?: string;
  /** Whether this header should be sticky */
  sticky?: boolean;
  /** Role for the header (defaults to columnheader) */
  role?: string;
  /** Column scope for accessibility */
  scope?: "col" | "row" | "colgroup" | "rowgroup";
}

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({
    className,
    sortable = false,
    sortDirection,
    ariaLabel,
    sticky = false,
    role = "columnheader",
    scope = "col",
    ...props
  }, ref) => {
    return (
      <th
        ref={ref}
        data-slot="table-head"
        data-sortable={sortable ? "true" : undefined}
        data-sort-direction={sortDirection || undefined}
        className={cn(
          "h-9 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] bg-component-medium",
          {
            "cursor-pointer hover:opacity-80 transition-opacity": sortable,
            "sticky top-0 z-20": sticky,
          },
          className,
        )}
        role={role}
        scope={scope}
        aria-label={ariaLabel}
        aria-sort={sortable ? (sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : "none") : undefined}
        tabIndex={sortable ? 0 : undefined}
        {...props}
      />
    );
  }
);

TableHead.displayName = "TableHead";

interface TableCellProps extends React.ComponentProps<"td"> {
  /** Whether this cell is interactive */
  interactive?: boolean;
  /** ARIA label for the cell */
  ariaLabel?: string;
  /** Role for the cell (defaults to cell) */
  role?: string;
  /** Whether this cell should be sticky */
  sticky?: boolean;
  /** Cell scope for accessibility */
  scope?: "col" | "row" | "colgroup" | "rowgroup";
  /** Whether to allow text wrapping */
  wrap?: boolean;
}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({
    className,
    interactive = false,
    ariaLabel,
    role = "cell",
    sticky = false,
    scope,
    wrap = false,
    ...props
  }, ref) => {
    return (
      <td
        ref={ref}
        data-slot="table-cell"
        data-interactive={interactive ? "true" : undefined}
        className={cn(
          "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
          {
            "whitespace-nowrap": !wrap,
            "whitespace-normal": wrap,
            "cursor-pointer hover:opacity-80 transition-opacity": interactive,
            "sticky top-0 z-10": sticky,
          },
          className,
        )}
        role={role}
        scope={scope}
        aria-label={ariaLabel}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      />
    );
  }
);

TableCell.displayName = "TableCell";

interface TableCaptionProps extends React.ComponentProps<"caption"> {
  /** ARIA label for the caption */
  ariaLabel?: string;
}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ariaLabel, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        data-slot="table-caption"
        className={cn("mt-4 text-muted-foreground text-sm", className)}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);

TableCaption.displayName = "TableCaption";

// Utility types for better TypeScript support
export type TableVariant = "default" | "data-table" | "compact";
export type SortDirection = "asc" | "desc" | null;

// Utility hook for table performance optimizations
export function useTablePerformance<T>(
  data: T[],
  options: {
    virtualizeThreshold?: number;
    enableVirtualization?: boolean;
    pageSize?: number;
  } = {}
) {
  const { virtualizeThreshold = 100, enableVirtualization = true, pageSize = 50 } = options;

  const shouldVirtualize = enableVirtualization && data.length > virtualizeThreshold;

  return {
    shouldVirtualize,
    recommendedPageSize: shouldVirtualize ? pageSize : undefined,
    performanceWarning: data.length > 1000 ? "Large dataset detected. Consider enabling virtualization or pagination." : undefined,
  };
}

// Utility hook for table accessibility
export function useTableAccessibility(
  options: {
    tableId?: string;
    caption?: string;
    totalRows?: number;
    totalColumns?: number;
  } = {}
) {
  const { tableId, caption, totalRows, totalColumns } = options;

  return {
    tableProps: {
      role: "table",
      'aria-label': caption || "Data table",
      'aria-rowcount': totalRows,
      'aria-colcount': totalColumns,
    },
    getRowProps: (rowIndex: number, isSelected?: boolean) => ({
      role: "row",
      'aria-rowindex': rowIndex + 1,
      'aria-selected': isSelected,
    }),
    getCellProps: (rowIndex: number, colIndex: number, isHeader?: boolean) => ({
      role: isHeader ? "columnheader" : "cell",
      'aria-rowindex': rowIndex + 1,
      'aria-colindex': colIndex + 1,
    }),
  };
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
