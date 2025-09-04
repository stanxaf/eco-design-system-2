"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FontBlock({
  className,
}: {
  className: string;
}) {
  const [copied, setCopied] = useState(false);
  const cssVar = `--${className}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cssVar);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <p className={cn(className)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative">
          <code className="font-mono text-muted-foreground text-sm">
            {cssVar}
          </code>
          <Button
            variant="ghost"
            size="sm"
            className="ml-2 h-6 w-6 p-0"
            onClick={copyToClipboard}
            aria-label="Copy CSS variable to clipboard"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            <span className="sr-only">Copy CSS variable</span>
          </Button>
        </div>
        {copied && (
          <div className="absolute left-0 top-6 rounded bg-muted px-2 py-1 text-xs">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
}
