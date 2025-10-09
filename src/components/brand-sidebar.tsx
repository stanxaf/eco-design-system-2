"use client";

import {
  AudioWaveform,
  Bell,
  BookOpen,
  Bot,
  Check,
  ChevronRight,
  ChevronsUpDown,
  CloudSun,
  Command,
  Droplet,
  Frame,
  GalleryVerticalEnd,
  Grid3x3,
  Leaf,
  LogOut,
  Map,
  MessageSquare,
  PieChart,
  Pin,
  Search,
  Settings2,
  Shield,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd } from "@/components/ui/kbd";
import { LogoContainer } from "@/components/ui/logo-container";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

/**
 * Props for the BrandSidebar component
 */
interface BrandSidebarProps {
  /** Additional CSS classes to apply to the sidebar container */
  className?: string;
}

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  product: {
    name: "Fuel Hub",
    logo: Logo,
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

// Bottom navigation items
const bottomNav = [
  {
    title: "Messages",
    icon: MessageSquare,
    url: "#",
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "#",
  },
];

const dtnApps = [
  { title: "Identity Management", url: "#", icon: Shield },
  { title: "Weather Hub", url: "#", icon: CloudSun },
  { title: "Fuel Hub", url: "#", icon: Droplet },
  { title: "Sustainability Marketplace", url: "#", icon: Leaf },
];

/**
 * BrandSidebar - A navigation sidebar component
 *
 * Based on the shadcn/ui sidebar-07 example that collapses to icons.
 * Features workspace switcher, collapsible nav sections, and user menu.
 *
 * IMPORTANT: Must be wrapped in SidebarProvider
 *
 * @example
 * ```tsx
 * import { SidebarProvider } from "@/components/ui/sidebar";
 * import { BrandSidebar } from "@/components/brand-sidebar";
 *
 * <SidebarProvider>
 *   <BrandSidebar />
 *   <main>
 *     <h1>Main Content</h1>
 *   </main>
 * </SidebarProvider>
 * ```
 */
export function BrandSidebar({ className }: BrandSidebarProps) {
  const { state, toggleSidebar } = useSidebar();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Sidebar collapsible="icon" className={className}>
      <SidebarHeader className="min-h-[48px] justify-center border-b border-sidebar-border">
        <div className="flex items-center px-2 py-1.5">
          <div className="w-6 shrink-0">
            <LogoContainer logo={data.product.logo} className="size-6" />
          </div>
          <span className="ml-2 truncate text-sm font-normal flex-1 group-data-[collapsible=icon]:hidden">
            {data.product.name}
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setOpen(true)} tooltip="Search">
                <Search />
                <span>Search...</span>
                <Kbd className="ml-auto">⌘K</Kbd>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarMenu>
            {bottomNav.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    tooltip="DTN Apps"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Grid3x3 />
                    <span className="whitespace-nowrap">DTN Apps</span>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="right"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel>DTN Applications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {dtnApps.map((app) => {
                    const isActive = app.title === data.product.name;
                    return (
                      <DropdownMenuItem key={app.title} asChild>
                        <a href={app.url}>
                          <app.icon />
                          {app.title}
                          {isActive && <Check className="ml-auto size-4" />}
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarMenu>
          <SidebarMenuItem className="border-t border-sidebar-border py-1 px-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="default"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 -ml-2">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight whitespace-nowrap">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    {/* <span className="truncate text-xs">{data.user.email}</span> */}
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="right"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Settings2 />
                    Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem className="border-t border-sidebar-border p-2">
            <SidebarMenuButton
              onClick={toggleSidebar}
              tooltip={state === "collapsed" ? "Pin Sidebar" : "Unpin Sidebar"}
            >
              <Pin />
              <span>{state === "collapsed" ? "Pin Sidebar" : "Unpin Sidebar"}</span>
              <Kbd className="ml-auto">⌘B</Kbd>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Platform">
            {data.navMain.map((item) => (
              <CommandItem
                key={item.title}
                onSelect={() => {
                  window.location.href = item.url;
                  setOpen(false);
                }}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Projects">
            {data.projects.map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => {
                  window.location.href = item.url;
                  setOpen(false);
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Applications">
            {dtnApps.map((app) => (
              <CommandItem
                key={app.title}
                onSelect={() => {
                  window.location.href = app.url;
                  setOpen(false);
                }}
              >
                <app.icon className="mr-2 h-4 w-4" />
                <span>{app.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => {
                setOpen(false);
              }}
            >
              <Settings2 className="mr-2 h-4 w-4" />
              <span>Account</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Sidebar>
  );
}
