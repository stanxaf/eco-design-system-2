"use client";

import { Inter, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import "@/app/globals.css";

/**
 * Starter Layout Component
 *
 * A complete layout foundation for applications with:
 * - Responsive sidebar navigation (BrandSidebar)
 * - Mobile header (BrandHeader)
 * - Font configuration (Inter, Geist Mono, Montserrat)
 * - Toast notifications (Sonner)
 * - Mobile-responsive design
 *
 * This layout provides the essential structure for the starter template,
 * including proper font loading, responsive behavior, and brand components.
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
  const isMobile = useIsMobile();

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
          {isMobile && <BrandHeader />}
          <BrandSidebar />
          <main className="w-full">
            {children}
          </main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
