"use client";

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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

// Custom NavItem component for semantic navigation
interface NavItemProps {
  href: string;
  isActive?: boolean;
  tooltip?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function NavItem({ href, isActive = false, tooltip, className, onClick, children, style }: NavItemProps) {
  const { isMobile, state } = useSidebar();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // In demo context, prevent navigation and show tooltip
    if (window.location.pathname.includes("/demo/")) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e as any);
    }
  };

  const navLink = (
    <a
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md h-8 px-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:h-8! group-data-[collapsible=icon]:px-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        isActive && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
        className
      )}
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size="default"
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      role="menuitem"
      tabIndex={0}
      style={style}
    >
      {children}
    </a>
  );

  if (!tooltip) {
    return navLink;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{navLink}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}

// Custom NavButton component for non-navigation actions (like dropdowns)
interface NavButtonProps {
  tooltip?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  'aria-label'?: string;
  'aria-pressed'?: boolean;
}

function NavButton({ tooltip, className, onClick, children, 'aria-label': ariaLabel, 'aria-pressed': ariaPressed }: NavButtonProps) {
  const { isMobile, state } = useSidebar();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  const navButton = (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md h-8 px-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:h-8! group-data-[collapsible=icon]:px-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size="default"
      role="menuitem"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );

  if (!tooltip) {
    return navButton;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{navButton}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
      >
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
}


// Profile Menu Header Component
interface ProfileMenuHeaderProps {
  name: string;
  email: string;
  company: string;
  role: string;
  avatar: {
    src: string;
    alt: string;
    initials: string;
  };
}

function ProfileMenuHeader({ name, email, company, role, avatar }: ProfileMenuHeaderProps) {
  return (
    <div className="flex flex-col items-start text-left px-2 py-1.5">
      <Avatar className="size-10 mb-2">
        <AvatarImage
          src={avatar.src}
          alt={avatar.alt}
        />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-sm font-medium">
            {avatar.initials}
          </span>
        </AvatarFallback>
      </Avatar>
      <div className="w-full">
        <p className="truncate font-semibold" id="profile-name">
          {name}
        </p>
        <small className="mb-1 text-muted-foreground truncate" id="profile-email">
          {email}
        </small>
        <div className="mb-1 text-muted-foreground">
          <small>{company}</small>
          <span className="mx-1">•</span>
          <small>{role}</small>
        </div>
      </div>
    </div>
  );
}

export function BrandSidebar({ className }: BrandSidebarProps) {
  const pathname = usePathname();
  const { state, toggleSidebar, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Hover state management with smooth transitions
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const [hoverDisabled, setHoverDisabled] = React.useState(false);
  const [showContent, setShowContent] = React.useState(!isCollapsed);

  // Account switching state
  const [isSwitchAccountOpen, setIsSwitchAccountOpen] = React.useState(false);
  const [currentAccount, setCurrentAccount] = React.useState({
    name: "Sarah Chen",
    email: "sarah.chen@dtn.com",
    company: "DTN",
    role: "Senior Product Manager",
    initials: "SC",
  });

  // Profile dropdown state
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

  // All accounts data
  const allAccounts = [
    { id: "1", company: "DTN" },
    { id: "2", company: "Acme Co." },
    { id: "3", company: "Biffco Enterprises Ltd." },
  ];

  // Handle mouse enter - temporarily expand if collapsed and not mobile and not pinned and hover not disabled
  const handleMouseEnter = React.useCallback(() => {
    if (!isMobile && isCollapsed && !isPinned && !hoverDisabled && !isProfileOpen && !isAppsOpen) {
      setIsHovered(true);
      setShowContent(false); // Hide content immediately
      setOpen(true); // Use the proper hook to expand

      // Show content after sidebar has fully expanded
      setTimeout(() => {
        setShowContent(true);
      }, 400);
    }
  }, [isMobile, isCollapsed, isPinned, hoverDisabled, setOpen, isProfileOpen, isAppsOpen]);

  // Handle mouse leave - collapse back if not pinned and not mobile
  const handleMouseLeave = React.useCallback(() => {
    if (!isMobile && isHovered && !isPinned && !isProfileOpen && !isAppsOpen) {
      setIsHovered(false);
      // Hide content immediately, then collapse sidebar
      setShowContent(false);
      setOpen(false); // Use the proper hook to collapse
    }
  }, [isMobile, isHovered, isPinned, setOpen, isProfileOpen, isAppsOpen]);

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

  // Handle account switching
  const handleAccountSwitch = React.useCallback(
    (account: { id: string; company: string }) => {
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

  // Sync showContent with sidebar state when not hovering
  React.useEffect(() => {
    if (!isHovered) {
      setShowContent(!isCollapsed);
    }
  }, [isCollapsed, isHovered]);

  // Close dropdowns when sidebar is manually collapsed
  React.useEffect(() => {
    if (isCollapsed && !isHovered) {
      setIsProfileOpen(false);
      setIsAppsOpen(false);
    }
  }, [isCollapsed, isHovered]);

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
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
      title: "Projects",
      href: "/projects",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Databases",
      href: "/databases",
      icon: (
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
            d="M3 10h18M3 14h18m-9-4v8m-7 0V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1z"
          />
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
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
            d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4.828 17H12l-2.586-2.586a2 2 0 00-2.828 0L4.828 17z"
          />
        </svg>
      ),
    },
    {
      title: "Analytics",
      href: "/analytics",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "History",
      href: "/history",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "More",
      href: "/more",
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
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
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
        isHovered && !isPinned && !isMobile && "sidebar-overlay-mode",
      )}
    >
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="sticky top-0 z-10 bg-sidebar border-b border-sidebar-border">
          <div className="p-1">
            <Logo collapsed={isCollapsed} inSidebar={true} />
          </div>
        </SidebarHeader>

        <SidebarContent className="transition-all duration-300 ease-in-out">
          {/* Search Section */}
          <SidebarGroup className="border-b border-sidebar-border">
            <SidebarGroupContent>
              <div className="relative overflow-hidden">
                {/* Collapsed: Search icon */}
                <div
                  className={cn(
                    "flex justify-center transition-all duration-300 ease-in-out",
                    isCollapsed
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full absolute",
                  )}
                >
                  <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Expanded: Search input */}
                <div
                  className={cn(
                    "px-2 transition-all duration-300 ease-in-out",
                    isCollapsed
                      ? "opacity-0 translate-x-full absolute"
                      : "opacity-100 translate-x-0",
                  )}
                >
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-3 pr-10"
                    />
                    <svg
                      className="absolute top-2.5 right-3 size-4 text-muted-foreground"
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
              </div>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Main Nav Items */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <NavItem
                      href={item.href}
                      isActive={
                        pathname === item.href ||
                        (item.href === "/" &&
                          (pathname === "/" || pathname === ""))
                      }
                      tooltip={item.title}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      {item.badge && (
                        <SidebarMenuBadge
                          className={cn(
                            "transition-all duration-300 ease-in-out",
                            showContent ? "opacity-100" : "opacity-0",
                          )}
                        >
                          {item.badge.text}
                        </SidebarMenuBadge>
                      )}
                    </NavItem>
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
                    <NavItem
                      href={item.href}
                      isActive={
                        pathname === item.href ||
                        (item.href === "/" &&
                          (pathname === "/" || pathname === ""))
                      }
                      tooltip={item.title}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      {item.badge && (
                        <SidebarMenuBadge
                          className={cn(
                            "transition-all duration-300 ease-in-out",
                            showContent ? "opacity-100" : "opacity-0",
                          )}
                        >
                          {item.badge.text}
                        </SidebarMenuBadge>
                      )}
                    </NavItem>
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
                  <NavItem
                    href="/notifications"
                    tooltip="Notifications"
                    isActive={pathname === "/notifications"}
                  >
                    <Icons.bell />
                    <span>Notifications</span>
                    <SidebarMenuBadge
                      className={cn(
                        "transition-all duration-300 ease-in-out",
                        showContent ? "opacity-100" : "opacity-0",
                      )}
                    >
                      3
                    </SidebarMenuBadge>
                  </NavItem>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <NavItem
                    href="/messages"
                    tooltip="Messages"
                    isActive={pathname === "/messages"}
                  >
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Messages</span>
                  </NavItem>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <DropdownMenu open={isAppsOpen} onOpenChange={setIsAppsOpen}>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton tooltip="Apps">
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
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <span>Apps</span>
                        <Icons.chevronRight className="h-4 w-4 text-sidebar-foreground/60 ml-auto group-hover:text-sidebar-accent-foreground" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-60"
                      align="start"
                      side="right"
                      sideOffset={8}
                    >
                      {/* Apps Header */}
                      <div className="px-2 py-1.5">
                        <p className="font-semibold">
                          Your Products
                        </p>
                        <small className="text-muted-foreground">
                          Products you have access to under{" "}
                          {currentAccount.company}
                        </small>
                      </div>

                      <DropdownMenuSeparator />

                      {/* Apps List */}
                      <DropdownMenuGroup>
                        {dtnProducts.map((app) => (
                          <DropdownMenuItem
                            key={app.id}
                            onClick={() => handleAppSelect(app)}
                          >
                            {app.icon === "cloud-sun" && <Icons.cloudSun />}
                            {app.icon === "gas-pump" && <Icons.gasPump />}
                            {app.icon === "shield-halved" && <Icons.shieldHalved />}
                            <span>{app.name}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Sidebar Footer - Sticky */}
        <div className="sticky z-10 bg-sidebar border-t border-sidebar-border">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* User Info with Profile Dropdown */}
                <SidebarMenuItem className="list-none">
                  <DropdownMenu open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton
                        tooltip="Profile"
                        className="pl-0 group-data-[collapsible=icon]:pl-0!"
                      >
                        <Avatar className="size-8">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
                            alt={currentAccount.name}
                          />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            <span className="text-xs font-medium">
                              {currentAccount.initials}
                            </span>
                          </AvatarFallback>
                        </Avatar>
                        {!isCollapsed && (
                          <span className="text-sm font-medium text-sidebar-foreground truncate flex-1 min-w-0">
                            {currentAccount.name}
                          </span>
                        )}
                        {!isCollapsed && (
                          <Icons.chevronRight className="h-4 w-4 text-sidebar-foreground/60 ml-auto group-hover:text-sidebar-accent-foreground" />
                        )}
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-64"
                      align="start"
                      side="right"
                      sideOffset={8}
                    >
                      {/* Profile Header */}
                      <ProfileMenuHeader
                        name={currentAccount.name}
                        email={currentAccount.email}
                        company={currentAccount.company}
                        role={currentAccount.role}
                        avatar={{
                          src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face",
                          alt: currentAccount.name,
                          initials: currentAccount.initials,
                        }}
                      />

                      <DropdownMenuSeparator />

                      {/* Switch Account Submenu */}
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="gap-2">
                            <Icons.user />
                            <span>Switch Account</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            {allAccounts.map((account) => (
                              <DropdownMenuItem
                                key={account.id}
                                onClick={() => handleAccountSwitch(account)}
                                className={cn(
                                  account.company === currentAccount.company
                                    ? "bg-primary/10 text-primary"
                                    : ""
                                )}
                              >
                                <span>{account.company}</span>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />

                      {/* Settings */}
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <a href="/settings">
                            <Icons.cog />
                            <span>Settings</span>
                          </a>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />

                      {/* Logout */}
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => {
                            console.log("Logout clicked");
                          }}
                        >
                          <Icons.rightFromBracket />
                          <span>Log out</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

          {/* Pin Sidebar Toggle - Separate Group */}
          <div className="border-t border-sidebar-border">
            <SidebarGroup className="h-12">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <NavButton
                      onClick={handlePinToggle}
                      tooltip={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
                      aria-label={isPinned ? "Unpin sidebar" : "Pin sidebar open"}
                      aria-pressed={isPinned}
                    >
                      {isPinned ? (
                        <>
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
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                          <span>Unpin</span>
                        </>
                      ) : (
                        <>
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
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                          <span>Pin</span>
                        </>
                      )}
                    </NavButton>
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
