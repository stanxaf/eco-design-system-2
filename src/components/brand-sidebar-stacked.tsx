"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/logo";
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

interface BrandSidebarStackedProps {
  className?: string;
}

export function BrandSidebarStacked({
  className,
}: BrandSidebarStackedProps) {
  const pathname = usePathname();
  const { state, toggleSidebar, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";
  
  // Pin state management
  const [isPinned, setIsPinned] = React.useState(false);
  
  // Handle pin/unpin toggle
  const handlePinToggle = React.useCallback(() => {
    if (isPinned) {
      // Unpin - collapse the sidebar
      setIsPinned(false);
      setOpen(false);
    } else {
      // Pin - keep open
      setIsPinned(true);
      setOpen(true);
    }
  }, [isPinned, setOpen]);

  const mainNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
    },
    {
      title: "Map",
      href: "/map",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "Assets & Alerts",
      href: "/assets",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
    },
    {
      title: "Events",
      href: "/events",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "/alerts",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
        </svg>
      ),
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "History",
      href: "/history",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "More",
      href: "/more",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="h-full z-50">
      <Sidebar 
        variant="sidebar" 
        collapsible="icon"
      >
      <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
        <div className="py-2 px-2">
          <Logo collapsed={isCollapsed} inSidebar={true}/>
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-all duration-200 ease-in-out">
        {/* Main Nav Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      // In demo context, prevent navigation and show tooltip
                      if (window.location.pathname.includes('/demo/')) {
                        e.preventDefault();
                        return;
                      }
                    }}
                    className={cn(
                      "flex flex-col items-center justify-center gap-1 w-full h-12 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer",
                      pathname === item.href ||
                        (item.href === "/" && (pathname === "/" || pathname === ""))
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : ""
                    )}
                    title={item.title}
                  >
                    {item.icon}
                    <span className="text-center text-[10px] truncate w-full">{item.title}</span>
                  </a>
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
                  className="w-full h-12 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-12!"
                >
                  <button className="w-full">
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
                      </svg>
                    </div>
                  </button>
                </SidebarMenuButton>
                <SidebarMenuBadge>3</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Messages"
                  className="w-full h-12 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-12!"
                >
                  <button className="w-full">
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Apps"
                  className="w-full h-12 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-12!"
                >
                  <button className="w-full">
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
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
              <div className="py-0 px-0">
                <div className="space-y-3">
                  {/* User Info with Profile Popover */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center justify-center w-full h-8 rounded-md hover:bg-sidebar-hover transition-colors">
                        <Avatar className="size-6">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span className="text-xs font-medium">ME</span>
                          </AvatarFallback>
                        </Avatar>
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
                         <svg className="size-4 text-muted-foreground group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                         </svg>
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Account</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <svg className="size-4 text-muted-foreground group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-6 4h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                         </svg>
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Billing</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <svg className="size-4 text-muted-foreground group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
                         </svg>
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Notifications</span>
                       </button>
                      <div className="border-t border-border my-1" />
                                             <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <svg className="size-4 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                         </svg>
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
                              onClick={handlePinToggle}
                              tooltip={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
                              className="w-full h-12 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-12!"
                            >
                              <div className="flex items-center justify-center w-full h-8">
                                {isPinned ? (
                                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                  </svg>
                                ) : (
                                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                  </svg>
                                )}
                              </div>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </div>
        </div>
      </Sidebar>
    </div>
  );
}
