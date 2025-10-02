"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { Button } from "@/components/ui/button";
import ColorScale from "./color-scale";

export default function ColorsPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Colors</h1>
        <p className="mt-1 text-muted-foreground">
          A gorgeous, accessible color system for user interfaces
        </p>
      </div>

      {/* Color Scales */}
      <section>
        <div className="space-y-3">
          {/* Gray Scale */}
          <ColorScale
            name="Gray"
            description="Neutral grays for text and backgrounds"
            colors={[
              {
                name: "gray-50",
                value: "var(--gray-50)",
                className: "bg-gray-50",
              },
              {
                name: "gray-100",
                value: "var(--gray-100)",
                className: "bg-gray-100",
              },
              {
                name: "gray-200",
                value: "var(--gray-200)",
                className: "bg-gray-200",
              },
              {
                name: "gray-300",
                value: "var(--gray-300)",
                className: "bg-gray-300",
              },
              {
                name: "gray-400",
                value: "var(--gray-400)",
                className: "bg-gray-400",
              },
              {
                name: "gray-500",
                value: "var(--gray-500)",
                className: "bg-gray-500",
              },
              {
                name: "gray-600",
                value: "var(--gray-600)",
                className: "bg-gray-600",
              },
              {
                name: "gray-700",
                value: "var(--gray-700)",
                className: "bg-gray-700",
              },
              {
                name: "gray-800",
                value: "var(--gray-800)",
                className: "bg-gray-800",
              },
              {
                name: "gray-900",
                value: "var(--gray-900)",
                className: "bg-gray-900",
              },
              {
                name: "gray-950",
                value: "var(--gray-950)",
                className: "bg-gray-950",
              },
            ]}
          />

          {/* Slate Scale */}
          <ColorScale
            name="Slate"
            description="Cool grays for UI elements"
            colors={[
              {
                name: "slate-50",
                value: "var(--slate-50)",
                className: "bg-slate-50",
              },
              {
                name: "slate-100",
                value: "var(--slate-100)",
                className: "bg-slate-100",
              },
              {
                name: "slate-200",
                value: "var(--slate-200)",
                className: "bg-slate-200",
              },
              {
                name: "slate-300",
                value: "var(--slate-300)",
                className: "bg-slate-300",
              },
              {
                name: "slate-400",
                value: "var(--slate-400)",
                className: "bg-slate-400",
              },
              {
                name: "slate-500",
                value: "var(--slate-500)",
                className: "bg-slate-500",
              },
              {
                name: "slate-600",
                value: "var(--slate-600)",
                className: "bg-slate-600",
              },
              {
                name: "slate-700",
                value: "var(--slate-700)",
                className: "bg-slate-700",
              },
              {
                name: "slate-800",
                value: "var(--slate-800)",
                className: "bg-slate-800",
              },
              {
                name: "slate-900",
                value: "var(--slate-900)",
                className: "bg-slate-900",
              },
              {
                name: "slate-950",
                value: "var(--slate-950)",
                className: "bg-slate-950",
              },
            ]}
          />

          {/* Blue Scale */}
          <ColorScale
            name="Blue"
            description="Primary brand blues"
            colors={[
              {
                name: "blue-50",
                value: "var(--blue-50)",
                className: "bg-blue-50",
              },
              {
                name: "blue-100",
                value: "var(--blue-100)",
                className: "bg-blue-100",
              },
              {
                name: "blue-200",
                value: "var(--blue-200)",
                className: "bg-blue-200",
              },
              {
                name: "blue-300",
                value: "var(--blue-300)",
                className: "bg-blue-300",
              },
              {
                name: "blue-400",
                value: "var(--blue-400)",
                className: "bg-blue-400",
              },
              {
                name: "blue-500",
                value: "var(--blue-500)",
                className: "bg-blue-500",
              },
              {
                name: "blue-600",
                value: "var(--blue-600)",
                className: "bg-blue-600",
              },
              {
                name: "blue-700",
                value: "var(--blue-700)",
                className: "bg-blue-700",
              },
              {
                name: "blue-800",
                value: "var(--blue-800)",
                className: "bg-blue-800",
              },
              {
                name: "blue-900",
                value: "var(--blue-900)",
                className: "bg-blue-900",
              },
              {
                name: "blue-950",
                value: "var(--blue-950)",
                className: "bg-blue-950",
              },
            ]}
          />

          {/* Green Scale */}
          <ColorScale
            name="Green"
            description="Secondary brand greens"
            colors={[
              {
                name: "green-50",
                value: "var(--green-50)",
                className: "bg-green-50",
              },
              {
                name: "green-100",
                value: "var(--green-100)",
                className: "bg-green-100",
              },
              {
                name: "green-200",
                value: "var(--green-200)",
                className: "bg-green-200",
              },
              {
                name: "green-300",
                value: "var(--green-300)",
                className: "bg-green-300",
              },
              {
                name: "green-400",
                value: "var(--green-400)",
                className: "bg-green-400",
              },
              {
                name: "green-500",
                value: "var(--green-500)",
                className: "bg-green-500",
              },
              {
                name: "green-600",
                value: "var(--green-600)",
                className: "bg-green-600",
              },
              {
                name: "green-700",
                value: "var(--green-700)",
                className: "bg-green-700",
              },
              {
                name: "green-800",
                value: "var(--green-800)",
                className: "bg-green-800",
              },
              {
                name: "green-900",
                value: "var(--green-900)",
                className: "bg-green-900",
              },
              {
                name: "green-950",
                value: "var(--green-950)",
                className: "bg-green-950",
              },
            ]}
          />

          {/* Red Scale */}
          <ColorScale
            name="Red"
            description="Error and destructive states"
            colors={[
              {
                name: "red-50",
                value: "var(--red-50)",
                className: "bg-red-50",
              },
              {
                name: "red-100",
                value: "var(--red-100)",
                className: "bg-red-100",
              },
              {
                name: "red-200",
                value: "var(--red-200)",
                className: "bg-red-200",
              },
              {
                name: "red-300",
                value: "var(--red-300)",
                className: "bg-red-300",
              },
              {
                name: "red-400",
                value: "var(--red-400)",
                className: "bg-red-400",
              },
              {
                name: "red-500",
                value: "var(--red-500)",
                className: "bg-red-500",
              },
              {
                name: "red-600",
                value: "var(--red-600)",
                className: "bg-red-600",
              },
              {
                name: "red-700",
                value: "var(--red-700)",
                className: "bg-red-700",
              },
              {
                name: "red-800",
                value: "var(--red-800)",
                className: "bg-red-800",
              },
              {
                name: "red-900",
                value: "var(--red-900)",
                className: "bg-red-900",
              },
              {
                name: "red-950",
                value: "var(--red-950)",
                className: "bg-red-950",
              },
            ]}
          />

          {/* Orange Scale */}
          <ColorScale
            name="Orange"
            description="Warning states"
            colors={[
              {
                name: "orange-50",
                value: "var(--orange-50)",
                className: "bg-orange-50",
              },
              {
                name: "orange-100",
                value: "var(--orange-100)",
                className: "bg-orange-100",
              },
              {
                name: "orange-200",
                value: "var(--orange-200)",
                className: "bg-orange-200",
              },
              {
                name: "orange-300",
                value: "var(--orange-300)",
                className: "bg-orange-300",
              },
              {
                name: "orange-400",
                value: "var(--orange-400)",
                className: "bg-orange-400",
              },
              {
                name: "orange-500",
                value: "var(--orange-500)",
                className: "bg-orange-500",
              },
              {
                name: "orange-600",
                value: "var(--orange-600)",
                className: "bg-orange-600",
              },
              {
                name: "orange-700",
                value: "var(--orange-700)",
                className: "bg-orange-700",
              },
              {
                name: "orange-800",
                value: "var(--orange-800)",
                className: "bg-orange-800",
              },
              {
                name: "orange-900",
                value: "var(--orange-900)",
                className: "bg-orange-900",
              },
              {
                name: "orange-950",
                value: "var(--orange-950)",
                className: "bg-orange-950",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
