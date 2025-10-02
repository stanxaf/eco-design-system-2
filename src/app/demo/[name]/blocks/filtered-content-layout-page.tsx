"use client";

/**
 * Filtered Content Layout Page Component
 *
 * A two-panel layout with filtering capabilities:
 * - Header with breadcrumbs for navigation
 * - Left panel (30%): Filter controls and search options
 * - Right panel (70%): Filtered content results
 * - Responsive design - panels stack vertically on mobile
 * - Uses Panel component from the design system
 *
 * This component provides a flexible foundation for applications
 * that need filtering capabilities like search results, product catalogs,
 * data tables, or any content that requires filtering and sorting.
 *
 * @returns JSX element with filtered content layout
 */
import { Panel } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset } from "@/components/ui/sidebar";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/sonner";
import { Inbox } from "lucide-react";
import { useState } from "react";

export default function FilteredContentLayoutPage() {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header with breadcrumbs */}
      <Header
        leftContent={
          <div className="flex items-center space-x-2">
            <Button
              variant={isLeftPanelOpen ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setIsLeftPanelOpen(!isLeftPanelOpen)}
            >
              <Inbox className="h-4 w-4" />
            </Button>
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground">Home</span>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-sm font-medium">Filtered Content</span>
            </div>
          </div>
        }
        rightContent={<Button variant="outline">Export Results</Button>}
      />

      {/* Two Panel Layout */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Left Panel - Filters & Controls (max 280px width) */}
        <div
          className={`transition-all duration-300 ease-in-out ${isLeftPanelOpen ? "w-full md:max-w-[280px] md:w-[280px] opacity-100" : "w-0 max-w-0 opacity-0 overflow-hidden"}`}
        >
          <Panel
            size="fit"
            responsive={{ md: "fit" }}
            title="Filters & Controls"
            height="full"
            className="w-full md:max-w-[280px] md:w-[280px] flex-shrink-0"
            footer={
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-muted-foreground">
                    5 items selected
                  </span>
                  <svg
                    className="w-3 h-3 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
                <Button variant="ghost" size="sm">
                  Clear filter
                </Button>
              </div>
            }
          >
            <div className="space-y-6 pb-4">
              {/* Search Input */}
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Input
                    id="search"
                    placeholder="Search"
                    className="w-full pr-8"
                  />
                  <svg
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* State Selection */}
              <div className="space-y-2">
                <Label>State</Label>
                <Select defaultValue="iowa">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iowa">Iowa</SelectItem>
                    <SelectItem value="illinois">Illinois</SelectItem>
                    <SelectItem value="indiana">Indiana</SelectItem>
                    <SelectItem value="ohio">Ohio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Target Persona */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Target Persona</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ag-tech-leader" defaultChecked />
                    <Label htmlFor="ag-tech-leader" className="text-sm">
                      Ag Tech Leader
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="brand-loyalist" />
                    <Label htmlFor="brand-loyalist" className="text-sm">
                      Brand Loyalist
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sustainable-fashion" />
                    <Label htmlFor="sustainable-fashion" className="text-sm">
                      Sustainable Fashion Advocate
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="digital-marketing" />
                    <Label htmlFor="digital-marketing" className="text-sm">
                      Digital Marketing Innovator
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remote-work" />
                    <Label htmlFor="remote-work" className="text-sm">
                      Remote Work Enthusiast
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="health-wellness" />
                    <Label htmlFor="health-wellness" className="text-sm">
                      Health and Wellness Guru
                    </Label>
                  </div>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Preferred Contact Method
                </Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="phone" defaultChecked />
                    <Label htmlFor="phone" className="text-sm">
                      Phone number
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email" />
                    <Label htmlFor="email" className="text-sm">
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="company" />
                    <Label htmlFor="company" className="text-sm">
                      Company name
                    </Label>
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Role</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="manager">Farm Manager</SelectItem>
                    <SelectItem value="consultant">
                      Agricultural Consultant
                    </SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Planted Area */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Planted Area</Label>

                <div className="space-y-2">
                  <Label className="text-sm">Crop</Label>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Crops</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="soybeans">Soybeans</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Acres Planted</Label>
                  <div className="px-2">
                    <div className="text-sm text-muted-foreground mb-2">
                      100 to 250
                    </div>
                    <Slider
                      defaultValue={[100, 250]}
                      max={500}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Farm Revenue */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Farm Revenue</Label>

                <div className="space-y-2">
                  <Label className="text-sm">Revenue Type</Label>
                  <Select defaultValue="total">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="total">Total</SelectItem>
                      <SelectItem value="gross">Gross</SelectItem>
                      <SelectItem value="net">Net</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Revenue Range</Label>
                  <div className="px-2">
                    <div className="text-sm text-muted-foreground mb-2">
                      100 to 600
                    </div>
                    <Slider
                      defaultValue={[100, 600]}
                      max={1500}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>1500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Farm Manager Type */}
              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Farm Manager Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Farm Manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner-operator">
                      Owner/Operator
                    </SelectItem>
                    <SelectItem value="hired-manager">Hired Manager</SelectItem>
                    <SelectItem value="family-member">Family Member</SelectItem>
                    <SelectItem value="consultant">Consultant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gross Farm Income */}
              <div className="space-y-4">
                <Label className="text-base font-medium">
                  Gross Farm Income
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-sm">Min.</Label>
                    <div className="relative">
                      <Input type="number" placeholder="0" className="pr-12" />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                        USD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-sm">Max.</Label>
                    <div className="relative">
                      <Input type="number" placeholder="0" className="pr-12" />
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                        USD
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Filter Button */}
              <Button className="w-full">Apply Filter</Button>
            </div>
          </Panel>
        </div>

        {/* Right Panel - Content Results (70% width) */}
        <Panel
          size="full"
          responsive={{ md: "full" }}
          title="Content Results"
          height="full"
          className="w-full md:w-[70%] flex-1"
          borderRight={false}
          footer={
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-muted-foreground">
                Showing 1-10 of 47 results
              </span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          }
        >
          {/* Content area - ready for your filtered results */}
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Content area - ready for your filtered results</p>
          </div>
        </Panel>
      </div>
      <Toaster />
    </div>
  );
}
