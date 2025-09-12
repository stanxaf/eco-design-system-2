"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/logo";
import { Icons } from "@/components/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: {
    text: string;
  };
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function BrandSidebar({
  collapsed = false,
  onToggle,
  className,
}: SidebarProps) {
  const pathname = usePathname();
  const { state, toggleSidebar, setOpen } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Set sidebar to collapsed by default on component mount
  React.useEffect(() => {
    setOpen(false);
  }, []); // Empty dependency array - only run once on mount

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Icons.square />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <Icons.square />,
    },
    {
      title: "Databases",
      href: "/databases",
      icon: <Icons.square />,
    },
    {
      title: "Tables",
      href: "/tables",
      icon: <Icons.square />,
      badge: {
        text: "Beta",
      },
    },
    {
      title: "AI",
      href: "/ai",
      icon: <Icons.square />,
      badge: {
        text: "Alpha",
      },
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "/alerts",
      icon: <Icons.square />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <Icons.square />,
    },
    {
      title: "History",
      href: "/history",
      icon: <Icons.square />,
    },
    {
      title: "More",
      href: "/more",
      icon: <Icons.square />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarRail />
      <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
        <div className={cn(!isCollapsed ? "py-2 px-2" : "py-2 px-0")}>
          <Logo collapsed={isCollapsed} inSidebar={true}/>
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-all duration-200 ease-in-out">
        {/* Search Section */}
        <SidebarGroup className="border-b border-sidebar-border">
          <SidebarGroupContent>
            <div className="relative overflow-hidden">
              {/* Collapsed: Search icon */}
              <div className={cn(
                "flex justify-center transition-all duration-200 ease-in-out",
                isCollapsed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
              )}>
                <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
                  <Icons.search className="size-4" />
                </button>
              </div>

              {/* Expanded: Search input */}
              <div className={cn(
                "px-2 transition-all duration-200 ease-in-out",
                isCollapsed ? "opacity-0 translate-x-full absolute" : "opacity-100 translate-x-0"
              )}>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-3 pr-10"
                  />
                  <Icons.search className="absolute top-2.5 right-3 size-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (item.href === "/" && (pathname === "/" || pathname === ""))
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolsNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      pathname === item.href ||
                      (item.href === "/" && (pathname === "/" || pathname === ""))
                    }
                    tooltip={item.title}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Quick Actions - Above Avatar */}
      <div className="border-t border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Notifications"
                >
                  <button>
                    <Icons.bell />
                    <span>Notifications</span>
                  </button>
                </SidebarMenuButton>
                <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Messages"
                >
                  <button>
                    <Icons.envelope />
                    <span>Messages</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Apps"
                >
                  <button>
                    <Icons.grid />
                    <span>Apps</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>

      {/* Sidebar Footer - Sticky */}
      <div className="sticky z-10 bg-sidebar border-t border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className={cn(!isCollapsed ? "py-0 px-0" : "py-0 px-0")}>
              <div className="space-y-3">
                {/* User Info with Profile Popover */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="flex items-center space-x-2 w-full rounded-md hover:bg-sidebar-hover transition-colors">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <span className="text-xs font-medium">ME</span>
                        </AvatarFallback>
                      </Avatar>
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0 text-left">
                          <p className="text-sm font-medium text-sidebar-foreground truncate">User Name</p>
                          {/* <p className="text-xs text-sidebar-foreground truncate">user@example.com</p> */}
                        </div>
                      )}
                      {!isCollapsed && (
                        <Icons.ellipsis className="text-sidebar-foreground/60" />
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-60 p-0"
                    align="start"
                    side="right"
                    sideOffset={8}
                  >
                    {/* Profile Header */}
                    <div className="flex items-center space-x-2 p-2 border-b border-border">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <span className="text-sm font-medium">ME</span>
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">Full Name</p>
                        <p className="text-xs text-muted-foreground">user@example.com</p>
                      </div>
                    </div>

                    {/* Profile Menu Items */}
                    <div className="p-1">
                                             <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <Icons.user className="text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Account</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <Icons.creditCard className="text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Billing</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <Icons.bell className="text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Notifications</span>
                       </button>
                      <div className="border-t border-border my-1" />
                                             <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <Icons.rightFromBracket className="text-red-600 group-hover:text-white transition-colors" />
                         <span className="text-sm text-red-600 group-hover:text-white transition-colors">Log out</span>
                       </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pin Sidebar Toggle - Separate Group */}
        <div className="border-t border-sidebar-border">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={toggleSidebar}
                    tooltip={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                  >
                    {isCollapsed ? (
                      <>
                        <Icons.chevronRight />
                        <span>Expand sidebar</span>
                      </>
                    ) : (
                      <>
                        <Icons.chevronLeft />
                        <span>Collapse sidebar</span>
                      </>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </div>
    </Sidebar>
  );
}
