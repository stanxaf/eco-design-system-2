"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Typography } from "@/components/ui/typography";

export default function TypographyPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Typography</h1>
        <p className="mt-1 text-muted-foreground">
          Styles for headings, paragraphs, lists...etc. We provide both utility classes and Typography components for consistent styling across all DTN projects.
        </p>
      </div>

      {/* Typography Components Showcase */}
      <div className="mb-12">
        <div className="space-y-8">
          {/* H1 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H1</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H1>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H1>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H1>
  Quick brown fox jumped over the lazy dog's back
</Typography.H1>`}
            </CodeBlock>
          </section>

          {/* H2 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H2</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H2>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H2>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H2>
  Quick brown fox jumped over the lazy dog's back
</Typography.H2>`}
            </CodeBlock>
          </section>

          {/* H3 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H3</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H3>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H3>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H3>
  Quick brown fox jumped over the lazy dog's back
</Typography.H3>`}
            </CodeBlock>
          </section>

          {/* H4 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H4</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H4>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H4>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H4>
  Quick brown fox jumped over the lazy dog's back
</Typography.H4>`}
            </CodeBlock>
          </section>

          {/* H5 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H5</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H5>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H5>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H5>
  Quick brown fox jumped over the lazy dog's back
</Typography.H5>`}
            </CodeBlock>
          </section>

          {/* H6 Component */}
          <section>
            <label className="mb-2 block text-muted-foreground">Typography.H6</label>
            <Card className="rounded-b-none">
              <CardContent>
                <Typography.H6>
                  Quick brown fox jumped over the lazy dog's back
                </Typography.H6>
              </CardContent>
            </Card>
            <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<Typography.H6>
  Quick brown fox jumped over the lazy dog's back
</Typography.H6>`}
            </CodeBlock>
          </section>
        </div>
      </div>

      {/* Utility Classes Showcase */}
      <div className="mb-8">
        <h2 className="font-semibold text-xl">Utility Classes</h2>
        <p className="mb-2 text-muted-foreground">
          Alternative approach using Tailwind utility classes for custom styling needs.
        </p>
      </div>

      <div className="space-y-8">
        {/* H1 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H1</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h1 className="font-bold text-2xl leading-6">
                Quick brown fox jumped over the lazy dog's back
              </h1>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h1 className="font-bold text-2xl leading-6">
  Quick brown fox jumped over the lazy dog's back
</h1>`}
          </CodeBlock>
        </section>

        {/* H2 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H2</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h2 className="font-bold text-2xl leading-6">
                Quick brown fox jumped over the lazy dog's back
              </h2>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h2 className="font-bold text-2xl leading-6">
  Quick brown fox jumped over the lazy dog's back
</h2>`}
          </CodeBlock>
        </section>

        {/* H3 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H3</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h3 className="font-bold text-xl leading-5">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h3>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h3 className="font-bold text-xl leading-5">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h3>`}
          </CodeBlock>
        </section>

        {/* H4 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H4</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h4 className="font-bold text-lg leading-5">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h4>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h4 className="font-bold text-lg leading-5">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h4>`}
          </CodeBlock>
        </section>

        {/* H5 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H5</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h5 className="font-bold text-base leading-5">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h5>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h5 className="font-bold text-base leading-5">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h5>`}
          </CodeBlock>
        </section>

        {/* H6 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H6</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h6 className="font-bold text-sm leading-4">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h6>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h6 className="font-bold text-sm leading-4">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h6>`}
          </CodeBlock>
        </section>

        {/* Input */}
        <section>
          <label className="mb-2 block text-muted-foreground">Input</label>
          <Card className="rounded-b-none">
            <CardContent>
              <div className="text-base font-normal">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </div>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<div className="text-base font-normal">
  Quick brown fox jumped over the lazy dog's back 1234567890
</div>`}
          </CodeBlock>
        </section>

        {/* Button */}
        <section>
          <label className="mb-2 block text-muted-foreground">Button</label>
          <Card className="rounded-b-none">
            <CardContent>
              <div className="text-base font-medium">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </div>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<div className="text-base font-medium">
  Quick brown fox jumped over the lazy dog's back 1234567890
</div>`}
          </CodeBlock>
        </section>

        {/* Body */}
        <section>
          <label className="mb-2 block text-muted-foreground">Body</label>
          <Card className="rounded-b-none">
            <CardContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </p>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<p className="leading-7 [&:not(:first-child)]:mt-6">
  Quick brown fox jumped over the lazy dog's back 1234567890
</p>`}
          </CodeBlock>
        </section>

        {/* Label */}
        <section>
          <label className="mb-2 block text-muted-foreground">Label</label>
          <Card className="rounded-b-none">
            <CardContent>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </label>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
  Quick brown fox jumped over the lazy dog's back 1234567890
</label>`}
          </CodeBlock>
        </section>

        {/* Small */}
        <section>
          <label className="mb-2 block text-muted-foreground">Small</label>
          <Card className="rounded-b-none">
            <CardContent>
              <small className="text-sm leading-none font-medium">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </small>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<small className="text-sm leading-none font-medium">
  Quick brown fox jumped over the lazy dog's back 1234567890
</small>`}
          </CodeBlock>
        </section>
      </div>
    </div>
  );
}