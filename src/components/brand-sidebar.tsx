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
  
  // Hover state management
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const [hoverDisabled, setHoverDisabled] = React.useState(false);
  
  // Handle mouse enter - temporarily expand if collapsed and not mobile and not pinned and hover not disabled
  const handleMouseEnter = React.useCallback(() => {
    if (!isMobile && isCollapsed && !isPinned && !hoverDisabled) {
      setIsHovered(true);
      setOpen(true); // Use the proper hook to expand
    }
  }, [isMobile, isCollapsed, isPinned, hoverDisabled, setOpen]);

  // Handle mouse leave - collapse back if not pinned and not mobile
  const handleMouseLeave = React.useCallback(() => {
    if (!isMobile && isHovered && !isPinned) {
      setIsHovered(false);
      setOpen(false); // Use the proper hook to collapse
    }
  }, [isMobile, isHovered, isPinned, setOpen]);

  // Handle pin/unpin toggle
  const handlePinToggle = React.useCallback(() => {
    if (isPinned) {
      // Unpin - immediately collapse and disable hover temporarily
      setIsPinned(false);
      setIsHovered(false);
      setOpen(false);
      setHoverDisabled(true);
    } else {
      // Pin - keep open and disable hover behavior (push mode)
      setIsPinned(true);
      setIsHovered(false);
      setOpen(true);
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
        <div className="py-2 px-2">
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
                              onClick={handlePinToggle}
                              tooltip={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
                            >
                              {isPinned ? (
                                <>
                                  <Icons.bookmark />
                                  <span>Unpin</span>
                                </>
                              ) : (
                                <>
                                  <Icons.bookmark />
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
