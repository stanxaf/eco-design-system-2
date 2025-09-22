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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

/**
 * Navigation item interface for the sidebar
 */
interface NavItem {
  /** Display title of the navigation item */
  title: string;
  /** URL path for navigation */
  href: string;
  /** React node containing the icon SVG */
  icon: React.ReactNode;
  /** Optional badge configuration */
  badge?: {
    /** Badge text content */
    text: string;
  };
}

/**
 * Props interface for the BrandSidebarStacked component
 */
interface BrandSidebarStackedProps {
  /** Additional CSS classes to apply to the component */
  className?: string;
  /** Optional user profile data */
  user?: {
    /** User's full name */
    name?: string;
    /** User's email address */
    email?: string;
    /** User's avatar initials */
    initials?: string;
  };
  /** Optional notification count */
  notificationCount?: number;
  /** Optional callback for navigation items */
  onNavigate?: (href: string) => void;
}

/**
 * BrandSidebarStacked - A fixed-width stacked sidebar component
 *
 * Features:
 * - Fixed 72px width with stacked icon and text layout
 * - Responsive design with mobile support
 * - Accessibility features including ARIA labels and keyboard navigation
 * - Theme support (light/dark mode)
 * - User profile integration with popover menu
 * - Notification system with badge indicators
 * - Production-ready with error handling
 *
 * @param props - Component props
 * @returns JSX element representing the stacked sidebar
 */
export function BrandSidebarStacked({
  className,
  user = {
    name: "Full Name",
    email: "user@example.com",
    initials: "ME",
  },
  notificationCount = 3,
  onNavigate,
}: BrandSidebarStackedProps) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Error boundary state
  const [hasError, setHasError] = React.useState(false);

  // Handle navigation with error handling
  const handleNavigation = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    try {
      // In demo context, prevent navigation
      if (typeof window !== 'undefined' && window.location.pathname.includes('/demo/')) {
        e.preventDefault();
        return;
      }

      // Call custom navigation handler if provided
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
        return;
      }

      // Default navigation behavior
    } catch (error) {
      console.error('Navigation error:', error);
      setHasError(true);
    }
  }, [onNavigate]);

  // Handle profile menu actions
  const handleProfileAction = React.useCallback((action: string) => {
    try {
      console.log(`Profile action: ${action}`);
      // Implement profile actions here
    } catch (error) {
      console.error('Profile action error:', error);
      setHasError(true);
    }
  }, []);

  // Reset error state on component mount
  React.useEffect(() => {
    setHasError(false);
  }, []);


  // Main navigation items configuration
  const mainNavItems: NavItem[] = React.useMemo(() => [
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
      title: "Assets",
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
  ], []); // Empty dependency array since nav items are static


  // Error boundary fallback
  if (hasError) {
    return (
      <div className="h-full z-50 bg-sidebar border-r border-sidebar-border w-[72px] flex items-center justify-center">
        <div className="text-sidebar-foreground text-xs text-center p-2">
          Error loading sidebar
        </div>
      </div>
    );
  }

  return (
    <div className={cn("h-full z-50", className)} role="navigation" aria-label="Main navigation">
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        width="72px"
        widthIcon="72px"
      >
      <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
        <div className="py-2 px-2" role="banner">
          <Logo collapsed={isCollapsed} inSidebar={true} />
        </div>
      </SidebarHeader>

      <SidebarContent className="transition-all duration-200 ease-in-out">
        {/* Main Navigation Items */}
        <SidebarGroup role="menubar" aria-label="Main navigation">
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href ||
                  (item.href === "/" && (pathname === "/" || pathname === ""));

                return (
                  <SidebarMenuItem key={item.href} role="none">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={cn(
                        "flex flex-col items-center justify-center gap-1 w-full h-12 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground"
                      )}
                      title={item.title}
                      role="menuitem"
                      aria-current={isActive ? "page" : undefined}
                      aria-label={item.title}
                      tabIndex={0}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      <span className="text-center text-[8px] truncate w-full" aria-hidden="true">
                        {item.title}
                      </span>
                    </a>
                    {item.badge && (
                      <SidebarMenuBadge aria-label={`${item.title} has ${item.badge.text} notifications`}>
                        {item.badge.text}
                      </SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Quick Actions Section */}
      <div className="border-t border-sidebar-border" role="toolbar" aria-label="Quick actions">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem role="none">
                <SidebarMenuButton
                  asChild
                  tooltip={`Notifications (${notificationCount})`}
                  className="w-full h-10 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-10!"
                >
                  <button
                    className="w-full focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                    aria-label={`View notifications (${notificationCount} unread)`}
                    onClick={() => handleProfileAction('notifications')}
                  >
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
                      </svg>
                    </div>
                  </button>
                </SidebarMenuButton>
                <SidebarMenuBadge aria-label={`${notificationCount} unread notifications`}>
                  {notificationCount}
                </SidebarMenuBadge>
              </SidebarMenuItem>
              <SidebarMenuItem role="none">
                <SidebarMenuButton
                  asChild
                  tooltip="Messages"
                  className="w-full h-10 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-10!"
                >
                  <button
                    className="w-full focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                    aria-label="View messages"
                    onClick={() => handleProfileAction('messages')}
                  >
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem role="none">
                <SidebarMenuButton
                  asChild
                  tooltip="Apps"
                  className="w-full h-10 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-10!"
                >
                  <button
                    className="w-full focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                    aria-label="View applications"
                    onClick={() => handleProfileAction('apps')}
                  >
                    <div className="flex items-center justify-center w-full h-8">
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

        {/* User Profile Section - Sticky Footer */}
        <div className="sticky z-10 bg-sidebar border-t border-sidebar-border">
          <SidebarGroup>
            <SidebarGroupContent>
              <div className="py-0 px-0">
                <div className="space-y-3">
                  {/* User Profile with Popover Menu */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className="flex items-center justify-center w-full h-8 rounded-md hover:bg-sidebar-hover transition-colors focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                        aria-label={`User profile menu for ${user.name}`}
                        aria-haspopup="menu"
                      >
                        <Avatar className="size-6">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span className="text-xs font-medium" aria-hidden="true">{user.initials}</span>
                          </AvatarFallback>
                        </Avatar>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-60 p-0"
                      align="start"
                      side="right"
                      sideOffset={8}
                      role="menu"
                      aria-label="User profile menu"
                    >
                      {/* Profile Header */}
                      <div className="flex items-center space-x-2 p-2 border-b border-border">
                        <Avatar className="size-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span className="text-sm font-medium" aria-hidden="true">{user.initials}</span>
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>

                      {/* Profile Menu Items */}
                      <div className="p-1" role="menu">
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction('account')}
                        >
                          <svg className="size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">Account</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction('billing')}
                        >
                          <svg className="size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-6 4h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">Billing</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction('notifications')}
                        >
                          <svg className="size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z" />
                          </svg>
                          <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">Notifications</span>
                        </button>
                        <div className="border-t border-border my-1" role="separator" />
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction('logout')}
                        >
                          <svg className="size-4 text-destructive group-hover:text-accent-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          <span className="text-sm text-destructive group-hover:text-accent-foreground transition-colors">Log out</span>
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </Sidebar>
    </div>
  );
}
