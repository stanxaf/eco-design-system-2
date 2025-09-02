"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCreditCard,
  faBell,
  faClock,
  faFolder,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import {
  faDatabase,
  faTable,
  faExclamationTriangle,
  faChartLine,
  faEllipsis,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
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
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      icon: <FontAwesomeIcon icon={faHome} className="w-4 h-4" />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <FontAwesomeIcon icon={faFolder} className="w-4 h-4" />,
    },
    {
      title: "Databases",
      href: "/databases",
      icon: <FontAwesomeIcon icon={faDatabase} className="w-4 h-4" />,
    },
    {
      title: "Tables",
      href: "/tables",
      icon: <FontAwesomeIcon icon={faTable} className="w-4 h-4" />,
      badge: {
        text: "Beta",
      },
    },
    {
      title: "AI",
      href: "/ai",
      icon: <FontAwesomeIcon icon={faComment} className="w-4 h-4" />,
      badge: {
        text: "Alpha",
      },
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "/alerts",
      icon: <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <FontAwesomeIcon icon={faChartLine} className="w-4 h-4" />,
    },
    {
      title: "History",
      href: "/history",
      icon: <FontAwesomeIcon icon={faClock} className="w-4 h-4" />,
    },
    {
      title: "More",
      href: "/more",
      icon: <FontAwesomeIcon icon={faEllipsis} className="w-4 h-4" />,
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

      <SidebarContent>
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

        <SidebarSeparator />

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
                        <FontAwesomeIcon icon={faEllipsis} className="w-4 h-4 text-sidebar-foreground/60" />
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
                         <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Account</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Billing</span>
                       </button>
                       <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <FontAwesomeIcon icon={faBell} className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                         <span className="text-sm text-foreground group-hover:text-white transition-colors">Notifications</span>
                       </button>
                      <div className="border-t border-border my-1" />
                                             <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-accent transition-colors text-left group">
                         <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
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
                        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                        <span>Expand sidebar</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
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
