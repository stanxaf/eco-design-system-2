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

export default function AppShellLayout({
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
        <SidebarProvider>
          {isMobile && <BrandHeader />}
          <BrandSidebar />
          <main className="flex w-full">
            <div className="w-full p-6">
              <div className="max-w-7xl mx-auto space-y-6">
                {children}
              </div>
            </div>
          </main>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
