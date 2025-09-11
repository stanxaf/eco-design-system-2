"use client";

import { Inter, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

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
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          {/* Main Layout */}
          <div className="flex flex-1 overflow-x-hidden">
            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 p-6 overflow-x-hidden">
                <div className="max-w-7xl mx-auto space-y-6">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
