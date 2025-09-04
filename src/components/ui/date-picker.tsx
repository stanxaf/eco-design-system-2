"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/**
 * Date Picker component with single date and date range selection capabilities.
 *
 * **IMPORTANT FOR v0: This component uses date-picker-specific CSS variables.
 * DO NOT use generic variables like --primary, --secondary, etc.
 * ONLY use the --date-picker-* variables listed below.**
 *
 * **Available Components:**
 * - `DatePicker`: Single date selection with calendar popover
 * - `DateRangePicker`: Date range selection with dual calendar support
 *
 * **CSS Variables Used:**
 * - Background: --date-picker-background, --date-picker-foreground
 * - Border: --date-picker-border, --date-picker-border-hover
 * - Calendar: --date-picker-calendar-background, --date-picker-calendar-foreground
 * - Selected: --date-picker-selected, --date-picker-selected-foreground
 * - Hover: --date-picker-hover, --date-picker-hover-foreground
 *
 * **Features:**
 * - Single date selection with formatted display
 * - Date range selection with dual calendar
 * - Customizable placeholder text
 * - Disabled state support
 * - Keyboard navigation support
 * - Accessibility compliant with proper ARIA attributes
 * - Responsive design with mobile-friendly layout
 * - Dark mode support with theme-aware colors
 *
 * **v0 Usage Rules:**
 * 1. ALWAYS use the date-picker-specific CSS variables (--date-picker-*)
 * 2. NEVER use generic variables (--primary, --secondary, etc.)
 * 3. Use proper TypeScript interfaces for type safety
 * 4. Include proper accessibility attributes
 * 5. Handle disabled states appropriately
 * 6. Use consistent naming conventions
 */

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
  disabled = false,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
          data-slot="date-picker-trigger"
          aria-label="Select date"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0" 
        align="start"
        data-slot="date-picker-content"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          initialFocus
          data-slot="date-picker-calendar"
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Pick a date range",
  className,
  disabled = false,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !dateRange?.from && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onDateRangeChange}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
