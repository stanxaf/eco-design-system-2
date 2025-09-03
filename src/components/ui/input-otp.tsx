"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * InputOTP component for entering one-time passwords and verification codes.
 *
 * This component provides a clean interface for entering verification codes with
 * customizable slots and separators. It's commonly used for 2FA, email/SMS verification,
 * and other security-sensitive operations.
 *
 * @example
 * ```tsx
 * // Basic 6-digit OTP
 * <InputOTP maxLength={6} value={value} onChange={setValue}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 *
 * // With separator
 * <InputOTP maxLength={6} value={value} onChange={setValue}>
 *   <InputOTPGroup>
 *     <InputOTPSlot index={0} />
 *     <InputOTPSlot index={1} />
 *     <InputOTPSlot index={2} />
 *   </InputOTPGroup>
 *   <InputOTPSeparator />
 *   <InputOTPGroup>
 *     <InputOTPSlot index={3} />
 *     <InputOTPSlot index={4} />
 *     <InputOTPSlot index={5} />
 *   </InputOTPGroup>
 * </InputOTP>
 * ```
 */
function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

/**
 * InputOTPGroup component that groups related OTP input slots together.
 *
 * This component is used to visually group OTP input slots. It's particularly useful
 * when combined with separators to create logical groupings of digits (e.g., 3-3 or 4-4).
 *
 * @example
 * ```tsx
 * <InputOTPGroup>
 *   <InputOTPSlot index={0} />
 *   <InputOTPSlot index={1} />
 *   <InputOTPSlot index={2} />
 * </InputOTPGroup>
 * <InputOTPSeparator />
 * <InputOTPGroup>
 *   <InputOTPSlot index={3} />
 *   <InputOTPSlot index={4} />
 *   <InputOTPSlot index={5} />
 * </InputOTPGroup>
 * ```
 */
function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

/**
 * InputOTPSlot component that represents an individual digit input slot.
 *
 * Each slot represents one character position in the OTP input. The component automatically
 * handles focus management, character display, and visual states (active, filled, error).
 *
 * @param index - The zero-based index of this slot in the OTP sequence
 * @param className - Additional CSS classes to apply to the slot
 * @param props - Additional div props
 *
 * @example
 * ```tsx
 * <InputOTPSlot index={0} />
 * <InputOTPSlot index={1} />
 * <InputOTPSlot index={2} />
 * ```
 */
function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-8 w-8 items-center justify-center border-input border-y border-r text-sm outline-none transition-all first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

/**
 * InputOTPSeparator component that provides visual separation between OTP input groups.
 *
 * This component renders a minus icon to visually separate groups of OTP input slots.
 * It's commonly used to break up longer codes into more readable chunks (e.g., 123-456-789).
 *
 * @param props - Additional div props
 *
 * @example
 * ```tsx
 * <InputOTPGroup>
 *   <InputOTPSlot index={0} />
 *   <InputOTPSlot index={1} />
 *   <InputOTPSlot index={2} />
 * </InputOTPGroup>
 * <InputOTPSeparator />
 * <InputOTPGroup>
 *   <InputOTPSlot index={3} />
 *   <InputOTPSlot index={4} />
 *   <InputOTPSlot index={5} />
 * </InputOTPGroup>
 * ```
 */
function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
