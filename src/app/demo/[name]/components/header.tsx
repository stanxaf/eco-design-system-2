import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, Settings, Menu, PanelLeft, Inbox, PanelRight } from "lucide-react";

export const header = {
  name: "header",
  components: {
    "Basic with Breadcrumbs": (
      <Header
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Weather Dashboard", href: "/dashboard" }
        ]}
        rightContent={<Button variant="secondary">Secondary</Button>}
      />
    ),
    "Panel Controls": (
      <Header
        leftContent={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Inbox className="w-4 h-4" />
            </Button>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Weather Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        }
        rightContent={
          <Button variant="ghost" size="icon">
            <PanelRight className="w-4 h-4" />
          </Button>
        }
      />
    ),
    "Custom Left Content": (
      <Header
        leftContent={
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Inbox className="w-4 h-4" />
            </Button>
            <span className="font-medium">Custom Title</span>
          </div>
        }
        rightContent={
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        }
      />
    ),
    "Minimal Header": (
      <Header
        leftContent={<span className="font-medium">Simple Header</span>}
        rightContent={<Button variant="ghost" size="sm">Action</Button>}
      />
    ),
    "Multiple Actions": (
      <Header
        breadcrumbs={[
          { label: "Projects" },
          { label: "Weather App" },
          { label: "Dashboard" }
        ]}
        rightContent={
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-border" />
            <Button variant="outline" size="sm">Share</Button>
            <Button variant="outline" size="sm">Export</Button>
            <Button variant="secondary" size="sm">Save</Button>
          </div>
        }
      />
    ),
  },
};
