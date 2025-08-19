import { ArrowRight, Blocks, Component, ToyBrick } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/registry/mcp-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";

const uiItems = getUIPrimitives().slice(0, 5);
const componentItems = getComponents().slice(0, 5);
const blockItems = getBlocks().slice(0, 5);

export default function Home() {
  return (
    <main className="container mt-4 p-5 md:mt-8 md:p-10">
      <div className="mb-8">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl tracking-tight md:text-4xl">
            Eco UI Component Registry
          </h1>
          <p className="text-muted-foreground">
            A fully themed component registry built with Tailwind CSS v4 and based on ShadCN.
            Intended for use in v0.dev and React projects. Provides a consistent set of UI components aligned with DTN's design system. Components reference shared global styles and tokens and are meant to be copied, extended, or adapted into any compatible codebase.
          </p>
        </div>
      </div>

      <Card className="mb-4 shadow-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle>Blocks</CardTitle>
            <div className="rounded-md bg-foreground p-1">
              <Blocks className="size-5 text-primary-foreground" />
            </div>
          </div>
          <CardDescription>
            Pre-built starter kits for consistent, repeatable generations
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            {blockItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <Link
                  href={`/registry/${item.name}`}
                  className="text-sm hover:underline"
                >
                  {item.title}
                </Link>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mb-4 grid gap-6 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>UI Primitives</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <ToyBrick className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Reusable UI primitives to build your components
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {uiItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle>Components</CardTitle>
              <div className="rounded-md bg-foreground p-1">
                <Component className="size-5 text-primary-foreground" />
              </div>
            </div>
            <CardDescription>
              Compound components using common patterns
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-2">
              {componentItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/registry/${item.name}`}
                    className="text-sm hover:underline"
                  >
                    {item.title}
                  </Link>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-4 rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Requirements</h2>
          <p className="text-muted-foreground">
            To use this component registry in your project, ensure the following are set up:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
            <li>Tailwind CSS v4 must be installed and configured in your project</li>
            <li>The registry's <code className="font-mono text-xs">globals.css</code> (or equivalent token/theme file) must be imported</li>
            <li>You must be using a React-based environment (e.g., Next.js, Vite + React)</li>
            <li>To explore or copy components on v0.dev, use the “Open in v0” button</li>
          </ul>
        </div>
      </div>

      <div className="mb-4 rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">MCP</h2>
          <p className="mb-4 text-muted-foreground">
            Integrate this registry with AI IDEs using Model Context Protocol
            (MCP) using the following configuration. This utilizes this
            Registry's theme tokens and CSS variables with the Shadcn CLI. To
            ensure this works, double check that the{" "}
            <Link href="/r/registry.json">
              <code className="inline text-sm tabular-nums underline">
                style:theme
              </code>
            </Link>{" "}
            contains the same colors as your{" "}
            <code className="inline text-sm tabular-nums">tokens.css</code>
          </p>

          <MCPTabs rootUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""} />
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">About</h2>
          <p className="text-muted-foreground">
            This registry provides a shared set of UI components and layout blocks for use in v0.dev and React-based projects. It supports consistency across applications and speeds up interface development by offering prebuilt, theme-aligned components. Components and blocks are organized by type and can be previewed, copied, or opened in v0 for further editing.
          </p>
          <p className="mt-2 text-muted-foreground">
            To get begin, select a{" "}
            <a href="/registry/dashboard" className="underline">
              starter
            </a>{" "}
            and click the <span className="font-bold">Open in v0</span> button.
            You can also open individual components or blocks in v0 if you want
            a smaller or more specific starting point.
          </p>

          <p className="mt-4 text-[#1B1F23] dark:text-white">
            <a href="https://github.com/stanxaf/eco-design-system-2">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                role="graphics-symbol"
                className="mr-1 inline size-4 fill-[#1B1F23] dark:fill-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                />
              </svg>
              <span className="underline">GitHub Repository</span>
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
