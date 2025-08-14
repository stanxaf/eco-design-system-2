import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const inputOtp = {
  name: "input-otp",
  components: {
    Default: (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    ),
  },
};
