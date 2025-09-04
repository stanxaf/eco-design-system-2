"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Fallback toast function when sonner fails
const fallbackToast = (message: string, type: 'success' | 'warning' | 'error' | 'info' = 'info') => {
  console.log(`[${type.toUpperCase()}] ${message}`);
  // You could also show a simple alert or create a custom toast UI here
  alert(`${type.toUpperCase()}: ${message}`);
};

export function SonnerToast() {
  return <Button onClick={() => {
    try {
      toast("Toast");
    } catch (error) {
      fallbackToast("Toast");
    }
  }}>Normal Toast</Button>;
}

export function SuccessfulSonner() {
  return (
    <Button variant="outline" onClick={() => {
      try {
        toast.success("Successful");
      } catch (error) {
        fallbackToast("Successful", "success");
      }
    }}>
      Successful Toast
    </Button>
  );
}

export function WarningSonner() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        try {
          toast.warning("This is a warning");
        } catch (error) {
          fallbackToast("This is a warning", "warning");
        }
      }}
    >
      Warning Toast
    </Button>
  );
}

export function ErrorSonner() {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        try {
          toast.error("There was an error");
        } catch (error) {
          fallbackToast("There was an error", "error");
        }
      }}
    >
      Error Toast
    </Button>
  );
}

export function ActionSonner() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        try {
          toast("A description with some more information", {
            action: {
              label: "Action",
              onClick: () => console.log("Action!"),
            },
          });
        } catch (error) {
          fallbackToast("A description with some more information", "info");
        }
      }}
    >
      Action Toast
    </Button>
  );
}
