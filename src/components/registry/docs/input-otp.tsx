"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export function InputOTPDocs() {
  const [value, setValue] = useState("");
  const [valueWithSeparator, setValueWithSeparator] = useState("");
  const [valueCustom, setValueCustom] = useState("");

  return (
    <div className="mt-8">
      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>

        <TabsContent value="variants">
          <Card>
            <CardHeader>
              <CardTitle>InputOTP Variants</CardTitle>
              <CardDescription>
                Different OTP input styles and configurations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Basic OTP</h4>
                <div className="flex items-center gap-4">
                  <InputOTP maxLength={6} value={value} onChange={setValue}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Value: {value || "Empty"}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3">With Separator</h4>
                <div className="flex items-center gap-4">
                  <InputOTP
                    maxLength={6}
                    value={valueWithSeparator}
                    onChange={setValueWithSeparator}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Value: {valueWithSeparator || "Empty"}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Custom Length (4-digit)</h4>
                <div className="flex items-center gap-4">
                  <InputOTP
                    maxLength={4}
                    value={valueCustom}
                    onChange={setValueCustom}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Value: {valueCustom || "Empty"}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Long OTP with Multiple Separators
                </h4>
                <div className="flex items-center gap-4">
                  <InputOTP maxLength={8} value="" onChange={() => {}}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Example: 123-456-78
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>InputOTP Code</CardTitle>
              <CardDescription>Implementation examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Basic OTP</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

function BasicOTP() {
  const [value, setValue] = useState("");

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">With Separator</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from "@/components/ui/input-otp";

function OTPWithSeparator() {
  const [value, setValue] = useState("");

  return (
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Custom Length</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<InputOTP maxLength={4} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
                </CodeBlock>
              </div>

              <div>
                <h4 className="font-medium mb-2">Multiple Separators</h4>
                <CodeBlock className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  {`<InputOTP maxLength={8} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={6} />
    <InputOTPSlot index={7} />
  </InputOTPGroup>
</InputOTP>`}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines">
          <Card>
            <CardHeader>
              <CardTitle>InputOTP Guidelines</CardTitle>
              <CardDescription>
                Best practices for using OTP inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">When to Use</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Two-factor authentication (2FA) verification</li>
                  <li>Email/SMS verification codes</li>
                  <li>Password reset verification</li>
                  <li>Account activation codes</li>
                  <li>Transaction verification</li>
                  <li>Security-sensitive operations</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Keyboard navigation support (Tab, Arrow keys)</li>
                  <li>Screen reader compatible with proper ARIA labels</li>
                  <li>Focus management with visual indicators</li>
                  <li>Paste support for better user experience</li>
                  <li>Error state handling with aria-invalid</li>
                  <li>Clear instructions and error messages</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Best Practices</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Use 6 digits for standard verification codes</li>
                  <li>Add separators for codes longer than 6 digits</li>
                  <li>Provide clear instructions above the input</li>
                  <li>Include a "Resend code" option</li>
                  <li>Auto-focus the first input on mount</li>
                  <li>Handle paste events for better UX</li>
                  <li>Show loading states during verification</li>
                  <li>Provide immediate feedback on completion</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Length Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>4 digits:</strong> Quick verification, less secure
                  </li>
                  <li>
                    <strong>6 digits:</strong> Standard verification codes
                    (recommended)
                  </li>
                  <li>
                    <strong>8+ digits:</strong> High-security applications, use
                    separators
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">UX Considerations</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Auto-advance to next field when typing</li>
                  <li>Allow backspace to go to previous field</li>
                  <li>Support both individual typing and paste</li>
                  <li>Clear visual feedback for active/inactive states</li>
                  <li>Consistent spacing and sizing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
