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

interface BrandSidebarProps {
  className?: string;
}

export function BrandSidebar({
  className,
}: BrandSidebarProps) {
  const pathname = usePathname();
  const { state, toggleSidebar, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Hover state management with smooth transitions
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const [hoverDisabled, setHoverDisabled] = React.useState(false);
  const [showContent, setShowContent] = React.useState(!isCollapsed);

  // Handle mouse enter - temporarily expand if collapsed and not mobile and not pinned and hover not disabled
  const handleMouseEnter = React.useCallback(() => {
    if (!isMobile && isCollapsed && !isPinned && !hoverDisabled) {
      setIsHovered(true);
      setShowContent(false); // Hide content immediately
      setOpen(true); // Use the proper hook to expand

      // Show content after sidebar has fully expanded
      setTimeout(() => {
        setShowContent(true);
      }, 400);
    }
  }, [isMobile, isCollapsed, isPinned, hoverDisabled, setOpen]);

  // Handle mouse leave - collapse back if not pinned and not mobile
  const handleMouseLeave = React.useCallback(() => {
    if (!isMobile && isHovered && !isPinned) {
      setIsHovered(false);
      // Hide content immediately, then collapse sidebar
      setShowContent(false);
      setOpen(false); // Use the proper hook to collapse
    }
  }, [isMobile, isHovered, isPinned, setOpen]);

  // Handle pin/unpin toggle
  const handlePinToggle = React.useCallback(() => {
    if (isPinned) {
      // Unpin - immediately collapse and disable hover temporarily
      setIsPinned(false);
      setIsHovered(false);
      setShowContent(false);
      setOpen(false);
      setHoverDisabled(true);
    } else {
      // Pin - keep open and disable hover behavior (push mode)
      setIsPinned(true);
      setIsHovered(false);
      setOpen(true);
      setShowContent(true);
    }
  }, [isPinned, setOpen]);

  // Re-enable hover after unpinning with proper cleanup
  React.useEffect(() => {
    if (hoverDisabled) {
      const timeoutId = setTimeout(() => {
        setHoverDisabled(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [hoverDisabled]);

  // Sync showContent with sidebar state when not hovering
  React.useEffect(() => {
    if (!isHovered) {
      setShowContent(!isCollapsed);
    }
  }, [isCollapsed, isHovered]);

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
    },
    {
      title: "Projects",
      href: "/projects",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Databases",
      href: "/databases",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 12a9 3 0 0 0 18 0" />
          <path d="M3 19a9 3 0 0 0 18 0" />
        </svg>
      ),
    },
    {
      title: "Tables",
      href: "/tables",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
        </svg>
      ),
      badge: {
        text: "Beta",
      },
    },
    {
      title: "AI",
      href: "/ai",
      icon: (
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      badge: {
        text: "Alpha",
      },
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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "h-full z-50",
        // Overlay mode when hovering (not pinned)
        isHovered && !isPinned && !isMobile && "sidebar-overlay-mode"
      )}
    >
      <Sidebar
        variant="sidebar"
        collapsible="icon"
      >
      <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
        <div className="p-1">
          <Logo collapsed={isCollapsed} inSidebar={true}/>
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-all duration-300 ease-in-out">
        {/* Search Section */}
        <SidebarGroup className="border-b border-sidebar-border">
          <SidebarGroupContent>
            <div className="relative overflow-hidden">
              {/* Collapsed: Search icon */}
              <div className={cn(
                "flex justify-center transition-all duration-300 ease-in-out",
                isCollapsed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
              )}>
                <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Expanded: Search input */}
              <div className={cn(
                "px-2 transition-all duration-300 ease-in-out",
                isCollapsed ? "opacity-0 translate-x-full absolute" : "opacity-100 translate-x-0"
              )}>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-3 pr-10"
                  />
                  <svg className="absolute top-2.5 right-3 size-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
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
                    onClick={() => {
                      // In demo context, prevent navigation and show tooltip
                      if (window.location.pathname.includes('/demo/')) {
                        // Just show the tooltip, don't navigate
                        return;
                      }
                    }}
                    isActive={
                      pathname === item.href ||
                      (item.href === "/" && (pathname === "/" || pathname === ""))
                    }
                    tooltip={item.title}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className={cn(
                      "transition-all duration-300 ease-in-out",
                      showContent ? "opacity-100" : "opacity-0"
                    )}>{item.badge.text}</SidebarMenuBadge>
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
                    onClick={() => {
                      // In demo context, prevent navigation and show tooltip
                      if (window.location.pathname.includes('/demo/')) {
                        // Just show the tooltip, don't navigate
                        return;
                      }
                    }}
                    isActive={
                      pathname === item.href ||
                      (item.href === "/" && (pathname === "/" || pathname === ""))
                    }
                    tooltip={item.title}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className={cn(
                      "transition-all duration-300 ease-in-out",
                      showContent ? "opacity-100" : "opacity-0"
                    )}>{item.badge.text}</SidebarMenuBadge>
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
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
                    </svg>
                    <span>Notifications</span>
                  </button>
                </SidebarMenuButton>
                <SidebarMenuBadge className={cn(
                  "transition-all duration-300 ease-in-out",
                  showContent ? "opacity-100" : "opacity-0"
                )}>3</SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Messages"
                >
                  <button>
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
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
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
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
              <div className="py-0 px-0">
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
                          <svg className="size-4 text-sidebar-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
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
                            >
                              {isPinned ? (
                                <>
                                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                  </svg>
                                  <span>Unpin</span>
                                </>
                              ) : (
                                <>
                                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                  </svg>
                                  <span>Pin</span>
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
    </div>
  );
}
