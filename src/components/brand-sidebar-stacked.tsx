"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

  // Account switching state
  const [isSwitchAccountOpen, setIsSwitchAccountOpen] = React.useState(false);
  const [currentAccount, setCurrentAccount] = React.useState({
    name: "Sarah Chen",
    email: "sarah.chen@dtn.com",
    company: "DTN",
    role: "Senior Product Manager",
    initials: "SC",
  });

  // Profile popover state
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  // Apps dropdown state
  const [isAppsOpen, setIsAppsOpen] = React.useState(false);

  // DTN Products data
  const dtnProducts = [
    {
      id: "1",
      name: "Weather Hub",
      description: "Weather forecasting and analytics",
      icon: "cloud-sun",
    },
    {
      id: "2",
      name: "Fuel Hub",
      description: "Fuel price tracking and procurement",
      icon: "gas-pump",
    },
    {
      id: "3",
      name: "Identity Management",
      description: "User access and permissions",
      icon: "shield-halved",
    },
  ];

  // All accounts data (including current)
  const allAccounts = [
    { id: "1", company: "DTN", isCurrent: true },
    { id: "2", company: "Acme Co.", isCurrent: false },
    { id: "3", company: "Biffco Enterprises Ltd.", isCurrent: false },
  ];

  // Handle navigation with error handling
  const handleNavigation = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      try {
        // In demo context, prevent navigation
        if (
          typeof window !== "undefined" &&
          window.location.pathname.includes("/demo/")
        ) {
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
        console.error("Navigation error:", error);
        setHasError(true);
      }
    },
    [onNavigate],
  );

  // Handle profile menu actions
  const handleProfileAction = React.useCallback((action: string) => {
    try {
      // Implement profile actions here
    } catch (error) {
      console.error("Profile action error:", error);
      setHasError(true);
    }
  }, []);

  // Handle account switching
  const handleAccountSwitch = React.useCallback(
    (account: { id: string; company: string; isCurrent: boolean }) => {
      // Update current account with new company context
      setCurrentAccount((prev) => ({
        ...prev,
        company: account.company,
        // Role would be updated based on the selected account
        role:
          account.company === "Acme Co."
            ? "Operations Manager"
            : account.company === "Biffco Enterprises Ltd."
              ? "Business Analyst"
              : "Senior Product Manager",
      }));
      setIsSwitchAccountOpen(false);
    },
    [],
  );

  // Handle app selection
  const handleAppSelect = React.useCallback(
    (app: { id: string; name: string; description: string; icon: string }) => {
      setIsAppsOpen(false);
      console.log(`Selected app: ${app.name}`);
    },
    [],
  );

  // Reset error state on component mount
  React.useEffect(() => {
    setHasError(false);
  }, []);

  // Main navigation items configuration
  const mainNavItems: NavItem[] = React.useMemo(
    () => [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: (
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
            />
          </svg>
        ),
      },
      {
        title: "Map",
        href: "/map",
        icon: (
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        ),
      },
      {
        title: "Assets",
        href: "/assets",
        icon: (
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        ),
      },
      {
        title: "Events",
        href: "/events",
        icon: (
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
      },
    ],
    [],
  ); // Empty dependency array since nav items are static

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
    <div
      className={cn("h-full z-50", className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <Sidebar
        variant="sidebar"
        collapsible="icon"
        width="72px"
        widthIcon="72px"
      >
        <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
          <div className="py-2 px-2" role="banner">
            <Logo />
          </div>
        </SidebarHeader>

        <SidebarContent className="transition-all duration-200 ease-in-out">
          {/* Main Navigation Items */}
          <SidebarGroup role="menubar" aria-label="Main navigation">
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href === "/" &&
                      (pathname === "/" || pathname === ""));

                  return (
                    <SidebarMenuItem key={item.href} role="none">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className={cn(
                          "flex flex-col items-center justify-center gap-1 w-full h-12 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "text-sidebar-foreground",
                        )}
                        title={item.title}
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        aria-label={item.title}
                        tabIndex={0}
                      >
                        <span aria-hidden="true">{item.icon}</span>
                        <span
                          className="text-center text-[8px] truncate w-full"
                          aria-hidden="true"
                        >
                          {item.title}
                        </span>
                      </a>
                      {item.badge && (
                        <SidebarMenuBadge
                          aria-label={`${item.title} has ${item.badge.text} notifications`}
                        >
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
        <div
          className="border-t border-sidebar-border"
          role="toolbar"
          aria-label="Quick actions"
        >
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
                      onClick={() => handleProfileAction("notifications")}
                    >
                      <div className="flex items-center justify-center w-full h-8">
                        <svg
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z"
                          />
                        </svg>
                      </div>
                    </button>
                  </SidebarMenuButton>
                  <SidebarMenuBadge
                    aria-label={`${notificationCount} unread notifications`}
                  >
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
                      onClick={() => handleProfileAction("messages")}
                    >
                      <div className="flex items-center justify-center w-full h-8">
                        <svg
                          className="size-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem role="none">
                  <Popover open={isAppsOpen} onOpenChange={setIsAppsOpen}>
                    <PopoverTrigger asChild>
                      <SidebarMenuButton
                        asChild
                        tooltip="Apps"
                        className="w-full h-10 group-data-[collapsible=icon]:w-full! group-data-[collapsible=icon]:h-10!"
                      >
                        <button
                          className="w-full focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                          aria-label="View applications"
                        >
                          <div className="flex items-center justify-center w-full h-8">
                            <svg
                              className="size-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              />
                            </svg>
                          </div>
                        </button>
                      </SidebarMenuButton>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-60 p-0"
                      align="start"
                      side="right"
                      sideOffset={8}
                    >
                      {/* Apps Header */}
                      <div className="p-3 border-b border-border">
                        <h3 className="text-sm font-medium text-foreground">
                          Your Products
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Products you have access to under{" "}
                          {currentAccount.company}
                        </p>
                      </div>

                      {/* Apps List */}
                      <div className="p-1">
                        {dtnProducts.map((app) => (
                          <button
                            key={app.id}
                            onClick={() => handleAppSelect(app)}
                            className="flex items-center space-x-3 w-full p-2 pl-0 rounded-md hover:bg-accent transition-colors text-left group"
                          >
                            <i
                              className={`fa-solid fa-${app.icon} text-lg text-muted-foreground group-hover:text-accent-foreground transition-colors`}
                            ></i>
                            <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground transition-colors">
                              {app.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
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
                  <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                    <PopoverTrigger asChild>
                      <button
                        className="flex items-center justify-center w-full h-8 rounded-md hover:bg-sidebar-hover transition-colors focus:outline-none focus:ring-2 focus:ring-sidebar-ring focus:ring-offset-2 focus:ring-offset-sidebar"
                        aria-label={`User profile menu for ${user.name}`}
                        aria-haspopup="menu"
                      >
                        <Avatar className="size-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=24&h=24&fit=crop&crop=face"
                            alt={currentAccount.name}
                          />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span
                              className="text-xs font-medium"
                              aria-hidden="true"
                            >
                              {currentAccount.initials}
                            </span>
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
                      <div className="flex flex-col space-y-2 p-3 border-b border-border">
                        <Avatar className="size-12">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face"
                            alt={currentAccount.name}
                          />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span
                              className="text-sm font-medium"
                              aria-hidden="true"
                            >
                              {currentAccount.initials}
                            </span>
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {currentAccount.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {currentAccount.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {currentAccount.company} • {currentAccount.role}
                          </p>
                        </div>
                      </div>

                      {/* Profile Menu Items */}
                      <div className="p-1" role="menu">
                        {/* Switch Account - Collapsible */}
                        <Collapsible
                          open={isSwitchAccountOpen}
                          onOpenChange={setIsSwitchAccountOpen}
                        >
                          <CollapsibleTrigger asChild>
                            <button
                              className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                              role="menuitem"
                            >
                              <svg
                                className="size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
                                />
                              </svg>
                              <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">
                                Switch Account
                              </span>
                              <svg
                                className={cn(
                                  "size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors ml-auto",
                                  isSwitchAccountOpen && "rotate-180",
                                )}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-1 m-0.5">
                            {allAccounts.map((account) => (
                              <button
                                key={account.id}
                                onClick={() => handleAccountSwitch(account)}
                                className={cn(
                                  "flex items-center space-x-2 w-full p-2 rounded-md transition-colors text-left group m-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                                  account.isCurrent
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-accent hover:text-accent-foreground",
                                )}
                                role="menuitem"
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm transition-colors">
                                    {account.company}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Other Menu Items */}
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction("settings")}
                        >
                          <svg
                            className="size-4 text-muted-foreground group-hover:text-accent-foreground transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm text-foreground group-hover:text-accent-foreground transition-colors">
                            Settings
                          </span>
                        </button>
                        <div
                          className="border-t border-border my-1"
                          role="separator"
                        />
                        <button
                          className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          role="menuitem"
                          onClick={() => handleProfileAction("logout")}
                        >
                          <svg
                            className="size-4 text-destructive group-hover:text-accent-foreground transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span className="text-sm text-destructive group-hover:text-accent-foreground transition-colors">
                            Log out
                          </span>
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
