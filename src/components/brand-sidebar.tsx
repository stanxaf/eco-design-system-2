"use client";

import {
  AlertTriangle,
  BarChart2,
  Clock,
  Database,
  Home,
  LayoutGrid,
  MessageSquareText,
  MoreHorizontal,
  Table,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";

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
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const mainNavItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="size-4" />,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <LayoutGrid className="size-4" />,
    },
    {
      title: "Databases",
      href: "/databases",
      icon: <Database className="size-4" />,
    },
    {
      title: "Tables",
      href: "/tables",
      icon: <Table className="size-4" />,
      badge: {
        text: "Beta",
      },
    },
    {
      title: "AI",
      href: "/ai",
      icon: <MessageSquareText className="size-4" />,
      badge: {
        text: "Alpha",
      },
    },
  ];

  const toolsNavItems: NavItem[] = [
    {
      title: "Alerts",
      href: "/alerts",
      icon: <AlertTriangle className="size-4" />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart2 className="size-4" />,
    },
    {
      title: "History",
      href: "/history",
      icon: <Clock className="size-4" />,
    },
    {
      title: "More",
      href: "/more",
      icon: <MoreHorizontal className="size-4" />,
    },
  ];

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="mt-16">
      <SidebarHeader className="sticky top-0 z-10 bg-sidebar-background border-b border-sidebar-border">
        <div className={cn(!isCollapsed ? "py-2 px-2" : "py-2 px-0")}>
          <Logo collapsed={isCollapsed}/>
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
      <div className="sticky bottom-0 z-10 bg-sidebar-background border-t border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className={cn(!isCollapsed ? "py-2 px-1" : "py-2 px-0")}>
              <div className="space-y-3">
                {/* User Info */}
                <div className="flex items-center space-x-2">
                  <Avatar className="size-8">
                    <AvatarImage src="/api/user/avatar" alt="User avatar" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <span className="text-xs font-medium">ME</span>
                    </AvatarFallback>
                  </Avatar>
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-sidebar-foreground truncate">User Name</p>
                      <p className="text-xs text-sidebar-foreground truncate">user@example.com</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
    </Sidebar>
  );
}
