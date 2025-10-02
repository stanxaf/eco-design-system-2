"use client";

import { cn } from "@/lib/utils";

interface Color {
  name: string;
  value: string;
  className: string;
}

interface ColorScaleProps {
  name: string;
  description: string;
  colors: Color[];
  compact?: boolean;
}

export default function ColorScale({
  name,
  description,
  colors,
  compact = false,
}: ColorScaleProps) {
  return (
    <div className="space-y-2">
      <div>
        <h5 className="font-bold text-base leading-5">{name}</h5>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div
        className={cn("grid gap-2", compact ? "grid-cols-2" : "grid-cols-11")}
      >
        {colors.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </div>
    </div>
  );
}

interface ColorSwatchProps {
  color: Color;
}

function ColorSwatch({ color }: ColorSwatchProps) {
  return (
    <div className="group relative">
      <div
        className={cn(
          "h-12 w-full transition-all hover:scale-105",
          color.className,
        )}
      />
    </div>
  );
}
