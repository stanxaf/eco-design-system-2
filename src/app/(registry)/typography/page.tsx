"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

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
          Styles for headings, paragraphs, lists...etc. We do not ship any typography styles by default. This page is an example of how you can use utility classes to style your text.
        </p>
      </div>

      {/* Typography Showcase */}
      <div className="space-y-8">
        {/* H1 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H1</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                Quick brown fox jumped over the
              </h1>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
  Quick brown fox jumped over the
</h1>`}
          </CodeBlock>
        </section>

        {/* H2 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H2</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Quick brown fox jumped over the lazy dog's back
              </h2>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
  Quick brown fox jumped over the lazy dog's back
</h2>`}
          </CodeBlock>
        </section>

        {/* H3 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H3</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h3>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h3>`}
          </CodeBlock>
        </section>

        {/* H4 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H4</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h4>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h4>`}
          </CodeBlock>
        </section>

        {/* H5 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H5</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h5>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
  Quick brown fox jumped over the lazy dog's back 1234567890
</h5>`}
          </CodeBlock>
        </section>

        {/* H6 */}
        <section>
          <label className="mb-2 block text-muted-foreground">H6</label>
          <Card className="rounded-b-none">
            <CardContent>
              <h6 className="scroll-m-20 text-base font-semibold tracking-tight">
                Quick brown fox jumped over the lazy dog's back 1234567890
              </h6>
            </CardContent>
          </Card>
          <CodeBlock className="bg-muted p-3 rounded-t-none rounded-b text-sm overflow-x-auto">
{`<h6 className="scroll-m-20 text-base font-semibold tracking-tight">
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