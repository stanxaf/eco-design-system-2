import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface DataTablePaginationProps {
  className?: string;
  variant?: "advanced" | "basic";
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  itemsPerPageOptions?: number[];
}

function DataTablePagination({
  className,
  variant = "advanced",
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
  ...props
}: DataTablePaginationProps) {
  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = parseInt(e.target.value);
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePageInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = parseInt(e.currentTarget.value);
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    const newItemsPerPage = parseInt(value);
    onItemsPerPageChange(newItemsPerPage);
    // Reset to page 1 when changing items per page
    onPageChange(1);
  };

  return (
    <div
      data-slot="data-table-pagination"
      className={cn("w-full", className)}
      {...props}
    >
      {variant === "basic" ? (
        /* Compact Layout */
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-muted-foreground">
            {totalItems} items
          </span>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="default"
                onClick={handlePreviousPage}
                disabled={currentPage <= 1}
                aria-label="Go to previous page"
              >
                <ChevronLeftIcon className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="default"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                aria-label="Go to next page"
              >
                <ChevronRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                  <SelectTrigger className="w-[160px]" size="default">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {itemsPerPageOptions.map((option) => (
                      <SelectItem key={option} value={option.toString()}>
                        {option} items per page
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-muted-foreground">
                {totalItems.toLocaleString()} total items
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Page</span>
                <Input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={handlePageInputChange}
                  onKeyDown={handlePageInputKeyDown}
                  className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  aria-label="Current page number"
                />
                <span className="text-sm text-muted-foreground">of {totalPages}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="default"
                  onClick={handlePreviousPage}
                  disabled={currentPage <= 1}
                  aria-label="Go to previous page"
                >
                  <ChevronLeftIcon className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                  aria-label="Go to next page"
                >
                  <ChevronRightIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            {/* Top row: Items per page and total items */}
            <div className="flex items-center justify-between">
              <Select value={itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-[140px]" size="default">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {itemsPerPageOptions.map((option) => (
                    <SelectItem key={option} value={option.toString()}>
                      {option} items per page
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">
                {totalItems.toLocaleString()} total items
              </span>
            </div>

            {/* Separator */}
            <Separator className="my-0" />

            {/* Bottom row: Page indicator and navigation */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Page</span>
                <Input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={currentPage}
                  onChange={handlePageInputChange}
                  onKeyDown={handlePageInputKeyDown}
                  className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  aria-label="Current page number"
                />
                <span className="text-sm text-muted-foreground">of {totalPages}</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="default"
                  onClick={handlePreviousPage}
                  disabled={currentPage <= 1}
                  aria-label="Go to previous page"
                >
                  <ChevronLeftIcon className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                  aria-label="Go to next page"
                >
                  <ChevronRightIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { DataTablePagination };
export type { DataTablePaginationProps };
