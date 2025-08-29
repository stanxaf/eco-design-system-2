import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const dataTablePagination = {
  name: "data-table-pagination",
  components: {
    Advanced: (
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
          {/* Top row: Items per page and total items */}
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

          {/* Separator */}
          <Separator className="my-0" />

          {/* Bottom row: Page indicator and navigation */}
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
    ),
  },
};
