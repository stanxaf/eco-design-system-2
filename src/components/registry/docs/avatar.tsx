"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AvatarDocs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="variants" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Variants</CardTitle>
              <CardDescription>Different ways to display avatars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">With Image</p>
                  <p className="text-sm text-muted-foreground">Shows user's profile picture</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Fallback Only</p>
                  <p className="text-sm text-muted-foreground">Shows initials when no image</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Large Size</p>
                  <p className="text-sm text-muted-foreground">Custom dimensions with h-16 w-16</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic Avatar</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Fallback Only</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Size</h4>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
{`<Avatar className="h-16 w-16">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Guidelines</CardTitle>
              <CardDescription>Best practices for using avatars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>User profile pictures in navigation or user lists</li>
                  <li>Team member displays in collaborative interfaces</li>
                  <li>User identification in comments or chat systems</li>
                  <li>Profile sections and user settings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide meaningful alt text for images</li>
                  <li>Use descriptive fallback text (initials or name)</li>
                  <li>Ensure sufficient color contrast for fallback text</li>
                  <li>Consider using aria-label for additional context</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use consistent sizing across similar contexts</li>
                  <li>Provide fallbacks for failed image loads</li>
                  <li>Keep fallback text concise (2-3 characters)</li>
                  <li>Use appropriate image formats (WebP, PNG, JPG)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
