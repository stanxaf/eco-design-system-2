"use client";

import { Inter, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "@/app/globals.css";

/**
 * Starter Layout Component
 *
 * A foundational layout that provides:
 * - Font configuration (Inter, Geist Mono, Montserrat)
 * - SidebarProvider context for sidebar components
 * - Toast notifications (Sonner)
 * - Global CSS imports
 *
 * This layout provides the essential context and structure for components
 * that need SidebarProvider, without including specific UI components.
 * Components like BrandSidebar and BrandHeader should be added by the user.
 *
 * @param children - The page content to render within the layout
 */

const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function StarterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        InterSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <body>
        <SidebarProvider defaultOpen={false}>
          {children}
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
