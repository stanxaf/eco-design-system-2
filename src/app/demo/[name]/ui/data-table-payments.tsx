"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DataTable,
  createActionsColumn,
  createRowSelectionColumn,
  createSortableHeader,
} from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  createRowSelectionColumn<Payment>(),
  {
    accessorKey: "status",
    header: ({ column }) => createSortableHeader(column, "Status"),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => createSortableHeader(column, "Email"),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="flex items-center justify-end gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <span>Amount</span>
        {(() => {
          const sortState = column.getIsSorted();
          if (sortState === "asc") {
            return <ArrowUp className="h-4 w-4" />;
          } else if (sortState === "desc") {
            return <ArrowDown className="h-4 w-4" />;
          }
          return null; // No icon when not sorted
        })()}
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  createActionsColumn<Payment>((row) => {
    const payment = row.original;
    return (
      <>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(payment.id)}
        >
          Copy payment ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View customer</DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </>
    );
  }),
];

export function FinanceDataTable() {
  const handleBulkExport = (selectedRows: Payment[]) => {
    console.log("Exporting selected rows:", selectedRows);
    // Implement export logic here
  };

  const handleBulkDelete = (selectedRows: Payment[]) => {
    console.log("Deleting selected rows:", selectedRows);
    // Implement delete logic here
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      globalSearch={true}
      showColumnVisibility={true}
      showRowSelection={true}
      showBulkActions={true}
      bulkActions={{
        onExport: handleBulkExport,
        onDelete: handleBulkDelete,
      }}
      paginationVariant="advanced"
      itemsPerPageOptions={[5, 10, 25, 50]}
    />
  );
}
